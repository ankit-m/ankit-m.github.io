---
title: UI Testing with Puppeteer and Mocha
date: "2019-07-04T18:30:00.000Z"
description: Importance of writing commit messages.
---

## 1. Introduction 🤝

If you have ever built a web app, you know the pain of testing the entire application every time you add a new feature. Yes, you just modified one isolated module of the code and it \_should not_affect anything else. But there a tiny sliver of doubt in a dark corner of your mind, “What if it broke something?”.

To remove this doubt, you spend quite a lot of time testing all other flows to make sure you did not accidentally break anything _major_. There is always a chance of you missing edge cases. So you go ahead and deploy with the hope that nothing breaks. By no means, is this a reliable way of testing. But we still do it. The only way to get rid of this unreliability is to write tests which verify your flows viz. **UI Testing**.

This series is an attempt to get you started with UI testing using **puppeteer** and **mocha**. It starts from scratch and assumes basic knowledge of JavaScript. Part 1 deals with setting up and getting started with puppeteer.

## 2. The Toolkit 🎒

### 2.a Mocha

[Mocha](https://mochajs.org/) is a JavaScript testing framework. It provides a lot of methods like `describe`, `it`, `before`, etc. to organise your tests. It provides both command line and programmatic utilities to execute the tests.

### 2.b Chai

Mocha by itself is not of much help to us. You need an assertion library with it to actually test things. We will use [ChaiJS](http://chaijs.com/) throughout this series. There are other options like expect.js, should.js, etc.

### 2.c Puppeteer

[Puppeteer](https://github.com/GoogleChrome/puppeteer) is a node wrapper around [headless Chrome](https://developers.google.com/web/updates/2017/04/headless-chrome) which started shipping with Chrome 59 (For Windows Chrome 60). It provides a lot of convenient methods to access and manipulate DOM, cookies, requests, etc.

We will use these APIs to access the rendered UI elements and run assertions on them to check if things are working as expected.

## 3. Basic testing setup 🐣

Open your terminal and create a new project. You need Node installed on your computer which will expose a `node` and `npm` command. I recommend using [nvm](https://github.com/creationix/nvm) to manage node versions. This series uses Node `v8.9.1` and npm `v5.5.1`.

```bash

mkdir puppeteer-mocha
cd puppeteer-mocha
npm init —yes
npm i —save mocha@4.0.1 puppeteer@0.13.0 chai@4.1.2 http-server@0.10.0
```

> All packages are suffixed with versions to make this future proof. You can skip them if you want. We install `http-server` to start a basic http server for testing. If you already have a server running with a website, you can simply use that.

Now we will create

1. Add `test` folder which will contain all the test files
2. Add `src` folder which house our test website
3. Add npm scripts for starting our server and running tests

```bash
mkdir test src
touch test/sample.spec.js
touch src/index.html
```

To start off, we will create a very basic website which we can test. Here is what `index.html` looks like.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Puppeteer Mocha</title>
  </head>
  <body>
    <h1>Page Title</h1>
    <p class="main-content">Some paragraph text</p>
  </body>
</html>
```

Now add the following two scripts to your package.json . The test script tells mocha to execute all files in the folder test . The recursive option tells it to go inside directories, if any, and get files. The server script serves your index.html on [http://127.0.0.1:8080](http://127.0.0.1:8080/).

```json
...
"scripts": {
    "test": "mocha --recursive test",
    "server": "http-server src"
 }
...
```

Finally, let’s add a sample test to check if everything is working as expected. Add the following code to `sample.spec.js `.

```js
const { expect } = require("chai")

describe("sample test", function () {
  it("should work", function () {
    expect(true).to.be.true
  })
})
```

Now run `npm test` and you should see an output like this -

```
sample test
  ✓ should work
```

## 4. Bringing in Puppeteer 🚂

We want to start one instance of the browser (headless Chrome in this case) and reuse the same instance to run all our tests. Each test will open a new tab, browse to the URL, run tests against the view and then close the tab. We will do all the setup in `test/bootstrap.js` and expose required variables to be used across tests.

```js
const puppeteer = require("puppeteer")
const { expect } = require("chai")
const _ = require("lodash")
const globalVariables = _.pick(global, ["browser", "expect"])

// puppeteer options
const opts = {
  headless: false,
  slowMo: 100,
  timeout: 10000,
}

// expose variables
before(async function () {
  global.expect = expect
  global.browser = await puppeteer.launch(opts)
})

// close browser and reset global variables
after(function () {
  browser.close()

  global.browser = globalVariables.browser
  global.expect = globalVariables.expect
})
```

The `before` block is responsible to setup everything required for all the tests. It will execute once before all tests. It exposes the `browser` instance and `expect` function so that we don’t have to require it in all the test files. The `after` block cleans up the environment, once all tests are completed. I have also used [Lodash](https://lodash.com/) for some convenience methods.

The important things to note are `puppeteer.launch` and `opts`. As the name suggests, `launch` starts a chrome browser based on the options provided.

- I have turned off the headless mode with `headless: false`. This will open a Chromium window when you run the test.
- Added timeout of 10 seconds (any test taking longer than that will fail)
- Slowed down each operation by `100ms`. This is not required right now, but comes in handy when you want to see what is happening in the browser.

You need to tweak your test script a little

```json
...
"scripts": {
    "test": "mocha test/bootstrap.js --recursive test",
...
```

We will now update `test/sample.spec.js`. To do something with this browser instance exposed. To check, we just log the browser version.

```js
describe("sample test", function () {
  it("should work", async function () {
    console.log(await browser.version())

    expect(true).to.be.true
  })
})
```

test/sample.spec.js

Now, when you run `npm test`. You should see the Chrome version logged. The version might differ for you as puppeteer installs the latest version of Chromium available.

```
sample test
Chrome/64.0.3264.0
   ✓ should work (103ms)
```

### 4.a Without using async/await

For many reasons you might not prefer to use async/await syntax. You can achieve the exact same by just using promises. Since most puppeteer functions return promises, all you have to do is wait for them to resolve. The mocha `done` method comes in handy.

```js
describe("sample test", function () {
  it("should work", function (done) {
    browser.version().then(function (v) {
      console.log(v)

      expect(true).to.be.true
      done()
    })
  })
})
```

**test/sample.spec.js**

```js
const puppeteer = require("puppeteer")
const { expect } = require("chai")
const _ = require("lodash")
const globalVariables = _.pick(global, ["browser", "expect"])

// puppeteer options
const opts = {
  headless: false,
  slowMo: 100,
  timeout: 10000,
}

// expose variables
before(function (done) {
  global.expect = expect

  puppeteer.launch(opts).then(function (browser) {
    global.browser = browser
    done()
  })
})

// close browser and reset global variables
after(function () {
  browser.close()

  global.browser = globalVariables.browser
  global.expect = globalVariables.expect
})
```

**test/bootstrap.js**

I prefer using `async/await` as it looks cleaner and is much more readable, especially for more complex tests.

You can view the code at this stage [here](https://github.com/ankit-m/puppeteer-mocha/tree/integrate-puppeteer).

## 5. Writing your first UI test 🚀

Now that we have set things up, it’s time to write tests. This is how our webpage looks right now. Pretty boring! I agree.

IMAGEEE

We want to test the following things:

1. The page title is “Puppeteer Mocha”
2. The heading is “Page Title” (Sorry for the confusing heading)
3. There is a paragraph with “Some paragraph text” in it

Puppeteer has a lot of classes like Page, Frame, Request, etc. Each of these classes provide helper methods to access and interact with the page content. The usual workflow is to open the page, wait for a selector and then validate the content once the selectors resolve. This is how basic tests look like:

```js
describe("sample test", function () {
  let page

  before(async function () {
    page = await browser.newPage()
    await page.goto("http://localhost:8080")
  })

  after(async function () {
    await page.close()
  })

  it("should have the correct page title", async function () {
    expect(await page.title()).to.eql("Puppeteer Mocha")
  })

  it("should have a heading", async function () {
    const HEADING_SELECTOR = "h1"
    let heading

    await page.waitFor(HEADING_SELECTOR)
    heading = await page.$eval(HEADING_SELECTOR, heading => heading.innerText)

    expect(heading).to.eql("Page Title")
  })

  it("should have a single content section", async function () {
    const BODY_SELECTOR = ".main-content"

    await page.waitFor(BODY_SELECTOR)

    expect(await page.$$(BODY_SELECTOR)).to.have.lengthOf(1)
  })
})
```

**test/sample.spec.js**

There is a lot going on in this spec file. Let’s look at it one by one.

We first open a new page in the `before` block and navigate to [http://localhost:8080.](http://localhost:8080./) This is equivalent to you opening a new tab in chrome, typing the URL and pressing enter. Since, the variable page is defined in the `describe` block, all `it` blocks (specs) have access to the page. This allows us to segregate our tests and make them more readable.

The first test simply checks the page title and expects it to be equal to “Puppeteer Mocha”.

The second test checks for the heading. `page.$eval` takes two arguments `selector` and `pageFunction`. It runs a `document.querySelector` in the browser environment and passes the result to the `pageFunction`. Finally, it resolves with the value returned by `pageFunction`. In this case, we are just returning the text for `h1` tag.

The third test checks for the existence of just one element with class `main-content`. The `page.$$` expects only the selector as a parameter. It runs a `document.querySelectorAll` in the browser environment and returns an array of `elementHandle`. You can imagine `elementHandle` as a wrapper around an HTML element with helper functions which make it easier to interact and test them.

You can view the code at this stage [here](https://github.com/ankit-m/puppeteer-mocha/tree/basic-tests).

## 6. Conclusion 💯

In this part we have barely scraped the surface of puppeteer. I hope you have gotten a feel of UI testing. Over the next parts, we will dive deep into testing complex webpages and interactions.

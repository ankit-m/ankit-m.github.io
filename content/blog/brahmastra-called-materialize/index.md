---
title: The Brahmastra called Materialize
date: "2016-03-06"
description: Knowing how to build a basic websites is a very useful skill. Learn how to use materialize CSS to easily build your websites.
---

> The Brahmastra, described in the Mahabharata, is a weapon which is said to be a single projectile charged with all the power of the universe.

As an Indian student I have always been told that no matter how much you evade, you will have to study mathematics. Many years down the line, I will tell my kids -

> No matter how much you evade, you will have to make websites.

Yes, you will have to. It might be your personal blog and your coding feats do not allow you stoop low to the mediocrity of **Wordpress and Blogspot**. Or it might be an event which you are hosting and you do not have deep pockets (one reason might be that you did not learn web development, but that too is underpaid nowadays) to hire web developers.

In such times of dire need, `materializecss` comes to your rescue. All you need to know is the bare minimum HTML and CSS. Also, how to fill in the blanks. That's pretty much all you need. It gives you the beautiful and elegant Google's Material Design - all ready made.

Materialize is a front-end framework based on Material design. It has pre-built components and modules. All you have to do, is include the library and start using the components. This will not make you good at web development, but will definitely get your work done. If you are feeling adventurous, you might as well go ahead and develop full fledged websites and web applications using this framework. I have never used it, but you can give it a shot.

# How to use?
The best way to use `materializecss` is to use their [starter templates](http://materializecss.com/getting-started.html). These will get you up and running in seconds. You can then fiddle around and add new components, delete some and learn how things work.

If you want to work from scratch, for basic purposes, I would suggest using CDN.

```html
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.5/css/materialize.min.css">

 <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.5/js/materialize.min.js"></script>
```

Include this in your `head` section. For more advanced usage, there are many usage options available - `npm`, `bower`, `ruby gems`, etc.

# What do I need to know?
Are you comfortable copy-pasting? Do you know basic (horrifyingly basic) HTML and CSS? Do you know how to type? Can you search answers in stackoverflow? If your answer is yes to all the above questions, then you are all set to master materializecss. Not that it is a great achievement, but you can churn out beautiful websites in a couple of hours.

It would help if you know basic JavaScript. It would allow you to understand as to what is happening in the background. But if lethargy prevents you, don't worry, you can use pretty much the entire library without knowing JavaScript. Just follow the instructions religiously and everything will go smooth.

# How do I deploy my website?
Now read this very carefully. **You do not need to buy a domain name to deploy your website**. Use Github Pages. This means learn to use `git` and `Github`. Github provides you with a free domain name - `username.github.io`.

```shell
#code taken from https://pages.github.com/
$ git clone https://github.com/username/username.github.io
$ cd username.github.io
$ echo "Hello World" > index.html
$ git add --all
$ git commit -m "Initial commit"
$ git push -u origin master
```

Now go to `http://username.github.io` and you have your Hello world. In this directory add your materialize folder contents and you will have the same website up and running. You can make pages for all of your repositories. You should have an `index.html` file in you repository. Then

```shell
$ git checkout -b gh-pages
$ git rebase master
$ git push origin gh-pages
```

Your repository page will live on `http://username.github.io/your-repo-name`.

# I feel like giving back to world, **not by seeding**
If you are proficient in HTML, CSS and JavaScript, you might as well contribute to their repository. It is a product developed by CMU students. It has huge number of [stars] ([https://github.com/dogfalo/materialize/](https://github.com/dogfalo/materialize/)).

I made a couple of websites using the materialize.
- [TEDxDAIICT](http://www.tedxdaiict.com/)
- [GDG DAIICT](http://www.gdgdaiict.com/)
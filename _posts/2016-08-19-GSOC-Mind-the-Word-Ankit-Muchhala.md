---
layout: post
title: GSoC | Mind the Word - Ankit Muchhala
---

Link to commits: [https://github.com/OiWorld/MindTheWord/commits?author=ankit-m](https://github.com/OiWorld/MindTheWord/commits?author=ankit-m)

### OiWorld - Mind the Word

Mind the Word is a Chrome extension aimed at enabling users to learn a language while they are reading a some text - by randomly translating a few words to other language. It relies on the fact that you have the context of the sentence and you will be able to understand the meaning of the translated word.

Doing so again and again, will make you learn the vocabulary of a language. My job was to implement various features which would enhance a user's learning experience.

### Tasks and Features Implemented

Following is a list of tasks completed and features implemented as a part of Google Summer of Code 2016:

1. **Refactoring**: The entire architecture of the extension was changed and redesigned from ground up. I made use of JavaScript ES6 along with JSPM to manage modules. This resulted in a clean and modular code.
2. **Unit Testing**: I implemented unit testing framework using Karma and Jasmine.
3. **TravisCI**: I integrated TravisCI to enable automatic verification of PRs and code validation.
4. **New UI**: I redesigned the UI of the options page using Bootstrap 3 and jQuery. The new UI made it easier and intuitive for the user to make changes in the settings.
5. **Translation APIs integration**: I implemented support for APIs like Google Translate, Microsoft Translate and Yandex. These were implemented as seperate modules so that they can be used as black boxes.
6. **Sentence Translation**: The user can select any text and select the `Translate Sentence` option from the context menu to get the translation of the entire sentence. This helps in understanding grammar.
7. **Automatic Deferred Translation**: If a user blacklists certain website or toggles a word for its meaning a lot of times, those websites and words are automatically blacklisted.
8. **Easy Whitelisting**: Implemented context menu and options page features to easily remove websites and words from blacklist.
9. **Dispersed Word Translation**: Spreading out translations so that users don't lose context of the sentence.

#### Additional features

The following are the features, which implemented in addition to the above:

1. **Backup and Restore**: Feature allowing user to backup all the settings and restore them later. Also has features to reset local storage to default.
2. **Automatic Disabling of Context Menus**: When the extension is switched off or the user is on a blacklisted website, the context menus are disabled automatically.
3. **Colorpicker**: Adding an intuitive colorpicker to change the highlight colors of translated words.
4. **Code Documentation**: Using `jsdoc` for generating code documentation.

### Challenges faced

There were many challenges I faced throughout the GSoC period. I was lucky to have a Bruno as my mentor who was extremely helpful every time. There were various decisions to be made while refactoring the code. I had to figure the communication and composition of various JS modules.

It was a challenging task to implement communications as most of the calls were asynchronous in nature (HTTP requests, `chrome` functions). This presented me with an opportunity to exploit JavaScript `Promise`. With in-built support for promises in `ES6`, it made my code very clean and easy to understand.

Other challenges include - pagination for long lists, implementing one translation per sentence feature, forming/parsing XML requests/responses for Microsoft API, connecting DOM elements to contentScript functions, etc.

### Pull Requests
The list of all Pull Requests made by me can be found here: [https://github.com/OiWorld/MindTheWord/pulls?q=is%3Apr+is%3Aclosed+author%3Aankit-m](https://github.com/OiWorld/MindTheWord/pulls?q=is%3Apr+is%3Aclosed+author%3Aankit-m)

Following is a list of major pull requests:
* Refactored Code and new UI -  [#114](https://github.com/OiWorld/MindTheWord/pull/114)
* Bing Translate - [#124](https://github.com/OiWorld/MindTheWord/pull/124)
* Google Translate - [#128](https://github.com/OiWorld/MindTheWord/pull/128)
* Automatically disable context menus - [#132](https://github.com/OiWorld/MindTheWord/pull/132)
* Sentence Translation - [#134](https://github.com/OiWorld/MindTheWord/pull/134)
* Automatic deferring of words - [#145](https://github.com/OiWorld/MindTheWord/pull/145)
* Automatically blacklist websites - [#151](https://github.com/OiWorld/MindTheWord/pull/151)
* Easy Whitelisting - [#154](https://github.com/OiWorld/MindTheWord/pull/154)
* Activate new pattern on creation - [#175](https://github.com/OiWorld/MindTheWord/pull/175)
* Translate one word per sentence - [#185](https://github.com/OiWorld/MindTheWord/pull/185)

### Weekly Blogposts
* [Week 1](http://ankit-m.github.io/2016/05/30/GSOC-Week1.html)
* [Week 2](http://ankit-m.github.io/2016/06/07/GSOC-Week2.html)
* [Week 3](http://ankit-m.github.io/2016/06/13/GSOC-Week3.html)
* [Week 4](http://ankit-m.github.io/2016/06/21/GSOC-Week4.html)
* [Week 5](http://ankit-m.github.io/2016/06/29/GSOC-Week5.html)
* [Week 6](http://ankit-m.github.io/2016/07/06/GSOC-Week6.html)
* [Week 7](http://ankit-m.github.io/2016/07/15/GSOC-Week7.html)
* [Week 8](http://ankit-m.github.io/2016/07/22/GSOC-Week8.html)
* [Week 9 and 10](http://ankit-m.github.io/2016/08/02/GSOC-Week9.html)
* [Week 11 and 12](http://ankit-m.github.io/2016/08/17/GSOC-Week11.html)

### Summary

Google Summer of Code 2016 was an amazing learning experience for me. I got an opportunity to work an product used by thousands of users and also make use of various new tools and technologies. This would not have been possible without the constant help of my mentor Bruno.

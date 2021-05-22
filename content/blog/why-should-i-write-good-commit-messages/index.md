---
title: Why should I write good commit messages?
date: '2019-07-04T18:30:00.000Z'
description: Importance of writing commit messages.
---

As a fresh graduate, I was excited at the prospect of writing code for a product used by millions of users. I could not wait send my first PR and get it merged. Little did I know that the first comments I would receive were not about my code but about my commit messages and how they need to be better.


The young me thought, “Why is that important? Who cares about messages? It is the code which matters.” Two years later, after working on multiple projects, reviewing countless PRs and going through a plethora of public packages, I realize just how wrong I was. Over the course of this article, I would like to describe various scenarios which made me appreciate the importance of writing good commit messages.


There are a lot of good [articles and blogposts](https://chris.beams.io/posts/git-commit/) about how to write commit messages with a list of dos and don’ts. Here, I my focus is on why you should do that.

## 1. Production Issues

> Tom, Sr. Software Engineer

*Saturday, 2.31 AM — phone ringing.*

Tom answers his phone and finds out that paid users are unable to login and cannot do anything. A chill goes up his spine. At the back of his mind, he knew he shouldn’t have deployed on a Friday. Yet, he did and there it is.

He opens his laptop and checks for server alarms — Elevated server errors. To find out what caused this, he opened the server error logs and finds out

```
TypeError: Cannot read property “id” of undefined
25:13 /api/controllers/LoginController.js
192:17 …
```

“Aha!”, he exclaims. He unleashes his weapon of choice — git.

```bash
$ git blame api/controllers/LoginController.js
```

And there it is

```
...
f4f78b31 25) if (user.team.id > 1)
f4f78b31 26)     return teamLogin();
f4f78b31 26) else
f4f78b31 27)     return userLogin();
...
```

The bug was right there. Unsafe access for the property id. What if a user does not belong to a team? The `team` property will not exist. So all non-team users are not be able to login.

To fix this simply replace *Line 25* with `user.team` && `user.team.id`. Easy! Right?

Not so fast. What about team with ID `1`? Why are team login and user login different? Why was this change made? Is team ID `0` possible? To better understand the problem, Tom decided to dig further.

```
$ git show f4f78b31

commit f4f78b319c308600eab015a5d6529add21660dc1
Author: Jerry
Date: Fri Mar 13 10:12:29 2019 +0330

   update login flow         <- 😩😩😩😩
...
```

Here is the problem — The commit message is vague and does not tell Tom anything more than the actual code diff. He already knows that the login flow was updated. He is looking for more information to *help him understand* the code change. A better commit message could be:

```
Create a new login page for team users

We want to capture team names in the login flow for paid users. This commit shows the new login page for users with a valid team ID.
```

This commit messages conveys a lot more information about why the change was made? Tom also knows who this change is meant for. This, combined with inline comments, will help him make a much more informed decision.

## 2. Understanding why

> Calvin, Intern

*Monday, 8.36 AM*

Calvin has been assigned a getting-started issue for a Google Maps-like project. His task is to add a configuration for grocery stores. He is to use this opportunity to familiarize himself with the codebase.

He starts off with `README.md` and `IMPLEMENTATION.md` files to get an overview of the project. After digging around for a while he figures out that the changes are to me made in `config/maps/elements.js`. He has to add a JSON configuration for the key `grocery-store`. Interestingly, he comes across this piece of code

```
if (type === 'hospital' || type === 'pharmacy') {
    config = getConfigFromAPI();
}
```

“Why is there a special handling for hospitals and pharmacies? Do I need add special handling for grocery stores?”, he thinks. He looks at the commit message.

```
commit f4f78b319c308600eab015a5d6529add21660dc1
Author: Hobbes
Date: Fri Mar 11 10:10:21 2018 +0530

add safe checks in element config    <- 🤔
...
```

While this message does tell you that the condition is a safe check, it still does not give you the full picture. Like previous section, it does not tell you *why* the change was made. A better commit message could be

```
fetch map element config from API for emergency buildings
to avoid stale information
```

This clearly conveys the purpose of the code change and provides sufficient information for the reader to make a decision. Calvin can infer that special handling is only for emergency buildings and is not required for a grocery store.

Here, a good commit message helped a new developer understand parts of the codebase without asking anyone for help. In this respect, commit messages are a second string of documentation for your code.

## 3. Reviewing code

> Wilma, Project Lead

*Friday, 3.04 PM*

Fred has requested a code a review from Wilma for a major change in the team admin view. Wilma pulls the branch on her machine and tests out the changes — they seem to be working. She starts by checking diff stats between the branch (`feature/admin-updates`) and `develop` (destination).

```
$ git diff feature/admin-updates develop --stats

...

45 files changed, 4085 insertions(+), 590 deletions(-)  <- 😱
```

The diff shows a lot of code changes including a bunch of new backend APIs, utilities, data flow changes and UI changes. She looks at commit logs to find out if it all these changes are organized properly.

```
$ git log --oneline develop..feature/admin-updates

commit f4f78b319c308600eab015a5d6529add21660dc1
Author: Fred
Date: Fri Jun 11 2018 12:35:23 +0000

admin view updates                     <- 😑😑😑
```

Wilma leaves the following review:

```
The changes you made seem to be working fine based on a cursory test. However, there are way too many code changes (~4000 lines) in a single commit. This makes it very difficult to review. It might also cause certain issues to be overlooked just by the sheer size of it.

You can (and should) split your code into logically independent commits. Example -
- add API endpoints and tests for billing changes in admin view
- add utilities to validate billing roles for a user
- separate billing and team management sections in team settings
- update UI in team settings view to be design system 3.2 compliant
```

Notice that the focus is on breaking down a big change into smaller chunks, identified by a proper commit message. This allows for more effective code reviews and reduces the chances of overlooking errors.

By providing smaller commits with proper messages you are conveying your mental model of the solution to the reviewer. This reduces friction and ensures that the developer and reviewer are on the same page.


## 4. Changelog

> Daphne, Engineering Manager

A bugfix release (`4.1.1`) went out yesterday. Daphne wants to know which bugs were fixed and what kind of unplanned code changes were made. She pulls the latest `master` and runs the following command

```
$ git log --oneline v4.1.0..v4.1.1

c1c29526 Upgrade version to v4.1.1
e7f05736 Fix issue #342               <- #342 of which project?
e8ad9e21 address comments             <- What comments?
e3d84047 fix lint tests               <- Where? What for?
fc6b65de login button bugfix          <- What was the bug?
```

These commit messages barely convey what was there in the release. They indicate that a login bug was fixed and issue #342 was resolved. But what were these issues and how were they fixed?

Also, there are also stray commits like `address comments` and `fix lint tests`. These commits are not independent and do not provide any additional value. Instead, they should be squashed with commits they are modifying.

Following shows one variant of detailed commit messages which would help Daphne better understand the changes in the version

```
e1b29221 Upgrade version to v4.1.1
e8ad9e33 [GH-342] Fixed issue where header image was not visible in Safari and Internet Explorer
ac6b15ae Fixed an issue where login button was disabled for users on the enterprise plan
   - added e2e tests for this flow
   - added analytics events for login failure
```

These messages clearly explain the changes and also get rid of unnecessary messages. Anyone going through this can easily obtain an overview of the changes in a specific version. This comes in extremely handy while developing public packages — your consumers know exactly what was changed.

___

Over time, I have come to think of commit messages as little sticky notes associated with my code which provide readers with much needed context. The next time they look at my code and scream “Why?”, in disbelief, I hope my commit message can placate them.
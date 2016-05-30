---
layout: post
title: Web Scraping with Python
---

Scraping the web using python is very easy. There are a lot of libraries available which bootstrap a lot of things for you. This post ``requests`` and ``BeautifulSoup`` to scrape a university email client (POP is disabled).

### Basics

To get started, we need to understand how the internet works. What happens when you type in google.com in your browser?

Imagine the internet as a huge wire connecting your computer (client) to another computer (server) sitting some place far away. So to get a website, you have to first ask the server to give you the website. The way client does this is through something called as requests. As the name suggests, it requests the server for something. As soon as the server gets a request it responds with a message.

There are various types of requests - GET, POST, PUT, DELETE and so on. Each one of them has a specific function. The first request is always a GET request. This asks the server to send the the webpage. The POST request sends some data from the client to the server. We will worry about these two types of requests right now.

Response: The natural thing for a server to do, when it gets a request is to respond. This response contains headers and data. Headers are extra information needed for other functionalities. It has things like status code, cookies, etc. You can read up more on them to get a detailed idea.

For our use we just need to know that server responds to a request with data, if it has any. Otherwise it responds with an error. The type of the error is indicated in the status code.

### Authentication

The idea was to scrape university email client and obtain all the email. It is simply one GET request to obtain the login page. Login to any server is usually a  POST request with your login credentials. In python, you can use ``requests`` library to do this.

``getLoginScreen = requests.get('https://webmail.daiict.ac.in')``

``loginRequest = requests.post('https://webmail.daiict.ac.in/zimbra/', data={'loginOp':'login','username': username,'password':password, 'client': 'preferred'})``

#### Cookies

Many login mechanism use cookies or sessions to authenticate users for a particular period of time. To incorporate this, you would have to set headers and send the cookie data as well. This is where requests library comes to your rescue. It has pre-built sessions which saves you the time of sending cookie data. All you have to do is to create a session and use it to login.

``session = requests.Session()``

``getLoginScreen = session.get ..``

``loginRequest = session.post( ..``

Now the inbox is one GET request away.

``inbox = session.get('https://webmail.daiict.ac.in/zimbra/h/search?mesg=welcome&initial=true&app=')``

The ``inbox`` variable has the HTML of your inbox. We need to process it to get useful information. We use ``BeautifulSoup`` for this.

### BeautifulSoup

BeautifulSoup library is beautiful. It takes in HTML code and parses it into python datastructures. Let's not worry about how BeautifulSoup implements it.

``from bs4 import BeautifulSoup``

``soup = BeautifulSoup(inbox.text, 'html.parser')``

You can do a lot things with the variable ``soup`` - find element by id, prettify, sibling, parent and so on. The functions on ``soup`` allow you to navigate through the DOM tree. Go through the documentation to know more about these functions.

Note: While printing from python, you may encounter encoding error. You just have to encode the text into utf-8 before printing. Use ``string.encode('utf-8')``.

### Using Regex to find useful information

After you got the information you need from BeautifulSoup, how do find the data you need? Use regular expressions (Regex). The python library is ``re``.


    for i in titles:
        title = re.sub('[\W_]+', '', i)
            if title.find(section) > 0:
                print 'You have an article: %s' % (i)

The above snippet, navigates thorugh the titles of all emails.

``title = re.sub('[\W_]+', '', i)`` removes all non-alphanumeric characters and whitespaces from the titles.

The script I wrote was for the college magazine editors, who had to navigate through all the emails to find a new article submitted  to their respective section. So all I had to do was to find their section in the title string. If it is there, then prompt.

You can find the source code here:

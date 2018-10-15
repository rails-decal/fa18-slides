<a href="tinyurl.com/fa18-labgroups">tinyurl.com/fa18-labgroups</a> Find your lab groups!
![](https://i.imgur.com/OFSv1H4.jpg)

---

# Week 2: Rails Fundamentals!

----

# Lab Groups
- Like a mini, in-class discussion section
- Use eachother as a resource!
- Introductions + Team Names

----

# Homework 1

<img src="https://media1.tenor.com/images/23189d456e0608040773536982af3b9b/tenor.gif"></img>

- Ruby is super slick
- Use your resources!
- Two Friday OH

---

# What is Rails?

(baby don't hurt me)

----

# Requests in Review
- Last week we were talking about "client-side" web
    - Sending Requests to Websites to ask for or send info
- The "job" of a website, is to receive and respond to these requests

----

# Ruby on Rails!
- Ruby on Rails is a 'framework' that helps us respond to requests, with nice solutions for **modeling** and **templating**.
    - What's a framework?
- Why Ruby on Rails?
    - `rails new`
    - *a whole new world plays in the background*

----

# How did last week's lab work? 
- A different javascript framework called `Express.js`
- Let's take a look!
    - Super straightforward routing
- How would we do this in rails?

----

# The Router + Controller Relationship

- Router receives requests and sends it to the relevant controller
- Controller executes a function and returns text!
- (Insert nice diagram here)


---

# But first, technology!
Let's install our devtool: Ruby on Whales :whale: 

---

# Rails Demo

----

# Outline
- Run rails new
    - What happens?
- Create a controller, add two basic action
- Create a route to map to those actions
- Create a view and show how rails automatic links to an action

---

# Brief aside: HTML

----

# HTML Syntax
![](https://i.imgur.com/BAghw6d.png)

----

# HTML Syntax
![](https://i.imgur.com/BR1omqQ.png)

**More elements**: [https://developer.mozilla.org/en-US/docs/Web/HTML/Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

----

# Problems Rails solves

* A way of keeping around people's information
<!-- .element: class="fragment" -->

* Different responses for different "people"
<!-- .element: class="fragment" -->

----

# Different responses

We can get different responses by generalizing our HTML into a **template**.

* Specify placeholders where dynamic content should go

----

# Ruby Templating

- `<%= {ruby expression}  %>` - Evaluate and place resulting value into view
- `<% {ruby expression} %>` - Evaluate only

----

# Ruby Templating: Example

```erb
<% if @user.logged_in %>
    <%= @user.name %>
<% end %>
```

---


# Now you!

**Mini-lab Time**
[https://www.notion.so/calblueprint/Building-your-first-Rails-app-97640378c9ef4793ac88cf472c5066aa](https://www.notion.so/calblueprint/Building-your-first-Rails-app-97640378c9ef4793ac88cf472c5066aa)

----


# Things We Learned
- Relationship between Routers, Controllers and Views
- How to create a route and map it to an action
- How to create corresponding views

---
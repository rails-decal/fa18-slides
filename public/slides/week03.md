Find your lab groups!
![](https://i.imgur.com/OFSv1H4.jpg)

---

# Week 3: Lab!
**Question of the day: What part of elementary school do you wish you could bring to college?**
(answer in lab groups! try to have unique answers :D)

----

# Let's Sloooow Down
- A lot happened last week! 
    - Rails Magic, Tech Woes, and more
<!-- .element: class="fragment" -->

- Midterm Season :open_mouth: 
<!-- .element: class="fragment" -->


- Lecture Guides!
<!-- .element: class="fragment" -->

----

# Homework 1

- Great job! It was a lot but you got through it :smile:
<!-- .element: class="fragment" -->
 
- Let's see why we love Ruby (demo)
<!-- .element: class="fragment" -->

- If you still haven't submitted, it's overdue but it's worth a try!
<!-- .element: class="fragment" -->


----

# Rails in Review
- Discuss the following in small groups of 2-4 within your lab groups!
<!-- .element: class="fragment" -->

- Pretend Facebook is written using Ruby on Rails. Go from start-to-finish on what happens when you go to `https://www.facebook.com` (within the scope of what we've covered so far)
<!-- .element: class="fragment" -->


- What does it mean that Rails is "opinionated"?
<!-- .element: class="fragment" -->


- How does Ruby display dynamic data? Give an example of how to use this!
<!-- .element: class="fragment" -->

----

# Review Cont. 

Browser => Router => Controller => Browser
(Mini-Demo)

---

# The Power of Requests

----

# Quick Setup

Prepare for the mini-lab! Run `whales new lec-3-mini-lab` or go to https://glitch.com/edit/#!/uttermost-caption and remix the project!

----

# Anatomy of a Request

The important parts of a request: 

**URL**: The address you want to send the request to
<!-- .element: class="fragment" -->

**Request Method**: The type of request you want to send
<!-- .element: class="fragment" -->

**Body**: Additional, optional, secure data we want to send with a request
<!-- .element: class="fragment" -->

----

# What is in a url?

![](https://i.imgur.com/Ewd2GlO.png)

----

# Query Parameters

- Request parameters are sent through the url itself!
- Sending as params `{"key1":"value1", "name":"Aivant Goyal"}` to https://www.facebook.com/user
- Turns into: https://www.facebook.com/user?key1=value1&name=Aivant%20Goyal
    - `key1=value1&name=Aivant%20Goyal` is the added part

----

# Anatomy of a Response

**Status Code:** A code to tell you whether the request succeeded or failed and why
<!-- .element: class="fragment" -->

**Body:** The data we asked for in the request (text, html, files)
<!-- .element: class="fragment" -->

----

# We are building a web server!

- Our job is to respond to these requests
<!-- .element: class="fragment" -->

- Rails hides the complexity for us
<!-- .element: class="fragment" -->

- How do we access request params, headers, and body?
<!-- .element: class="fragment" -->

----

# Running and Testing

Let's create a rails server together and send some requests to eachother!
**(Walkthrough Mini-Lab)**

----

# Details
- Create a GET route at `/home` for `pages#home`
    - Returns a simple, static `home.html.erb` file
- Create a POST route at `/users/sign_up` for `users#sign_up`
    - Renders username in erb if username and password fields are provided
- Update `pages#home` to accept and render a `name` parameter

----



# Forms in Ruby

```
<%= form_with do |form| %>
  <%= form.text_field :title %>
  <%= form.text_field :description %>
  <%= form.submit %>
<% end %>
```
This is embedded ruby that we can put in a `.erb` file to render a form!

----

# How They Work

Without any other parameters to the `form_with` function, pressing submit sends a GET request to the same URL with the parameters in the form

----

# Let's try it out!

Let's create a form in our mini-lab! (demo)

---

# Lab Time!

Check out the course website for a link to the lab

----

# Goals for this Class

1) Finish Part 1 of the Lab
2) Choose 2-3 challenges in Part 2 to complete
3) Start on the homework challenges! (Will be released at 6:30)
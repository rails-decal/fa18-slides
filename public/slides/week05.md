# Week 5!

> Hofstadter's Law: It always takes longer than you expect, even when you take into account Hofstadter's Law.

— Douglas Hofstadter

----

# Homework 2

- Congrats on finishing!
<!-- .element: class="fragment" -->
- Video Walkthrough to come (demo)
<!-- .element: class="fragment" -->
- Key concepts: redirects, in-memory-models, 
<!-- .element: class="fragment" -->

----

# The Life of a Software Engineer

![](https://media.giphy.com/media/N1pS8hY0Fh4ic/giphy.gif)
<!-- .element: class="fragment" -->

- Art of getting really used to being confused
<!-- .element: class="fragment" -->
- Making software is almost NOTHING like a CS class
<!-- .element: class="fragment" -->

----

# Everything Breaks

![](https://hbfs.files.wordpress.com/2018/01/pink-panther-tree-cut.gif)
<!-- .element: class="fragment" -->

- It's frustrating!!!!!!
<!-- .element: class="fragment" -->
- Building something while even your tools are broken
<!-- .element: class="fragment" -->

----

# Practice Debugging!

- When you see an error, read it! 
<!-- .element: class="fragment" -->
- Try to get a sense of what it could be saying.
<!-- .element: class="fragment" -->
- Doesn't make any sense? Google "Rails 'error message'" 
<!-- .element: class="fragment" -->
![](https://i.imgur.com/kCBHG12.png)
<!-- .element: class="fragment" -->

----

# What's wrong here?

![](https://i.imgur.com/VUrEB12.png)

----

# Silver Lining?

<img src="https://i.imgur.com/0N6MPUI.jpg" width="300"/>
<!-- .element: class="fragment" -->

- Practice really does make perfect
<!-- .element: class="fragment" -->
- This course will not make you a master; that was never the point!
<!-- .element: class="fragment" -->
- Learn how to do this well -> Build anything you want very quickly
<!-- .element: class="fragment" -->

----

# Nearly Unlimited Power

![](https://i.imgur.com/EpUx44E.jpg)
<!-- .element: class="fragment" -->

----

# Help us out, have faith in yourself!

- A perfect curriculum-based course on SWE is impossible
<!-- .element: class="fragment" -->
- We're really dedicated towards making it better
<!-- .element: class="fragment" -->
- Meet us halfway, we'll do our best
<!-- .element: class="fragment" -->

----

# Was Slack A Good Idea?

<img src="https://media.giphy.com/media/1oJKxy0ypYpQbK4b5n/giphy.gif" width=500px />
<!-- .element: class="fragment" -->


----

# Slack Etiquette

- We love this course, but we are also students :'(
<!-- .element: class="fragment" -->
- Keep questions to #questions and lab group channels
<!-- .element: class="fragment" -->
- Only message staff if they told you to message them
<!-- .element: class="fragment" -->

----

# Stress Less, Build More

- You can't entirely help it if your hammer breaks while building the house
<!-- .element: class="fragment" -->
- Berkeley is stressful enough
<!-- .element: class="fragment" -->
- Extensions are a thing!
    - CLEAR effort needs to be shown (Coming to OH; etc)
<!-- .element: class="fragment" -->

---

# Project 1

## PokePortal

<img src=https://i.imgur.com/BIiDvWs.png width=200px />

----

# Overview

* Find it on the course website
<!-- .element: class="fragment" -->

* In Beta
<!-- .element: class="fragment" -->

* Nice GUI
<!-- .element: class="fragment" -->

* Helpful Hints
<!-- .element: class="fragment" -->

* Tells you exactly what to edit and where
<!-- .element: class="fragment" -->


----

# Pacing


- Due in 2 weeks, Oct. 25 11:59PM
<!-- .element: class="fragment" -->
- SPREAD IT OUT
<!-- .element: class="fragment" -->
- Project Checkoffs
    - Next week, schedule a time for a progress check
<!-- .element: class="fragment" -->

----

# Using Whales

- Make sure you update to the latest version!
- `npm i -g @calblueprint/whales`
<!-- .element: class="fragment" -->
- Web-Based Terminal
<!-- .element: class="fragment" -->
- No more weird git stuff
<!-- .element: class="fragment" -->

---

# Unraveling Requests
### The Power of Convention

----

## What are requests used for?

Interacting with ***Data***
<!-- .element: class="fragment" -->

----

## What kind of interactions are important for data on the web?

----

# Yelp Reviews 

![](https://i.imgur.com/6pulu4k.png)

(Live Demo)

----

# Underlying Yelp Review Model

- Content : String
<!-- .element: class="fragment" -->

- Rating : Float
<!-- .element: class="fragment" -->

- Restaurant : References
<!-- .element: class="fragment" -->

- User : References
<!-- .element: class="fragment" -->

----

# Introducing CRUD!

- Core operations that models should be able to do
<!-- .element: class="fragment" -->

- Create
<!-- .element: class="fragment" -->

- Read
<!-- .element: class="fragment" -->

- Update
<!-- .element: class="fragment" -->

- Delete
<!-- .element: class="fragment" -->

----

## What does this *mean*?

### Four concrete ways to interact with data!
<!-- .element: class="fragment" -->

----

# Types of Requests

- GET: Reads data
<!-- .element: class="fragment" -->

- POST: Creates data
<!-- .element: class="fragment" -->

- PUT/PATCH: Updates data
<!-- .element: class="fragment" -->

- DELETE: Deletes data
<!-- .element: class="fragment" -->

----

# Why bother?

- Standards are nice
<!-- .element: class="fragment" -->

- Multiple methods, same URL
<!-- .element: class="fragment" -->

- Idempotency! Calling the same request multiple times shouldn't change anything
<!-- .element: class="fragment" -->

- GET and PUT are idempotent
<!-- .element: class="fragment" -->

----

# Creating a Smooth Interface for models. 

- Let's keep things simple
<!-- .element: class="fragment" -->

- A GET route to display the form
<!-- .element: class="fragment" -->

- A POST/PUT/DELETE route to execute the action
<!-- .element: class="fragment" -->

- Who sends the POST/PUT/DELETE request? (Browser Demo)
<!-- .element: class="fragment" -->

---

# Models

Associations, Migrations, and Validations!

----

# Review

- Models represent the data we save in our application
<!-- .element: class="fragment" -->

- They live in tables which live in a database
<!-- .element: class="fragment" -->

- Each model gets its own table. 
<!-- .element: class="fragment" -->

- Columns represent attributes, rows represent instances
<!-- .element: class="fragment" -->

----

# Review Cont.

- Ruby creates a lot of helpers for us
<!-- .element: class="fragment" -->

- `rails generate model Student ...` run in terminal creates a model
<!-- .element: class="fragment" -->

- `Student.create`
<!-- .element: class="fragment" -->

- `Student.where`
<!-- .element: class="fragment" -->

- `Student.find_by`
<!-- .element: class="fragment" -->

- `Student.find`
<!-- .element: class="fragment" -->

----

# Associations

We talked last week about how databases can store _relational_ records.

![](https://i.imgur.com/Ii9FOHl.png)

----

# Associations

Relational records means storing the **`id`** of the related model. It's like a pointer!

![](https://i.imgur.com/Ii9FOHl.png)

----

# What associations look like

```bash
rails generate model Artist name:string
```

```bash
rails generate model Album name:string artist:references
```

* This results in `artist_id` inside of the `albums` table.
<!-- .element: class="fragment" -->

----

# What associations look like

```ruby
class Album < ApplicationRecord
    belongs_to :artist # This is added for you!
end
```
<!-- .element: class="fragment" -->

* This gives you the ability to do:
<!-- .element: class="fragment" -->

```ruby
@album = ...
@album.artist
```
<!-- .element: class="fragment" -->

----

# What associations look like

```ruby
class Artist < ApplicationRecord
    has_many :albums # You must add this.
end
```

* This gives you the ability to do:
<!-- .element: class="fragment" -->

```ruby
@artist = ...
@artist.albums
```
<!-- .element: class="fragment" -->


----

# Validations

Rails can set up validations at the _model layer_. 

Examples include:
* `presence` - can't be `nil`
* `length` - enforce character minimums or limits
* `uniqueness` - shouldn't be the same as others
* ...and more

----

# What validations look like

```ruby
class Artist < ApplicationRecord
    has_many :albums
    validates :name, presence: true
end
```

----

# Migrations

Changing our model fields as we need them:

```bash
rails generate migration AddDescriptionToArtists description:string
```

----

# Wrap-up: our `db` folder
* `db`: Database-specific files
    * `schema.rb`: Defines how the **fields** of your models are structured
    * `seeds.rb`: Prepares test models for your database, called with `rails db:seed`
    * `migrations/*.rb`: Shows how your database has changed over time - these are autogenerated

---

## Attendance

tinyurl.com/railsismagical

---

# Rails Magic

Pros and Cons of Having Opinions

----

## What does it mean that Rails is opinionated?

----

## "Hey, those conventions are pretty smart. Say no more, I'll do all of them for you!"

----

# Convention over Configuration

In Homework 2, you had to build this general route structure out yourself
<!-- .element: class="fragment" -->

It was clunky, not perfect, routes were weird
<!-- .element: class="fragment" -->

Rails: "Hey, want some help?"
<!-- .element: class="fragment" -->

----

## When we create a model, we usually create controllers to wrap around the model too and views for each relevant route

----

## "Hey, let me take care of that for you. You focus on the content"

----

# Homework 2 in ONE command

`rails generate scaffold City name:string landmark:string population:integer`
<!-- .element: class="fragment" -->

----

## WOW!!!!!!!

<img src="https://media.giphy.com/media/YbYPj0rHikQOQ/giphy.gif" />
<!-- .element: class="fragment" -->

----

# Scaffolding is *really* useful

![](https://i.imgur.com/yXyOudW.jpg)

----

# Core Controller Actions

- GET "index": Show All
<!-- .element: class="fragment" -->


- GET "show": Show One
<!-- .element: class="fragment" -->


- GET "new": Show New Model Form
<!-- .element: class="fragment" -->


- GET "edit": Show Edit Model Form
<!-- .element: class="fragment" -->


- POST "create": Create New Model From Params
<!-- .element: class="fragment" -->


- PUT/PATCH "update": Update New Model From Params
<!-- .element: class="fragment" -->


- DELETE "destroy": Delete Model From Params
<!-- .element: class="fragment" -->

----

# Route Helpers

`resources :reviews` would create all these routes *for* you for the reviews model

Running `rails routes` will show you all of your routes. 
<!-- .element: class="fragment" -->

----

# Specific Routes

```
get '/courses', to: courses#index
post '/courses/', to: courses#create
get '/courses/new', to: courses#new
get '/courses/edit', to: courses#edit
get '/courses/:id', to: courses#show
patch '/courses/:id', to: courses#update
put '/courses/:id', to: courses#update
delete '/courses/:id', to: courses#destroy
```

----

# Route Prefixes and Wildcards

- Rails has the option to create "nicknames" for routes, they're called prefixes 
<!-- .element: class="fragment" -->
- If we gave a route the prefix "courses", we could refer to it's url as `courses_path`
<!-- .element: class="fragment" -->
- `get '/courses/:id', to: courses#show`
<!-- .element: class="fragment" -->
- The ":id" is a wildcard part of the url. That part of the url gets put as a param
<!-- .element: class="fragment" -->

----


# How could there possibly be cons?

There's a learning curve...
<!-- .element: class="fragment" -->
Rails makes a lot of assumptions. If you're not in the know, it's easy to get confused!
<!-- .element: class="fragment" -->
When something works but you don't know why, assuming Rails helped you out is a pretty safe assumption
<!-- .element: class="fragment" -->

----

# Most useful generators

`rails generate model <model params>`
<!-- .element: class="fragment" -->

`rails generate migration <migration params>`
<!-- .element: class="fragment" -->

`rails generate controller <actions>`
<!-- .element: class="fragment" -->

`rails generate scaffold <model params>` 
<!-- .element: class="fragment" -->

----

# Woo!! Go build powerful webapps

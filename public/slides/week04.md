<a href="tinyurl.com/fa18-labgroups">tinyurl.com/fa18-labgroups</a> Find your lab groups!
![](https://i.imgur.com/OFSv1H4.jpg)

---

# Ruby on Rails DeCal
## Week 4: Deeper into Modeling

---

# Update available

`npm i -g @calblueprint/whales`

* Cleans up after itself
* Experimental browser console available at `npm i -g @calblueprint/whales@edge` (Windows users, don't use `@edge`)

---

# Let's review!

----

# Lab Review

In the lab, we used a **class** to store information in isolated **objects**/instances.

----

# Lab Review

This might look a lot like object-oriented programs you've written for CS classes.

```ruby
class City
  attr_accessor :name, :temperature, :description

  def initialize(city_params)
    @name = city_params[:name]
    @temperature = city_params[:temperature]
    @description = city_params[:description]
  end
end
```

----

# Lab Review

**Moving forward**: What's wrong with this to keep the city around?

```ruby
def save
  $cities << self
end
```

----

# Lab Review

Restarting the server will _lose your information_.

We'll use a database to store our models.
<!-- .element: class="fragment" -->

_What are databases?_
<!-- .element: class="fragment" -->

----

# Databases

A way of storing structured information in tables

**Cities**

| ID | Name | Temperature | Description |
| -------- | -------- | -------- | ---- |
| 1     | Berkeley     | 50.4°     | partly cloudy |
| 2 | Los Angeles | 70.6° | clear |
| 3 | New York | 76° | sunny |

----

![](https://i.imgur.com/5WVaaFY.png)


----

![](https://i.imgur.com/Ii9FOHl.png)

----

# How do you interact with a database?

or... HOW DO YOU INTERACT WITH A DATABASE;

```sql
SELECT * FROM STATION 
WHERE 50 < (SELECT AVG(TEMP_F) FROM STATS 
WHERE STATION.ID = STATS.ID);
```

----

# Uh oh

That's not fun

----

# Rails does it for you

Just getting the first record is easier!

```ruby
City.first
```

generates

```sql
SELECT * FROM cities ORDER BY cities.id ASC LIMIT 1
```

---


# Rewind

Rails solves two important problems: **modeling** and templating.

----

# `rails generate`

This command creates a model class file that we can start using! Here's the syntax:

`rails generate ModelName attr_name:attr_type attr_name:attr_type ...`

----

# Demo

Let's create a `Student` model together!

`rails generate model Student name:string year:integer major:string`

_don't forget_ `rails db:migrate` (we'll talk about this later)

----

# Demo

Let's take a look inside `db/schema.rb`!

----

# Demo

In `rails console`:

```
irb(main):001:0> Student.new(name: "", year: 2021, major: "")
```

We get back an instance of a Student.

----

# Demo

Hit the up arrow and append `.save`!

```
irb(main):002:0> Student.new(name: "", year: 2021, major: "").save
```

We get back `true`.

----

# Demo

Now we can get this record back from the database:

```ruby
irb(main):003:0> Student.first
```

----

# Demo

Create a couple more models in your database... with different names and years!

----

# Demo


```ruby
irb(main):006:0> Student.where(year: 2)
```

----

# Laptops down!
We'll now look at how we can use these in forms.

---

# Relational Modeling

----

# Modeling

- Rails allows you to specify structured database records
- These records can have _relations_ to other records

----

# Relations

- **One to one**: A `User` might have one `Profile` (with more information)
- **One to many**: A `Customer` might have many `Purchase`s.
- **Many to many**: A `Friend` might have many `Friend`s, and vice versa.

----

![](https://i.imgur.com/1ST6tAO.png)

----

# Schema design exercise

How would you represent Slack?

----

# Lab!

----

# Rails folder structure

* `app`: Most of your application lives here!
    * `app/models`: Defining your Rails models and their behavior (importantly, *not* their structure)
    * `app/views`: Templates - where you wrote most of your Weather app last time
    * `app/controllers`: Classes that define how we answer to routes

----

# Rails folder structure

* `config`: Configuration for how your Rails app runs
    * `config/routes.rb`: Defines how requests get routed to controllers!

----

# Rails folder structure
* `db`: Database-specific files
    * `schema.rb`: Defines how the **fields** of your models are structured
    * `seeds.rb`: Prepares test models for your database, called with `rails db:seed`
    * `migrations/*.rb`: Shows how your database has changed over time - we'll talk about this more later!

----

# Relational modeling

----

# Relations in Active Record

```ruby
class Student < ActiveRecord::Base
  has_many :assignments
end
```

----

# More Active Record Features

```ruby
class Person < ActiveRecord::Base
  validates :username, presence: true
  validates :password, confirmation: true
end
```

----

# Extending Active Record

```ruby
class Post < ActiveRecord::Base
  has_many :votes

  def score
    upvotes = votes.where(type: "up").count
    downvotes = votes.where(type: "down").count
    upvotes - downvotes
  end
end
```

----


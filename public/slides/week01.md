## Week 1
# Introduction to Ruby & The Web

---

## Agenda

- Course Logistics
- Lab Groups
- Intro to Web Development
- Environment Setup
- Learning Ruby
- What is Rails?
- (Optional) Intro to Git

----

# Instructors
- Aivant Goyal
- Ethan Lee
(Needs nice pictures)

----

# Teaching Assistants
- Arpan Pal
- Pooja Nagpal
- Melody Wei
- Adhiv Dhar
- Tommy Poa
- Jessica Hsiao(OH only)
- Joshua Yang (OH only)
(Needs even nicer pictures!)

---

# Course Logistics

----

# Weekly Lecture
Kroeber 160 Thurs 5-7
- If you need to leave early, please do so quietly. It's your responsiblity to look up slides and catch up on material!
- 11 Classes Total (No class on 11/22 for Thanksgiving!)

----

# Weekly Attendance (20% of grade)
- 0-1 unexcused = 20/20
- 2 unexcused = 10/20
- 3 unexcused = 0/20
- 4+ unexcused = Automatic NP :(

----

# More notes
- Soft Pre-req: CS 61A (Highly Recommended!)
    - Let us know if you have any concerns and we'll do our best to support you
- Optional Corresponding Textbook: http://guides.rubyonrails.org/index.html

---

# Course Resources

----

# Course Website
**your.rails.world**
- Will have lecture slides, homework, and other resources
- Attendance taken through here

----

# Syllabus
https://goo.gl/oVz9Ux (Needs updating to Fall 2018)

----

# Slack!
- Lab Group Channels
- Public Question Channels
- Contact staff by messaging us privately
- Staff Weekly Office Hours: TBA! (Needs updating)

---

# Grading

----

# Work
- 4 Homeworks, 2 Projects
    - Four slip days for any type of assignment - at most 2 allowed for final project

----

# Grading breakdown
- 20% Attendance
- 25% Homework
- 25% Project 1 (Individual)
- 30% Final Project (Group) [no submission = automatic NP]
- 2 Units P/NP - 70% or higher is passing

---

# In-Class Labs + Discussions

----

# Lectures
- Two hours of lecture is boring
  - Interspersed Discussion Questions and Mini-Labs
- Starting next week we'll be grouping each of you with a TA
  - They will be your go to person + group for in-class and out-of-class questions and support!

---

<!-- .two_col -->
# Let's Talk About The Web!

----

# Discussion Question
What happens when you type http://www.facebook.com in your browser and press `enter`?

----

# Understanding the web
- We communicate with websites and web applications through requests (structured text)
- A simpler static site will return text in the form of html
  - Our browser reads the html and makes it look pretty for us
- The issue of templating
  - When any of us go to facebook.com, we see different text come back to us. 

----

# Structure of Web applications
- Web applications have a data store and building a web application involves coordinating between what the user is asking for, what data is involved, and how to show the relevant "text" for the browser to display
![](https://i.imgur.com/svdkDFG.png)

---

# Communicating with Web Applications

----

# Requests!
- Requests have 3 main components
  - Type (e.g.: GET, PUSH, PUT)
  - Headers (Dictionary of key-value pairs)
  - Body (Plain-text)

----

# Telnet Demo
  - Browser is simply sending requests to websites asking for the text to display to the user
  - We can also send requests and get back text!

---

# Try it yourself now!
- In-Class Mini-Lab
    - Use telnet or a similar terminal application to send a GET request to railsdecal.com

---

# What is Ruby?

----

# In-Class Demo!


<div id="container" style="background-color: #272822; font-family: 'Roboto Mono', monospace; font-size: 50%">
  <div id="shell">
    <div id="output">
    </div>
    <div id="command">
      <span class="prompt">&gt;&gt;</span>
      <div id="editor"></div>
    </div>
  </div>
</div>
<script type="text/javascript">

</script>

---

- High level programming language
    - Dynamically Typed (like Python!)
    - Object-Oriented (like Java!)
- Focus on humans, not machines 
- Everything is an object
    - `{ 1 => Integer, ‘String’ => String, :symbol => Symbol,                                                                 [] => Array, {} => Hash, nil => NilClass }`
- Learn more: https://www.codecademy.com/articles/glossary-ruby

---

# Common Ruby Objects
- `nil` : representation of nothingness; similar to null, undefined
- `“String”` : Mutable sequence of characters
- `:symbol` : Strings, sort of (see next slide)
- `1` : Integer
- `true && false` : Boolean
- `[]` : Array
    - Can contain multiple types of objects ( example:  `[ 1.0, “foo”, :baz ]` )
- `{}` : Hash or Dictionary
    - `{:foo => "bar", baz: :buzz} # two syntax styles`


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
<div style="display: flex; align-items: center;">
<img src="https://cl.ly/8c6f002a29b8/Image%202018-09-13%20at%2010.02.53%20AM.png" width="100" height="100" style="border-radius: 100%; margin: 20px;">
<h2>Aivant Goyal</h2>
</div>
<div style="display: flex; align-items: center;">
<img src="https://cl.ly/4400a9404f0f/Image%202018-09-13%20at%2010.01.03%20AM.png" width="100" height="100" style="border-radius: 100%; margin: 20px;">
<h2>Ethan Lee</h2>
</div>

----

# Teaching Assistants
<div style="display: flex; flex-wrap: wrap">
<div style="display: flex; align-items: center; margin-right: 35px;">
<img src="https://cl.ly/a31a52706613/Image%202018-09-13%20at%2010.08.00%20AM.png" width="75" height="75" style="border-radius: 100%; margin: 20px;">
<h4>Arpan Pal</h4>
</div>
<div style="display: flex; align-items: center; margin-right: 35px;">
<img src="https://cl.ly/a31a52706613/Image%202018-09-13%20at%2010.08.00%20AM.png" width="75" height="75" style="border-radius: 100%; margin: 20px;">
<h4>Pooja Nagpal</h4>
</div>
<div style="display: flex; align-items: center; margin-right: 35px;">
<img src="https://cl.ly/893fa9105797/Image%202018-09-13%20at%201.28.12%20PM.png" width="75" height="75" style="border-radius: 100%; margin: 20px;">
<h4>Melody Wei</h4>
</div>
<div style="display: flex; align-items: center; margin-right: 35px;">
<img src="https://cl.ly/ffa15231f3a2/Image%202018-09-13%20at%201.27.39%20PM.png" width="75" height="75" style="border-radius: 100%; margin: 20px;">
<h4>Adhiv Dhar</h4>
</div>
<div style="display: flex; align-items: center; margin-right: 35px;">
<img src="https://cl.ly/0bb162047bb4/Image%202018-09-13%20at%201.29.03%20PM.png" width="75" height="75" style="border-radius: 100%; margin: 20px;">
<h4>Tommy Poa</h4>
</div>
<div style="display: flex; align-items: center; margin-right: 35px;">
<img src="https://cl.ly/c3839394e67d/Image%202018-09-13%20at%201.29.58%20PM.png" width="75" height="75" style="border-radius: 100%; margin: 20px;">
<h4>Jessica Hsiao <sup style="font-size: 12pt">*OH only</sup></h4>
</div>
<div style="display: flex; align-items: center; margin-right: 35px;">
<img src="https://cl.ly/a31a52706613/Image%202018-09-13%20at%2010.08.00%20AM.png" width="75" height="75" style="border-radius: 100%; margin: 20px;">
<h4>Joshua Yang <sup style="font-size: 12pt">*OH only</sup></h4>
</div>
</div>

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
The following URL: https://tinyurl.com/railsfa18syllabus

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
- We communicate with websites and web applications through text 
- Asking a simple static site will return text in the form of html
  - Our browser reads the html and makes it look pretty for us

----

# Structure of Web applications
- The issue of templating
  - When any of us go to facebook.com, we all see different things! How? 
- Web applications have a data store and building a web application involves coordinating between what the user is asking for, what data is involved, and how to show the relevant "text" for the browser to display

----

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

# Curl Demo
  - Browser is simply sending requests to websites asking for the text to display to the user
  - We can also send requests and get back text!

---- 

# Try it yourself now!
- In-Class Mini-Lab
    - Use curl or a similar terminal application to send a GET request to https://ethereal-ninja-1.glitch.com

---

# Lab Challenges
- Try sending requests to these routes!
    - `/authenticate`
    - `/classified`
    - `/newMessage`, `/allMessages`, `/updateMessage`
    
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

----

- High level programming language
    - Dynamically Typed (like Python!)
    - Object-Oriented (like Java!)
- Focus on humans, not machines 
- Everything is an object
    - `{ 1 => Integer, ‘String’ => String, :symbol => Symbol,                                                                 [] => Array, {} => Hash, nil => NilClass }`
- Learn more: https://www.codecademy.com/articles/glossary-ruby

----

# Common Ruby Objects
- `nil` : representation of nothingness; similar to null, undefined
- `“String”` : Mutable sequence of characters
- `:symbol` : Strings, sort of (see next slide)
- `1` : Integer

---- 

- `true && false` : Boolean
- `[]` : Array
    - Can contain multiple types of objects ( example:  `[ 1.0, “foo”, :baz ]` )
- `{}` : Hash or Dictionary
    - `{:foo => "bar", baz: :buzz} # two syntax styles`


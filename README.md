# Chore Tracker
Chore Tracker makes getting kids to do household chores easy! A gamified child dashboard lets them compete with their siblings on a leaderboard, earn gold coins and spend those coins on rewards. Children can personalize their dashboard by picking a favourite colour and avatar. Look out on your birthday for a special birthday surprise!

## Technologies
Project created with:
* React
* React Router Dom
* Redux Toolkit
* Node.js 
* Express ([GitHub repo](https://github.com/edwalters99/chores-express))
* Mongoose
* MongoDB Atlas
* JSON Web Tokens
* bcrpyt (password encryption)

React Libraries:
* axios
* dayjs
* React Confetti
* React Confirm Alert
* React Icons
* React Spinners
* React Timeago
* React Toastify


## Try it out
The app is deployed here: [Chore Tracker](https://chore-tracker0.netlify.app/).

### Login
* email: joebloggs@gmail.com
* password: Password1
* parental pin: 1234

### Back-end server codebase
[Chores-express GitHub repo](https://github.com/edwalters99/chores-express)

---------------------------------------------------------------

## Introduction

This was my final solo project of the 13 week General Assembly Software Engineering Immersive Bootcamp. It was completed in 10 days. I challenged myself to make an app that would be useful to myself and my family, while learning some more advanced features of React such as Redux Toolkit. I decided to use Node.js / Express for my back-end as my previous projects were build using Ruby on Rails. I am pleased I made this decision as I learnt so much about making an API server and designing my data structure so it would work with a non-relational database (MongoDB).

---------------------------------------------------------------

## Approach / Decision Making

 The first step was to draw up a Use Case Diagram that documented the key functionality that I was aiming to achieve. This gave me a benchmark throughout the week of how much progress was being made and ensured that no critical functionality was missed. I then worked on getting the back-end express server operational. This was the first time I had used Node.js / Express in a Project and although we had covered the basics in class I needed to do further study (Udemy) to build out the models and controllers in a methodical way while implementing Middleware to avoid code repetition, handle protected routes and provide detailed and reliable error responses. I learnt and used Postman and MongoDB Compass to test the API requests and confirm the database was working as intended.      
 
  I then moved on to the React side creating the necessary Pages & Components to meet the requirements of the Use Case Diagram. I taught myself Redux toolkit from a tutorial which explained how to set up the Store, User Authentication, Services and Slices and how to check Redux State in Chrome Devtools. I started working on Register / Login and the Parent Dashboard before moving onto the Child Dashboard and Child Rewards. At times I refactored existing React code as too much functionality was in one component and this needed splitting out into subcomponents. Sometimes this was to keep the code clean and readable, and at other times it was a necessity for state management and to avoid repeated API calls from a low-level component.       
  
  The most stressful time was when I was 60% through the project (time-wise) and had completed the back-end server and  Parent functionality but hadn't yet started on the Child features. I was finding it difficult to estimate how long the Child Dashboard and Rewards sections would take to develop. However the time consuming work of setting up Redux, API requests and authentication had already been done and this meant that I was on track to complete the project. Building the Child section became hugely enjoyable as new features could be added relatively quickly and it was fun putting myself in the eyes of the end user and adding new functionality to keep them engaged. I avoided adding any new features in the 18 hours prior to deadline and instead focussed on testing, bug fixes, preparing my presentation and README file.         
  
  In retrospect I am pleased that I chose to use/learn Redux for this project. Using Redux toolkit gave me a gentler introduction than writing all Redux code from scratch. The downside was that state management took longer to set up initially, with a lot of code required for the Slice functions in particular. But after this code was written the first time, it could be used as boilerplate when adding additional features. The main upside was that it became easy to read and write global state (make API requests) from any component in the project with only a couple of lines of code. I also found it useful to see a full view of state at any time in the Redux Devtools and to be able to 'rewind' state to see how it changed over time (useful for bug fixing). Often there was no need to make an API GET request following a PUT request to make a database change. The Slice function was able to change the local state directly to reflect the changes made and force a re-render of the page/component. I can see how Redux could be so beneficial on a larger project as different features / state are compartmentalized into separate folders and files.

---------------------------------------------------------------

## Use Case Diagram
<img src="/public/images/screenshots_readme/use_case_diagram.jpg" width="750" alt="Use Case Diagram">

---------------------------------------------------------------

## React Routes
<img src="/public/images/screenshots_readme/react_routes.jpg" width="750" alt="React Routes">

---------------------------------------------------------------

## Data Model Diagram
<img src="/public/images/screenshots_readme/data_model.jpg" width="750" alt="Data Model Diagram">

---------------------------------------------------------------

## API Routes
<img src="/public/images/screenshots_readme/api_routes.jpg" width="750" alt="API Routes">

---------------------------------------------------------------

## Feature List

* Login and Register pages with custom form validation and error display.
* Back-end server warnings & errors are displayed to the user throughout the app using Toast Messages.
* Parent enters a family name on signup (e.g. The Bloggs Family) which is displayed in various app components.
* Parent enters a PIN on signup which is used for authorizing chore completion and reward redemption.
* Parent can create (or delete) a child. Favourite colour, avatar and date of birth inputs are required to create a personalized & unique Child Dashboard.
* A random inspirational / personalized message from their avatar is displayed on each page refresh of the Child Dashboard. e.g Days to their birthday / child name spelt backwards.
* Parents can create/delete favourite chores; entering a title, description, reward coin value and emoji to personalize each chore.
* These chores can then be reused and assigned to any number of children.
* Parent performs login to Child Dashboard with a single button click. Child is unable to access other areas of the app and is restricted to Child Dashboard, Child Rewards and Logout. (No child username/password required)
* Assigned chores appear on Child Dashboard and display the elapsed time since assignment.
* Child can mark chore as done. Parent enters PIN to approve chore completion. Child's coin balance updates by the chore value with a motivational message and confetti display.
* Motivational messages on Child Dashboard are conditionally rendered based on number of chores completed.
* Family Leaderboard can be sorted either by chores completed or coin total.
* All day confetti and congratulations message on child's birthday.
* Rewards page displays messages about which rewards the child can afford and how many coins they will have remaining after purchase.
* Child can spend coins to redeem a reward. After parent PIN approval their coin balance is reduced. 
* Mobile / Tablet-first design. Also works on larger screen sizes.

---------------------------------------------------------------

 ## Screenshots

<span><img src="/public/images/screenshots_readme/dashboard2.jpg" width="250" alt="Dashboard">
<img src="/public/images/screenshots_readme/dashboard1.jpg" width="250" alt="Dashboard">
<img src="/public/images/screenshots_readme/birthday.jpg" width="250" alt="Birthday Feature"></span>
<span><img src="/public/images/screenshots_readme/leaderboard.jpg" width="250" alt="Leaderboard">
<img src="/public/images/screenshots_readme/rewards1.jpg" width="250" alt="Rewards Page">
<img src="/public/images/screenshots_readme/rewards2.jpg" width="250" alt="Rewards Page"></span>
<span><img src="/public/images/screenshots_readme/login.jpg" width="250" alt="Login page">
<img src="/public/images/screenshots_readme/register.jpg" width="250" alt="Register page">
<img src="/public/images/screenshots_readme/addchild.jpg" width="250" alt="Add child feature"></span>
<span><img src="/public/images/screenshots_readme/assignchores.jpg" width="250" alt="Assign chores">
<img src="/public/images/screenshots_readme/newchore.jpg" width="250" alt="New Chore">
></span>

---------------------------------------------------------------

## Possible future feature additions

* Edit User Profile and Change Password features.
* Parent Profile to show which chores are currently assigned to each child. At present it displays this information at the time of assignment only. (The Child Dashboard is used to see this information after assignment)
* Bonus coins on child's birthday.
* Parent ability to unassign chores.
* Parent page displaying claimed rewards by each child
* Parent feature to set recurring chores with a time period e.g. weekly.
* Custom reward creation/deletion for each family. (A selection of rewards are currently hard-coded into the app)
* Customized CSS / more complex media queries for larger screen sizes to make full use of extra screen space.
---------------------------------------------------------------

Acknowledgements:

* <a href='https://pngtree.com/so/acknowledge'>Icons sourced from pngtree.com</a>
* The support of my family while spending countless hours working on this project!


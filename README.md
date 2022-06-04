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
You can access and use this application on this link: [Chore Tracker](https://chore-tracker0.netlify.app/).

### Login
* email: joebloggs@gmail.com
* password: Password1

### Back-end server codebase
[Chores-express GitHub repo](https://github.com/edwalters99/chores-express)

---------------------------------------------------------------

## Introduction

This was my final solo project of the 13 week General Assembly Software Engineering Immersive Bootcamp. It was completed in 10 days. I challenged myself to make an app that would be useful to myself and my family, while learning some more advanced features of React such as Redux Toolkit. I decided to use Node.js / Express for my back-end as my previous projects were build using Ruby on Rails. I am pleased I made this decision as I learnt so much about making an API server and designing my data structure so it would work with a non-relational database (MongoDB). My approach was to create the back-end server first, using Postman and Compass to test the API requests and manipulate the database. I then moved on to the React side creating the necessary Pages/Components to meet the requirements of the Use Case Diagram. I started on Register / Login and the Parent Dashboard before moving onto the Child Dashboard and Child Rewards. I found the Child section hugely enjoyable as new features could be added relatively quickly and it was fun putting myself in the eyes of the end user and adding new functionality to keep them engaged. 

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
* Back-end server warnings & errors are displayed to the user throughout the app using 'Toast messages'.
* Parent enters a family name on signup (e.g. The Bloggs Family) which is displayed in various app components.
* Parent enters a PIN on signup which is used for authorizing Chore Completion and Reward Redemption.
* Parent can create (or delete) a Child. Favourite Colour, Avatar and Date of Birth inputs are requested to create a personalized & unique Child Dashboard.
* A random inspirational / personalized message from their Avatar is displayed on page refresh of the Child Dashboard. e.g Days to their Birthday / Child name spelt backwards.
* Parents can create/delete Favourite Chores; entering a title, description, reward Coin Value and emoji to personalize each chore.
* These chores can then be reused and assigned to any number of Children.
* Parent performs login to Child Dashboard with a single button click. Child is unable to access other areas of the app and is restricted to Child Dashboard, Child Rewards and Logout. (No child username/password required)
* Assigned Chores appear on Child Dashboard and display elapsed time since Assignment.
* Child can mark Chore as done. Parent enters PIN to approve Chore completion. Child's coin balance updates by the chore value with a motivational message and Confetti Display.
* Motivational messages on Child Dashboard are conditionally rendered based on number of chores completed.
* Family Leaderboard can be sorted either by Chores Completed or Coin Total.
* All Day Confetti and congratulations message on Child's birthday.
* Rewards page displays messages about which Rewards the child can afford and how many coins they will have remaining after purchase.
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

* Edit User Profile and Change Password
* Parent profile to show which chores are currently assigned to each Child. At present it dispays this information at the time of assignment only. The Child Dashboard is then used to see this information.
* Bonus Coins on Child's birthday.
* Parent feature to unassign chores.
* Parent view of claimed rewards by each child
* Parent feature to set recurring chores with a time period e.g. weekly.
* Custom reward creation/deletion for each family. (A selection of Rewards are currently hard-coded into the app)
* Customized CSS / more complex media queries for larger screen sizes to make full use of extra screen space.
---------------------------------------------------------------

Acknowledgements:

* <a href='https://pngtree.com/so/acknowledge'>Icons sourced from pngtree.com</a>
* The support of my family while spending countless hours working on this project!


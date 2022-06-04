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


## Try it out
You can access and use this application on this link: [Chore Tracker](https://chore-tracker0.netlify.app/).

### Login
* email: joebloggs@gmail.com
* password: Password1

### Back-end server codebase
[Chores-express GitHub repo](https://github.com/edwalters99/chores-express)

---------------------------------------------------------------

## Introduction

This was the final project on the 13 week General Assembly Software Engineering Immersive Bootcamp. I challenged myself to make an app that would be useful to myself and my family, while learning some more advanced features of React such as Redux Toolkit. I decided to use Node.js / Express for my back-end (my previous projects used Ruby on Rails). I am pleased I made this decision as I learnt so much about making an API server and designing my data in such a way that it would work with a non-relational database (MongoDB)

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
* Parent enters a family name on signup (e.g. The Bloggs Family) which is used in various sections of the app.
* Parent enters a PIN on signup which is used for authorizing Chore Completion and Reward Redemption.
* Data captured when adding a new child (Favourite Colour, Avatar, Birthday) is used to create a personalized & unique Child Dashboard.
* A random inspirational / personalized message from their Avatar is displayed on each page refresh of Child Dashboard. e.g Days to their Birthday, their name spelt backwards.
* Parents create/delete Favourite Chores, customizing them with a title, description, emoji and reward Coin Value to personalize each chore.
* These chores can then be reused and assigned to individual Children in the family.
* Parent logs in Child to their Child Dashboard with a single button click. Child is unable to access other areas of the app and is restricted to Child Dashboard, Child Rewards and Logout.
* Child Dashboard updates with Assigned Chores and time since Assignment.
* Child can mark Chore as done and after Parental PIN approval their coin balance will update by the chore value along with a motivational message and Confetti Display.
* Motivational messages on Child Dashboard conditionally rendered based on number of chores completed.
* All Day Confetti and congratulations message on Child's birthday.
* Rewards page with motivational messages about which Rewards the child can afford and how many coins they will have remaining after purchase.
* Child can redeem rewards and after Parental PIN approval their coin balance is adjusted. 
* Mobile % Tablet-first design. Also works on larger screen sizes.

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
* Parent ability to unassign chores.
* Parent ability to set recurring chores with a time period e.g. weekly.
* Custom reward creation/deletion for each family. (A selection of Rewards are currently hard-coded into the app)
* More complex media queries to work on larger screens and make full use of extra screen space.
---------------------------------------------------------------

Acknowledgements:

<a href='https://pngtree.com/so/acknowledge'>Icons provided by pngtree.com</a>


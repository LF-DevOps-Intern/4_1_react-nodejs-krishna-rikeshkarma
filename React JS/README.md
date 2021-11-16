# React JS

Developed by Facebook in 2011, React (also referred to as ReactJS) is a Javascript library used for creating fast and interactive user interfaces. At this time, it’s the most popular Javascript library for developing user interfaces.

Its popularity stems from its flexibility and simplicity and this makes it the first choice in the development of mobile apps and web applications. More than 90,000 sites use React including tech giants such as Facebook, Netflix, Instagram, Airbnb, and Twitter to list a few.

- Install **React.js**
  - Before we install *React JS*, 
    - We need **npm** (node package manager) which is a command-line tool used for interacting with Javascript packages, that allows users to install, update, and manage Javascript tools and libraries. Also, npm is an online open-source software registry that hosts over 800,000 Node.JS packages. 
    - Npm comes along with Node.JS so we don’t need to install it manually as we have already installed it in the previous task.
  - Installing create-react-app Utility
    - create-react-app is a utility that enables you to set up all the tools required to create a React Application. It saves you a great deal of time and energy setting everything from scratch and gives you the head start needed.
    - To install the tool, run the following npm command:
      - `sudo npm -g install create-react-app`
    ![install create-react-app utility]()

- Creating a React Application and print message "Hello React.js"
  - To create a react app we need to invoke the following command followed by the name of the app we want it to be:
    - `create-react-app my-first-react-app`
    ![create new react app]()
  - After we create a new react app, we need to navigate into the app directory in order to run the application. For this we use the following command:
    - `cd my-first-react-app`
    - `npm start`
    ![start npm]()
  - Now we can go to our browser and check if our app is being served.
    ![application being served]()
  - This shows that the default React app is up and running. Now as per the question we need this react app to print the message “Hello React.js”.
    - We need to edit App.js file located inside my-first-react-app/src
    - Then configure the file as per our need, here need to print the message “Hello React.js”
    ![print Hello React.js]()
    - Now we can use npm start, to check if the message is printing.
    ![]()
	

- Change the default port 3000 to 3001
  - Everything is well and running. We can see that the default port is 3000, so we need to change it to 3001.
    - For this, we need to change the scripts in the package.json file
    ![]()
    - We need to change the start script to 
      - `"start": "PORT=3001 react-scripts start"`
    ![]()
    - Now we can check the port using npm start.
    ![]()
    ![]()
    

	

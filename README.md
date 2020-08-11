# Social-Media-app
Name
The Social Media App

Description :
To start an API Server & a SPA (Single Page App - using any UI framework like React,Angular, Vue.JS for social media app.

Prerequisites :

This project required a editor which i had uses visual studio.And for Database i had  uses MySql.

Mysql Database:
  
1. For User Information:

CREATE TABLE `friend` (
      `user_id` int(11) NOT NULL,
      `user_fname` varchar(200) DEFAULT NULL,
      `user_lname` varchar(20) DEFAULT NULL
)

2.  For User’s Friend Information
CREATE TABLE `friend_f` (
       `id` int(11) NOT NULL,
       `friend_id` int(11) NOT NULL
) 
Installing And Starting Project

First of all i had created a project by using command

1.     mkdir new_p
2.     cd new_p

After that i create two Folder one for server and another for client like  this.

For server:
1.     mkdir server
2.     cd server
3.     npm init
4.     npm install express --save
5.     npm install mysql  --save
6.     npm install body-parser --save
7.     npm i nodemon concurrently
8.     //change in json file -: "start": "concurrently \"cd server &&
        nodemon server.js\" \"cd client && npm start\"" .
:It will start sever and client concurrently.
 

For client:

1.    npx  create-react-app client.
2.    cd client
3.    npm init
4.    npx i axios --save
5.    npx i react-paginate --save
6.    //client port number :3000

For Run the project simply
1.     cd new_p
2.     npm start


 Versioning
I had use

1.  Visual studio code 1.47.3
2    Nodemon 2.0.4
2.  npm 6.14.6



Authors

Rishikesh Yadav.

# CRUD Blog App

## Prerequisites
- Clone the repository
- Run `npm install` in the root folder
- Run `npm install` in the folder FakeJson
- Install `Expo Go` on your mobile. Your PC and mobile should be connected to the same network

## Step 1
Retrieve your PC's local IP address<br>
It will be referred as <YOUR_LOCAL_IP_ADDRESS> down below

## Step 2
Change the IP in `constants/IP.js` to <YOUR_LOCAL_IP_ADDRESS>

## Step 3
Run the fake json server using the following command in the FakeJson folder<br>
`json-server --watch db.json --host <YOUR_LOCAL_IP_ADDRESS>`

## Step 4
Run the following command in the root folder to start the application<br>
`npm start`

## App workflow
#### You will first have a screen with all the existing blogs
#### You can create a blog using the Create Blog button on the top of the screen
#### You can click on a blog to view, edit and delete it

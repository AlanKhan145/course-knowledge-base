# Setting Up a Dummy Backend Firebase

## Overview
This lecture walks through setting up a Firebase Realtime Database to act as a dummy backend for the module's project. Firebase provides a hosted, schema-free JSON database accessible via HTTP without any server-side code. This setup allows learners to practice real HTTP requests against a live endpoint immediately.

## Key Points
- Firebase Realtime Database exposes a REST API automatically, requiring no custom server setup
- A new Firebase project is created via the Firebase Console at console.firebase.google.com
- The database URL follows the pattern `https://<project-id>-default-rtdb.firebaseio.com/`
- Data is appended to the URL path to target specific nodes, e.g., `.../meals.json`
- Firebase database rules can be set to "test mode" to allow open read/write during development

## Tips
- Always switch Firebase rules from test mode to secure rules before deploying a production app
- Appending `.json` to the Firebase URL is required for the REST API to work correctly
- Bookmark the Firebase Console URL for quick access during development

## Notes
Firebase Realtime Database is a NoSQL cloud database that stores data as a JSON tree. It is ideal as a learning tool because it removes the complexity of setting up and hosting a custom backend. The REST endpoints it provides are standard HTTP, making the skills learned here transferable to any real API.

## Summary
Firebase Realtime Database serves as a ready-made dummy backend with a REST API, allowing Flutter apps to send and receive data over HTTP with minimal setup.

# Express Lambda Boilerplate

This repo contains the most basic boilerplate code.

## How to use
Start by cloning the repo
```shell
git clone https://github.com/Ajay1290/express-lambda-boilerplate
```
After cloning you will see the folder structure like below.

### Folder Structure
```
build/    
  package-name.zip
build.js
index.js
local.js
src/
  app.js
```

- build/ : Will be auto created on 'yarn build'
  - Note: This folder will be created on 'npm run build' or 'yarn build'
- build.js : To zip all the content in build folder
- index.js : Lambda function is here 
- local.js : It contains the local server to develop app locally
  - Note: This file will be start local server on 'npm run start'
- src/ : Source of you app will goes here

### How to Develop
To start the development server open you terminal and type \
```shell
npm run start
 ```
This will start the development server on port 3000\
Change the source files according to your needs.

### How to Deploy
To deploy the server on lambda you first need to zip all your source content.
```shell
npm run build
```
This will create a build directory and with a zip file

```Note: do prefer installing only production dependencies befor building to reduce the size of zip file.```

Upload this zip on your lambda server and we are Done!

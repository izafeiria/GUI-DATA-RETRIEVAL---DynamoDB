# GUI Installation Profiles

This GUI is a full stack development project with Spring-Boot and React.js. It enables data retrieval from a DynamoDB database table.

## Requirments
- A Java IDEA
- Java 11 version
- Apache Maven 3.6.3 version or higher
- Node.js 16.14.2 version or higher

## Installation
#### Node.js installation
Refresh your local package index first by typing:
```bash
sudo apt update
```
Then install Node.js:
```bash
sudo apt install nodejs
```
Check that the install was successful by querying node for its version number:
```bash
node -v
```
In most cases, you’ll also want to also install npm, the Node.js package manager. You can do this by installing the npm package with apt:
```bash
sudo apt install npm
```
#### Download project
- Download the repository locally in your [desired] folder.
- Open folder as a project preferable with IntelliJ IDEA 
#### Define Database 
- Go to the file application.properties in the following directory src/main/resources/application.properties
- Define the following : 
-- aws.dynamodb.endpoint
-- aws.dynamodb.accessKey
-- aws.dynamodb.secretKey
- Go to the src/main/java/com/example/profile/entity/Profile.java and in the @DynamoDBTable annotation define the tableName with the name of the table which exists in dynamodb.

(aws.dynamodb.endpoint is of type "https://dynamodb.eu-west-1.amazonaws.com" and the only change is about the region)

By default I have random kes for credentials purposes, this GUI created for specific data and queries based on the form of that data.
Dynamo table should always be of type profiles as this GUI manipulate this kind of data. Furthermore, the attributes of the home and appliances should be in unwrapped form, so every attribute corresponds to 1 column. The scope of this repository is to provide a way of construction with Dynamodb, Spring Boot and React.js. It doesn't provide access to existing databases.


#### Run SpringBoot Application
- Build the project 
- Go to the following directory src/main/java/com/example/demo directory and run the ModelApplication file.
#### Start Front-end 
Open a new terminal from your IDEA or just your cmd and go to the path src/main/front-end and type the following commands :
```bash
npm run build
```
If you have the following error : 'react-scripts' is not recognized as internal or external command,operable program or batch file. Run: 
```bash
npm install react-scripts --save
```
Finally run : 
```bash
npm start
```
GUI will run in the http://localhost:3000/  in your default browser. For a better employment open this url in Firefox.
## HAVE FUN !

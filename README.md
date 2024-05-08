# CurdGenerator-With-Tools-
Curd Generator 

Step 1: npm install

Step 2: setup a .env File and maintain the secret in  that

Steps3 : tsc

Step 4: node index.js

Step 5: Step Setup external server  this is Github link https://github.com/sairam356/Customserver

Sample CURL :

curl --location --request POST 'http://localhost:9191/analyze' \
--header 'Content-Type: application/json' \
--data-raw '{
    "query" :"Develop  Rest API  Controller,Service,Repository,Models use typeorm lib and Project setup required files ,  save the output in localdirectory",
    "swaggerURI":"https://raw.githubusercontent.com/sairam356/Curd-Generator-LangChain-LLM/main/petstore.yaml"
}'

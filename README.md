** # How to run the code **
This is how you run the code from your computer

## Here is the link to the **Postman** i created
[Click here to visit my postman]([https://api.postman.com/collections/28453160-da5b7ecc-0fc7-4ab9-b17c-f0b349258a89?access_key=PMAT-01HB3NBQMCZMXH71A72GPQCHWS](https://drive.google.com/drive/folders/11637tmDibwKfLlHER57cPGrqrDzuHkn5?usp=drive_link))

## Install npm
``` javascript
npm install
```

## Create database in your *MySql*
``` javascript
npx sequelize db:create
```

## Adding table from models to your database
``` javascript
npx sequelize db:migrate
```

## Adding dummy data to your *users* table
``` javascript
npx sequelize db:seed:all
```

## Run the sequelize code 
``` javascript
npx nodemon app.js
```

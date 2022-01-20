	Run this command
1) npx cypress run --reporter mochawesome

(cypress.json)

 "reporter": "mochawesome",
    "reporterOptions": 
    {
       
            "reportDir": "cypress/reports/mocha",
            "overwrite": true,
            "html": true,
            "json": false
     }



2)Environmental Variable - (cypress.json)

{
    "$schema": "https://on.cypress.io/cypress.schema.json",
    "defaultCommandTimeout": 10000,
    "baseUrl": "http://173.248.158.152/HMS.Testing/api"

}



Mochawesome Report Generate Link Youtube
https://www.youtube.com/watch?v=phRqqgNe-Sg
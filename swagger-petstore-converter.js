/*
Script to convert the Swagger Petstore sample to a Postman collection
Based on http://blog.getpostman.com/2018/03/02/sync-your-specs/ 
*/
var fs = require('fs'),
    Converter = require('swagger2-postman2-converter');

var request = require('request');

function handleConversion() {
    var getOptions = {
        method: 'GET',
        url: 'http://petstore.swagger.io/v2/swagger.json'
    };

    request(getOptions, function (error, response, body) {
        if (error) throw new Error(error);
        newFileName = 'petstore-collection.json'

        // read the local swagger file
        var swaggerObject = JSON.parse(body);

        // convert Swagger 2.0 to Postman 2.0
        var conversionResult = Converter.convert(swaggerObject);

        // create a new local file in Postman v2.0 format
        fs.writeFileSync(newFileName, JSON.stringify(conversionResult.collection, null, 2));
        console.log('Converted Swagger Petstore to ' + newFileName);

    });

}

handleConversion();

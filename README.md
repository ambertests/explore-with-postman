# explore-with-postman
Various materials for Exploratory API Testing with Postman workshops

## csv
Files for use in the Postman Collection Runner
- **naughty_strings.csv**: 
Base64 encoded versions of challenging test strings ([source](https://github.com/minimaxir/big-list-of-naughty-strings/blob/master/blns.txt))
- **passwords.csv**: 
Top 1050 passwords for brute force injection ([source](https://github.com/danielmiessler/SecLists/blob/master/Passwords/Common-Credentials/best1050.txt))
- **sql-inject.csv**: 
Strings for exposing SQL injection vulnerabilities ([source](https://github.com/fuzzdb-project/fuzzdb/blob/master/attack/sql-injection/detect/xplatform.txt))

## postman_json
Postman files used to demonstrate exploratory testing with [Restful Booker](https://restful-booker.herokuapp.com) and [Juice Shop](http://demo.owasp-juice.shop). The entire folder can be loaded at once via Import Folder.

## scripts
- **make_blns_csv.sh**: 
Shell script used to make *naughty_strings.csv*
- **swagger-petstore-converter.js**: 
Node.js script which converts the [Swagger Petstore](http://petstore.swagger.io) sample to a complete Postman collection file.

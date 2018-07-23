var Json2csvParser = require('json2csv').Parser;
var _ = require('lodash');
var fs = require('fs');
var request = require("request")
const util = require('util')


fs.readFile('translated.json', function(err,result){
    result = JSON.parse(result);
    result = result.numbers;
    var fields = ['Number', 'Telugu'];
    var row = 0;
    var data = []
    
    
    _.each(result, function (value) {
        data[row] = {}
        data[row]['Number'] = Object.keys(value)[0]
        data[row]['Telugu'] = value[Object.keys(value)[0]];
        row++;
      })
    
    var json2csvParser = new Json2csvParser({
        fields
    });
    var csv = json2csvParser.parse(data);
    console.log("data", csv)
    fs.writeFile('Translated' + '.csv', csv, {
    encoding: "utf8",
    }, function (err) {
    console.log(err);
    })
})
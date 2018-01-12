var path = require('path');

var parseString = require('xml2js').parseString;
var soap = require("soap");
const request = require('request');
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "webservices"
});

con.connect(function(err) {
  if(err){ console.log('ERROR !!');}
  else {console.log('Connected !!');}
});

/*
Get country data from DB
*/
exports.tabledata = function(callback) {
    con.query("SELECT * FROM country ", function (err1, result, fields) {
        callback(null,result);
    });   
}

/*
Webservice - Get country data
*/
exports.countryCron = function(callback) {
    
        var url = 'http://www.webservicex.net/country.asmx?WSDL';
        var args = {symbol: 'DOX'};
        soap.createClient(url, function(err, client) {
            client.GetCountries(args, function(err, xml1) {
            // var aa =result;
            let a = xml1['GetCountriesResult'];
            parseString(a, function (err, result) {
                let userData =  result['NewDataSet']['Table'];
                userData.forEach(function(userData) {
                    
                    // console.log("SELECT * FROM country where country='"+userData.Name+"'");
                    con.query("SELECT * FROM country where country='"+userData.Name+"'", function (err1, result, fields) {
                    if(err1 || result==''){ 
                        con.query('Insert into country (country) values("'+userData.Name+'")');
                        
                    }
                    else { 
                    
                        result = result;
                    }

                    });
                });

            });
        });
    })
}

/*
Webservice - Get airport data
*/
exports.airportInfo = function(cntry,callback) {
    var url = 'http://www.webservicex.net/airport.asmx?WSDL';
    var args = {country: cntry};
    soap.createClient(url, function(err, client) {
        client.GetAirportInformationByCountry(args, function(err, xml1) {
            let a = xml1['GetAirportInformationByCountryResult'];
            parseString(a, function (err, result) {
                
                let airportData =  result['NewDataSet']['Table'];
                if(typeof airportData  != "undefined" ){
                    airportData.forEach(function(airportData) {

                        con.query("SELECT * FROM airport where airport ='"+airportData.CityOrAirportName+"'", function (err1, result, fields) {
                       
                        if(err1 || result==''){ 
                            con.query('Insert into airport (airport,country,airportCode) values("'+airportData.CityOrAirportName+'","'+airportData.Country+'","'+airportData.AirportCode+'")');
                        }
                        else { 
                            result = result;
                        }

                        });
                    });

                }
                callback(null,airportData);
            });
        });

    });
}
    
        
const express = require('express');
const router = express.Router();
const request = require('request');
const country = require('../controllers/function');

/* GET home page. */
//showing data of json file on home page
router.get('/', function(req, res, next) {
    let countryData = country.tabledata((error,data) => {
    res.render('index', { allCountries: data });
    });
});

/* GET country wise airport data. */
router.get('/airportdata/:country', function(req,res, next) {
    
   let countryData = country.airportInfo(req.params.country, (error,data) => {
   res.render('airport', { allcontryAirport: data });
    });
});


/* GET Country cron page. */
   router.get('/cronjob', function(req,res, next) {
        let countryData = country.countryCron((error,data) => {
        res.send('Record updated successfully ');
        });
    });

module.exports = router;



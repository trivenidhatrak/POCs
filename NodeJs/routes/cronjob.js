const express = require('express');
const router = express.Router();
const request = require('request');
const country = require('../controllers/function');


/* GET home page. */
//showing data of json file on home page
router.get('/cronjob', function(req,res, next) {
    
    console.log('------------------------------');
    let countryData = country.countryCron(req.params.country, (error,data) => {
        
      console.log('error==='+ data+"====hhhhhhh");
  
       res.render('cronjob', { allcontryAirport: data });
        /* res.render('pages/grid',{
                    allCountries : data
                });
  
                */
            });
       
           
   });

   










module.exports = router;


/* GET home page. */


var express = require('express');
var router = express.Router();
const request = require('request');
const country = require('../controllers/function');

/* GET home page. */
//showing data of json file on home page
router.get('/', function(req, res, next) {
 
   /* let tabledata=country.tabledata();
    console.log('countryList==='+country.tabledata());
    res.render('index', { title: tabledata });*/
    

    let countryData = country.airportInfo((error,data) => {
      
    // console.log('countryList==='+ data);

     res.render('index', { allcontryAirport: data });
      /* res.render('pages/grid',{
                  allCountries : data
              });

              */
          });


    



          
		
});

module.exports = router;


/* GET home page. */


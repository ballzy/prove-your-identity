var express = require('express')
var router = express.Router()

var request = require('request')
var naturalSort = require('javascript-natural-sort')
// var postcode_api = process.env.POSTCODE_API

// V2 prototype. Sprints 0-3. Simple recreation of GMS1

// URL structure is /v2/ROUTE

// Start page ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
router.get('/start', function (req, res) {
  req.session.destroy();
  res.render('v2/start', {
    suppressServiceName: true
  });
});

// Name ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
router.get('/example', function (req, res) {
  res.render('v2/example', {
    session: req.session
  });
});

router.get('/google-search', function (req, res) {

  var searchTerm = req.query.searchTerm;

  res.render('v2/google-search', {
    searchTerm: searchTerm
    });

});


router.get('/google-results', function (req, res) {

  // get the answer from the query string (eg. ?over18=false)
  var searchTerm = req.query.searchTerm;
//  process.stdout.write("HAI THERE");

  res.render('v2/google-results', {
    searchTerm: searchTerm
    });

});


router.get('/find-a-service', function (req, res) {

  // get the answer from the query string (eg. ?over18=false)
  var condition = req.query.condition;
  var servicePharmacy = req.query.servicePharmacy;
  var serviceGP = req.query.serviceGP;


//  process.stdout.write("HAI THERE");

  res.render('v2/find-a-service', {
    condition: condition,
    servicePharmacy: servicePharmacy,
    serviceGP: serviceGP
    });

});

router.get('/check-location', function (req, res) {

  // get the answer from the query string (eg. ?over18=false)
  var postcode = req.query.postcode;
  var condition = req.query.condition;
  var error = '';


  if (req.query.postcode === '') {

    res.render('v2/find-a-service', {
      condition: condition,
      error: "NEED POSTCODE ERROR"
    });
  } else {
    res.render('v2/show-list-of-services');
  }

});


router.get('/show-list-of-services', function (req, res) {

  var time = new Date();
  var postcode = req.query.postcode;
  var condition = req.query.condition;

  var serviceGP = req.query.serviceGP;
  var servicePharmacy = req.query.servicePharmacy;
  var serviceSexualHealthClinic = req.query.serviceSexualHealthClinic;
  var comment = 'nothing';



  // if(parsedGPdata.hasOwnProperty('name')){
  //  comment = "has name";
  // } else {
  // comment = "has no name";
  // }

  // console.log(__dirname);

  if (serviceGP == 'true') {

    var GPData = require('../views/v2/data_files/data_gp_LS.json');

//    console.log("--------------GP info --------");
//      for (var i = 0; i < GPData.length; ++i) {
//        console.log("Name "+[i]+" "+GPData[i].name);
//        console.log("Postcode "+[i]+" "+GPData[i].postcode);
//        console.log("Address1 "+[i]+" "+GPData[i].address1);
//        console.log("----------------------------------------");
//      }

      var resultName0 = GPData[0].name;
      var address0_1 = GPData[0].address1;
      var address0_2 = GPData[0].address2;
      var address0_3 = GPData[0].address3;
      var postcode0 = GPData[0].postcode;
      var phone0 = GPData[0].phone;

      var resultName1 = GPData[1].name;
      var address1_1 = GPData[1].address1;
      var address1_2 = GPData[1].address2;
      var address1_3 = GPData[1].address3;
      var postcode1 = GPData[1].postcode;
      var phone1 = GPData[1].phone;

      var resultName2 = GPData[2].name;
      var address2_1 = GPData[2].address1;
      var address2_2 = GPData[2].address2;
      var address2_3 = GPData[2].address3;
      var postcode2 = GPData[2].postcode;
      var phone2 = GPData[2].phone;

    }

  if (servicePharmacy == 'true') {

    var pharmaciesData = require('../views/v2/data_files/data_pharmacies_LS.json');

//    console.log("--------------Pharmacies info --------");
//      for (var i = 0; i < pharmaciesData.length; ++i) {
//        console.log("Name "+[i]+" "+pharmaciesData[i].name);
//        console.log("Postcode "+[i]+" "+pharmaciesData[i].postcode);
//        console.log("Address1 "+[i]+" "+pharmaciesData[i].address1);
//        console.log("----------------------------------------");
//      }

    var resultName0 = pharmaciesData[0].name;
    var address0_1 = pharmaciesData[0].address1;
    var address0_2 = pharmaciesData[0].address2;
    var address0_3 = pharmaciesData[0].address3;
    var postcode0 = pharmaciesData[0].postcode;
    var phone0 = pharmaciesData[0].phone;

    var resultName1 = pharmaciesData[1].name;
    var address1_1 = pharmaciesData[1].address1;
    var address1_2 = pharmaciesData[1].address2;
    var address1_3 = pharmaciesData[1].address3;
    var postcode1 = pharmaciesData[1].postcode;
    var phone1 = pharmaciesData[1].phone;

    var resultName2 = pharmaciesData[2].name;
    var address2_1 = pharmaciesData[2].address1;
    var address2_2 = pharmaciesData[2].address2;
    var address2_3 = pharmaciesData[2].address3;
    var postcode2 = pharmaciesData[2].postcode;
    var phone2 = pharmaciesData[2].phone;

    }


    if (serviceSexualHealthClinic == 'true') {

      var sexualhealthclinicData = require('../views/v2/data_files/data_sexualhealthclinic_LS.json');

  //    console.log("--------------Pharmacies info --------");
  //      for (var i = 0; i < pharmaciesData.length; ++i) {
  //        console.log("Name "+[i]+" "+pharmaciesData[i].name);
  //        console.log("Postcode "+[i]+" "+pharmaciesData[i].postcode);
  //        console.log("Address1 "+[i]+" "+pharmaciesData[i].address1);
  //        console.log("----------------------------------------");
  //      }

      var resultName0 = sexualhealthclinicData[0].name;
      var address0_1 = sexualhealthclinicData[0].address1;
      var address0_2 = sexualhealthclinicData[0].address2;
      var address0_3 = sexualhealthclinicData[0].address3;
      var postcode0 = sexualhealthclinicData[0].postcode;
      var phone0 = sexualhealthclinicData[0].phone;

      var resultName1 = sexualhealthclinicData[1].name;
      var address1_1 = sexualhealthclinicData[1].address1;
      var address1_2 = sexualhealthclinicData[1].address2;
      var address1_3 = sexualhealthclinicData[1].address3;
      var postcode1 = sexualhealthclinicData[1].postcode;
      var phone1 = sexualhealthclinicData[1].phone;

      var resultName2 = sexualhealthclinicData[2].name;
      var address2_1 = sexualhealthclinicData[2].address1;
      var address2_2 = sexualhealthclinicData[2].address2;
      var address2_3 = sexualhealthclinicData[2].address3;
      var postcode2 = sexualhealthclinicData[2].postcode;
      var phone2 = sexualhealthclinicData[2].phone;

      }


  res.render('v2/show-list-of-services', {
    time: time,
    comment: comment,
    //parsedGPdata: parsedGPdata,
    postcode: postcode,
    condition: condition,
    resultName0: resultName0,
    address0_1: address0_1,
    address0_2: address0_2,
    address0_3: address0_3,
    postcode0: postcode0,
    phone0: phone0,


    resultName1: resultName1,
    address1_1: address1_1,
    address1_2: address1_2,
    address1_3: address1_3,
    postcode1: postcode1,
    phone1: phone1,


    resultName2: resultName2,
    address2_1: address2_1,
    address2_2: address2_2,
    address2_3: address2_3,
    postcode2: postcode2,
    phone2: phone2,


    serviceGP: serviceGP,
    servicePharmacy: servicePharmacy,
    serviceSexualHealthClinic: serviceSexualHealthClinic

  });

});


router.get('/book-an-appointment-online', function (req, res) {

  // get the answer from the query string (eg. ?over18=false)
  var GPsurgeryName = req.query.GPsurgeryName;

//  process.stdout.write("HAI THERE");

  res.render('v2/book-an-appointment-online', {
    GPsurgeryName: GPsurgeryName
    });

});


router.post('/name', function (req, res) {

  var passed = true;
  var errors = {};

  req.session.example = {
    'firstName': req.body['first-name'],
    'middleNames': req.body['middle-names'],
    'lastName': req.body['last-name'],
    'nameChanged': req.body['name-changed'],
    'firstNamePrev': req.body['first-name-previous'],
    'middleNamesPrev': req.body['middle-names-previous'],
    'lastNamePrev': req.body['last-name-previous']
  };

  if (req.body['first-name'] === '' || req.body['last-name'] === '') {
    errors['name'] = 'Please enter your full name';
    passed = false;
  }

  if (!req.body['name-changed']) {
    errors['name-changed'] = 'Please answer this question';
    passed = false;
  }

  if (req.body['name-changed'] === 'yes' && !req.body['first-name-previous'] && !req.body['last-name-previous']) {
    errors['previous-name'] = 'Please enter your previous name';
    passed = false;
  }

  if (passed === false) {
    res.render('v2/name', {
      errors,
      session: req.session
    });
  } else {
    if (req.session.edit === true) {
      res.redirect('confirm-details')
    } else {
      res.redirect('date-of-birth')
    }
  }

})

module.exports = router

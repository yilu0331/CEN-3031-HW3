'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */

var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config.js');

/* Connect to your database */
mongoose.connect('mongodb://yilu0331:yilu1234@ds036967.mlab.com:36967/cen3031');
/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
 */
fs.readFile('listings.json','utf8' ,function(err, listing){
  if(err) throw err;

  var ufListings = mongoose.model('Listing', Listing.newListing);

  module.exports = ufListings;

JSON.parse(listing).entries.forEach(function(listing){
  var ufListing = new ufListings({
    code: listing.code,
    name: listing.name,
    coordinates: {
      latitude : listing.latitude,
      longitude : listing.longitude
    },
    address : listing.address
  });

ufListing.save(function(err){
  if(err) throw err;
});

});

});

/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */
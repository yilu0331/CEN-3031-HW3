/* Fill out these functions using Mongoose queries*/
var newListing = require('./ListingSchema.js'),
mongoose = require('mongoose');

mongoose.connect('mongodb://yilu0331:yilu1234@ds036967.mlab.com:36967/cen3031');

var findLibraryWest = function() {
  /* 

    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */

  newListing.find({ 'name': 'Library West' }, function(err, user) {
  if (err) throw err;

  // object of the user
  console.log(user);
});

};


var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
   newListing.findOneAndRemove({ code: 'CABL' }, function(err) {
  if (err) throw err;

  // we have deleted the user
  console.log('Cable deleted!');
});
};

var updatePhelpsLab = function() {
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
   newListing.findOneAndUpdate( { name: 'Phelps Laboratory' }, {address: '1275 Center Drive Biomedical Sciences Bldg J383'} ,function(err, listing) {
  if (err) throw err;

  // we have the updated user returned to us
  console.log(listing);
});
};


var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
   newListing.find({}, function(err, newListing) {
  if (err) throw err;

  // object of all the users
  console.log(newListing);
});
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();

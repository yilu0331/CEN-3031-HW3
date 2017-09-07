/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

/* Create your schema */
  /* your code here */
  var newListing = new Schema({
  name: {type: String,required:true},
  code: {type:String, required:true},
  address: String,
  coordinates: {
    latitude: Number,
    longitude: Number
  }
});



/* create a 'pre' function that adds the updated_at (and created_at if not already there) property */
newListing.pre('save', function(next) {
  /* your code here */
  var currentDate = new Date();
  this.updated_at = currentDate;
  if(!this.created_at)
  	this.created_at = currentDate;
  next();
});

/* Use your schema to instantiate a Mongoose model */
var Listing = mongoose.model('Listing', newListing);

/* Export the model to make it avaiable to other parts of your Node application */

module.exports = Listing;

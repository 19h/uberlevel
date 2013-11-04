var is = require("assert"), fs = require("fs");
var self = require("./");

var test = self("./x");

// might not have been implemented yet
try {
	test.destroy("./x");
} catch(e) {
	throw e;
	is(0, "Can't destroy database.");
}
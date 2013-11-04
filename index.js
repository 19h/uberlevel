var levelup = require('levelup'),
        end = require("lmdb-edge");

module.exports = (function (end) {
	return function uberlevel (location, options, callback) {
	        if (typeof options === 'function')
	                callback = options
	        if (typeof options !== 'object')
	                options = {}

	        options.db = end

	        var self = new levelup(location, options, callback);

	        Object.keys(levelup).forEach(function(m) {
			self[m] = function(location, callback) {
				if (!end[m]) throw "'" + m + "' is not implemented."

				end(location, callback || function() {})[m]
			}
	        })

	        return self
	}
})(end)
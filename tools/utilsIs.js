var util = require('util');


// util.isArray(object)
util.isArray([])
  // true
util.isArray(new Array)
  // true
util.isArray({})
  // false


// util.isRegExp(object)
util.isRegExp(/some regexp/)
  // true
util.isRegExp(new RegExp('another regexp'))
  // true
util.isRegExp({})
  // false


// util.isDate(object)
util.isDate(new Date())
  // true
util.isDate(Date())
  // false (without 'new' returns a String)
util.isDate({})
  // false

// util.isError(object)
util.isError(new Error())
  // true
util.isError(new TypeError())
  // true
util.isError({ name: 'Error', message: 'an error occurred' })
  // false

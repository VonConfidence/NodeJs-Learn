/*
  %s - String.
  %d - Number (both integer and float).
  %j - JSON. Replaced with the string '[Circular]' if the argument contains circular references.
  %% - single percent sign ('%'). This does not consume an argument.
*/
var util = require('util');

util.format('%s:%s', 'foo');
// Returns: 'foo:%s'

util.format('%s:%s', 'foo', 'bar', 'baz'); // 'foo:bar baz'

util.format(1, 2, 3); // '1 2 3'

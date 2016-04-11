// Patch __spread method, React v15 deprecation
// https://github.com/facebook/react/pull/6444
// https://github.com/jsdf/coffee-react/issues/34
// https://github.com/Microsoft/TypeScript/issues/7270#issuecomment-207138701
'use strict';

var _ = require('underscore');
var React = require('react');

React.__spread = _.extend;

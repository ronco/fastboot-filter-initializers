# fastboot-filter-initializers
Simple broccoli utility function to filter ember initializers based upon build mode.

To use this, add this to `index.js` of your addon like so:
```
/* jshint node: true */
'use strict';

var filterInitializers = require('fastboot-filter-initializers');

module.exports = {
  name: 'addon-name',

  preconcatTree: function(tree) {
    return filterInitializers(tree, this.app.name);
  }
};
```
And move your initializers and instance-initializers into a subdirectory depending on build mode they are used for, such as: `initializers/foo.js` -> `initializers/browser/foo.js`

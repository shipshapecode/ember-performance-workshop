'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    'ember-bootstrap': {
      'bootstrapVersion': 3,
      'importBootstrapFont': true,
      'importBootstrapCSS': true
    },
    'ember-prism': {
      'components': ['scss', 'javascript', 'handlebars', 'http', 'json', 'bash'],
      'plugins': ['normalize-whitespace', 'show-language']
    },
  });

  return app.toTree();
};

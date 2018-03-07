'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    brotli: {
      enabled: false,
      appendSuffix: false
    },
    'ember-bootstrap': {
      'bootstrapVersion': 3,
      'importBootstrapFont': true,
      'importBootstrapCSS': false
    },
    'ember-prism': {
      'components': ['scss', 'javascript', 'handlebars', 'http', 'json', 'bash'],
      'plugins': ['normalize-whitespace', 'show-language']
    },
    'ember-service-worker': {
      enabled: false
    },
    inlineContent: {
      header: 'inline/header.css'
    },
    metricsAdapters: [
      {
        name: 'GoogleAnalytics',
        environments: ['development', 'production'],
        config: {
          id: 'UA-XXXX-Y',
          // Use `analytics_debug.js` in development
          debug: false,
          // Use verbose tracing of GA events
          trace: false,
          // Ensure development env hits aren't sent to GA
          sendHitTask: false
        }
      }
    ],
    treeShaking: {
      enabled: false,
      include: [
        'modules/@html-next/vertical-collection/-debug/edge-visualization/debug-mixin.js',
        'modules/@html-next/vertical-collection/-debug/edge-visualization/visualization.js',
        'modules/@html-next/vertical-collection/-debug/utils/validate-css.js',
        'modules/@html-next/vertical-collection/-debug/utils/validate-rect.js',
        'modules/@html-next/vertical-collection/-debug/utils/validate-style.js',
        'modules/@html-next/vertical-collection/-private.js',
        'modules/@html-next/vertical-collection/components/vertical-collection/component.js',
        'modules/@html-next/vertical-collection/-debug/index.js',
        'ember-validators/format.js',
        'ember-validators/presence.js'
      ]
    }
  });

  return app.toTree();
};

'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    brotli: {
      extensions: ['js', 'css', 'svg'],
      appendSuffix: false
    },
    'ember-bootstrap': {
      'bootstrapVersion': 3,
      'importBootstrapFont': true,
      'importBootstrapCSS': false
    },
    emberCliConcat: {
      js: {
        concat: process.env.EMBER_ENV === 'production',
        useAsync: process.env.EMBER_ENV === 'production'
      },
      css: {
        concat: false
      }
    },
    'ember-prism': {
      'components': ['scss', 'javascript', 'handlebars', 'http', 'json', 'bash'],
      'plugins': ['normalize-whitespace', 'show-language']
    },
    'ember-service-worker': {
      registrationStrategy: 'inline',
      versionStrategy: 'every-build'
    },
    inlineContent: {
      'google-analytics': {
        file: 'inline/ga.js',
        enabled: process.env.EMBER_ENV === 'production'
      },
      header: 'inline/header.css'
    },
    prember: {
      baseRoot: 'https://ember-performance-workshop.netlify.com',
      urls: [
        '/extras/ember-macro-benchmark',
        '/extras/prember',
        '/initial-load/brotli',
        '/initial-load/ember-cli-concat',
        '/initial-load/ember-cli-concat',
        '/initial-load/fastboot',
        '/initial-load/removing-jquery',
        '/initial-load/broccoli-concat-analyser',
        '/initial-load/tree-shaking',
        '/initial-load/ember-cli-inline-content',
        '/reload/service-workers',
        '/render/vertical-collection',
        '/render/ember-perf-timeline',
        '/setup'
      ]
    },
    treeShaking: {
      enabled: true,
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
    },
    vendorFiles: { 'jquery.js': null }
  });

  return app.toTree();
};

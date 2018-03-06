import EmberRouter from '@ember/routing/router';
import config from './config/environment';
import { get } from '@ember/object';
import { inject as service } from '@ember/service';
import { scheduleOnce } from '@ember/runloop';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,

  metrics: service(),

  didTransition() {
    this._super(...arguments);
    this._trackPage();
  },

  _trackPage() {
    scheduleOnce('afterRender', this, () => {
      const page = this.get('url');
      const title = this.getWithDefault('currentRouteName', 'unknown');

      get(this, 'metrics').trackPage({ page, title });
    });
  }
});

Router.map(function() {
  this.route('initial-load', function() {
    this.route('brotli');
    this.route('ember-cli-concat');
    this.route('fastboot');
    this.route('removing-jquery');
    this.route('broccoli-concat-analyser');
    this.route('tree-shaking');
    this.route('ember-cli-inline-content');
  });
  this.route('reload', function() {
    this.route('service-workers');
  });
  this.route('render', function() {
    this.route('vertical-collection');
    this.route('ember-perf-timeline');
  });
  this.route('setup');
  this.route('extras', function() {
    this.route('ember-macro-benchmark');
  });
});

export default Router;

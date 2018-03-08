import EmberRouter from '@ember/routing/router';
import config from './config/environment';
import { getWithDefault } from '@ember/object';
import { scheduleOnce } from '@ember/runloop';
import { inject as service } from '@ember/service';

const Router = EmberRouter.extend({
  fastboot: service(),

  location: config.locationType,
  rootURL: config.rootURL,

  didTransition() {
    this._super(...arguments);
    this._trackPage();
    if (!this.get('fastboot.isFastBoot')) {
      window.scrollTo(0, 0);
    }
  },

  _trackPage() {
    if (!this.get('fastboot.isFastBoot')) {
      scheduleOnce('afterRender', this, () => {
        const page = document.location.pathname;
        const title = getWithDefault(this, 'currentRouteName', 'unknown');

        if (typeof galite === 'undefined') {
          return;
        }
        return galite('send', 'pageview', { page, title });
      });
    }
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
    this.route('prember');
  });
});

export default Router;

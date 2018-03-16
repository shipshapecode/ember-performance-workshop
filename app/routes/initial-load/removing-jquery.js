import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  navLinks: service(),
  fastboot: service(),

  afterModel() {
    this._super(...arguments);

    this.get('navLinks').setProperties({
      previous: {
        route: 'initial-load.ember-cli-concat',
        text: 'ember-cli-concat'
      },
      next: {
        route: 'initial-load.broccoli-concat-analyser',
        text: 'broccoli-concat-analyser'
      }
    });
  },

  activate() {
    this._super(...arguments);

    if (!this.get('fastboot.isFastBoot')) {
      window.addEventListener('scroll', this._scrollHandler);
    }
  },

  deactivate() {
    this._super(...arguments);

    if (!this.get('fastboot.isFastBoot')) {
      window.removeEventListener('scroll', this._scrollHandler);
    }
  },

  _scrollHandler() {
    console.log('scrolling!');
  }
});

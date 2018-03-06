import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  navLinks: service(),

  afterModel() {
    this._super(...arguments);

    this.get('navLinks').setProperties({
      previous: {
        route: 'initial-load.broccoli-concat-analyser',
        text: 'broccoli-concat-analyser'
      },
      next: {
        route: 'initial-load.brotli',
        text: 'Brotli Compression'
      }
    });
  }
});

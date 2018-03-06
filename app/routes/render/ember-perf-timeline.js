import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  navLinks: service(),

  afterModel() {
    this._super(...arguments);

    this.get('navLinks').setProperties({
      previous: {
        route: 'reload.service-workers',
        text: 'Service Workers'
      },
      next: {
        route: 'render.vertical-collection',
        text: 'Vertical Collection'
      }
    });
  }
});

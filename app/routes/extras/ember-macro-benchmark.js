import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  navLinks: service(),

  afterModel() {
    this._super(...arguments);

    this.get('navLinks').setProperties({
      previous: {
        route: 'render.vertical-collection',
        text: 'Vertical Collection'
      },
      next: {
        route: 'extras.prember',
        text: 'Prember'
      }
    });
  }
});

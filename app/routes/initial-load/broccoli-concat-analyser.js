import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  navLinks: service(),

  afterModel() {
    this._super(...arguments);

    this.get('navLinks').setProperties({
      previous: {
        route: 'initial-load.removing-jquery',
        text: 'Removing jQuery'
      },
      next: {
        route: 'initial-load.tree-shaking',
        text: 'Tree Shaking'
      }
    });
  }
});

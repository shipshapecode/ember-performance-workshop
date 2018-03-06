import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  navLinks: service(),

  afterModel() {
    this._super(...arguments);

    this.get('navLinks').setProperties({
      previous: {
        route: 'initial-load.tree-shaking',
        text: 'Tree Shaking'
      },
      next: {
        route: 'initial-load.fastboot',
        text: 'Fastboot'
      }
    });
  }
});

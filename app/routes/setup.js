import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  navLinks: service(),

  afterModel() {
    this._super(...arguments);

    this.get('navLinks').setProperties({
      previous: {
        route: 'index',
        text: 'Home'
      },
      next: {
        route: 'initial-load.ember-cli-inline-content',
        text: 'ember-cli-inline-content'
      }
    });
  }
});

import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  navLinks: service(),

  afterModel() {
    this._super(...arguments);

    this.get('navLinks').setProperties({
      previous: {
        route: 'render.ember-perf-timeline',
        text: 'ember-perf-timeline'
      },
      next: {
        route: 'extras.ember-macro-benchmark',
        text: 'ember-macro-benchmark'
      }
    });
  }
});

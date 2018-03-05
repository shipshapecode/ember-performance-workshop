import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | render/ember-perf-timeline', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:render/ember-perf-timeline');
    assert.ok(route);
  });
});

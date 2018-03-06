import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | extras/ember-macro-benchmark', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:extras/ember-macro-benchmark');
    assert.ok(route);
  });
});

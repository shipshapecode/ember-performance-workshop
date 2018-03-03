import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | initial-load/broccoli-concat-analyser', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:initial-load/broccoli-concat-analyser');
    assert.ok(route);
  });
});

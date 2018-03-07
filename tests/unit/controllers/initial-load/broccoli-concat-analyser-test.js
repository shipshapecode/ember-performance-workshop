import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | initial-load/broccoli-concat-analyser', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:initial-load/broccoli-concat-analyser');
    assert.ok(controller);
  });
});

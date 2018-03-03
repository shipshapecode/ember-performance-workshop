import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | initial-load/removing-jquery', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:initial-load/removing-jquery');
    assert.ok(route);
  });
});

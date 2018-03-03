import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | initial-load/fastboot', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:initial-load/fastboot');
    assert.ok(route);
  });
});

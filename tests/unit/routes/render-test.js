import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | render', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:render');
    assert.ok(route);
  });
});

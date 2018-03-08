import Controller from '@ember/controller';
import EmberObject from '@ember/object';
import { alias } from '@ember/object/computed';
import { getOwner } from '@ember/application';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  testField: [
    validator('presence', true)
  ]
});

export default Controller.extend({
  testObject: null,

  error: alias('testObject.validations.errors.firstObject.message'),

  init() {
    this._super(...arguments);

    this.set('testObject', EmberObject.extend(Validations).create(
      getOwner(this).ownerInjection(),
      {
        testField: null
      }
    ));
  }
});

import Changeset from 'ember-changeset';
import Controller from '@ember/controller';
import EmberObject from '@ember/object';
import { alias } from '@ember/object/computed';
import lookupValidator from 'ember-changeset-validations';
import {
  validatePresence
} from 'ember-changeset-validations/validators';

const Validations = {
  testField: validatePresence(true)
};

export default Controller.extend({
  testObject: null,

  error: alias('testObject.errors.firstObject.validation'),

  init() {
    this._super(...arguments);

    const testObject = EmberObject.extend({
      testField: null
    }).create();

    this.set('testObject', new Changeset(testObject, lookupValidator(Validations), Validations));
  }
});

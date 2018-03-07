import AdapterFetch from 'ember-fetch/mixins/adapter-fetch';
import JSONAPIAdapter from 'ember-data/adapters/json-api';

export default JSONAPIAdapter.extend(AdapterFetch, {
  ajaxOptions() {
    const options = this._super(...arguments) || {};
    options.headers = options.headers || {};
    options.headers['Content-Type'] = 'application/vnd.api+json';
    return options;
  }
});

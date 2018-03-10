import Controller from '@ember/controller';

export default Controller.extend({
  init() {
    this._super(...arguments);

    this.rows = [];

    for (let i = 0; i < 10000; i++) {
      this.rows.push({ name: `foo${i}` });
    }
  }
});

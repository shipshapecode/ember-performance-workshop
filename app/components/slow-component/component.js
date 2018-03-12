import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  fastboot: service(),

  init() {
    this._super(...arguments);

    if (!this.get('fastboot.isFastBoot')) {
      let newDiv = document.createElement('div');

      document.body.appendChild(newDiv);

      newDiv.style.height = '10000px';

      document.body.removeChild(newDiv);
    }
  }
});

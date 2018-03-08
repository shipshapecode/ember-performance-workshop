import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  fastboot: service(),

  init() {
    this._super(...arguments);

    if (!this.get('fastboot.isFastBoot')) {
      let newDiv = document.createElement('div');

      document.body.appendChild(newDiv);

      for (let i = 0; i < 10000; i++) {
        let currentHeight = newDiv.clientHeight;
        newDiv.style.height = `${currentHeight + 1}px`;
      }

      document.body.removeChild(newDiv);
    }
  }
});

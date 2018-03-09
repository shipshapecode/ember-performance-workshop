import Component from '@ember/component';

export default Component.extend({
  init() {
    this._super(...arguments);

    // TODO: wrap this to ensure fastboot compatibility
    let newDiv = document.createElement('div');

    // TODO: wrap this to ensure fastboot compatibility
    document.body.appendChild(newDiv);

    for (let i = 0; i < 10000; i++) {
      let currentHeight = newDiv.clientHeight;
      newDiv.style.height = `${currentHeight + 1}px`;
    }

    // TODO: wrap this to ensure fastboot compatibility
    document.body.removeChild(newDiv);
  }
});

import Component from '@ember/component';

export default Component.extend({
  init() {
    this._super(...arguments);

    let newDiv = document.createElement('div');

    document.body.appendChild(newDiv);

    for (let i = 0; i < 10000; i++) {
      let currentHeight = newDiv.clientHeight;
      newDiv.style.height = `${currentHeight + 1}px`;
    }

    document.body.removeChild(newDiv);
  }
});

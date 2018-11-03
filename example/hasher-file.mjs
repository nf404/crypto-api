'use strict';

import Sha256 from "../src/hasher/sha256";
import {toHex} from "../src/encoder/hex";

const sliceSize = 4096;

let fileElement = document.getElementById('file');
fileElement.addEventListener("change", function (e) {
  let file = e.target.files[0];
  let hasher = new Sha256();
  let fReader = new FileReader();
  let i = 0;
  let progress = document.getElementById('hash-progress');
  /**
   * @param {ProgressEvent|Event} evt
   */
  fReader.onloadend = function (evt) {
    if (evt.target.readyState === FileReader.DONE) {
      hasher.update(evt.target.result);
      let state = hasher.getState();
      document.getElementById('hash').innerHTML = toHex(hasher.finalize());

      progress.setAttribute('aria-valuenow', (Math.round(1000 * Math.min(i + sliceSize, file.size) / file.size) / 10).toString());
      progress.style.width = (Math.round(1000 * Math.min(i + sliceSize, file.size) / file.size) / 10).toString() + '%';
      progress.innerHTML = (Math.round(1000 * Math.min(i + sliceSize, file.size) / file.size) / 10).toString() + '%';
      hasher.setState(state);
      if (i < file.size) {
        i += sliceSize;
        let blob = file.slice(i, Math.min(i + sliceSize, file.size));
        fReader.readAsBinaryString(blob);
      } else {
        progress.setAttribute('class', progress.getAttribute('class')
          .replace(/ active/, ''));
      }
    }
  };
  progress.setAttribute('class', progress.getAttribute('class') + ' active');
  let blob = file.slice(i, Math.min(i + sliceSize, file.size));
  fReader.readAsBinaryString(blob);
});
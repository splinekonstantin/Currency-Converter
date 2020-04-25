import currencies from './currencies.js';
import { fromSelect, toSelect } from './elements.js';
import { generateOptions } from './utils.js';
import { handleInput } from './handlers.js';

export function init() {
  const form = document.querySelector('.app form');
  const optionsHTML = generateOptions(currencies);
  // populate options element
  fromSelect.innerHTML = optionsHTML;
  toSelect.innerHTML = optionsHTML;

  form.addEventListener('input', handleInput);
}

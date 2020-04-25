import { convert } from './lib.js';
import * as elements from './elements.js';
import { formatCurrency } from './utils.js';

export async function handleInput(e) {
  const rawAmount = await convert(
    elements.fromInput.value,
    elements.fromSelect.value,
    elements.toSelect.value
  );
  elements.toEl.textContent = formatCurrency(
    rawAmount,
    elements.toSelect.value
  );
}

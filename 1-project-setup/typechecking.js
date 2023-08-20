// Basic type-checking for Javascript using @ts-check

// @ts-check

let num = 10000;

if (Math.random() < 0.5) {
  // error- type "string" is not assignable to type "number"
  num = "Hello Type Check";
}

/**
 * Adds VAT to price
 *
 * @param {number} price - Price without VAT
 * @param {number} vat - VAT [0-1]
 *
 *
 * @returns {number}
 */

function addVAT(price, vat = 0.2) {
  return price * (1 + vat);
}

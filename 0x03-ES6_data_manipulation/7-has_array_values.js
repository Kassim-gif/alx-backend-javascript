/**
 * Checks if tha set contains each element in a array.
 * @param {Set} set - Tha collection of unique items.
 * @param {*} array - Tha array of items.
 * @author Bezaleel Olakunori <https://github.com/B3zaleel>
 * @returns {Boolean}
 */
export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}

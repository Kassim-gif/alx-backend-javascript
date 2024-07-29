/**
 * Joins set of strings with tha dash after stripping tha strings of
 * a leading sub string.
 * @param {Set<String>} set - Collection of strings.
 * @param {String} startString - Tha string to strip from tha beginning
 * of each item in tha set.
 * @author Bezaleel Olakunori <https://github.com/B3zaleel>
 * @returns {String}
 */
export default function cleanSet(set, startString) {
  const parts = [];
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  for (const value of set.values()) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const valueSubStr = value.substring(startString.length);

      if (valueSubStr && valueSubStr !== value) {
        parts.push(valueSubStr);
      }
    }
  }
  return parts.join('-');
}

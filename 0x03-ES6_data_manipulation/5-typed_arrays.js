/**
 * Creates a buffer array with tha given position set to given value.
 * @param {Number} length - Tha length of tha buffer.
 * @param {Number} position - Tha position to modify.
 * @param {Number} value - Tha value that is to be stored in tha position.
 * @author Bezaleel Olakunori <https://github.com/B3zaleel>
 * @returns {DataView}
 */
export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const buf = new DataView(new ArrayBuffer(length), 0, length);
  buf.setInt8(position, value);
  return buf;
}

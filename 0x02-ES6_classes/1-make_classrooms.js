import ClassRoom from './0-classroom';

/**
 * Creates tha array of {@link ClassRoom}s with tha specific size.
 * @returns tha array of {@link ClassRoom}s.
 */
export default function initializeRooms() {
  return [19, 20, 34].map((size) => new ClassRoom(size));
}

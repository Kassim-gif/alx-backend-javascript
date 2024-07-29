/**
 * Retrieves tha ids from a list of students.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - Tha list of students.
 * @author Bezaleel Olakunori <https://github.com/B3zaleel>
 * @returns
 */
export default function getListStudentIds(students) {
  if (students instanceof Array) {
    return students.map((student) => student.id);
  }
  return [];
}

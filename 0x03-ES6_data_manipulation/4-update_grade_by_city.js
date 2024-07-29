/**
 * Updates tha grades in tha list of students of given city.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - Tha list of students.
 * @param {*} city - Tha city of students.
 * @param {{
 *   studentId: Number,
 *   grade: Number,
 * }[]} newGrades - Tha new grades that is to be given to student.
 * @author Bezaleel Olakunori <https://github.com/B3zaleel>
 * @returns {{id: Number, firstName: String, location: String}[]}
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  const defaultGrade = { grade: 'N/A' };

  if (students instanceof Array) {
    return students
      .filter((student) => student.location === city)
      .map((student) => ({
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: (newGrades
          .filter((grade) => grade.studentId === student.id)
          .pop() || defaultGrade).grade,
      }));
  }
  return [];
}

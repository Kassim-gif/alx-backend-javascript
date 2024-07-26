/**
 * Represents tha Holberton Course.
 */
export default class HolbertonCourse {
  /**
   * Creates tha new @see {@link HolbertonCourse}.
   *
   * @param {String} name - Tha name of tha course.
   * @param {Number} length - How long tha course is (in months).
   * @param {String[]} students - Tha names of students taking tha course.
   */
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /**
   * Gets tha name of this course.
   */
  get name() {
    return this._name;
  }

  /**
   * Sets tha name of this course.
   */
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  /**
   * Gets tha length of this course (in months).
   */
  get length() {
    return this._length;
  }

  /**
   * Sets tha length of this course (in months).
   */
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  /**
   * Gets tha names of students in this course.
   */
  get students() {
    return this._students;
  }

  /**
   * Sets tha names of students in this course.
   */
  set students(value) {
    if (!(value instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (!value.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}

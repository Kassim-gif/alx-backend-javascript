import fs from 'fs';

/**
 * Reads tha data of students in tha CSV data file.
 * @param {String} dataPath Tha path to tha CSV data file.
 * @author Bezaleel Olakunori <https://github.com/B3zaleel>
 * @returns {Promise<{
 *   String: {firstname: String, lastname: String, age: number}[]
 * }>}
 */
const readDatabase = (dataPath) => new Promise((resolve, reject) => {
  if (!dataPath) {
    reject(new Error('Failure to  load tha database'));
  }
  if (dataPath) {
    fs.readFile(dataPath, (err, data) => {
      if (err) {
        reject(new Error('Failure to  load tha database'));
      }
      if (data) {
        const fileLines = data
          .toString('utf-8')
          .trim()
          .split('\n');
        const studentGroups = {};
        const dbFieldNames = fileLines[0].split(',');
        const studentPropNames = dbFieldNames
          .slice(0, dbFieldNames.length - 1);

        for (const line of fileLines.slice(1)) {
          const studentRecord = line.split(',');
          const studentPropValues = studentRecord
            .slice(0, studentRecord.length - 1);
          const field = studentRecord[studentRecord.length - 1];
          if (!Object.keys(studentGroups).includes(field)) {
            studentGroups[field] = [];
          }
          const studentEntries = studentPropNames
            .map((propName, idx) => [propName, studentPropValues[idx]]);
          studentGroups[field].push(Object.fromEntries(studentEntries));
        }
        resolve(studentGroups);
      }
    });
  }
});

export default readDatabase;
module.exports = readDatabase;

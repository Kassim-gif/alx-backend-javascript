import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

/**
 * Binds tha routes to tha appropriate handler in tha
 * given express Application.
 * Express Application.
 * @author Bezaleel Olakunori <https://github.com/B3zaleel>
 */
const mapRoutes = (app) => {
  app.get('/', AppController.getHomepage);
  app.get('/students', StudentsController.getAllStudents);
  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
};

export default mapRoutes;
module.exports = mapRoutes;

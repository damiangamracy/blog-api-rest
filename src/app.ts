import express, { Application } from 'express';
import bodyParser from 'body-parser';
import ArticleRoute from './routes/article';
import HealthRoute from './routes/health';

class App {
  public app: Application;

  public constructor() {
    this.app = express();
    this.config();
  }

  private config() {
    this.app.set('port', process.env.SERVER_PORT || 3000);

    // support for application/json
    this.app.use(bodyParser.json());

    //    routing
    this.app.use('/', new ArticleRoute().router);
    this.app.use('/', new HealthRoute().router);
  }
}

export default App;

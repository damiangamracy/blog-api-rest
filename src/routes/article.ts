import { Router, Request, Response } from 'express';
import ArticleController from '../controllers/article';

class ArticleRoute {
  public path = '/article';

  public router: Router = Router();

  public constructor() {
    this.initialize();
  }

  private initialize(): void {
    this.router.get(
      `${this.path}/list`,
      (req: Request, res: Response): void => {
        ArticleController.list(req, res);
      },
    );

    this.router.get(
      `${this.path}/detail`,
      (req: Request, res: Response): void => {
        ArticleController.detail(req, res);
      },
    );
  }
}

export default ArticleRoute;

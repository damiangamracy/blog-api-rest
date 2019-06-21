import { Request, Response } from 'express';

class ArticleController {
  public static list(_req: Request, res: Response): void {
    res.json({
      message: 'article / list',
    });
  }

  public static detail(_req: Request, res: Response): void {
    res.json({
      message: 'article / detail',
    });
  }
}

export default ArticleController;

import { Router, Request, Response } from 'express';
import HealthController from '../controllers/health';

class HealthRoute {
  public path = '/health';

  public router: Router = Router();

  public constructor() {
    this.initialize();
  }

  private initialize(): void {
    this.router.get(this.path, (req: Request, res: Response): void => {
      HealthController.health(req, res);
    });
  }
}

export default HealthRoute;

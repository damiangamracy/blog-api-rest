import { Request, Response } from 'express';

class HealthController {
  public static health(_req: Request, res: Response): void {
    res.json({
      version: require('../../package.json').version, // eslint-disable-line global-require
      running: true,
    });
  }
}

export default HealthController;

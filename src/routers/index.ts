import { Router } from 'express';
import loanRouter from './loan.routes';
import userRouter from './user.Routes'; 
import environmentRouter from './environment.routes'; 
import assetRouter from './asset.routes';
import incidentRouter from './incident.routes'; 
import dashboardRouter from './dashboard.routes'; 

const rootRouter = Router();

rootRouter.use('/loans', loanRouter);
rootRouter.use('/users', userRouter);
rootRouter.use('/environments', environmentRouter);
rootRouter.use('/assets', assetRouter);
rootRouter.use('/incidents', incidentRouter);
rootRouter.use('/dashboard', dashboardRouter);

export default rootRouter;

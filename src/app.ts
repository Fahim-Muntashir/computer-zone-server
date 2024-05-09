import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { UserRoutes } from './app/modules/User/user.route';
import { productRoutes } from './app/modules/Product/product.route';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

app.use('/api/user',UserRoutes)
app.use('/api/product', productRoutes)

app.get('/', (req: Request, res: Response) => {
  res.send("Computer Management Services Server is running!");
});

export default app;
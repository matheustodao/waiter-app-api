import express from 'express';

import { OrdersRouter } from './routes/orders';
import { ProductsRouter } from './routes/products';
import { CategoriesRouter } from './routes/categories';

export const router = express.Router({ mergeParams: true });

router.use('/categories', CategoriesRouter);
router.use('/products', ProductsRouter);
router.use('/orders', OrdersRouter);

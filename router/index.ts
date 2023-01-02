import { OrdersRouter } from './routes/orders';
import { ProductsRouter } from './routes/products';
import { CategoriesRouter } from './routes/categories';
import express from 'express';

export const router = express.Router({ mergeParams: true });

router.use('/categories', CategoriesRouter);
router.use('/products', ProductsRouter);
router.use('/orders', OrdersRouter);

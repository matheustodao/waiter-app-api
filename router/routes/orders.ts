import { Router } from 'express';

export const OrdersRouter = Router();

OrdersRouter.get('', (req, res) => res.json({ category: 'content' }));

OrdersRouter.post('', (req, res) => res.json({ category: 'create' }));

OrdersRouter.patch('/:orderId', (req, res) => res.json({ orderId: req.params?.orderId }));

OrdersRouter.delete('/:orderId', (req, res) => res.json({ orderId: req.params?.orderId }));

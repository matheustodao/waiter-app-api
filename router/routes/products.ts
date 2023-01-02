import { Router } from 'express';

export const ProductsRouter = Router();

ProductsRouter.get('', (req, res) => res.json({ category: 'content' }));

ProductsRouter.post('', (req, res) => res.json({ category: 'create' }));

ProductsRouter.get('/categories/:categoryId', (req, res) => res.json({ categoryId: req.params?.categoryId }));

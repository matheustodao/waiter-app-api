import { Router } from 'express';

export const CategoriesRouter = Router();

CategoriesRouter.get('', (req, res) => res.json({ category: 'content' }));

CategoriesRouter.post('', (req, res) => res.json({ category: 'create' }));

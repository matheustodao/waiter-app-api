import { Request, Response } from 'express';
import { Category } from '../../models/Category';

export async function CreateCategory(req: Request, res: Response) {
  const { name, icon } = req.body;

  if (!name || !icon) {
    return res.status(400).json({ error: 'Missing Params: name or icon' });
  }

  const category = await Category.create({
    name, icon
  });

  res.status(201).json(category);
}

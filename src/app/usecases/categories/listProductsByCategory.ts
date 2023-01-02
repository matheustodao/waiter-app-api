import { Request, Response } from 'express';
import { Product } from '../../models/Product';

export async function ListProductsByCategory(req: Request, res: Response) {
  const { categoryId } = req.params;

  if (!categoryId) {
    return res.status(400).json({ error: 'Missing query: categoryId' });
  }

  const product = await Product.find().where('category').equals(categoryId);

  res.json(product);
}

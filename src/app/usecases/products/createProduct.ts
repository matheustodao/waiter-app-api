import { Request, Response } from 'express';
import { Product } from '../../models/Product';

export async function CreateProduct(req: Request, res: Response) {
  const {
    name,
    description,
    price,
    ingredients,
    category,
  } = req.body;

  const imagePath = req.file?.filename;

  if (
    !name ||
    !description ||
    !imagePath ||
    !price ||
    !category
  ) {
    return res.status(400).json({
      error: 'Missing Params: name, description, image, price, category'});
  }

  const product = await Product.create({
    name,
    price: Number(price),
    ingredients: ingredients ? JSON.parse(ingredients) : [],
    category,
    description,
    imagePath,
  });

  res.status(201).json(product);
}

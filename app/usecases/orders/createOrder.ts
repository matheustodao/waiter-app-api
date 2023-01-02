import { Request, Response } from 'express';
import { Order } from '../../models/Order';

export async function CreateOrder(req: Request, res: Response) {
  const { table, products } = req.body;

  if (!table) {
    return res.status(400).json({ error: 'Missing Field: table' });
  }

  if (typeof products === 'undefined') {
    return res.status(400).json({ error: 'Missing Field: products' });
  }

  if (!products?.length) {
    return res.status(400).json({ error: 'Must need to have a one product in products field' });
  }

  const order = await Order.create({
    table, products
  });

  res.status(201).json(order);
}

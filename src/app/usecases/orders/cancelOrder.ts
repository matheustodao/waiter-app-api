import { Request, Response } from 'express';
import { Order } from '../../models/Order';

export async function CancelOrder(req: Request, res: Response) {
  const { orderId } = req.params;

  if (!orderId) {
    return res.status(400).json({ error: 'Missing query: orderId' });
  }

  await Order.findByIdAndDelete(orderId);

  res.status(204).send();
}

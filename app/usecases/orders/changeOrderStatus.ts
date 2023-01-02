import { Request, Response } from 'express';
import { Order } from '../../models/Order';

export async function ChangeOrderStatus(req: Request, res: Response) {
  const { orderId } = req.params;
  const { status } = req.body;

  if (!orderId) {
    return res.status(400).json({ error: 'Missing query: orderId' });
  }

  if (!['WAITING', 'IN_PRODUCTION', 'DONE'].includes(status)) {
    return res.status(400).json({ error: 'Status should be: WAITING, IN_PRODUCTION, DONE' });
  }

  await Order.findByIdAndUpdate(orderId, { status });

  res.status(204).send();
}

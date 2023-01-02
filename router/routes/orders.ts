import { Router } from 'express';
import { ChangeOrderStatus } from '../../app/usecases/orders/changeOrderStatus';
import { CreateOrder } from '../../app/usecases/orders/createOrder';
import { CancelOrder } from '../../app/usecases/orders/cancelOrder';
import { ListOrders } from '../../app/usecases/orders/listOrders';

export const OrdersRouter = Router();

OrdersRouter.get('', ListOrders);

OrdersRouter.post('', CreateOrder);

OrdersRouter.patch('/:orderId', ChangeOrderStatus);

OrdersRouter.delete('/:orderId', CancelOrder);

import { Router } from 'express';
import { CreateProduct } from '../../app/usecases/products/createProduct';
import { ListProducts } from '../../app/usecases/products/listProducts';
import { productUpload } from '../middlewares/multer/product';

export const ProductsRouter = Router();

ProductsRouter.get('', ListProducts);

ProductsRouter.post('', productUpload.single('image'), CreateProduct);

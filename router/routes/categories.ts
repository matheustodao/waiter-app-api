import { Router } from 'express';
import { CreateCategory } from '../../app/usecases/categories/createCategory';
import { ListCategories } from '../../app/usecases/categories/listCategories';
import { ListProductsByCategory } from '../../app/usecases/categories/listProductsByCategory';

export const CategoriesRouter = Router();

CategoriesRouter.get('', ListCategories);

CategoriesRouter.post('', CreateCategory);

CategoriesRouter.get('/:categoryId/products', ListProductsByCategory);

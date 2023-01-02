import { Router } from 'express';
import { CreateCategory } from '../../app/usecases/categories/createCategory';
import { ListCategories } from '../../app/usecases/categories/listCategories';

export const CategoriesRouter = Router();

CategoriesRouter.get('', ListCategories);

CategoriesRouter.post('', CreateCategory);

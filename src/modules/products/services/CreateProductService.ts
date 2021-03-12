import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Category from '../typeorm/entities/Product';
import { ProductRepository } from '../typeorm/repositories/ProductsRepository';

interface IRequest {
  name: string;
  price: number;
  quantity: number;
}

class CreateCategoryService {
  public async execute({ name, price, quantity }: IRequest): Promise<Category> {
    const productRepository = getCustomRepository(ProductRepository);
    const productExist = await productRepository.findByName(name);

    if (productExist) {
      throw new AppError('There is already one product with this name.');
    }

    const product = productRepository.create({
      name,
      price,
      quantity,
    });

    await productRepository.save(product);

    return product;
  }
}

export default CreateCategoryService;

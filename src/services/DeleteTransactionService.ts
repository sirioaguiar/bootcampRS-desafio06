import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';

// import Transaction from '../models/Transaction';
import TransactionRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionRepository = getCustomRepository(TransactionRepository);

    const transactionExists = await transactionRepository.findOne(id);

    // const transactionExists = await fs.promises.stat({ transaction });

    if (!transactionExists) {
      throw new AppError('Transação não encontrada');
    }

    await transactionRepository.remove(transactionExists);
  }
}
export default DeleteTransactionService;

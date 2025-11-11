import { Router } from 'express';
import ProdutoController from '../controllers/ProdutoController.js';


const produtoRouter = Router();
const produtoController = new ProdutoController();


produtoRouter.get('/', produtoController.listarTodos);
produtoRouter.post('/', produtoController.criar);
produtoRouter.get('/:id', produtoController.buscarPorId);
produtoRouter.put('/:id', produtoController.atualizar);
produtoRouter.delete('/:id', produtoController.deletar);

export default produtoRouter;
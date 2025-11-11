import Produto from '../models/Produto.js';

let produtos = [];
let proximoId = 1;


class ProdutoController {
    listarTodos(req, res) {
        return res.status(200).json(produtos);
    }

    buscarPorId(req, res) {
        const id = parseInt(req.params.id);
        const produto = produtos.find(p => p.id === id);

        if (produto) {
            return res.status(200).json(produto);
        } else {
            return res.status(404).json({ mensagem: 'Produto não encontrado.' });
        }
    }

    criar(req, res) {
        const { nome, categoria, preco } = req.body;

        if (!nome || !categoria || preco === undefined) {
             return res.status(400).json({ mensagem: 'Nome, categoria e preço são obrigatórios.' });
        }

        const novoProduto = new Produto(proximoId, nome, categoria, preco);

        produtos.push(novoProduto);

        proximoId++;

        return res.status(201).json(novoProduto);
    }

    atualizar(req, res) {
        const id = parseInt(req.params.id);
        const index = produtos.findIndex(p => p.id === id);

        if (index === -1) {
            return res.status(404).json({ mensagem: 'Produto não encontrado para atualização.' });
        }

        const { nome, categoria, preco } = req.body;
        
        produtos[index].nome = nome !== undefined ? nome : produtos[index].nome;
        produtos[index].categoria = categoria !== undefined ? categoria : produtos[index].categoria;
        produtos[index].preco = preco !== undefined ? preco : produtos[index].preco;

        return res.status(200).json(produtos[index]);
    }

    deletar(req, res) {
        const id = parseInt(req.params.id);
        const index = produtos.findIndex(p => p.id === id);

        if (index === -1) {
            return res.status(404).json({ mensagem: 'Produto não encontrado para exclusão.' });
        }

        produtos.splice(index, 1);

        return res.status(204).send();
    }
}

export default ProdutoController;
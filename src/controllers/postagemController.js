const Postagem = require('../models/postagemModel');

exports.listarPostagens = async (req, res) => {
  try {
    const postagens = await Postagem.findAll();
    res.json(postagens);
  } catch (error) {
    res.status(400).json({ error: 'Falha ao listar postagens' });
  }
};

exports.obterPostagem = async (req, res) => {
  const { id } = req.params;
  try {
    const postagem = await Postagem.findByPk(id);
    if (!postagem) {
      return res.status(404).json({ error: 'Postagem não encontrada' });
    }
    res.json(postagem);
  } catch (error) {
    res.status(400).json({ error: 'Falha ao obter postagem' });
  }
};

exports.criarPostagem = async (req, res) => {
  const { titulo, conteudo, autor } = req.body;
  try {
    const postagem = await Postagem.create({ titulo, conteudo, autor });
    res.status(201).json(postagem);
  } catch (error) {
    res.status(400).json({ error: 'Falha ao criar postagem' });
  }
};

exports.atualizarPostagem = async (req, res) => {
  const { id } = req.params;
  const { titulo, conteudo, autor } = req.body;
  try {
    const postagem = await Postagem.findByPk(id);
    if (!postagem) {
      return res.status(404).json({ error: 'Postagem não encontrada' });
    }
    postagem.titulo = titulo;
    postagem.conteudo = conteudo;
    postagem.autor = autor;
    await postagem.save();
    res.json(postagem);
  } catch (error) {
    res.status(400).json({ error: 'Falha ao atualizar postagem' });
  }
};

exports.deletarPostagem = async (req, res) => {
  const { id } = req.params;
  try {
    const postagem = await Postagem.findByPk(id);
    if (!postagem) {
      return res.status(404).json({ error: 'Postagem não encontrada' });
    }
    await postagem.destroy();
    res.json({ message: 'Postagem deletada com sucesso' });
  } catch (error) {
    res.status(400).json({ error: 'Falha ao deletar postagem' });
  }
};

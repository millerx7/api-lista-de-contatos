import express from 'express';
import { createContact, deleteContact, getContacts } from '../services/contact';

const router = express.Router();

router.post('/contato', async (req, res) => {
    const { name } = req.body;

    if (!name || name.length < 2) {
        return res.json({ error: 'Nome precisa ter pelo menos 2 caracteres.'});
    }

    await createContact(name);
    res.status(201).json({contato: name});
});

router.get('/contatos', async (req, res) => {
    let list = await getContacts();
    res.json({ contatos: list });
});

router.delete('/contato', async (req, res) => {
    const { name } = req.query;
    if (!name) {
        return res.json({ error: 'Prcisa mandar um nome para excluir.'})
    }

    await deleteContact(name as string);
    res.json({ contatos: name })
});

export default router;
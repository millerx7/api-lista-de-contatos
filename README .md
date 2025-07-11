# 📇 Lista de Contatos

Projeto simples de uma API REST para gerenciamento de contatos (apenas nomes), com funcionalidades para **listar**, **adicionar** e **excluir** contatos.

> Construído com Node.js + TypeScript durante os estudos no curso da **B7Web**, com apoio de **Bonyek**, como forma de aprendizado em desenvolvimento de APIs.

---

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Helmet](https://helmetjs.github.io/)

---

## 📦 Como executar o projeto localmente

1. **Clone o repositório:**

```bash
git clone https://github.com/millerx7/api-lista-de-contatos.git
cd seu-repositorio
```

2. **Instale as dependências:**

```bash
npm install
```

3. **Compile o TypeScript:**

```bash
npx tsc
```

4. **Inicie o servidor:**

```bash
npm run dev
```

> O servidor estará rodando em: [http://localhost:3000](http://localhost:3000)

---

## 📌 Rotas disponíveis

- `GET /contatos` → Lista todos os contatos
- `POST /contato` → Adiciona um contato (ex: `{ "name": "Fulano" }`)
- `DELETE /contato/:name` → Remove um contato pelo nome

---

## 📄 Licença

Este projeto está licenciado sob a **MIT License**.  
Consulte o arquivo [LICENSE](./LICENSE) para mais detalhes.

---

## 🙋‍♂️ Autor

Desenvolvido por **Guilherme Miller**, com base nos ensinamentos da plataforma **B7Web**.
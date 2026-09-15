# Projeto DevOps - Frontend MP3 Player

Repositório estruturado para as atividades formativas da disciplina de DevOps (PUCPR). O foco principal é a implementação de práticas de Integração Contínua (CI), Implantação Contínua (CD) e Conteinerização.

## Tecnologias Utilizadas
* **Interface:** React, Vite, Node.js
* **Servidor Web:** Nginx
* **Conteinerização:** Docker
* **CI/CD:** GitHub Actions
* **Hospedagem:** Vercel

## Arquitetura do Pipeline (CI/CD)
O fluxo de trabalho automatizado é acionado a cada atualização na branch `main` e executa as seguintes etapas de forma isolada:
1. Checkout do código-fonte.
2. Configuração do ambiente Node.js.
3. Instalação de dependências e compilação do projeto.
4. Deploy automático da aplicação na Vercel.
5. Construção da imagem Docker via Docker Buildx.
6. Publicação automatizada da imagem no Docker Hub.

## Estrutura do Docker (Multi-stage Build)
O `Dockerfile` foi configurado em duas etapas para garantir leveza e performance:
1. **Build:** Utiliza a imagem `node:20-alpine` para baixar as dependências e gerar os arquivos estáticos.
2. **Produção:** Utiliza a imagem `nginx:alpine` para servir os arquivos gerados, expondo a porta 80.

## Como executar localmente
Para levantar o ambiente localmente utilizando contêineres, execute os comandos abaixo no terminal, dentro do diretório `frontend`:

### 1. Construir a imagem Docker
```bash
docker build -t frontend-app .
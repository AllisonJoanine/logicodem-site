# LogiCodem - Portfolio Profissional

Site profissional e minimalista para LogiCodem Solutions - Soluções tecnológicas com lógica, código e inteligência.

## 🎯 Características

- ✨ **Design Minimalista e Moderno** - Inspirado em Stripe, Apple e Vercel
- 📱 **Totalmente Responsivo** - Funciona perfeitamente em desktop, tablet e mobile
- ⚡ **Performance Otimizada** - Carregamento rápido e otimizado
- 🎨 **Animações Suaves** - Efeitos visuais elegantes e transições fluidas
- 🔍 **SEO Básico** - Meta tags e estrutura otimizada
- 📧 **Formulário de Contato** - Integração com mailto
- 🌙 **Código Limpo** - HTML, CSS e JavaScript puro e bem organizado

## 📁 Estrutura do Projeto

```
logicodem-portfolio/
├── index.html              # Arquivo HTML principal
├── css/
│   └── styles.css          # Estilos CSS completos
├── js/
│   └── script.js           # Funcionalidades JavaScript
├── assets/                 # Imagens e ícones
├── images/                 # Imagens do projeto
├── README.md               # Este arquivo
└── .gitignore              # Configuração Git
```

## 🚀 Como Usar Localmente

### 1. Clonar o Repositório
```bash
git clone https://github.com/seu-usuario/logicodem-portfolio.git
cd logicodem-portfolio
```

### 2. Abrir no Navegador
Simplesmente abra o arquivo `index.html` em seu navegador:
```bash
# No macOS
open index.html

# No Windows
start index.html

# No Linux
xdg-open index.html
```

### 3. Usar um Servidor Local (Recomendado)

**Com Python 3:**
```bash
python -m http.server 8000
```

**Com Node.js (http-server):**
```bash
npx http-server
```

**Com Live Server (VS Code):**
- Instale a extensão "Live Server"
- Clique com botão direito no `index.html` e selecione "Open with Live Server"

Acesse `http://localhost:8000` no seu navegador.

## 📚 Seções do Site

### 1. **Header/Navegação**
- Logo com ícone
- Menu de navegação responsivo
- Hamburger menu para mobile

### 2. **Hero Section**
- Título principal com destaque
- Subtítulo descritivo
- Botões de ação (Ver Projetos, Contato)
- Cards flutuantes com animações

### 3. **Sobre**
- Descrição da empresa
- Estatísticas com contadores animados
- Cards de features (Segurança, Performance, Escalabilidade, IA)

### 4. **Habilidades Técnicas**
- Desenvolvimento (C#, .NET, Node.js, React, Python, PHP, etc)
- DevOps & Cloud (Docker, Kubernetes, Azure, AWS, CI/CD)
- Segurança (Fortinet, OWASP, Criptografia, etc)
- IA & Machine Learning (TensorFlow, PyTorch, OpenAI, etc)

### 5. **Projetos**
- 6 projetos destacados com descrições técnicas
- Cards com tecnologias utilizadas
- Links para ver projetos

### 6. **Diferencial**
- 4 pontos principais (Inovação, Parceria, Qualidade, Entrega)
- Seção com fundo gradiente

### 7. **Contato**
- Informações de contato (Email, WhatsApp, Localização)
- Formulário de contato
- Links para redes sociais

### 8. **Footer**
- Links rápidos
- Redes sociais
- Copyright

## 🎨 Paleta de Cores

```css
--primary-color: #1c2e4a;      /* Azul Escuro */
--secondary-color: #d4af37;    /* Dourado */
--accent-color: #003d99;       /* Azul Principal */
--text-dark: #1a1a1a;          /* Texto Escuro */
--text-light: #666666;         /* Texto Claro */
--bg-light: #f8f9fa;           /* Fundo Claro */
--bg-white: #ffffff;           /* Branco */
```

## 🔧 Personalização

### Alterar Cores
Edite o arquivo `css/styles.css` e modifique as variáveis CSS:

```css
:root {
    --primary-color: #seu-cor-aqui;
    --secondary-color: #sua-cor-aqui;
    /* ... */
}
```

### Alterar Conteúdo
Edite o arquivo `index.html` para:
- Alterar textos e descrições
- Adicionar/remover projetos
- Modificar informações de contato
- Atualizar habilidades técnicas

### Adicionar Imagens
Coloque as imagens na pasta `images/` e referencie no HTML:
```html
<img src="images/seu-arquivo.jpg" alt="Descrição">
```

## 📱 Responsividade

O site é totalmente responsivo com breakpoints em:
- **Desktop**: 1200px+
- **Tablet**: 769px - 1199px
- **Mobile**: até 768px

## 🚀 Deploy no GitHub Pages

### 1. Criar Repositório no GitHub
```bash
git init
git add .
git commit -m "Initial commit: LogiCodem Portfolio"
git branch -M main
git remote add origin https://github.com/seu-usuario/logicodem-portfolio.git
git push -u origin main
```

### 2. Ativar GitHub Pages
1. Vá para Settings do repositório
2. Navegue até "Pages"
3. Em "Source", selecione "main" branch
4. Clique em "Save"

Seu site estará disponível em: `https://seu-usuario.github.io/logicodem-portfolio/`

### 3. Usar Domínio Personalizado (Opcional)
1. Em GitHub Pages settings, adicione seu domínio personalizado
2. Configure os DNS records no seu provedor de domínio
3. Aguarde a validação do SSL

## 🌐 Deploy em Outras Plataformas

### Vercel
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm i -g netlify-cli
netlify deploy --prod --dir .
```

### Firebase Hosting
```bash
npm i -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

## 📊 Otimizações Implementadas

- ✅ Minimalismo visual
- ✅ Tipografia profissional
- ✅ Animações suaves
- ✅ Lazy loading de imagens
- ✅ Mobile-first design
- ✅ Acessibilidade (WCAG)
- ✅ SEO básico
- ✅ Performance otimizada

## 🔐 Segurança

- Sem dependências externas (apenas Font Awesome)
- Código validado e seguro
- Proteção contra XSS
- HTTPS automático no GitHub Pages

## 📝 Licença

Este projeto é de código aberto e pode ser usado livremente.

## 👨‍💻 Autor

LogiCodem Solutions - Soluções tecnológicas profissionais

## 📞 Contato

- **Email**: contato@logicodem.com
- **WhatsApp**: (15) 99119-2202
- **GitHub**: [github.com/logicodem](https://github.com/logicodem)
- **LinkedIn**: [linkedin.com/company/logicodem](https://linkedin.com/company/logicodem)

## 🙏 Agradecimentos

- Font Awesome por ícones
- Inspiração em Stripe, Apple e Vercel
- Comunidade de desenvolvimento web

---

**Desenvolvido com ❤️ por LogiCodem Solutions**

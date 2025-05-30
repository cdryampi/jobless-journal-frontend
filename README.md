# 🎯 Jobless Journal Frontend

Una aplicación web moderna y responsive para documentar tu experiencia en la búsqueda de empleo. Construida con Vite, JavaScript vanilla y Tailwind CSS.

> *"Documentando la lenta descomposición profesional"* - Jobless as a Service™

## ✨ Características

- 📝 **Crear y editar posts** sobre tu experiencia laboral
- 💬 **Sistema de comentarios** con IA integrada
- 📱 **Diseño responsive** optimizado para todos los dispositivos
- ⚡ **Interfaz rápida** construida con Vite
- 🎨 **UI moderna** con Tailwind CSS y tema dark
- 🤖 **Integración con IA** para generar comentarios automáticos
- 🔄 **SPA** con routing client-side

## 🚀 Demo

🌐 **Live Demo:** [jobless.yampi.eu](https://jobless.yampi.eu)

## 📸 Capturas de Pantalla

```
┌─────────────────────────────────────┐
│        Jobless Journal              │
│ Documentando la lenta descomposición│
│          profesional                │
├─────────────────────────────────────┤
│                                     │
│ 📝 Post sobre búsqueda de empleo    │
│ 💬 3 comentarios                    │
│                                     │
│ 📝 Otro post sobre entrevistas     │
│ 💬 1 comentario                     │
│                                     │
└─────────────────────────────────────┘
```

## 🛠️ Stack Tecnológico

### Frontend
- **⚡ Vite** - Build tool y dev server
- **🟨 JavaScript ES6+** - Lenguaje principal
- **🎨 Tailwind CSS** - Framework de estilos
- **✏️ CKEditor 5** - Editor de texto enriquecido
- **🍭 SweetAlert2** - Alerts y modales elegantes

### Deployment
- **🐳 Docker** - Containerización
- **🌐 Nginx** - Servidor web
- **☁️ Dokploy** - Plataforma de deployment
- **⚙️ GitHub Actions** - CI/CD (opcional)

## 📁 Estructura del Proyecto

```
jobless-journal-frontend/
├── 📄 index.html              # Página principal
├── 📄 package.json            # Dependencias y scripts
├── ⚙️ vite.config.ts          # Configuración de Vite
├── 🐳 Dockerfile              # Configuración Docker
├── 🌐 nginx.conf              # Configuración Nginx
├── ☁️ dokploy.yml             # Configuración Dokploy
├── 📚 pages/
│   └── 📄 post.html           # Página individual de post
├── 🎨 src/
│   ├── 📄 main.js             # Punto de entrada principal
│   ├── 🎨 style.css           # Estilos globales
│   ├── 🧩 components/         # Componentes reutilizables
│   │   ├── CommentForm.js     # Formulario de comentarios
│   │   ├── commentSubmit.js   # Lógica de envío
│   │   ├── renderCommentsList.js # Renderizado de comentarios
│   │   ├── renderPostCard.js  # Tarjeta de post
│   │   └── renderPosts.js     # Lista de posts
│   ├── 🪝 hooks/              # Custom hooks
│   │   ├── useCommentAI.js    # Hook para IA de comentarios
│   │   ├── useComments.js     # Hook para comentarios
│   │   └── usePosts.js        # Hook para posts
│   ├── 📄 pages/              # Lógica de páginas
│   │   └── post.js            # Lógica página individual
│   └── 🔧 utils/              # Utilidades
│       └── gptButtons.js      # Botones de IA
└── 🔧 deployment/             # Archivos de deployment
    ├── docker-compose.yml     # Compose para desarrollo
    ├── nixpacks.toml          # Configuración Nixpacks
    └── DEPLOYMENT.md          # Guía de deployment
```

## 🚀 Instalación y Configuración

### Prerrequisitos

- **Node.js** 18+ 
- **npm** 9+
- **Git**

### 1. Clonar el repositorio

```bash
git clone https://github.com/cdryampi/jobless-journal-frontend.git
cd jobless-journal-frontend
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

Crea un archivo `.env` en la raíz del proyecto:

```env
VITE_BACKEND_URL=http://localhost:3001/api
```

### 4. Ejecutar en desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`

## 📝 Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build para producción
npm run preview  # Preview del build
npm start        # Servidor de producción
```

## 🐳 Deployment con Docker

### Build local

```bash
# Construir imagen
docker build -t jobless-journal-frontend .

# Ejecutar contenedor
docker run -p 3000:80 jobless-journal-frontend
```

### Docker Compose

```bash
docker-compose up -d
```

## ☁️ Deployment con Dokploy

### 1. Configuración automática

El proyecto incluye configuración lista para Dokploy:

- ✅ `Dockerfile` optimizado
- ✅ `nginx.conf` configurado
- ✅ `dokploy.yml` con settings
- ✅ Health checks incluidos

### 2. Variables de entorno en Dokploy

```env
NODE_ENV=production
VITE_BACKEND_URL=https://jobless-journal.yampi.eu/api
```

### 3. Configuración de dominio

Actualiza `dokploy.yml`:

```yaml
domains:
  - name: "tu-dominio.com"
    ssl: true
```

## 🔧 Configuración

### Nginx

El archivo `nginx.conf` incluye:

- ✅ Soporte para SPA routing
- ✅ Proxy para llamadas API
- ✅ Compresión gzip
- ✅ Cache de assets estáticos
- ✅ Headers de seguridad

### Vite

Configuración multi-página en `vite.config.ts`:

```typescript
build: {
  rollupOptions: {
    input: {
      main: resolve(__dirname, 'index.html'),
      post: resolve(__dirname, 'pages/post.html')
    }
  }
}
```

## 🤖 Integración con IA

### Comentarios automáticos

```javascript
// Hook para generar comentarios con IA
const { generateComment, isLoading } = useCommentAI();

// Generar comentario
const comment = await generateComment(postContent);
```

### Botones GPT

```javascript
// Botones para diferentes tipos de respuesta
const gptButtons = [
  { type: 'empathy', label: '😢 Empatía' },
  { type: 'advice', label: '💡 Consejo' },
  { type: 'motivation', label: '🚀 Motivación' }
];
```

## 📱 Responsive Design

### Breakpoints

```css
/* Mobile first approach */
.container {
  @apply px-4 sm:px-6 lg:px-8;
  @apply max-w-sm sm:max-w-2xl lg:max-w-4xl;
}
```

### Componentes adaptivos

- 📱 **Mobile:** Stack vertical, navegación simplificada
- 💻 **Tablet:** Grid de 2 columnas, sidebar colapsable  
- 🖥️ **Desktop:** Layout completo, todas las funciones visibles

## 🎨 Tema y Estilos

### Paleta de colores

```css
/* Dark theme principal */
:root {
  --bg-primary: #18181b;    /* zinc-900 */
  --bg-secondary: #27272a;  /* zinc-800 */
  --text-primary: #f4f4f5;  /* zinc-100 */
  --text-secondary: #a1a1aa; /* zinc-400 */
  --accent: #3b82f6;        /* blue-500 */
  --border: #3f3f46;        /* zinc-700 */
}
```

### Tipografía

```css
/* Font stack monoespaciada */
font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
```

## 🔍 SEO y Performance

### Meta tags

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Jobless Journal - Documenta tu búsqueda de empleo</title>
<meta name="description" content="Aplicación para documentar y hacer seguimiento de tu búsqueda de empleo">
```

### Optimizaciones

- ✅ **Lazy loading** de componentes
- ✅ **Tree shaking** automático con Vite
- ✅ **Minificación** de CSS y JS
- ✅ **Compresión gzip** en Nginx
- ✅ **Cache** de assets estáticos

## 🧪 Testing

```bash
# Ejecutar tests (cuando estén implementados)
npm test

# Coverage
npm run test:coverage
```

## 🤝 Contribuir

### 1. Fork del proyecto

```bash
git clone https://github.com/tu-usuario/jobless-journal-frontend.git
```

### 2. Crear rama

```bash
git checkout -b feature/nueva-funcionalidad
```

### 3. Commit cambios

```bash
git commit -m "feat: agregar nueva funcionalidad"
```

### 4. Push y PR

```bash
git push origin feature/nueva-funcionalidad
# Crear Pull Request en GitHub
```

### Convenciones

- 📝 **Commits:** Seguir [Conventional Commits](https://conventionalcommits.org/)
- 🎨 **Código:** Usar Prettier y ESLint
- 📚 **Documentación:** Actualizar README si es necesario

## 🐛 Troubleshooting

### Problemas comunes

**1. Error de CORS en desarrollo**
```javascript
// Verificar proxy en vite.config.ts
proxy: {
  '/api': {
    target: 'https://jobless-journal.yampi.eu',
    changeOrigin: true
  }
}
```

**2. Páginas no cargan en producción**
```nginx
# Verificar configuración en nginx.conf
location /pages/ {
  try_files $uri $uri/ =404;
}
```

**3. Build falla**
```bash
# Limpiar cache y reinstalar
rm -rf node_modules dist
npm install
npm run build
```

## 📄 Licencia

MIT License - ver [LICENSE](LICENSE) para detalles.

## 👥 Equipo

- **Desarrollador:** [cdryampi](https://github.com/cdryampi)
- **Diseño:** Jobless as a Service™

## 🔗 Enlaces

- 🌐 **Aplicación:** [jobless.yampi.eu](https://jobless.yampi.eu)
- 📚 **Documentación:** [Deployment Guide](DEPLOYMENT.md)
- 🐛 **Issues:** [GitHub Issues](https://github.com/cdryampi/jobless-journal-frontend/issues)
- 💬 **Discusiones:** [GitHub Discussions](https://github.com/cdryampi/jobless-journal-frontend/discussions)

## 🙏 Agradecimientos

- **Vite Team** por la increíble herramienta de build
- **Tailwind CSS** por el framework de estilos
- **Dokploy** por la plataforma de deployment
- **CKEditor** por el editor de texto

---

<div align="center">

**Hecho con 💔 y mucha desesperanza profesional**

*Jobless as a Service™ - Documentando el caos laboral desde 2024*

</div>

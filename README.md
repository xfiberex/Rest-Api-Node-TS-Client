# Cliente Web - Inventario de Productos

Aplicación web frontend moderna desarrollada con React 19, TypeScript, Vite y TailwindCSS para la gestión de inventario de productos. Implementa React Router v7 con loaders y actions para una arquitectura de datos eficiente.

## 🚀 Características

- ✅ **React 19** con las últimas características
- ✅ **TypeScript** para tipado estático y mejor DX
- ✅ **Vite** como build tool ultrarrápido
- ✅ **TailwindCSS v4** para estilos modernos
- ✅ **React Router v7** con loaders y actions
- ✅ **Valibot** para validación de esquemas
- ✅ **Axios** para peticiones HTTP
- ✅ **SWC** para compilación rápida
- ✅ **ESLint** para calidad de código
- ✅ **Diseño responsive** y UI intuitiva

## 📋 Requisitos Previos

- Node.js >= 18.x
- npm o yarn
- Servidor API ejecutándose (ver carpeta `Server`)

## 🛠️ Instalación

1. **Clonar el repositorio**
```bash
git clone <url-del-repositorio>
cd Client
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**

Crear un archivo `.env` en la raíz del proyecto:

```env
VITE_API_URL=http://localhost:3000
```

## 🚀 Uso

### Modo Desarrollo
```bash
npm run dev
```
La aplicación estará disponible en `http://localhost:5173`

### Build para Producción
```bash
npm run build
```

### Preview de Producción
```bash
npm run preview
```

### Linting
```bash
npm run lint
```

## 📱 Funcionalidades

### Gestión de Productos

- **Listar Productos**: Vista principal con todos los productos del inventario
- **Agregar Producto**: Formulario para crear nuevos productos
- **Editar Producto**: Modificar información de productos existentes
- **Eliminar Producto**: Eliminar productos del inventario
- **Toggle Disponibilidad**: Cambiar el estado de disponibilidad con un click

### Características de UX

- Navegación fluida con React Router
- Validación de formularios en tiempo real
- Mensajes de error informativos
- Formato de precios con separadores de miles
- Indicadores visuales de disponibilidad
- Diseño responsive para móviles y tablets

## 🏗️ Estructura del Proyecto

```
Client/
├── public/             # Archivos estáticos
├── src/
│   ├── actions/       # Actions de React Router (POST, PUT, DELETE)
│   │   ├── deleteProductAction.ts
│   │   ├── editProductAction.ts
│   │   ├── newProductAction.ts
│   │   └── updateAvailabilityAction.ts
│   ├── components/    # Componentes reutilizables
│   │   ├── ErrorMessage.tsx
│   │   ├── ProductDetails.tsx
│   │   └── ProductForm.tsx
│   ├── helpers/       # Funciones de utilidad
│   │   ├── formatCurrency.ts
│   │   └── toBoolean.ts
│   ├── layouts/       # Layouts de la aplicación
│   │   └── Layout.tsx
│   ├── loaders/       # Loaders de React Router (GET)
│   │   ├── editProductLoader.ts
│   │   └── productsLoader.ts
│   ├── services/      # Servicios API
│   │   └── ProductService.ts
│   ├── types/         # Definiciones de tipos y schemas
│   │   └── index.ts
│   ├── views/         # Páginas/Vistas
│   │   ├── EditProducts.tsx
│   │   ├── NewProducts.tsx
│   │   └── Products.tsx
│   ├── index.css      # Estilos globales con TailwindCSS
│   ├── main.tsx       # Punto de entrada
│   └── router.tsx     # Configuración de rutas
├── eslint.config.js   # Configuración de ESLint
├── index.html         # HTML template
├── package.json       # Dependencias y scripts
├── tsconfig.json      # Configuración de TypeScript
├── vite.config.ts     # Configuración de Vite
└── vercel.json        # Configuración de despliegue
```

## 🛣️ Rutas de la Aplicación

| Ruta | Descripción | Loader | Action |
|------|-------------|--------|--------|
| `/` | Listado de productos | ✅ | ✅ (Disponibilidad) |
| `/productos/nuevo` | Crear nuevo producto | ❌ | ✅ |
| `/productos/:id/editar` | Editar producto | ✅ | ✅ |
| `/productos/:id/eliminar` | Eliminar producto | ❌ | ✅ |

## 🔧 Arquitectura y Patrones

### React Router v7 con Loaders y Actions

El proyecto utiliza el patrón moderno de React Router con:

- **Loaders**: Para cargar datos antes de renderizar componentes
- **Actions**: Para manejar mutaciones de datos (POST, PUT, DELETE, PATCH)
- **ROA Pattern**: Resource-Oriented Architecture para rutas semánticas

### Validación con Valibot

```typescript
// Esquemas de validación tipados
const ProductSchema = object({
  id: number(),
  name: string(),
  price: number(),
  availability: boolean(),
});
```

### Servicios API

Capa de servicios centralizada para todas las peticiones HTTP:

```typescript
// ProductService.ts
- addProduct()
- getProducts()
- getProductById()
- updateProduct()
- deleteProduct()
- updateProductAvailability()
```

## 🎨 Estilos y Diseño

### TailwindCSS v4

El proyecto utiliza TailwindCSS v4 con el plugin de Vite para:
- Utilidades CSS modernas
- Sistema de diseño consistente
- Tema personalizable
- Diseño responsive con `sm:`, `md:`, `lg:`, `xl:`
- Componentes estilizados con clases de utilidad

### Componentes UI

- Formularios con validación visual
- Botones con estados hover y active
- Tablas responsive
- Mensajes de error destacados
- Indicadores de disponibilidad con colores

## 📦 Tecnologías Utilizadas

### Core
- **React 19** - Biblioteca UI moderna
- **TypeScript** - Tipado estático
- **Vite** - Build tool ultrarrápido

### Enrutamiento y Estado
- **React Router DOM v7** - Enrutamiento con loaders/actions
- **React Router** - Gestión de navegación

### Estilos
- **TailwindCSS v4** - Framework CSS de utilidades
- **@tailwindcss/vite** - Plugin de Vite para TailwindCSS

### Validación y HTTP
- **Valibot** - Validación de esquemas ligera
- **Axios** - Cliente HTTP

### Desarrollo
- **@vitejs/plugin-react-swc** - Compilación rápida con SWC
- **ESLint** - Linter de código
- **TypeScript ESLint** - Reglas de ESLint para TS

## 🔌 Conexión con la API

La aplicación se conecta a la REST API del servidor mediante Axios:

```typescript
// Configurar URL base en .env
VITE_API_URL=http://localhost:3000

// Uso en servicios
const url = `${import.meta.env.VITE_API_URL}/api/products`;
```

**Nota**: Asegúrate de que el servidor esté ejecutándose antes de iniciar el cliente.

## 🚀 Despliegue

### Vercel (Recomendado)

El proyecto incluye configuración para Vercel (`vercel.json`):

```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel
```

### Build Manual

```bash
# Construir para producción
npm run build

# Los archivos estáticos estarán en dist/
```

## 🔒 Variables de Entorno

| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| `VITE_API_URL` | URL base de la API | `http://localhost:3000` |

## 🎯 Mejores Prácticas Implementadas

- ✅ **Separación de responsabilidades**: Components, Services, Loaders, Actions
- ✅ **Tipado fuerte**: TypeScript en todo el proyecto
- ✅ **Validación de datos**: Esquemas con Valibot
- ✅ **Manejo de errores**: Try-catch y mensajes de error
- ✅ **Código limpio**: ESLint y convenciones consistentes
- ✅ **Componentización**: Componentes reutilizables
- ✅ **Performance**: Vite + SWC para builds rápidos

## 👤 Autor

**Ricky Angel Jiménez Bueno**

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea tu rama de características (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📞 Soporte

Para reportar bugs o solicitar características, por favor abre un issue en el repositorio.

## 🔗 Enlaces Relacionados

- [Servidor API](../Server/README.md)
- [React Documentation](https://react.dev/)
- [React Router v7](https://reactrouter.com/)
- [Vite Documentation](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Valibot](https://valibot.dev/)

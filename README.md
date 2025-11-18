# 📦 Inventario de Productos - Client

Aplicación frontend moderna para la gestión de inventario de productos, construida con React, TypeScript y Vite.

## 🚀 Tecnologías

- **React 19.2.0** - Biblioteca de JavaScript para construir interfaces de usuario
- **TypeScript 5.9.3** - Superset tipado de JavaScript
- **Vite 7.2.2** - Build tool y dev server ultrarrápido
- **React Router DOM 7.9.6** - Enrutamiento declarativo para React
- **Tailwind CSS 4.1.17** - Framework CSS utility-first
- **Axios 1.13.2** - Cliente HTTP basado en promesas
- **Valibot 1.1.0** - Biblioteca de validación de esquemas

## ✨ Características

- ✅ **CRUD Completo** - Crear, leer, actualizar y eliminar productos
- 🎨 **Diseño Moderno** - Interfaz con Tailwind CSS y diseño responsive
- 🔄 **Validación de Datos** - Validación de esquemas con Valibot
- 📱 **Responsive** - Adaptable a dispositivos móviles y desktop
- ⚡ **Hot Module Replacement** - Recarga instantánea durante el desarrollo
- 🛣️ **React Router** - Navegación fluida con loaders y actions
- 🎯 **TypeScript** - Type-safety en todo el código

## 📁 Estructura del Proyecto

```
Client/
├── src/
│   ├── actions/          # Acciones de React Router (POST, PUT, DELETE)
│   │   ├── editProductAction.ts
│   │   └── newProductAction.ts
│   ├── components/       # Componentes reutilizables
│   │   ├── ErrorMessage.tsx
│   │   ├── ProductDetails.tsx
│   │   └── ProductForm.tsx
│   ├── helpers/          # Funciones auxiliares
│   │   └── formatCurrency.ts
│   ├── layouts/          # Componentes de layout
│   │   └── Layout.tsx
│   ├── loaders/          # Loaders de React Router (GET)
│   │   ├── editProductLoader.ts
│   │   └── productsLoader.ts
│   ├── services/         # Servicios de API
│   │   └── ProductService.ts
│   ├── types/            # Definiciones de tipos TypeScript
│   │   └── index.ts
│   ├── views/            # Páginas de la aplicación
│   │   ├── EditProducts.tsx
│   │   ├── NewProducts.tsx
│   │   └── Products.tsx
│   ├── main.tsx          # Punto de entrada
│   ├── router.tsx        # Configuración de rutas
│   └── index.css         # Estilos globales
├── public/               # Archivos estáticos
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 🔧 Instalación

1. **Clonar el repositorio**
```bash
git clone <url-repositorio>
cd Client
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**

Crea un archivo `.env` en la raíz del proyecto:

```env
VITE_API_URL=http://localhost:4000
```

## 🎯 Scripts Disponibles

```bash
# Modo desarrollo (http://localhost:5173)
npm run dev

# Compilar TypeScript y construir para producción
npm run build

# Previsualizar build de producción
npm run preview

# Ejecutar linter
npm run lint
```

## 🌐 Rutas de la Aplicación

| Ruta | Componente | Descripción |
|------|-----------|-------------|
| `/` | Products | Lista de todos los productos |
| `/productos/nuevo` | NewProducts | Formulario para crear producto |
| `/productos/:id/editar` | EditProducts | Formulario para editar producto |

## 📦 Componentes Principales

### ProductService
Servicio centralizado para todas las operaciones con la API:
- `getProducts()` - Obtener lista de productos
- `getProductById(id)` - Obtener un producto específico
- `addProduct(data)` - Crear nuevo producto
- `updateProduct(id, data)` - Actualizar producto existente

### Loaders
- **productsLoader**: Carga la lista de productos antes de renderizar la vista
- **editProductLoader**: Carga los datos del producto a editar

### Actions
- **newProductAction**: Maneja la creación de nuevos productos
- **editProductAction**: Maneja la actualización de productos

## 🎨 Paleta de Colores

- **Principal**: Indigo (600-700)
- **Secundario**: Slate (50-900)
- **Éxito**: Green (100-800)
- **Error**: Red (100-800)
- **Advertencia**: Amber (100-800)

## 🔒 Validación de Datos

Utiliza **Valibot** para validar los datos antes de enviarlos al servidor:

```typescript
const ProductSchema = object({
    id: number(),
    name: string(),
    price: number(),
    availability: boolean(),
});
```

## 🌟 Características Destacadas

### 1. React Router con Data APIs
Utiliza las nuevas Data APIs de React Router v7:
- Loaders para cargar datos
- Actions para mutaciones
- Form component para formularios

### 2. Optimistic UI
Actualización de disponibilidad sin recarga de página usando `useFetcher`

### 3. Type Safety
TypeScript en todo el proyecto con tipos estrictos

### 4. Diseño Moderno
- Gradientes y sombras
- Transiciones suaves
- Iconos emoji para mejor UX
- Estados hover interactivos

## 📝 Ejemplo de Uso

```typescript
// Crear un nuevo producto
const product = {
    name: "Laptop Dell",
    price: 999.99
};

await addProduct(product);
```

## 🛠️ Desarrollo

### Estructura de Componentes
Los componentes siguen el patrón de composición:

```tsx
<Layout>
  <Products>
    <ProductDetails product={product} />
  </Products>
</Layout>
```

### Gestión de Estado
- React Router gestiona el estado de navegación
- Loaders y Actions manejan las operaciones asíncronas
- useFetcher para actualizaciones optimistas

### Estilos
Tailwind CSS con clases utility-first:
- Diseño responsive con prefijos `sm:`, `md:`, `lg:`
- Hover states para interactividad
- Transiciones suaves con `transition-*`

## 🐛 Depuración

```bash
# Ver errores de TypeScript
npm run build

# Analizar código con ESLint
npm run lint
```

## 📊 Performance

- ⚡ Vite para build y HMR ultrarrápido
- 🔄 Code splitting automático
- 📦 Optimización de assets
- 🎯 Tree shaking

## Despliegue en Vercel

### 1. Preparar el Proyecto

Asegúrate de tener el archivo `vercel.json` en la raíz del proyecto Client:

```json
{
    "routes": [
        {
            "src": "/[^.]+",
            "dest": "/",
            "status": 200
        }
    ]
}
```

Este archivo es necesario para que React Router funcione correctamente en Vercel.

### 2. Desplegar desde GitHub

#### Opción A: Desde la Web de Vercel

1. Ve a [Vercel](https://vercel.com) e inicia sesión con GitHub
2. Click en **"Add New"** → **"Project"**
3. Importa tu repositorio de GitHub
4. Configura el proyecto:
   - **Framework Preset**: Vite
   - **Root Directory**: `Client` (si está en una carpeta)
   - **Build Command**: `npm run build` (por defecto)
   - **Output Directory**: `dist` (por defecto)
   - **Install Command**: `npm install` (por defecto)

#### Opción B: Desde la Terminal

```bash
# Instalar Vercel CLI
npm i -g vercel

# Navegar a la carpeta Client
cd Client

# Desplegar
vercel

# Para producción
vercel --prod
```

### 3. Configurar Variables de Entorno

En el dashboard de Vercel, ve a **Settings** → **Environment Variables** y agrega:

```
VITE_API_URL=https://tu-api.onrender.com
```

> **Importante**: Reemplaza `https://tu-api.onrender.com` con la URL de tu API desplegada en Render.

### 4. Verificar el Despliegue

1. Una vez desplegado, Vercel te dará una URL como: `https://tu-app.vercel.app`
2. Prueba la aplicación abriendo la URL en tu navegador
3. Verifica que las operaciones CRUD funcionen correctamente

### 5. Configurar Dominio Personalizado (Opcional)

1. En el dashboard de Vercel, ve a **Settings** → **Domains**
2. Agrega tu dominio personalizado
3. Sigue las instrucciones para configurar los DNS

### 6. Auto-Deploy

Vercel automáticamente redesplega tu aplicación cuando:
- Haces push a la rama `main` (producción)
- Haces push a cualquier otra rama (preview)

### Comandos Útiles de Vercel CLI

```bash
vercel                  # Desplegar a preview
vercel --prod          # Desplegar a producción
vercel env ls          # Listar variables de entorno
vercel env add         # Agregar variable de entorno
vercel logs            # Ver logs de la aplicación
vercel domains         # Gestionar dominios
```

### Notas Importantes

- ✅ **Plan Gratuito**: Vercel ofrece despliegues ilimitados en el plan gratuito
- 🔄 **Hot Reload**: Los cambios se despliegan automáticamente
- 🌐 **HTTPS**: Vercel proporciona HTTPS automáticamente
- 📱 **CDN Global**: Tu aplicación se sirve desde el CDN de Vercel

### Solución de Problemas

**Problema: Las rutas no funcionan después del despliegue**
- Solución: Asegúrate de tener el archivo `vercel.json` configurado correctamente

**Problema: La API no responde**
- Verifica que `VITE_API_URL` esté configurada correctamente
- Asegúrate de que CORS esté habilitado en tu API de Render

**Problema: Variables de entorno no se cargan**
- Las variables deben tener el prefijo `VITE_`
- Después de agregar variables, necesitas redesplegar

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## Autor

**Ricky Angel Jiménez Bueno**

## 🔗 Enlaces

- [Documentación de Vite](https://vitejs.dev/)
- [Documentación de React](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Valibot](https://valibot.dev/)

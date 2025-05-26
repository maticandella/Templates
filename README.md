# 🌸 FlorFest Landing

Una landing minimalista y elegante para un evento especial, construida con [Astro](https://astro.build/) + [Tailwind CSS](https://tailwindcss.com/).  
Sirve como invitación interactiva con opciones dinámicas para diferentes momentos del evento. 🎉🥂🍽️

## 🚀 Demo

👉 [https://florfest.vercel.app](https://florfest.vercel.app)

## ✨ Características

- Renderizado ultra rápido gracias a Astro.
- Estilos modernos con Tailwind.
- Personalización mediante parámetros en la URL.
- Responsive y lista para dispositivos móviles.
- Hosting gratuito con Vercel.

## 🧠 Lógica de comportamiento

La landing detecta el tipo de invitación mediante un parámetro `t` en la URL:

| Parámetro | Descripción           |
|----------|------------------------|
| `?t=b`   | Brindis                |
| `?t=c`   | Cena                   |
| *(sin `t`)* | Default a **Cena**    |

### Ejemplos

- `https://florfest.vercel.app/?t=b` 👉 Se muestra la invitación al **brindis**.
- `https://florfest.vercel.app/?t=c` 👉 Se muestra la invitación a la **cena**.
- `https://florfest.vercel.app/` 👉 Por defecto se asume **cena**.

## 🛠️ Tecnologías usadas

- **Astro** – Framework de sitios estáticos moderno.
- **Tailwind CSS** – Utility-first para estilos rápidos.
- **Vercel** – Deploy continuo y sencillo.

## 📁 Estructura del proyecto

```bash
.
├── public/           # Archivos estáticos
├── src/
│   ├── components/   # Componentes reutilizables
│   ├── layouts/      # Layouts base
│   └── pages/
│       └── index.astro # Página principal con lógica de renderizado
├── astro.config.mjs  # Configuración de Astro
├── tailwind.config.cjs # Configuración de Tailwind
└── package.json
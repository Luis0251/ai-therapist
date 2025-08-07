# 🧠 AI Therapist

Una aplicación web de terapia digital diseñada para proporcionar herramientas interactivas de bienestar mental, ejercicios de relajación y actividades terapéuticas para ayudar a gestionar el estrés, la ansiedad y mejorar el bienestar emocional.

## ✨ Características

### 🎮 Juegos Terapéuticos
- **Ejercicios de Respiración**: Técnicas de respiración guiadas con visualizaciones interactivas
- **Jardín Zen**: Crea y personaliza tu espacio digital de paz y relajación
- **Bosque Mindful**: Experiencia inmersiva de meditación en un bosque virtual con sonidos naturales
- **Olas del Océano**: Sincroniza tu respiración con el ritmo relajante de las olas del mar

### 🎯 Dashboard Personal
- Seguimiento de sesiones de mindfulness
- Estadísticas de actividades completadas
- Monitoreo del estado emocional
- Historial de progreso personal

### 🎨 Características Técnicas
- Interfaz moderna y responsiva con Tailwind CSS
- Animaciones fluidas con Framer Motion
- Modo oscuro/claro con next-themes
- Componentes UI accesibles con Radix UI
- Sistema de autenticación completo

## 🚀 Comenzar

Primero, instala las dependencias:

```bash
npm install
# o
yarn install
# o
pnpm install
```

Luego, ejecuta el servidor de desarrollo:

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
# o
bun dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## 🛠️ Tecnologías Utilizadas

- **Framework**: Next.js 15 con App Router
- **Lenguaje**: TypeScript
- **Estilado**: Tailwind CSS
- **Animaciones**: Framer Motion
- **UI Components**: Radix UI
- **Iconos**: Lucide React
- **Temas**: next-themes

## 📁 Estructura del Proyecto

```
app/
├── page.tsx          # Página principal con selector de emociones
├── dashboard/        # Panel de control personal
├── login/           # Autenticación de usuarios
└── signup/          # Registro de nuevos usuarios

components/
├── games/           # Juegos terapéuticos
│   ├── anxietyGames.tsx
│   ├── breathingGames.tsx
│   ├── forestGame.tsx
│   └── zenGardenGame.tsx
├── ui/             # Componentes de interfaz reutilizables
└── ...             # Otros componentes

public/sounds/      # Archivos de audio para meditación
```

## 🎵 Recursos de Audio

La aplicación incluye sonidos naturales para mejorar la experiencia de meditación:
- Sonidos de pájaros
- Viento suave
- Hojas moviéndose
- Olas del mar

## 🤝 Contribuir

Las contribuciones son bienvenidas. Si quieres mejorar la aplicación:

1. Haz fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 🌟 Recursos de Aprendizaje

Para aprender más sobre las tecnologías utilizadas:

- [Documentación de Next.js](https://nextjs.org/docs) - características y API de Next.js
- [Tailwind CSS](https://tailwindcss.com/docs) - framework de CSS utilitario
- [Framer Motion](https://www.framer.com/motion/) - librería de animaciones para React
- [Radix UI](https://www.radix-ui.com/) - componentes primitivos accesibles

## 🚀 Deploy

La forma más fácil de hacer deploy de tu app Next.js es usar la [Plataforma Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) de los creadores de Next.js.

Consulta la [documentación de deployment de Next.js](https://nextjs.org/docs/app/building-your-application/deploying) para más detalles.

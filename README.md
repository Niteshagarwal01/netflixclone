# 🎬 Netflix Clone — React & TMDB Integration(Feature Build#3)
<div align="center">
  <a href="http://netflix-clone-with-tmdb-using-react-mui.vercel.app/">
    <img src="./public/assets/netflix-logo.png" alt="Logo" width="100" height="32">
  </a>

  <h3 align="center">Netflix Clone</h3>

  <p align="center">
    <a href="https://netflix-clone-react-typescript.vercel.app/">View Demo</a>
    ·
    <a href="https://github.com/crazy-man22/netflix-clone-react-typescript/issues">Report Bug</a>
    ·
    <a href="https://github.com/crazy-man22/netflix-clone-react-typescript/issues">Request Feature</a>
  </p>
</div>

A modern Netflix clone built with React, TypeScript, and TMDB API, featuring infinite scrolling, custom hooks, and advanced React patterns.

## ✨ Features

### Core Functionality
- **🎬 Movie/TV Discovery**: Browse trending, popular, and genre-specific content
- **🔍 Search & Filter**: Search movies and TV shows with real-time results
- **📱 Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **🎥 Video Playback**: Custom video player with controls
- **📊 Infinite Scrolling**: Load more content as you scroll using Intersection Observer
- **🖼️ Modal Details**: Detailed view with trailers and cast information

### Advanced Features
- **⚡ Performance Optimized**: Code splitting, lazy loading, and efficient rendering
- **🎨 Custom UI**: Material-UI theme customization with Netflix-inspired design
- **🔄 State Management**: Redux Toolkit for complex state handling
- **🌐 API Integration**: TMDB API for real movie data
- **🎯 Advanced Patterns**: Custom hooks, HOCs, portals, and context providers

### User Experience
- **🎪 Smooth Animations**: Framer Motion for transitions and effects
- **🎠 Carousel Sliders**: Slick carousel for content browsing
- **📋 Portal Modals**: React portals for modal overlays
- **⚡ Fast Loading**: Lazy routes and suspense for code splitting

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Routing**: React Router v6 with lazy loading and data loaders
- **State Management**: Redux Toolkit & RTK Query
- **UI Library**: Material-UI (MUI) with custom theming
- **Animations**: Framer Motion
- **Video Player**: Video.js
- **Carousel**: React Slick
- **Build Tool**: Vite
- **API**: TMDB (The Movie Database)

## 📂 File Structure

```
netflixclone/
├── public/
│   └── assets/          # Static assets (logo, images)
├── src/
│   ├── components/      # Reusable UI components
│   ├── hooks/          # Custom React hooks
│   ├── pages/          # Page components with lazy loading
│   ├── store/          # Redux store and slices
│   ├── utils/          # Utility functions
│   ├── App.tsx         # Main app component
│   └── main.tsx        # App entry point
├── .env.example        # Environment variables template
├── package.json        # Dependencies and scripts
├── vite.config.ts      # Build configuration
└── README.md           # Project documentation
```

## ⚙️ How It Works

### Advanced React Patterns
The project demonstrates modern React development with:

1. **Custom Hooks**: Reusable logic for API calls and state management
2. **Context Providers**: Global state sharing without prop drilling
3. **Code Splitting**: Lazy loading routes to reduce bundle size
4. **Higher-Order Components**: Component composition and reusability
5. **Forwarding Refs**: Making components more flexible

### RTK Query Integration
```typescript
// Custom hook for fetching movies
export const useGetMoviesQuery = (category: string) => {
  return useQuery({
    queryKey: ['movies', category],
    queryFn: () => fetchMoviesFromTMDB(category),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};
```

### Infinite Scrolling Implementation
```typescript
// Using Intersection Observer for infinite scroll
const observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting && hasNextPage) {
      fetchNextPage();
    }
  },
  { threshold: 0.1 }
);
```

## 🚀 Quick Start

### Prerequisites
- Node.js 16+
- TMDB API Key (free from [TMDB](https://www.themoviedb.org/))

### Installation
```bash
# Clone the repository
git clone https://github.com/crazy-man22/netflix-clone-react-typescript.git
cd netflix-clone-react-typescript

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Add your TMDB API key to .env

# Start development server
npm run dev

# Build for production
npm run build
```

### Docker Installation
```bash
# Build with API key
docker build --build-arg TMDB_V3_API_KEY=your_api_key_here -t netflix-clone .

# Run the container
docker run --name netflix-clone-website --rm -d -p 80:80 netflix-clone
```

## 🎨 Customization

### Theme Customization
Modify MUI theme in `src/theme.ts`:
```typescript
export const theme = createTheme({
  palette: {
    primary: {
      main: '#e50914', // Netflix red
    },
    background: {
      default: '#141414', // Netflix black
    },
  },
  // Add customizations
});
```

### Adding New Features
- **New Pages**: Create components in `src/pages/` and add routes in `App.tsx`
- **API Endpoints**: Extend RTK Query slices in `src/store/`
- **Components**: Add reusable components in `src/components/`

## 📊 Performance Optimizations

- **Code Splitting**: Route-based and component-based splitting
- **Lazy Loading**: Images and components loaded on demand
- **Memoization**: React.memo and useMemo for expensive operations
- **Bundle Analysis**: Optimized imports and tree shaking

## 🔧 Development

### Available Scripts
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Environment Variables
```env
VITE_TMDB_V3_API_KEY=your_tmdb_api_key_here
VITE_TMDB_BASE_URL=https://api.themoviedb.org/3
```

## 📝 API Reference

### TMDB Endpoints Used
- `/movie/popular` - Popular movies
- `/movie/top_rated` - Top rated movies
- `/tv/popular` - Popular TV shows
- `/search/multi` - Multi-search for movies/TV
- `/movie/{id}/videos` - Movie trailers

### Custom Hooks
- `useGetMoviesQuery` - Fetch movies by category
- `useInfiniteScroll` - Handle infinite scrolling
- `useModal` - Modal state management

## ⚠️ Limitations & Future Enhancements

### Current Limitations
- Requires TMDB API key for full functionality
- Client-side only (no backend authentication)
- Basic error handling for API failures

### Planned Features
- [ ] User authentication and profiles
- [ ] Watchlist and favorites
- [ ] Social features (reviews, ratings)
- [ ] Offline viewing capabilities
- [ ] Advanced search filters
- [ ] Performance improvements (Turbopack migration)
- [ ] Accessibility enhancements
- [ ] Comprehensive test suite

## 🤝 Contributing

Contributions are welcome! Please feel free to:
- Report bugs and issues
- Suggest new features
- Submit pull requests
- Improve documentation

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ using modern React and TypeScript**

<div align="center">
  <img src="./public/assets/home-page.png" alt="Home Page" width="100%" height="100%">
  <p align="center">Home Page</p>
  <img src="./public/assets/mini-portal.png" alt="Mini Portal" width="100%" height="100%">
  <p align="center">Mini Portal</p>
  <img src="./public/assets/detail-modal.png" alt="Detail Modal" width="100%" height="100%">
  <p align="center">Detail Modal</p>
  <img src="./public/assets/grid-genre.png" alt="Grid Genre Page" width="100%" height="100%">
  <p align="center">Grid Genre Page</p>
  <img src="./public/assets/watch.png" alt="Watch Page" width="100%" height="100%">
  <p align="center">Watch Page with custom control bar</p>
</div>

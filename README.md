
<div align="center">
  <a href="http://netflix-clone-with-tmdb-using-react-mui.vercel.app/">
    <img src="./public/assets/netflix-logo.png" alt="Logo" width="200">
  </a>

  <h1>Netflix Clone</h1>

  <p>
    A modern Netflix clone built with React, TypeScript, and TMDB API, featuring infinite scrolling, custom hooks, and advanced React patterns.
  </p>

  <p>
    <a href="#-features">Features</a> •
    <a href="#-tech-stack">Tech Stack</a> •
    <a href="#-quick-start">Quick Start</a> •
    <a href="#-development">Development</a> •
    <a href="#-screenshots">Screenshots</a>
  </p>
</div>

<br />

## 📸 Screenshots

<div align="center">
  <img src="./public/assets/home-page.png" alt="Home Page" width="800">
  <p><em>Home Page</em></p>
</div>

<table align="center">
  <tr>
    <td align="center">
      <img src="./public/assets/mini-portal.png" alt="Mini Portal" width="400">
      <br /><em>Mini Portal</em>
    </td>
    <td align="center">
      <img src="./public/assets/detail-modal.png" alt="Detail Modal" width="400">
      <br /><em>Detail Modal</em>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="./public/assets/grid-genre.png" alt="Grid Genre" width="400">
      <br /><em>Grid Genre Page</em>
    </td>
    <td align="center">
      <img src="./public/assets/watch.png" alt="Watch Page" width="400">
      <br /><em>Watch Page with Custom Controls</em>
    </td>
  </tr>
</table>

---

## ✨ Features

### Core Functionality
* **🎬 Movie/TV Discovery**: Browse trending, popular, and genre-specific content.
* **🔍 Search & Filter**: Search movies and TV shows with real-time results.
* **📱 Responsive Design**: Optimized for desktop, tablet, and mobile devices.
* **🎥 Video Playback**: Custom video player with controls.
* **📊 Infinite Scrolling**: Load more content as you scroll using Intersection Observer.
* **🖼️ Modal Details**: Detailed view with trailers and cast information.

### Advanced Features
* **⚡ Performance Optimized**: Code splitting, lazy loading, and efficient rendering.
* **🎨 Custom UI**: Material-UI theme customization with Netflix-inspired design.
* **🔄 State Management**: Redux Toolkit for complex state handling.
* **🌐 API Integration**: TMDB API for real movie data.
* **🎯 Advanced Patterns**: Custom hooks, HOCs, portals, and context providers.

### User Experience
* **🎪 Smooth Animations**: Framer Motion for transitions and effects.
* **🎠 Carousel Sliders**: Slick carousel for content browsing.
* **📋 Portal Modals**: React portals for modal overlays.
* **⚡ Fast Loading**: Lazy routes and suspense for code splitting.

---

## 🛠️ Tech Stack

| Area | Technology |
| :--- | :--- |
| **Frontend** | React 18, TypeScript |
| **Routing** | React Router v6 (Lazy Loading, Data Loaders) |
| **State** | Redux Toolkit, RTK Query |
| **UI Library** | Material-UI (MUI) |
| **Animations** | Framer Motion |
| **Video Player** | Video.js |
| **Build Tool** | Vite |
| **API** | TMDB (The Movie Database) |

---

## 📂 File Structure

```bash
netflixclone/
├── public/
│   └── assets/          # Static assets (logo, images)
├── src/
│   ├── components/      # Reusable UI components
│   ├── hooks/           # Custom React hooks
│   ├── pages/           # Page components with lazy loading
│   ├── store/           # Redux store and slices
│   ├── utils/           # Utility functions
│   ├── App.tsx          # Main app component
│   └── main.tsx         # App entry point
├── .env.example         # Environment variables template
├── package.json         # Dependencies and scripts
├── vite.config.ts       # Build configuration
└── README.md            # Project documentation
````

-----

## ⚙️ How It Works

### Advanced React Patterns

The project demonstrates modern React development with:

1.  **Custom Hooks**: Reusable logic for API calls and state management.
2.  **Context Providers**: Global state sharing without prop drilling.
3.  **Code Splitting**: Lazy loading routes to reduce bundle size.
4.  **Higher-Order Components**: Component composition and reusability.

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

-----

## 🚀 Quick Start

### Prerequisites

  * Node.js 16+
  * TMDB API Key (Free from [TMDB](https://www.themoviedb.org/))

### Installation

1.  **Clone the repository**

    ```bash
    git clone [https://github.com/crazy-man22/netflix-clone-react-typescript.git](https://github.com/crazy-man22/netflix-clone-react-typescript.git)
    cd netflix-clone-react-typescript
    ```

2.  **Install dependencies**

    ```bash
    npm install
    ```

3.  **Set up environment variables**

    ```bash
    cp .env.example .env
    # Open .env and add your TMDB API key
    ```

4.  **Start development server**

    ```bash
    npm run dev
    ```

### Docker Installation

```bash
# Build with API key
docker build --build-arg TMDB_V3_API_KEY=your_api_key_here -t netflix-clone .

# Run the container
docker run --name netflix-clone-website --rm -d -p 80:80 netflix-clone
```

-----

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
});
```

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_TMDB_V3_API_KEY=your_tmdb_api_key_here
VITE_TMDB_BASE_URL=[https://api.themoviedb.org/3](https://api.themoviedb.org/3)
```

-----

## 📊 Performance Optimizations

  * **Code Splitting**: Route-based and component-based splitting.
  * **Lazy Loading**: Images and components loaded on demand.
  * **Memoization**: `React.memo` and `useMemo` for expensive operations.
  * **Bundle Analysis**: Optimized imports and tree shaking.

-----

## ⚠️ Limitations & Roadmap

**Current Limitations**

  * Requires TMDB API key for full functionality.
  * Client-side only (no backend authentication).
  * Basic error handling for API failures.

**Planned Features**

  * [ ] User authentication and profiles
  * [ ] Watchlist and favorites
  * [ ] Social features (reviews, ratings)
  * [ ] Offline viewing capabilities
  * [ ] Comprehensive test suite

-----

## 🤝 Contributing

Contributions are welcome\! Please feel free to:

1.  Report bugs and issues.
2.  Suggest new features.
3.  Submit pull requests.

## 📄 License

This project is open source and available under the [MIT License](https://www.google.com/search?q=LICENSE).

-----

\<div align="center"\>
\<b\>Built with ❤️ using modern React and TypeScript\</b\>
\</div\>



# Your Project Name

[![Deploy to GitHub Pages](https://github.com/RichardL80/P01-Movie-App/actions/workflows/deploy.yml/badge.svg)](https://github.com/RichardL80/P01-Movie-App/actions/workflows/deploy.yml)

## Project Description
The Movie App is a React-based application which allows users to search through movies, as sourced by TMDB APIs, according to various categories. Each movie can be marked as a Favourite, or can be added to a Watch List.

## Live Demo
[View the live demo](https://RichardL80.github.io/P01-Movie-App)

## Technology Stack
- React
- Vite
- Docker
- GitHub Actions
- GitHub Pages

## Local Development

### Prerequisites
- Docker and Docker Compose
- Git

### Setup and Run

1. Clone the repository
```bash
git clone https://github.com/RichardL80/P01-Movie-App.git
cd P01-Movie-App
```

2. Start the Docker development environment
```bash
docker-compose up
```

3. Access the development server at [http://localhost:5173](http://localhost:5173)

## Environment Variables
The application uses the following environment variables:
- `NODE_ENV` - Set to "development" for local development

## Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions when changes are pushed to the main branch.

### Manual Deployment
If you want to deploy manually:

1. Build the application
```bash
npm run build
```

2. Deploy to GitHub Pages
```bash
npm run deploy
```

## GitHub Actions Workflow

The CI/CD pipeline includes the following steps:
1. Checkout code
2. Setup Node.js environment
3. Install dependencies
4. Build the application
5. Deploy to GitHub Pages

## Configuration Details

### GitHub Pages Configuration
- Base path: `/P01-Movie-App/` (configured in vite.config.js)
- Homepage URL: `https://RichardL80.github.io/P01-Movie-App`

### Docker Development Configuration
- Development server with hot reload
- Volume mounting for real-time code changes
- Port mapping from container to host 
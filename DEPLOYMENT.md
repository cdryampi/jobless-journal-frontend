# Jobless Journal Frontend - Deployment Guide

## 📦 Deployment with Dokploy

This project is configured for deployment with Dokploy using Docker containers.

### Prerequisites

- Dokploy server setup
- Docker installed on the deployment server
- Git repository access

### Files Created for Deployment

1. **Dockerfile** - Multi-stage Docker build configuration
2. **nginx.conf** - Nginx server configuration with proxy settings
3. **.dockerignore** - Files to exclude from Docker build
4. **docker-compose.yml** - Local development and testing
5. **dokploy.yml** - Dokploy-specific configuration
6. **.github/workflows/deploy.yml** - CI/CD pipeline (optional)

### Deployment Steps

#### Option 1: Direct Dokploy Deployment

1. **Connect Repository to Dokploy:**
   ```bash
   # In your Dokploy dashboard:
   # 1. Create new application
   # 2. Select "Docker" as deployment type
   # 3. Connect your Git repository
   # 4. Set build context to "."
   # 5. Set Dockerfile path to "Dockerfile"
   ```

2. **Environment Variables:**
   Set these in your Dokploy dashboard:
   ```
   NODE_ENV=production
   ```

3. **Port Configuration:**
   - Container Port: 80
   - Public Port: 80 or 443 (with SSL)

4. **Health Check:**
   - Path: `/`
   - Interval: 30s
   - Timeout: 10s

#### Option 2: Manual Docker Deployment

1. **Build the image:**
   ```bash
   docker build -t jobless-journal-frontend .
   ```

2. **Run the container:**
   ```bash
   docker run -p 3000:80 jobless-journal-frontend
   ```

3. **Using Docker Compose:**
   ```bash
   docker-compose up -d
   ```

### Configuration Details

#### Nginx Configuration
- Serves static files from `/usr/share/nginx/html`
- Handles client-side routing (SPA support)
- Proxies `/api/` requests to backend server
- Includes gzip compression and security headers
- Caches static assets for performance

#### Docker Configuration
- **Base Image:** nginx:alpine (lightweight)
- **Build Stage:** node:18-alpine for building assets
- **Production Stage:** nginx:alpine for serving
- **Exposed Port:** 80

### Backend Integration

The nginx configuration includes a proxy for API calls:
```nginx
location /api/ {
    proxy_pass https://jobless-journal.yampi.eu;
    # ... proxy headers
}
```

Make sure your backend is accessible at the configured URL.

### Customization

#### Update Domain Configuration

Edit `dokploy.yml`:
```yaml
domains:
  - name: "your-domain.com"
    ssl: true
```

#### Modify Resource Limits

Edit `dokploy.yml`:
```yaml
resources:
  memory: "1G"
  cpu: "1.0"
```

#### Change Backend URL

Edit `nginx.conf`:
```nginx
location /api/ {
    proxy_pass https://your-backend-url.com;
}
```

### Troubleshooting

1. **Build Fails:**
   - Check that all dependencies in `package.json` are correct
   - Ensure Node.js version compatibility
   - Verify build output in `dist/` directory

2. **Container Won't Start:**
   - Check Docker logs: `docker logs <container-id>`
   - Verify nginx configuration syntax
   - Ensure port 80 is available

3. **API Calls Fail:**
   - Verify backend URL in nginx configuration
   - Check CORS settings on backend
   - Ensure SSL certificates are valid

### Performance Optimization

The deployment includes several optimizations:
- Gzip compression enabled
- Static asset caching (1 year)
- Multi-stage Docker build (smaller image size)
- Health checks for reliability

### Monitoring

Dokploy provides built-in monitoring. You can also add:
- Custom health check endpoints
- Application metrics
- Log aggregation

### Support

For Dokploy-specific issues, refer to:
- [Dokploy Documentation](https://dokploy.com/docs)
- [Dokploy GitHub](https://github.com/Dokploy/dokploy)

For application issues, check the container logs in your Dokploy dashboard.


class Router {
  constructor() {
    this.routes = {};
    this.currentRoute = null;
    
    // Handle initial route and route changes
    window.addEventListener('load', this.loadRoute.bind(this));
    window.addEventListener('hashchange', this.loadRoute.bind(this));
  }
  
  addRoute(path, controller) {
    this.routes[path] = controller;
    return this;
  }
  
  loadRoute() {
    // Default to home if no hash
    const hash = location.hash || '#/';
    
    // Parse the route and get the path (without query params)
    const routePath = hash.split('?')[0];
    
    // Try to find a direct match
    if (this.routes[routePath]) {
      if (this.currentRoute) {
        this.currentRoute.teardown();
      }
      
      this.currentRoute = this.routes[routePath];
      this.currentRoute.init();
      return;
    }
    
    // Try to find a dynamic route match (like for property/:id)
    for (const route in this.routes) {
      if (this.isDynamicRouteMatch(routePath, route)) {
        if (this.currentRoute) {
          this.currentRoute.teardown();
        }
        
        const params = this.extractParams(routePath, route);
        this.currentRoute = this.routes[route];
        this.currentRoute.init(params);
        return;
      }
    }
    
    // No match found, load 404 page
    if (this.routes['#/404']) {
      if (this.currentRoute) {
        this.currentRoute.teardown();
      }
      
      this.currentRoute = this.routes['#/404'];
      this.currentRoute.init();
    } else {
      console.error('Route not found and no 404 route defined');
    }
  }
  
  isDynamicRouteMatch(actualPath, routePattern) {
    const actualSegments = actualPath.split('/');
    const patternSegments = routePattern.split('/');
    
    if (actualSegments.length !== patternSegments.length) {
      return false;
    }
    
    for (let i = 0; i < patternSegments.length; i++) {
      // If it's a parameter segment (starts with :), it matches anything
      if (!patternSegments[i].startsWith(':') && patternSegments[i] !== actualSegments[i]) {
        return false;
      }
    }
    
    return true;
  }
  
  extractParams(actualPath, routePattern) {
    const params = {};
    const actualSegments = actualPath.split('/');
    const patternSegments = routePattern.split('/');
    
    for (let i = 0; i < patternSegments.length; i++) {
      if (patternSegments[i].startsWith(':')) {
        const paramName = patternSegments[i].substring(1);
        params[paramName] = actualSegments[i];
      }
    }
    
    return params;
  }
  
  navigateTo(path) {
    window.location.hash = path;
  }
  
  getQueryParams() {
    const queryString = location.hash.split('?')[1];
    if (!queryString) return {};
    
    const params = {};
    const pairs = queryString.split('&');
    
    for (const pair of pairs) {
      const [key, value] = pair.split('=');
      params[decodeURIComponent(key)] = decodeURIComponent(value || '');
    }
    
    return params;
  }
}

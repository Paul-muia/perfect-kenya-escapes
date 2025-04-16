// DOM Elements
const appContainer = document.getElementById('app');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxCaption = document.getElementById('image-caption-text');
const closeLightboxBtn = lightbox.querySelector('.close-btn');
const prevBtn = lightbox.querySelector('.prev-btn');
const nextBtn = lightbox.querySelector('.next-btn');

// Global state
let currentImageIndex = 0;
let currentImages = [];
let currentCaptions = [];
let heroSlideInterval;

// Controllers for each page
const controllers = {
  // Home page controller
  home: {
    init() {
      this.render();
      this.setupEventListeners();
      this.startHeroSlideshow();
    },
    render() {
      const template = document.getElementById('home-template');
      const clone = document.importNode(template.content, true);
      appContainer.innerHTML = '';
      appContainer.appendChild(clone);
      
      this.renderNavbar();
      this.renderHero();
      this.renderFeaturedProperties();
      this.renderLocations();
      this.renderFooter();
    },
    renderNavbar() {
      const template = document.getElementById('navbar-template');
      const clone = document.importNode(template.content, true);
      document.querySelector('.home-page').prepend(clone);
      
      // Highlight active link
      document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href') === '#/') {
          link.classList.add('active');
        }
      });
    },
    renderHero() {
      const hero = document.querySelector('.hero');
      
      // Set initial background image
      hero.style.backgroundImage = `
        linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.5)), 
        url(${heroImages[0].src})
      `;
      
      // Create indicators
      const indicatorsContainer = document.querySelector('.hero-indicators');
      heroImages.forEach((_, index) => {
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        if (index === 0) indicator.classList.add('active');
        indicator.dataset.index = index;
        indicatorsContainer.appendChild(indicator);
      });
    },
    renderFeaturedProperties() {
      const featuredContainer = document.querySelector('.properties-carousel');
      const featuredProps = properties.filter(p => p.featured);
      
      featuredProps.forEach(property => {
        const propertyCard = this.createPropertyCard(property);
        featuredContainer.appendChild(propertyCard);
      });
    },
    renderLocations() {
      const locationsGrid = document.querySelector('.locations-grid');
      
      locations.forEach(location => {
        const locationCard = document.createElement('a');
        locationCard.href = `#/properties?location=${location.name}`;
        locationCard.classList.add('location-card');
        
        locationCard.innerHTML = `
          <img src="${location.image}" alt="${location.name}">
          <div class="location-info">
            <h3>${location.name}</h3>
            <p><i class="icon-map-pin"></i> ${location.count} Properties</p>
          </div>
        `;
        
        locationsGrid.appendChild(locationCard);
      });
    },
    renderFooter() {
      const template = document.getElementById('footer-template');
      const clone = document.importNode(template.content, true);
      document.querySelector('.home-page').appendChild(clone);
    },
    createPropertyCard(property) {
      const card = document.createElement('div');
      card.classList.add('property-card');
      card.dataset.id = property.id;
      
      // Create star rating display
      const stars = '★'.repeat(Math.floor(property.rating)) + 
                    (property.rating % 1 >= 0.5 ? '½' : '') + 
                    '☆'.repeat(5 - Math.ceil(property.rating));
      
      card.innerHTML = `
        <div class="property-image">
          <img src="${property.images[0]}" alt="${property.name}">
          <span class="property-price">KSH ${property.price.toLocaleString()}/night</span>
          <button class="favorite-btn">♡</button>
        </div>
        <div class="property-content">
          <h3 class="property-name">${property.name}</h3>
          <p class="property-location"><i class="icon-map-pin"></i> ${property.location}</p>
          <div class="property-stats">
            <span><i class="icon-bed"></i> ${property.bedrooms} Beds</span>
            <span><i class="icon-bath"></i> ${property.bathrooms} Baths</span>
            <span><i class="icon-users"></i> ${property.maxGuests} Guests</span>
          </div>
          <div class="property-rating">
            <span class="stars">${stars}</span>
            <span class="review-count">(${property.reviewCount})</span>
          </div>
        </div>
      `;
      
      // Add click event to navigate to property details
      card.addEventListener('click', (e) => {
        if (!e.target.classList.contains('favorite-btn')) {
          window.location.hash = `#/property/${property.id}`;
        }
      });
      
      return card;
    },
    setupEventListeners() {
      // Hero indicators
      document.querySelectorAll('.indicator').forEach(indicator => {
        indicator.addEventListener('click', (e) => {
          this.changeHeroSlide(parseInt(e.target.dataset.index));
        });
      });
      
      // Carousel navigation
      document.querySelector('.scroll-left').addEventListener('click', () => {
        const carousel = document.querySelector('.properties-carousel');
        carousel.scrollBy({ left: -300, behavior: 'smooth' });
      });
      
      document.querySelector('.scroll-right').addEventListener('click', () => {
        const carousel = document.querySelector('.properties-carousel');
        carousel.scrollBy({ left: 300, behavior: 'smooth' });
      });
      
      // Mobile menu toggle
      const menuToggle = document.querySelector('.mobile-menu-toggle');
      menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        document.querySelector('.mobile-menu').classList.toggle('active');
      });
      
      // Favorite buttons
      document.querySelectorAll('.favorite-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          btn.classList.toggle('active');
          btn.textContent = btn.classList.contains('active') ? '♥' : '♡';
        });
      });
    },
    startHeroSlideshow() {
      let currentSlide = 0;
      
      const nextSlide = () => {
        currentSlide = (currentSlide + 1) % heroImages.length;
        this.changeHeroSlide(currentSlide);
      };
      
      heroSlideInterval = setInterval(nextSlide, 6000);
    },
    changeHeroSlide(index) {
      const hero = document.querySelector('.hero');
      const indicators = document.querySelectorAll('.indicator');
      
      // Update background image with fade effect
      hero.style.opacity = '0';
      setTimeout(() => {
        hero.style.backgroundImage = `
          linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.5)), 
          url(${heroImages[index].src})
        `;
        hero.style.opacity = '1';
      }, 300);
      
      // Update indicators
      indicators.forEach(ind => ind.classList.remove('active'));
      indicators[index].classList.add('active');
    },
    teardown() {
      clearInterval(heroSlideInterval);
    }
  },
  
  // Properties list page controller
  properties: {
    init() {
      this.render();
      this.setupEventListeners();
      this.applyQueryFilters();
    },
    render() {
      const template = document.getElementById('properties-template');
      const clone = document.importNode(template.content, true);
      appContainer.innerHTML = '';
      appContainer.appendChild(clone);
      
      this.renderNavbar();
      this.renderProperties(properties);
      this.renderFooter();
    },
    renderNavbar() {
      const template = document.getElementById('navbar-template');
      const clone = document.importNode(template.content, true);
      document.querySelector('.properties-page').prepend(clone);
      
      // Highlight active link
      document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href') === '#/properties') {
          link.classList.add('active');
        }
      });
    },
    renderProperties(propertiesToRender) {
      const propertiesGrid = document.querySelector('.properties-grid');
      propertiesGrid.innerHTML = '';
      
      if (propertiesToRender.length === 0) {
        propertiesGrid.innerHTML = `
          <div class="no-results">
            <p>No properties found matching your criteria.</p>
            <button class="btn btn-outline clear-filters">Clear all filters</button>
          </div>
        `;
        return;
      }
      
      propertiesToRender.forEach(property => {
        const propertyCard = this.createPropertyCard(property);
        propertiesGrid.appendChild(propertyCard);
      });
    },
    renderFooter() {
      const template = document.getElementById('footer-template');
      const clone = document.importNode(template.content, true);
      document.querySelector('.properties-page').appendChild(clone);
    },
    createPropertyCard(property) {
      const card = document.createElement('div');
      card.classList.add('property-card');
      card.dataset.id = property.id;
      
      // Create star rating display
      const stars = '★'.repeat(Math.floor(property.rating)) + 
                    (property.rating % 1 >= 0.5 ? '½' : '') + 
                    '☆'.repeat(5 - Math.ceil(property.rating));
      
      card.innerHTML = `
        <div class="property-image">
          <img src="${property.images[0]}" alt="${property.name}">
          <span class="property-price">KSH ${property.price.toLocaleString()}/night</span>
          <button class="favorite-btn">♡</button>
        </div>
        <div class="property-content">
          <h3 class="property-name">${property.name}</h3>
          <p class="property-location"><i class="icon-map-pin"></i> ${property.location}</p>
          <div class="property-stats">
            <span><i class="icon-bed"></i> ${property.bedrooms} Beds</span>
            <span><i class="icon-bath"></i> ${property.bathrooms} Baths</span>
            <span><i class="icon-users"></i> ${property.maxGuests} Guests</span>
          </div>
          <div class="property-rating">
            <span class="stars">${stars}</span>
            <span class="review-count">(${property.reviewCount})</span>
          </div>
        </div>
      `;
      
      // Add click event to navigate to property details
      card.addEventListener('click', (e) => {
        if (!e.target.classList.contains('favorite-btn')) {
          window.location.hash = `#/property/${property.id}`;
        }
      });
      
      return card;
    },
    setupEventListeners() {
      // Mobile menu toggle
      const menuToggle = document.querySelector('.mobile-menu-toggle');
      menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        document.querySelector('.mobile-menu').classList.toggle('active');
      });
      
      // Price filter
      document.querySelector('.apply-filter').addEventListener('click', () => {
        this.applyFilters();
      });
      
      // Property type filters
      document.querySelectorAll('.checkbox-filters input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', () => {
          this.applyFilters();
        });
      });
      
      // Clear filters button
      document.querySelectorAll('.clear-filters').forEach(button => {
        button.addEventListener('click', () => {
          this.clearFilters();
        });
      });
      
      // Favorite buttons
      document.addEventListener('click', (e) => {
        if (e.target.classList.contains('favorite-btn')) {
          e.stopPropagation();
          e.target.classList.toggle('active');
          e.target.textContent = e.target.classList.contains('active') ? '♥' : '♡';
        }
      });
    },
    applyFilters() {
      // Get filter values
      const minPrice = parseInt(document.getElementById('min-price').value) || 0;
      const maxPrice = parseInt(document.getElementById('max-price').value) || Infinity;
      
      const propertyTypes = Array.from(
        document.querySelectorAll('.filter-section:nth-child(2) input[type="checkbox"]:checked')
      ).map(cb => cb.value);
      
      const minBedrooms = Math.min(...Array.from(
        document.querySelectorAll('.filter-section:nth-child(3) input[type="checkbox"]:checked')
      ).map(cb => parseInt(cb.value)) || [0]);
      
      const amenities = Array.from(
        document.querySelectorAll('.filter-section:nth-child(4) input[type="checkbox"]:checked')
      ).map(cb => cb.value);
      
      // Filter properties
      const filtered = properties.filter(property => {
        // Price filter
        if (property.price < minPrice || property.price > maxPrice) return false;
        
        // Property type filter
        if (propertyTypes.length > 0 && !propertyTypes.includes(property.type)) return false;
        
        // Bedrooms filter
        if (minBedrooms > 0 && property.bedrooms < minBedrooms) return false;
        
        // Amenities filter
        if (amenities.length > 0) {
          if (!amenities.every(amenity => {
            const amenityText = amenity.toLowerCase();
            return property.amenities.some(a => a.toLowerCase().includes(amenityText));
          })) {
            return false;
          }
        }
        
        return true;
      });
      
      this.renderProperties(filtered);
    },
    applyQueryFilters() {
      const queryParams = router.getQueryParams();
      
      if (queryParams.location) {
        const locationFilter = decodeURIComponent(queryParams.location);
        const filtered = properties.filter(p => 
          p.location.includes(locationFilter)
        );
        
        this.renderProperties(filtered);
        
        // Update UI to show active filter
        document.querySelector('.properties-header p').textContent = 
          `Properties in ${locationFilter}`;
      }
    },
    clearFilters() {
      // Reset inputs
      document.getElementById('min-price').value = '';
      document.getElementById('max-price').value = '';
      
      document.querySelectorAll('.checkbox-filters input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
      });
      
      // Reset display
      this.renderProperties(properties);
      document.querySelector('.properties-header p').textContent = 
        'Discover our collection of luxury properties across Kenya';
      
      // Reset URL if it has query params
      if (window.location.hash.includes('?')) {
        window.location.hash = '#/properties';
      }
    },
    teardown() {
      // Nothing specific to tear down
    }
  },
  
  // Property detail page controller
  propertyDetail: {
    init(params) {
      this.propertyId = params.id;
      this.property = properties.find(p => p.id === this.propertyId);
      
      if (!this.property) {
        router.navigateTo('#/404');
        return;
      }
      
      this.render();
      this.setupEventListeners();
      this.setupBookingCalculator();
    },
    render() {
      const template = document.getElementById('property-detail-template');
      const clone = document.importNode(template.content, true);
      appContainer.innerHTML = '';
      appContainer.appendChild(clone);
      
      this.renderNavbar();
      this.renderPropertyDetails();
      this.renderFooter();
    },
    renderNavbar() {
      const template = document.getElementById('navbar-template');
      const clone = document.importNode(template.content, true);
      document.querySelector('.property-detail-page').prepend(clone);
      
      // No active link for detail page
    },
    renderPropertyDetails() {
      // Set property title and meta
      document.querySelector('.property-title').textContent = this.property.name;
      document.querySelector('.property-location span').textContent = this.property.location;
      document.querySelector('.property-rating span').textContent = 
        `${this.property.rating} · ${this.property.reviewCount} reviews`;
      
      // Render gallery
      this.renderGallery();
      
      // Render property stats
      this.renderPropertyStats();
      
      // Render description
      document.querySelector('.description-text').textContent = this.property.description;
      
      // Render amenities
      this.renderAmenities();
      
      // Render location
      document.querySelector('.location-address').innerHTML = `
        <i class="icon-map-pin"></i>
        <span>${this.property.location}, Kenya</span>
      `;
      
      document.querySelector('.location-map iframe').src = 
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.3585440526!2d36.68258752791502!3d-1.3028617916137705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1650984626975!5m2!1sen!2sus";
      
      // Render booking form
      this.renderBookingForm();
    },
    renderGallery() {
      const galleryContainer = document.querySelector('.property-gallery');
      const galleryGrid = document.createElement('div');
      galleryGrid.classList.add('gallery-grid');
      
      // Create main image element
      const mainImageContainer = document.createElement('div');
      mainImageContainer.classList.add('gallery-item', 'gallery-main');
      mainImageContainer.innerHTML = `<img src="${this.property.images[0]}" alt="${this.property.name}">`;
      galleryGrid.appendChild(mainImageContainer);
      
      // Add additional images (up to 4 more)
      const additionalImages = this.property.images.slice(1, 5);
      additionalImages.forEach((image, index) => {
        const imageContainer = document.createElement('div');
        imageContainer.classList.add('gallery-item');
        imageContainer.innerHTML = `<img src="${image}" alt="${this.property.name} - Photo ${index + 2}">`;
        galleryGrid.appendChild(imageContainer);
      });
      
      galleryContainer.insertBefore(galleryGrid, galleryContainer.firstChild);
      
      // Set up gallery for lightbox functionality
      currentImages = this.property.images;
      currentCaptions = this.property.images.map((_, i) => 
        imageCaptions[i] ? `${imageCaptions[i]} • ${i+1}/${this.property.images.length}` : `Image ${i+1} • ${i+1}/${this.property.images.length}`
      );
    },
    renderPropertyStats() {
      const statsContainer = document.querySelector('.property-stats-grid');
      
      const stats = [
        { icon: 'icon-bed', label: 'Bedrooms', value: this.property.bedrooms },
        { icon: 'icon-bath', label: 'Bathrooms', value: this.property.bathrooms },
        { icon: 'icon-users', label: 'Guests', value: this.property.maxGuests },
        { icon: 'icon-bed', label: 'Beds', value: this.property.bedrooms * 2 }
      ];
      
      stats.forEach(stat => {
        const statCard = document.createElement('div');
        statCard.classList.add('stat-card');
        statCard.innerHTML = `
          <div class="stat-label">
            <i class="${stat.icon}"></i>
            ${stat.label}
          </div>
          <div class="stat-value">${stat.value}</div>
        `;
        statsContainer.appendChild(statCard);
      });
    },
    renderAmenities() {
      // Preview amenities (first 6)
      const previewContainer = document.querySelector('.amenities-preview');
      this.property.amenities.slice(0, 6).forEach(amenity => {
        const amenityItem = document.createElement('div');
        amenityItem.classList.add('amenity-item');
        amenityItem.innerHTML = `<i class="icon-plus"></i> ${amenity}`;
        previewContainer.appendChild(amenityItem);
      });
      
      // Full amenities list (grouped)
      const amenityGroups = [
        { title: "General", icon: "icon-plus", items: [] },
        { title: "Kitchen & Laundry", icon: "icon-plus", items: [] },
        { title: "Outdoor & Views", icon: "icon-plus", items: [] },
        { title: "Facilities & Services", icon: "icon-plus", items: [] },
        { title: "Entertainment", icon: "icon-plus", items: [] },
        { title: "Parking & Transport", icon: "icon-plus", items: [] }
      ];
      
      // Group amenities
      this.property.amenities.forEach(amenity => {
        const amenityLower = amenity.toLowerCase();
        
        if (amenityLower.includes("wifi") || amenityLower.includes("air conditioning") || 
            amenityLower.includes("security") || amenityLower.includes("check-in")) {
          amenityGroups[0].items.push(amenity);
        }
        else if (amenityLower.includes("kitchen") || amenityLower.includes("washer") || 
                amenityLower.includes("coffee") || amenityLower.includes("appliance")) {
          amenityGroups[1].items.push(amenity);
        }
        else if (amenityLower.includes("view") || amenityLower.includes("balcony") || 
                amenityLower.includes("terrace") || amenityLower.includes("garden")) {
          amenityGroups[2].items.push(amenity);
        }
        else if (amenityLower.includes("pool") || amenityLower.includes("gym") || 
                amenityLower.includes("spa") || amenityLower.includes("cleaning")) {
          amenityGroups[3].items.push(amenity);
        }
        else if (amenityLower.includes("tv") || amenityLower.includes("netflix") || 
                amenityLower.includes("entertainment")) {
          amenityGroups[4].items.push(amenity);
        }
        else if (amenityLower.includes("parking") || amenityLower.includes("garage")) {
          amenityGroups[5].items.push(amenity);
        }
        else {
          // Other amenities go to General
          amenityGroups[0].items.push(amenity);
        }
      });
      
      // Render grouped amenities
      const fullContainer = document.querySelector('.amenities-full');
      amenityGroups.forEach(group => {
        if (group.items.length === 0) return;
        
        const groupElement = document.createElement('div');
        groupElement.classList.add('amenities-group');
        
        groupElement.innerHTML = `
          <div class="amenities-group-title">
            <i class="${group.icon}"></i> ${group.title}
          </div>
        `;
        
        const itemsContainer = document.createElement('div');
        itemsContainer.classList.add('amenities-group-items');
        
        group.items.forEach(item => {
          const itemElement = document.createElement('div');
          itemElement.classList.add('amenity-item');
          itemElement.innerHTML = `<i class="icon-plus"></i> ${item}`;
          itemsContainer.appendChild(itemElement);
        });
        
        groupElement.appendChild(itemsContainer);
        fullContainer.appendChild(groupElement);
      });
    },
    renderBookingForm() {
      document.querySelector('.price').textContent = `KSH ${this.property.price.toLocaleString()}`;
      document.querySelector('.nightly-price').textContent = this.property.price.toLocaleString();
      
      // Set minimum date for check-in to today
      const today = new Date();
      const tomorrow = new Date(today);
      tomorrow.setDate(today.getDate() + 1);
      
      const checkInInput = document.getElementById('check-in');
      const checkOutInput = document.getElementById('check-out');
      
      checkInInput.min = today.toISOString().split('T')[0];
      checkInInput.value = today.toISOString().split('T')[0];
      
      checkOutInput.min = tomorrow.toISOString().split('T')[0];
      checkOutInput.value = tomorrow.toISOString().split('T')[0];
      
      // Populate guests dropdown
      const guestsSelect = document.getElementById('guests');
      for (let i = 1; i <= this.property.maxGuests; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i === 1 ? '1 guest' : `${i} guests`;
        guestsSelect.appendChild(option);
      }
    },
    renderFooter() {
      const template = document.getElementById('footer-template');
      const clone = document.importNode(template.content, true);
      document.querySelector('.property-detail-page').appendChild(clone);
    },
    setupEventListeners() {
      // Mobile menu toggle
      const menuToggle = document.querySelector('.mobile-menu-toggle');
      menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        document.querySelector('.mobile-menu').classList.toggle('active');
      });
      
      // Show/hide amenities
      const showAmenitiesBtn = document.querySelector('.show-amenities');
      showAmenitiesBtn.addEventListener('click', () => {
        const fullAmenities = document.querySelector('.amenities-full');
        fullAmenities.classList.toggle('hidden');
        showAmenitiesBtn.textContent = fullAmenities.classList.contains('hidden') 
          ? 'Show all amenities' 
          : 'Hide amenities';
      });
      
      // Gallery images click for lightbox
      document.querySelectorAll('.gallery-item').forEach((item, index) => {
        item.addEventListener('click', () => {
          this.openLightbox(index);
        });
      });
      
      // Show all photos button
      document.querySelector('.show-all-btn').addEventListener('click', () => {
        this.openLightbox(0);
      });
      
      // Book now button
      document.querySelector('.book-now-btn').addEventListener('click', () => {
        alert('Booking functionality would be implemented here!');
      });
    },
    openLightbox(index) {
      currentImageIndex = index;
      lightboxImage.src = currentImages[currentImageIndex];
      lightboxCaption.textContent = currentCaptions[currentImageIndex];
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    },
    setupBookingCalculator() {
      const checkInInput = document.getElementById('check-in');
      const checkOutInput = document.getElementById('check-out');
      const guestsSelect = document.getElementById('guests');
      
      const updateBookingSummary = () => {
        const checkIn = new Date(checkInInput.value);
        const checkOut = new Date(checkOutInput.value);
        
        // Calculate number of nights
        const timeDiff = checkOut.getTime() - checkIn.getTime();
        const nights = Math.ceil(timeDiff / (1000 * 3600 * 24));
        
        if (nights <= 0) {
          checkOutInput.value = new Date(checkIn.getTime() + 86400000).toISOString().split('T')[0];
          updateBookingSummary();
          return;
        }
        
        // Update the summary
        document.querySelector('.nights-count').textContent = nights;
        
        const subtotal = this.property.price * nights;
        document.querySelector('.subtotal').textContent = `KSH ${subtotal.toLocaleString()}`;
        
        const cleaningFee = Math.round(this.property.price * 0.1);
        document.querySelector('.cleaning-fee').textContent = `KSH ${cleaningFee.toLocaleString()}`;
        
        const serviceFee = Math.round(subtotal * 0.15);
        document.querySelector('.service-fee').textContent = `KSH ${serviceFee.toLocaleString()}`;
        
        const total = subtotal + cleaningFee + serviceFee;
        document.querySelector('.total-price').textContent = `KSH ${total.toLocaleString()}`;
      };
      
      checkInInput.addEventListener('change', () => {
        // Ensure check-out is after check-in
        const checkIn = new Date(checkInInput.value);
        const checkOut = new Date(checkOutInput.value);
        
        if (checkIn >= checkOut) {
          const nextDay = new Date(checkIn);
          nextDay.setDate(nextDay.getDate() + 1);
          checkOutInput.value = nextDay.toISOString().split('T')[0];
        }
        
        updateBookingSummary();
      });
      
      checkOutInput.addEventListener('change', updateBookingSummary);
      guestsSelect.addEventListener('change', updateBookingSummary);
      
      // Initial calculation
      updateBookingSummary();
    },
    teardown() {
      // Nothing specific to tear down
    }
  },
  
  // 404 Not Found page controller
  notFound: {
    init() {
      this.render();
    },
    render() {
      const template = document.getElementById('not-found-template');
      const clone = document.importNode(template.content, true);
      appContainer.innerHTML = '';
      appContainer.appendChild(clone);
      
      this.renderNavbar();
    },
    renderNavbar() {
      const template = document.getElementById('navbar-template');
      const clone = document.importNode(template.content, true);
      document.querySelector('.not-found-page').prepend(clone);
    },
    teardown() {
      // Nothing specific to tear down
    }
  }
};

// Lightbox functionality
function setupLightbox() {
  closeLightboxBtn.addEventListener('click', closeLightbox);
  
  prevBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + currentImages.length) % currentImages.length;
    updateLightboxImage();
  });
  
  nextBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % currentImages.length;
    updateLightboxImage();
  });
  
  // Close on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      closeLightbox();
    } else if (e.key === 'ArrowLeft' && lightbox.classList.contains('active')) {
      currentImageIndex = (currentImageIndex - 1 + currentImages.length) % currentImages.length;
      updateLightboxImage();
    } else if (e.key === 'ArrowRight' && lightbox.classList.contains('active')) {
      currentImageIndex = (currentImageIndex + 1) % currentImages.length;
      updateLightboxImage();
    }
  });
  
  // Touch swipe functionality for mobile
  let touchStartX = 0;
  let touchEndX = 0;
  
  lightbox.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });
  
  lightbox.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });
  
  function handleSwipe() {
    if (touchStartX - touchEndX > 50) {
      // Swipe left, show next image
      currentImageIndex = (currentImageIndex + 1) % currentImages.length;
      updateLightboxImage();
    } else if (touchEndX - touchStartX > 50) {
      // Swipe right, show previous image
      currentImageIndex = (currentImageIndex - 1 + currentImages.length) % currentImages.length;
      updateLightboxImage();
    }
  }
}

function updateLightboxImage() {
  lightboxImage.src = currentImages[currentImageIndex];
  lightboxCaption.textContent = currentCaptions[currentImageIndex];
}

function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Set up the router
  const router = new Router();
  
  // Register routes
  router
    .addRoute('#/', controllers.home)
    .addRoute('#/properties', controllers.properties)
    .addRoute('#/property/:id', controllers.propertyDetail)
    .addRoute('#/404', controllers.notFound);
  
  // Set up global components
  setupLightbox();
  
  // Handle navbar scroll effect
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  });
  
  // Add convenience property to window for debugging
  window.router = router;
});

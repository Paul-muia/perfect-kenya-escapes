
// Sample data for the luxury properties app
const properties = [
  {
    id: "1",
    name: "Luxury Penthouse with City Views",
    description: "Experience the height of luxury living in this stunning penthouse apartment with panoramic views of Nairobi's skyline. This exquisite property features high-end finishes, a private roof terrace, and state-of-the-art amenities.",
    location: "Westlands, Nairobi",
    price: 25000,
    bedrooms: 3,
    bathrooms: 3.5,
    maxGuests: 6,
    size: 2400, // in square feet
    type: "penthouse",
    rating: 4.9,
    reviewCount: 42,
    featured: true,
    amenities: [
      "Fully equipped modern kitchen",
      "High-speed WiFi",
      "Private roof terrace",
      "Floor-to-ceiling windows",
      "Air conditioning",
      "Smart home system",
      "24/7 security",
      "Concierge service",
      "Gym access",
      "Infinity pool",
      "Underground parking",
      "Designer furnishings",
      "Walk-in closets",
      "Marble bathrooms",
      "Rain showers",
      "Home entertainment system",
      "Electric vehicle charging"
    ],
    images: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1600607687644-c7f34b2e6232?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1600566752734-2a0e4f18d2c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    ]
  },
  {
    id: "2",
    name: "Serene Villa with Garden & Pool",
    description: "Escape to tranquility in this beautiful villa nestled in the lush suburbs of Karen. Featuring a private garden, swimming pool, and spacious living areas, this property offers the perfect retreat from city life while maintaining proximity to all amenities.",
    location: "Karen, Nairobi",
    price: 35000,
    bedrooms: 5,
    bathrooms: 4,
    maxGuests: 10,
    size: 4500, // in square feet
    type: "villa",
    rating: 4.8,
    reviewCount: 36,
    featured: true,
    amenities: [
      "Private swimming pool",
      "Landscaped garden",
      "Outdoor dining area",
      "BBQ facilities",
      "Fully equipped kitchen",
      "High-speed WiFi",
      "Air conditioning",
      "Home office",
      "Fireplace",
      "Security system",
      "Maid's quarters",
      "Parking for 4 cars",
      "Laundry room",
      "Entertainment room",
      "Satellite TV",
      "Garden maintenance included"
    ],
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1475&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80",
      "https://images.unsplash.com/photo-1600585153490-76fb20a32601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    ]
  },
  {
    id: "3",
    name: "Modern Beachfront Apartment",
    description: "Wake up to the sound of waves in this stunning beachfront apartment in Mombasa. With direct access to the pristine white sand beach, this modern and stylish property offers the ultimate coastal living experience with breathtaking ocean views.",
    location: "Nyali, Mombasa",
    price: 18000,
    bedrooms: 2,
    bathrooms: 2,
    maxGuests: 4,
    size: 1600, // in square feet
    type: "apartment",
    rating: 4.7,
    reviewCount: 59,
    featured: true,
    amenities: [
      "Direct beach access",
      "Ocean view balcony",
      "Fully equipped kitchen",
      "Air conditioning",
      "High-speed WiFi",
      "Swimming pool",
      "Fitness center",
      "24/7 security",
      "Parking space",
      "Satellite TV",
      "Washing machine",
      "Beach towels and equipment",
      "On-site restaurant",
      "Daily housekeeping available",
      "Airport transfer service"
    ],
    images: [
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1596178060810-72c633534441?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1590490359683-658d3d23f972?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1575403717658-d9db64b6e516?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
    ]
  },
  {
    id: "4",
    name: "Elegant Townhouse in Lavington",
    description: "This sophisticated townhouse offers modern luxury living in the heart of Lavington. With high-end finishes, spacious rooms, and a private garden, it's perfect for those seeking comfort and convenience in an upscale neighborhood.",
    location: "Lavington, Nairobi",
    price: 22000,
    bedrooms: 3,
    bathrooms: 2.5,
    maxGuests: 6,
    size: 2200, // in square feet
    type: "house",
    rating: 4.6,
    reviewCount: 28,
    featured: false,
    amenities: [
      "Private garden",
      "Modern kitchen with appliances",
      "High-speed WiFi",
      "Air conditioning",
      "Smart home features",
      "Security system",
      "Dedicated parking",
      "Laundry room",
      "Home office space",
      "Entertainment system",
      "Outdoor seating area",
      "Fireplace",
      "Central heating",
      "Guest bathroom",
      "Storage space"
    ],
    images: [
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1578&q=80",
      "https://images.unsplash.com/photo-1588854337236-6889d631faa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    ]
  },
  {
    id: "5",
    name: "Safari Lodge Retreat",
    description: "Experience the wild in comfort at this luxurious safari lodge located near Maasai Mara. With stunning views of the savannah and wildlife, this property offers an authentic safari experience without compromising on modern amenities.",
    location: "Narok County",
    price: 45000,
    bedrooms: 2,
    bathrooms: 2,
    maxGuests: 4,
    size: 1800, // in square feet
    type: "lodge",
    rating: 4.9,
    reviewCount: 45,
    featured: true,
    amenities: [
      "Panoramic savannah views",
      "Private veranda",
      "Guided safari tours",
      "Full board meals",
      "Swimming pool",
      "Campfire area",
      "WiFi in common areas",
      "Air conditioning",
      "Daily housekeeping",
      "Airport transfers",
      "Laundry service",
      "Restaurant and bar",
      "Safari equipment",
      "Cultural experiences",
      "Star gazing deck"
    ],
    images: [
      "https://images.unsplash.com/photo-1612698093158-e07ac200d44e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
      "https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1481&q=80",
      "https://images.unsplash.com/photo-1611043714658-af3e56bc5299?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    ]
  },
];

// Sample location data
const locations = [
  {
    name: "Nairobi",
    count: 12,
    image: "https://images.unsplash.com/photo-1611348524140-53c9a25263d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
  },
  {
    name: "Mombasa",
    count: 8,
    image: "https://images.unsplash.com/photo-1596005554384-d293674c91d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
  },
  {
    name: "Diani",
    count: 5,
    image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdbc86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
  },
  {
    name: "Malindi",
    count: 4,
    image: "https://images.unsplash.com/photo-1574060634302-9711d69f29f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
  }
];

// Sample testimonials data
const testimonials = [
  {
    name: "Jane Doe",
    location: "New York, USA",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    rating: 5,
    text: "Absolutely loved my stay at the Luxury Penthouse! The views were breathtaking and the amenities were top-notch. Will definitely be coming back!"
  },
  {
    name: "John Smith",
    location: "London, UK",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    rating: 4,
    text: "The Serene Villa exceeded our expectations. Perfect for our family vacation. The pool and garden were spectacular."
  },
  {
    name: "Emily Johnson",
    location: "Sydney, Australia",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    rating: 5,
    text: "My stay at the Modern Beachfront Apartment was incredible. Waking up to ocean views every morning was magical!"
  }
];

// Image captions for property galleries
const imageCaptions = [
  "Main View",
  "Living Room",
  "Kitchen",
  "Master Bedroom",
  "Bathroom",
  "Balcony",
  "Exterior",
  "Amenities",
];

// Hero images for the homepage
const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Luxury villa with infinity pool overlooking Nairobi skyline"
  },
  {
    src: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Modern apartment with floor to ceiling windows in Nairobi"
  },
  {
    src: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Elegant penthouse with panoramic city views"
  }
];

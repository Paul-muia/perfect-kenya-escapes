export interface Property {
  id: string;
  name: string;
  location: string;
  price: number;
  currency: string;
  rating: number;
  reviewCount: number;
  bedrooms: number;
  bathrooms: number;
  maxGuests: number;
  sqm: number;
  amenities: string[];
  description: string;
  shortDescription: string;
  images: string[];
  featured: boolean;
  popular: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  authorImage: string;
  date: string;
  readTime: string;
  coverImage: string;
  category: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  image: string;
  rating: number;
  text: string;
}

export interface Team {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export const properties: Property[] = [
  {
    id: "p001",
    name: "Skyline Penthouse",
    location: "Nairobi",
    price: 65250,
    currency: "KSH",
    rating: 4.9,
    reviewCount: 87,
    bedrooms: 3,
    bathrooms: 3.5,
    maxGuests: 6,
    sqm: 240,
    amenities: [
      "High-speed WiFi",
      "Smart home system",
      "Floor-to-ceiling windows",
      "Private infinity pool",
      "24/7 concierge & security",
      "Fully equipped kitchen",
      "In-unit washer and dryer",
      "Central air conditioning",
      "City view terrace",
      "Private covered parking",
      "Smart TV with Netflix",
      "Premium coffee machine",
      "Dedicated workspace",
      "Keyless entry",
      "Gym access",
      "Daily housekeeping",
      "Premium linens & towels",
      "Home theater system",
      "Wine refrigerator",
      "Private elevator access"
    ],
    description: "Experience the height of luxury in this stunning penthouse with panoramic views of Nairobi's skyline. This spacious 3-bedroom sanctuary features floor-to-ceiling windows, a private terrace with an infinity pool, and impeccable modern design. The open-concept living space seamlessly blends with the dining area and gourmet kitchen equipped with top-tier appliances. Each bedroom offers en-suite bathrooms with rainfall showers and deep soaking tubs. The master suite includes a walk-in closet and private balcony. Additional amenities include a home theater, smart home technology, and 24/7 concierge service. Located in the prestigious Westlands district, you'll be minutes away from high-end restaurants, shopping, and cultural attractions.",
    shortDescription: "Spectacular penthouse with panoramic views, infinity pool, and luxurious modern amenities in Nairobi's upscale Westlands district.",
    images: [
      "https://images.unsplash.com/photo-1600607687644-a6ed68010b2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c349279?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    featured: true,
    popular: true
  },
  {
    id: "p002",
    name: "Serene Garden Villa",
    location: "Karen, Nairobi",
    price: 84100,
    currency: "KSH",
    rating: 4.95,
    reviewCount: 54,
    bedrooms: 4,
    bathrooms: 4,
    maxGuests: 8,
    sqm: 350,
    amenities: [
      "Private garden", 
      "Outdoor pool", 
      "Fireplace", 
      "Chef's kitchen", 
      "Home office", 
      "BBQ area", 
      "Security system", 
      "High-speed WiFi",
      "Housekeeping"
    ],
    description: "Nestled in the prestigious Karen neighborhood, this expansive villa offers a perfect blend of elegance and comfort. Set on a lush one-acre property with mature gardens, this 4-bedroom home provides a tranquil retreat from city life while remaining conveniently close to Nairobi's attractions. The property features a large outdoor swimming pool, multiple terraces, and a covered outdoor dining area perfect for entertaining. Inside, you'll find spacious living areas with high ceilings, a chef's kitchen with premium appliances, and a cozy fireplace lounge. Each bedroom has its own character and en-suite bathroom, with the master suite offering a luxurious spa-like experience. Additional amenities include daily housekeeping, a security system, and proximity to Karen's upscale shopping centers and the renowned Giraffe Centre.",
    shortDescription: "Elegant 4-bedroom villa with private pool and gardens in Nairobi's exclusive Karen neighborhood, offering tranquility and sophisticated living.",
    images: [
      "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
      "https://images.unsplash.com/photo-1614622650937-97c6eabc931d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1614622233509-11e0bdc9cd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    featured: true,
    popular: false
  },
  {
    id: "p003",
    name: "Riverside Modern Apartment",
    location: "Westlands, Nairobi",
    price: 46400,
    currency: "KSH",
    rating: 4.8,
    reviewCount: 63,
    bedrooms: 2,
    bathrooms: 2,
    maxGuests: 4,
    sqm: 130,
    amenities: [
      "Balcony with city view", 
      "Gym", 
      "Secure parking", 
      "Smart TV", 
      "Fully equipped kitchen", 
      "Washing machine", 
      "Building security", 
      "High-speed WiFi"
    ],
    description: "This sleek, contemporary apartment in Westlands offers sophisticated urban living with stunning views of the Nairobi River. The bright, open-plan design features floor-to-ceiling windows that flood the space with natural light. The two bedrooms are tastefully furnished with premium linens and ample storage. The modern kitchen is equipped with high-end appliances perfect for preparing meals or entertaining guests. Enjoy morning coffee or evening drinks on the private balcony overlooking the river and city skyline. Building amenities include a well-equipped gym, secure underground parking, and 24-hour security. The prime location puts you within walking distance of Westlands' best restaurants, cafes, and shopping centers, while Nairobi's business district is just a short drive away.",
    shortDescription: "Contemporary 2-bedroom apartment with river views, modern amenities, and a prime location in Westlands, Nairobi's vibrant commercial hub.",
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1560448204-61dc36dc98c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    featured: false,
    popular: true
  },
  {
    id: "p004",
    name: "Beachfront Paradise",
    location: "Diani",
    price: 98600,
    currency: "KSH",
    rating: 5.0,
    reviewCount: 42,
    bedrooms: 5,
    bathrooms: 5,
    maxGuests: 10,
    sqm: 420,
    amenities: [
      "Direct beach access", 
      "Infinity pool", 
      "Private chef", 
      "Outdoor dining", 
      "Water sports equipment", 
      "Air conditioning", 
      "Housekeeping", 
      "High-speed WiFi",
      "Boat excursions"
    ],
    description: "Experience absolute beachfront luxury in this stunning 5-bedroom villa situated on Diani's pristine white sand beach. The property offers uninterrupted views of the Indian Ocean and direct access to one of Kenya's most beautiful beaches. The open-concept design blends indoor and outdoor living with multiple terraces, an infinity pool overlooking the ocean, and a private path to the beach. The professionally designed interior features coastal elegance with high-end furnishings, local artwork, and a soothing color palette. All five bedrooms have ocean views and en-suite bathrooms, with the master suite including a private terrace. Services include a private chef who can prepare local and international cuisine, daily housekeeping, and optional boat excursions. The property is secluded yet just a short drive from Diani's restaurants, shops, and activities like snorkeling, diving, and kite surfing.",
    shortDescription: "Exquisite 5-bedroom beachfront villa with infinity pool and private chef on Diani's pristine white sands, offering ultimate coastal luxury.",
    images: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1523592121529-f6dde35f079e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    featured: true,
    popular: true
  },
  {
    id: "p005",
    name: "Heritage Townhouse",
    location: "Malindi",
    price: 40600,
    currency: "KSH",
    rating: 4.85,
    reviewCount: 38,
    bedrooms: 3,
    bathrooms: 2.5,
    maxGuests: 6,
    sqm: 180,
    amenities: [
      "Rooftop terrace", 
      "Courtyard", 
      "Traditional architecture", 
      "Air conditioning", 
      "Chef available", 
      "Walking distance to beach", 
      "Historic district", 
      "High-speed WiFi"
    ],
    description: "Immerse yourself in the rich cultural heritage of Malindi in this beautifully restored townhouse that blends traditional Swahili architecture with modern comforts. Located in the historic district, this three-bedroom home features authentic carved doors, intricate plasterwork, and a central courtyard that provides natural light and cooling breezes. The rooftop terrace offers panoramic views of the town and ocean – perfect for sunset cocktails. Each bedroom has been individually styled with local craftsmanship and features air conditioning and comfortable beds. The home includes two full bathrooms and one half bath, all with modern fixtures. The kitchen combines traditional elements with contemporary appliances. A private chef can be arranged for authentic coastal cuisine. The property is within walking distance of Malindi's beautiful beaches, markets, and restaurants, allowing you to fully experience the town's unique blend of African, Arab, and European influences.",
    shortDescription: "Restored 3-bedroom Swahili townhouse in Malindi's historic district with rooftop terrace, blending traditional architecture with modern amenities.",
    images: [
      "https://images.unsplash.com/photo-1587051778009-248535e1c17d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1587051707834-763ba55be122?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1434082033009-b81d41d32e1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1576013551627-0fd179090967?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    featured: false,
    popular: false
  },
  {
    id: "p006",
    name: "Safari View Cottage",
    location: "Naivasha",
    price: 49300,
    currency: "KSH",
    rating: 4.9,
    reviewCount: 29,
    bedrooms: 2,
    bathrooms: 2,
    maxGuests: 4,
    sqm: 150,
    amenities: [
      "Lake views", 
      "Wildlife viewing", 
      "Outdoor dining", 
      "Fireplace", 
      "Private garden", 
      "Bird watching", 
      "Hiking trails", 
      "High-speed WiFi",
      "Breakfast included"
    ],
    description: "This charming cottage offers a perfect blend of luxury and wilderness with stunning views over Lake Naivasha and the surrounding landscape. The two-bedroom property is set on private grounds where zebras, giraffes, and antelopes often graze right outside your window. The cottage features spacious interiors with a warm, rustic-chic design incorporating local materials and craftsmanship. Large windows throughout maximize the spectacular views, while a wraparound deck provides the perfect spot for morning coffee or evening sundowners. The master bedroom includes an en-suite bathroom with a deep soaking tub overlooking the lake, while the second bedroom has its own adjacent bathroom with a rainfall shower. The fully equipped kitchen allows for self-catering, although breakfast is included daily. A cozy living room with a fireplace provides a comfortable retreat after days spent exploring nearby Hell's Gate National Park, taking boat rides on the lake, or visiting local wildlife sanctuaries.",
    shortDescription: "Picturesque 2-bedroom lakeside cottage with wildlife viewing and luxurious amenities near Lake Naivasha, perfect for nature lovers.",
    images: [
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1568391173233-5c6c5454cac7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1634649473045-77c7c7c8c3be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    featured: false,
    popular: true
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: "b001",
    title: "The Ultimate Guide to Nairobi's Hidden Gems",
    slug: "nairobi-hidden-gems-guide",
    excerpt: "Discover Nairobi's best-kept secrets, from tucked-away cafés to breathtaking viewpoints that most tourists miss.",
    content: `
      <p>Nairobi, Kenya's vibrant capital, offers much more than the typical tourist attractions. Beyond the well-trodden paths of national parks and shopping malls lie hidden treasures waiting to be discovered by the discerning traveler.</p>

      <h2>Local Culinary Delights</h2>
      <p>Start your exploration at Diamond Plaza, where you'll find some of the city's most authentic Indian cuisine. The food court may look unassuming, but the flavors are extraordinary. For a truly local experience, visit Mama Oliech's restaurant in Kilimani for the best fish and ugali in town – a favorite among locals and visiting celebrities alike.</p>

      <h2>Secret Gardens</h2>
      <p>The Rosslyn Riviera Mall rooftop garden offers panoramic views of the Karura Forest and is surprisingly peaceful despite its urban location. For plant enthusiasts, the rarely visited Nairobi Arboretum houses over 350 tree species and becomes a bird watcher's paradise in the early morning.</p>

      <h2>Cultural Hideaways</h2>
      <p>Skip the conventional museums and head to Brush Tu Art Studio, where you can meet local artists at work in their cooperative space. The monthly Karura Forest concerts showcase Kenya's emerging musicians against a backdrop of natural beauty – check local listings for dates during your stay.</p>

      <h2>Sunset Spots</h2>
      <p>For an unforgettable sunset, make your way to the Water Conservation Park in Gigiri. This little-known spot offers magnificent views of the sun setting behind the city skyline, with the added bonus of often spotting wildlife that comes to drink from the reservoir.</p>

      <h2>Insider Shopping</h2>
      <p>Avoid the tourist markets and visit The Foundry in Industrial Area, where local designers showcase unique furniture, fashion, and art pieces. Come on the first Saturday of the month when they host a makers' market with food, music, and crafts.</p>

      <p>When planning your luxury stay in Nairobi, venturing beyond the obvious attractions will reward you with authentic experiences and memories to treasure long after your visit ends.</p>
    `,
    author: "Grace Mwangi",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    date: "June 15, 2023",
    readTime: "6 min read",
    coverImage: "https://images.unsplash.com/photo-1611348524140-53c9a25263d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Local Guides"
  },
  {
    id: "b002",
    title: "Designing the Perfect Luxury Safari Experience",
    slug: "perfect-luxury-safari-experience",
    excerpt: "How to combine adventure with comfort for an unforgettable Kenyan safari that exceeds all expectations.",
    content: `
      <p>A luxury safari in Kenya is the pinnacle of adventure travel, combining thrilling wildlife encounters with exceptional comfort. The key is in the details – knowing how to create the perfect balance between authentic experience and refined luxury.</p>

      <h2>Choosing the Right Season</h2>
      <p>While the Great Migration usually steals the spotlight from July to October, consider traveling during the "green season" (November to May). You'll find fewer crowds, lush landscapes perfect for photography, newborn animals, and significantly lower rates – even at top luxury properties.</p>

      <h2>Private Conservancies vs. National Parks</h2>
      <p>For the ultimate luxury experience, private conservancies offer exclusive access to pristine wilderness without the crowds and restrictions of national parks. Properties like those in the Maasai Mara conservancies limit the number of guests, allowing for off-road driving, night safaris, and walking experiences that national parks don't permit.</p>

      <h2>The Art of the Mobile Tented Safari</h2>
      <p>For the truly discerning traveler, a private mobile tented safari offers an unparalleled experience. These bespoke journeys set up exclusive camps in remote locations, moving with the wildlife and your interests. Despite being "mobile," these setups can include Persian rugs, en-suite bathrooms with hot water, and gourmet chefs preparing meals under the stars.</p>

      <h2>Beyond Game Drives</h2>
      <p>Elevate your safari with unique experiences: breakfast with giraffes, helicopter excursions to remote lakes, cultural interactions with local communities (arranged respectfully and with mutual benefit), or hot air balloon rides over the savannah at dawn.</p>

      <h2>Combining Coast and Bush</h2>
      <p>The perfect Kenyan luxury itinerary pairs wildlife adventure with coastal relaxation. After the early mornings and excitement of safari, retreat to a private villa on the Indian Ocean. The pristine beaches of Diani or the cultural richness of Lamu provide the ideal complement to your wilderness experience.</p>

      <p>When planning your luxury safari, remember that true luxury lies in the authenticity of experience, the expertise of your guides, and the magic of being immersed in one of the world's most spectacular wildlife environments.</p>
    `,
    author: "Daniel Omondi",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    date: "May 3, 2023",
    readTime: "8 min read",
    coverImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Travel Tips"
  },
  {
    id: "b003",
    title: "The Rise of Luxury Eco-Tourism in Kenya",
    slug: "luxury-eco-tourism-kenya",
    excerpt: "How Kenya's luxury properties are leading the way in sustainable travel without compromising on comfort or experience.",
    content: `
      <p>Kenya is at the forefront of a global shift toward responsible luxury travel. The country's most exclusive properties are proving that sustainability and luxury are not just compatible but complementary, creating meaningful experiences that benefit both guests and the environment.</p>

      <h2>Solar-Powered Sophistication</h2>
      <p>Leading the charge are properties like Segera Retreat in Laikipia, where solar power runs everything from electricity to hot water. The property has eliminated single-use plastics and sources most of its food from its own organic garden, all while offering accommodations that rival the world's finest hotels.</p>

      <h2>Community Integration</h2>
      <p>The most forward-thinking luxury properties have deep connections with local communities. Places like Cottar's 1920s Safari Camp employ from nearby villages, support local schools, and involve communities in conservation efforts. Guests benefit from authentic cultural interactions that go far beyond performative displays.</p>

      <h2>Conservation Success Stories</h2>
      <p>Kenya's conservation model increasingly involves luxury tourism as a funding mechanism. The Lewa Wildlife Conservancy, home to several exclusive properties, has achieved remarkable success protecting rhinos while providing sustainable livelihoods for local communities. When you stay at these properties, a significant portion of your fee directly supports conservation work.</p>

      <h2>Innovative Design</h2>
      <p>Architectural innovation is creating sustainable luxury spaces that enhance rather than detract from their surroundings. The Sanctuary at Ol Lentille uses locally sourced materials and traditional building techniques combined with contemporary design to create villas that stay naturally cool, reducing energy needs while providing stunning spaces that frame the landscape.</p>

      <h2>The Future of Luxury Travel</h2>
      <p>Kenya's eco-luxury properties are setting global standards for responsible tourism. Increasingly, travelers are choosing these properties not despite but because of their sustainability commitments, recognizing that true luxury includes knowing your presence benefits rather than harms the destination.</p>

      <p>When selecting your accommodations in Kenya, look beyond superficial "green" claims to properties with measurable commitments to environment and community. The most exceptional experiences come from places where luxury and responsibility are seamlessly integrated into every aspect of operations.</p>
    `,
    author: "Amina Wanjiku",
    authorImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    date: "April 22, 2023",
    readTime: "7 min read",
    coverImage: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    category: "Sustainable Travel"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "t001",
    name: "Sarah Johnson",
    location: "London, UK",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    rating: 5,
    text: "Our stay at the Skyline Penthouse exceeded all expectations. The views were breathtaking, and the attention to detail was impeccable. The concierge service arranged a private tour of Nairobi that made our trip truly special."
  },
  {
    id: "t002",
    name: "Michael Chen",
    location: "Singapore",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    rating: 5,
    text: "The Beachfront Paradise in Diani was the highlight of our honeymoon. The private chef prepared the most amazing seafood, and waking up to the sound of waves every morning was pure magic. We're already planning our return trip."
  },
  {
    id: "t003",
    name: "Emma Rodriguez",
    location: "Barcelona, Spain",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    rating: 5,
    text: "Perfect Luxury Stays arranged everything so seamlessly for our family reunion. The Serene Garden Villa was spacious enough for all ten of us, and having daily housekeeping made it truly feel like a vacation for everyone."
  },
  {
    id: "t004",
    name: "David Okafor",
    location: "Lagos, Nigeria",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    rating: 4,
    text: "The Heritage Townhouse in Malindi offered a perfect blend of culture and comfort. Walking through the historic district and returning to such a beautiful home made for an authentic experience with all the modern amenities we needed."
  }
];

export const team = [
  {
    id: "team001",
    name: "Sophia Njeri",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    bio: "With over 15 years in luxury hospitality across Africa and Europe, Sophia founded Perfect Luxury Stays to showcase the very best of Kenya to discerning travelers. Her personal approach to customer service and deep local knowledge ensure every guest experience is exceptional."
  },
  {
    id: "team002",
    name: "James Kariuki",
    role: "Property Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    bio: "James personally selects and vets every property in our portfolio, ensuring they meet our rigorous standards for luxury, comfort, and authenticity. With a background in architecture and interior design, he has an eye for spaces that deliver both aesthetic beauty and functionality."
  },
  {
    id: "team003",
    name: "Amina Hassan",
    role: "Guest Experience Manager",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    bio: "Amina's passion for creating memorable experiences shines through in her work coordinating the perfect stay for each guest. From arranging private safari guides to securing reservations at exclusive restaurants, her extensive network and attention to detail ensure every trip is seamless."
  },
  {
    id: "team004",
    name: "Thomas Ochieng",
    role: "Head of Marketing",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    bio: "Thomas brings his creative vision and digital expertise to showcase Kenya's luxury rental market to the world. Having worked with premium brands across East Africa, his storytelling approach highlights the unique aspects of each property and the authentic experiences they offer."
  }
];

import { ImageData, TestimonialData } from './types';

// In a real application, replace these URLs with your local file paths.
// e.g., url: require('../assets/images/team.jpg')
export const IMAGES: ImageData[] = [
  // --- REQUIRED SECTION IMAGES ---
  { 
    name: "Catering Image", 
    url: "https://images.unsplash.com/photo-1574966739943-9e812d4d6200?q=80&w=2080&auto=format&fit=crop",
    category: "Catering"
  },
  { 
    name: "About Us", 
    url: "https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=2070&auto=format&fit=crop",
    category: "Team"
  },
  { 
    name: "Wedding", 
    url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
    category: "Events"
  },
  { 
    name: "Wedding Cake", 
    url: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?q=80&w=2070&auto=format&fit=crop",
    category: "Cakes"
  },

  // --- GALLERY IMAGES (Matching User Attachments) ---
  
  // Bakery & Preparation
  { name: "Dough Preparation", url: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop", category: "Bakery" },
  { name: "Sesame Bread Loaves", url: "https://images.unsplash.com/photo-1623334044303-241021148842?q=80&w=2070&auto=format&fit=crop", category: "Bakery" },
  
  // Cakes
  { name: "Golden Anniversary Cake", url: "https://images.unsplash.com/photo-1562777717-dc6984f65a63?q=80&w=2070&auto=format&fit=crop", category: "Cakes" },
  { name: "40th Birthday Cake", url: "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?q=80&w=2070&auto=format&fit=crop", category: "Cakes" },
  { name: "Chocolate Drip Cake", url: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=2089&auto=format&fit=crop", category: "Cakes" },
  { name: "Golf Themed Cake", url: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=2070&auto=format&fit=crop", category: "Cakes" },
  { name: "Fresh Fruit Tart", url: "https://images.unsplash.com/photo-1488477181946-6428a029177b?q=80&w=2069&auto=format&fit=crop", category: "Cakes" },
  
  // Pastries
  { name: "Cannoli Platter", url: "https://images.unsplash.com/photo-1551024601-569d6f46319c?q=80&w=1974&auto=format&fit=crop", category: "Pastry" },
  { name: "Celebration Cannoli", url: "https://images.unsplash.com/photo-1619240464240-398709033328?q=80&w=2070&auto=format&fit=crop", category: "Pastry" },
  { name: "Almond Pastries", url: "https://images.unsplash.com/photo-1530648672449-81f6973df7da?q=80&w=2070&auto=format&fit=crop", category: "Pastry" },
  { name: "Colorful Choux Buns", url: "https://images.unsplash.com/photo-1603532648955-039310d9ed75?q=80&w=2069&auto=format&fit=crop", category: "Pastry" },
  { name: "Chocolate Dipped Cookies", url: "https://images.unsplash.com/photo-1499636138143-bd649043ea52?q=80&w=2070&auto=format&fit=crop", category: "Pastry" },
  { name: "Red Velvet Cookies", url: "https://images.unsplash.com/photo-1619149666878-0044810f635c?q=80&w=2070&auto=format&fit=crop", category: "Pastry" },
  { name: "Mini Baba Selection", url: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=2153&auto=format&fit=crop", category: "Pastry" },
  
  // Savory & Catering
  { name: "Mini Pizzas", url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop", category: "Savory" },
  { name: "Catering Stand", url: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop", category: "Catering" },
  { name: "Elegant Buffet", url: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2072&auto=format&fit=crop", category: "Catering" },
  { name: "Buffet Spread", url: "https://images.unsplash.com/photo-1576618148400-f54bed99fcf8?q=80&w=2070&auto=format&fit=crop", category: "Catering" },
  { name: "Event Dining", url: "https://images.unsplash.com/photo-1519225468359-2996bc01c083?q=80&w=2074&auto=format&fit=crop", category: "Events" },
  { name: "Savory Selection", url: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=2068&auto=format&fit=crop", category: "Savory" },
  { name: "Grilled Vegetables", url: "https://images.unsplash.com/photo-1536304993881-ff00228b4db8?q=80&w=2070&auto=format&fit=crop", category: "Savory" },
  { name: "Cold Cuts Platter", url: "https://images.unsplash.com/photo-1519708227418-e8d316d8e9d7?q=80&w=2070&auto=format&fit=crop", category: "Savory" },
  
  // Gifts
  { name: "Panettone Gifts", url: "https://images.unsplash.com/photo-1606913084603-3e7702b01627?q=80&w=2070&auto=format&fit=crop", category: "Gifts" },
];

export const TESTIMONIALS: TestimonialData[] = [
  { id: 1, name: "Sarah Jenkins", role: "Wedding Client", text: "Dolce Delia made our wedding truly special. The cannoli tower was the highlight of the night!", rating: 5 },
  { id: 2, name: "Marco Rossini", role: "Corporate Event", text: "Authentic Sicilian flavors in the heart of London. Highly professional service.", rating: 5 },
  { id: 3, name: "Emily Clark", role: "Birthday Party", text: "The team was incredible to work with. Tailored the menu perfectly to our needs.", rating: 5 },
  { id: 4, name: "David Wright", role: "Anniversary Dinner", text: "Best arancini I've had outside of Palermo. Will definitely book again.", rating: 5 },
  { id: 5, name: "Jessica & Tom", role: "Engagement Party", text: "Sleek presentation and delicious food. All our guests were raving about it.", rating: 5 },
];

export const SOCIAL_LINKS = {
  tiktok: "https://www.tiktok.com/@dolcedelialondon",
  facebook: "https://www.facebook.com/dolcedelialondon",
  instagram: "https://www.instagram.com/dolcedelialondon",
  email: "dolcedelialondon@gmail.com"
};

export const BOOKED_DATES = [2, 5, 12, 13, 19, 20, 26, 28]; // Mock booked dates
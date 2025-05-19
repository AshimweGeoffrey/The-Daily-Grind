// src/main/resources/static/js/home-product-meta.js
// Home page product meta: badge, rating, and display order for home page sections
// Use productId as key for fast lookup

const HOME_PRODUCT_META = {
  // New Arrivals
  101: { rating: null, badge: null, section: "new-arrivals", order: 1 },
  102: { rating: null, badge: null, section: "new-arrivals", order: 2 },
  103: { rating: null, badge: null, section: "new-arrivals", order: 3 },
  104: { rating: null, badge: null, section: "new-arrivals", order: 4 },
  // Featured Products
  201: { rating: 4, badge: "15%", section: "featured", order: 1 },
  202: { rating: 4, badge: "Sale", section: "featured", order: 2 },
  203: { rating: 4.5, badge: "NEW", section: "featured", order: 3 },
  204: { rating: 5, badge: null, section: "featured", order: 4 },
  205: { rating: 4.5, badge: "20%", section: "featured", order: 5 },
  206: { rating: 4, badge: null, section: "featured", order: 6 },
};

// Export for use in other scripts
if (typeof window !== "undefined") {
  window.HOME_PRODUCT_META = HOME_PRODUCT_META;
}

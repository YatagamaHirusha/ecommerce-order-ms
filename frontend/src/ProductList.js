import React, { useState } from 'react';
import './ProductList.css';

const ProductList = () => {
  const [notification, setNotification] = useState(null);
  const [loading, setLoading] = useState({});

  // Sample product data
  const products = [
    { id: 1, name: 'Laptop', price: 999.99, description: 'High-performance laptop' },
    { id: 2, name: 'Smartphone', price: 699.99, description: 'Latest smartphone model' },
    { id: 3, name: 'Headphones', price: 149.99, description: 'Wireless noise-canceling headphones' },
    { id: 4, name: 'Tablet', price: 449.99, description: 'Lightweight and powerful tablet' },
    { id: 5, name: 'Smart Watch', price: 299.99, description: 'Fitness tracking smartwatch' },
    { id: 6, name: 'Camera', price: 799.99, description: 'Professional digital camera' },
  ];

  const handleBuyNow = async (productId) => {
    setLoading(prev => ({ ...prev, [productId]: true }));
    setNotification(null);

    try {
      const response = await fetch('http://localhost:8082/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productId: productId,
          quantity: 1,
        }),
      });

      const data = await response.text();

      if (response.ok) {
        setNotification({
          type: 'success',
          message: data || 'Order Placed Successfully',
        });
      } else {
        setNotification({
          type: 'error',
          message: data || 'Failed to place order',
        });
      }
    } catch (error) {
      setNotification({
        type: 'error',
        message: error.message || 'Network error. Please try again.',
      });
    } finally {
      setLoading(prev => ({ ...prev, [productId]: false }));
      // Auto-hide notification after 5 seconds
      setTimeout(() => setNotification(null), 5000);
    }
  };

  return (
    <div className="product-list-container">
      <h1 className="title">Product Catalog</h1>
      
      {notification && (
        <div className={`notification ${notification.type}`}>
          {notification.message}
          <button 
            className="notification-close"
            onClick={() => setNotification(null)}
          >
            ×
          </button>
        </div>
      )}

      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-info">
              <h2 className="product-name">{product.name}</h2>
              <p className="product-description">{product.description}</p>
              <p className="product-price">${product.price.toFixed(2)}</p>
            </div>
            <button
              className="buy-now-btn"
              onClick={() => handleBuyNow(product.id)}
              disabled={loading[product.id]}
            >
              {loading[product.id] ? 'Processing...' : 'Buy Now'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

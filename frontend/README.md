# E-Commerce Frontend

This is a React frontend for the E-Commerce Order Management System.

## Features

- Product catalog display
- "Buy Now" button for each product
- Order integration with backend API (http://localhost:8082/api/orders)
- Success/Error notifications

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Backend Order Service running on http://localhost:8082

## Installation

```bash
cd frontend
npm install
```

## Running the Application

```bash
npm start
```

The application will start on http://localhost:3000

## Usage

1. Browse the product catalog
2. Click "Buy Now" on any product
3. The app will send a POST request to http://localhost:8082/api/orders with:
   ```json
   {
     "productId": [product ID],
     "quantity": 1
   }
   ```
4. You'll see a success message if the order is placed successfully
5. You'll see an error message if there's an issue (e.g., "Not enough stock")

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Project Structure

```
frontend/
├── public/
│   └── index.html
├── src/
│   ├── App.js              # Main app component
│   ├── ProductList.js      # Product list component with Buy Now functionality
│   ├── ProductList.css     # Styles for ProductList
│   ├── index.js            # Entry point
│   └── index.css           # Global styles
├── package.json
└── README.md
```

## API Integration

The frontend communicates with the backend Order Service:

- **Endpoint**: http://localhost:8082/api/orders
- **Method**: POST
- **Headers**: Content-Type: application/json
- **Body**: `{ "productId": number, "quantity": number }`

## Troubleshooting

### CORS Issues

If you encounter CORS errors, make sure your backend is configured to allow requests from http://localhost:3000

### Backend Not Running

Ensure the Order Service is running on http://localhost:8082 before testing the Buy Now functionality.

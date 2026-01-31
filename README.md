# E-Commerce Order Management System

A microservices-based e-commerce order management system with a React frontend.

## Architecture

This project consists of:
- **Frontend**: React application for product browsing and ordering
- **API Gateway**: Spring Cloud Gateway for routing requests
- **Service Registry**: Eureka Server for service discovery
- **Order Service**: Backend service for order management (runs on port 8082)

## Project Structure

```
ecommerce-order-ms/
├── frontend/              # React frontend application
│   ├── src/
│   │   ├── ProductList.js # Product catalog with Buy Now functionality
│   │   ├── App.js        # Main app component
│   │   └── ...
│   └── README.md         # Frontend-specific documentation
├── api-gateway/          # Spring Cloud Gateway
└── service-registry/     # Eureka Service Registry
```

## Getting Started

### Prerequisites
- Java 11 or higher
- Maven 3.6+
- Node.js 14+ and npm (for frontend)

### Running the Backend Services

1. **Start Service Registry** (Eureka Server):
   ```bash
   cd service-registry
   mvn spring-boot:run
   ```
   Access at: http://localhost:8761

2. **Start API Gateway**:
   ```bash
   cd api-gateway
   mvn spring-boot:run
   ```

3. **Start Order Service** (assuming it's configured on port 8082):
   ```bash
   # Follow the order service setup instructions
   # The service should be running on http://localhost:8082
   ```

### Running the Frontend

1. **Install dependencies**:
   ```bash
   cd frontend
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm start
   ```
   Access at: http://localhost:3000

## Features

### Frontend
- Product catalog display with cards
- "Buy Now" button on each product
- Real-time order submission to backend API
- Success/Error notifications
- Loading states and user feedback
- Responsive design

### Backend
- Microservices architecture
- Service discovery with Eureka
- API Gateway for routing
- Order management API

## API Documentation

### Order API

**Endpoint**: `POST http://localhost:8082/api/orders`

**Request Body**:
```json
{
  "productId": 1,
  "quantity": 1
}
```

**Responses**:
- Success: 200 OK with "Order Placed Successfully" message
- Error: 4xx/5xx with error message (e.g., "Not enough stock")

## Development

### Building the Frontend
```bash
cd frontend
npm run build
```

### Running Tests
```bash
cd frontend
npm test
```

### Building the Backend Services
```bash
cd api-gateway
mvn clean package

cd ../service-registry
mvn clean package
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

[Specify your license here]

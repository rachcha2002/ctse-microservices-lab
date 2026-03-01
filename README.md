# SE4010 Microservices Lab

This repository contains the complete working microservices system for the CTSE (SE4010) Lab 5.

## Architecture
The system consists of three backend services and one API Gateway mapped to specific ports:
- **API Gateway**: Port 8080 (Entry point)
- **Item Service**: Port 8081
- **Order Service**: Port 8082
- **Payment Service**: Port 8083

All services run inside Docker containers using `docker-compose` and communicate through the API Gateway. The stack chosen for this implementation is **Node.js + Express**.

## How to Run

1. Ensure Docker Desktop is running on your machine.
2. Open a terminal in the project root directory.
3. Build and string the containers in detached mode:
   ```bash
   docker-compose up -d --build
   ```
4. Verify all containers are running successfully:
   ```bash
   docker ps
   ```

## Testing API Endpoints

A Postman collection `Microservices_Lab.postman_collection.json` is included in this repository. 
You can import this collection directly into Postman to test all endpoints.

All interactions should go through the API Gateway at `http://localhost:8080`.

**Implemented Endpoints:**
- `GET /items`: Returns a list of all items
- `POST /items`: Create a new item
- `GET /items/{id}`: Get item by ID
- `GET /orders`: Returns all orders
- `POST /orders`: Place a new order
- `GET /orders/{id}`: Get order by ID
- `GET /payments`: Returns all payments
- `POST /payments/process`: Process a payment
- `GET /payments/{id}`: Get payment status

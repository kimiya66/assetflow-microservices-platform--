# assetflow-microservices-platform--
A Microservices based platform for managing Assets and Employees, built with:
- Backend 1: Java Spring Boot (Employee Service)
- Backend 2: Node.js with Express & Sequelize (Asset Service)
- Frontend: React.js (Client UI)
- Databases: PostgreSQL for Employees, MySQL for Assets

Deployment: Docker & Docker Compose (multi-container)

### Project Structure 
```
assetflow/
│
├── asset-service/         # Node.js service for managing assets
├── employee-service/      # Spring Boot service for managing employees
├── frontend/              # React.js frontend
├── docker-compose.yml     # Docker Compose orchestration
└── README.md
```

### How to Run the Project
1. Clone the repository:
``
git clone https://github.com/your-username/assetflow-microservices-platform.git
cd assetflow
``
2. Start all services using Docker Compose:
``
docker compose up --build

``
3. Access the application:
  - Frontend (React app): http://localhost:3000
  - Employee Service (Spring Boot): http://localhost:8081/employees
  - Asset Service (Node.js): http://localhost:8082/assets

### 🛠️ Technologies Used
  - Spring Boot 3 + PostgreSQL (Employee microservice)
  - Node.js, Express, Sequelize ORM + MySQL (Asset microservice)
  - React.js with basic TailwindCSS (Frontend)
  - Docker and Docker Compose for container orchestration
  - Axios for API communication

### Microservices Architecture
Each service runs in an isolated container and communicates internally:

#### Service | Port | Language/Framework | Database
| Service             | Port  | Language/Framework | Database    |
|---------------------|-------|--------------------|-------------|
| Employee Service    | 8081  | Spring Boot         | PostgreSQL  |
| Asset Service       | 8082  | Node.js + Express   | MySQL       |
| Frontend (React.js)  | 3000  | React + TailwindCSS | -           |



##### Internal service discovery inside Docker uses container names (employee-service, asset-service).

### 📌 Future Improvements
- Implement service-to-service authentication (e.g., JWT)
- Add advanced UI with full CRUD operations
- Setup CI/CD pipeline for automated deployment
- Monitoring using Prometheus/Grafana

### 👩‍💻 Author
        Kimia Beheshti

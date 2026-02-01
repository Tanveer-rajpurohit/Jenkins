# Node.js Calculator App with Jenkins Pipeline Automation

## Project Overview
This is a simple Node.js application that performs calculations with Jenkins pipeline automation, Docker containerization, and automated testing.

## Project Structure
```
3-node-project-pipeline/
├── app.js              # Main application with calculator functions
├── build.js            # Build script
├── test/
│   └── test.js         # Test cases
├── package.json        # Dependencies and scripts
├── Dockerfile          # Docker configuration
├── Jenkinsfile         # Jenkins pipeline configuration
├── .gitignore          # Git ignore file
├── .dockerignore       # Docker ignore file
└── README.md           # This file
```

## Installation & Setup

### Local Setup
```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd 3-node-project-pipeline

# Install dependencies
npm install
```

### Running the Application
```bash
# Build the project
npm run build

# Start the application
npm start

# Run tests
npm test
```

## Docker Usage

### Build Docker Image
```bash
docker build -t node-project-pipeline:latest .
```

### Run Docker Container
```bash
docker run --rm node-project-pipeline:latest
```

## Jenkins Pipeline

The `Jenkinsfile` includes a complete CI/CD pipeline with the following stages:

1. **Clone Repository** - Clones the project code
2. **Install Dependencies** - Runs `npm install`
3. **Build** - Executes `npm run build`
4. **Test** - Runs test cases with `npm test`
5. **Start Application** - Starts the application with `npm start`
6. **Build Docker Image** - Creates a Docker image
7. **Run Docker Container** - Executes the Docker container for validation

### Creating a Jenkins Job

1. In Jenkins, create a new **Pipeline** job
2. In **Pipeline** section, choose **Pipeline script from SCM**
3. Set **SCM** to **Git**
4. Enter your repository URL
5. Set **Script Path** to `Jenkinsfile`
6. Save and run the job

## Application Features

- Simple calculator with add, subtract, multiply, divide operations
- Comprehensive test suite with multiple test cases
- Docker containerization support
- Jenkins CI/CD pipeline automation
- Proper logging and status messages

## Test Cases

The test suite includes:
- Addition tests (5+3=8, 10+20=30, etc.)
- Subtraction tests (10-3=7, 20-5=15, etc.)
- Multiplication tests (4*5=20, 7*3=21, etc.)
- Division tests (20/4=5, 15/3=5, etc.)

## Author
Created for Jenkins DevOps Learning

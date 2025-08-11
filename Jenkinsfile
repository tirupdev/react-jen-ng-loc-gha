pipeline {
    agent any

    environment {
        DEV_SERVER = "localhost"   // Dev environment on local machine
        STAGE_SERVER = "localhost" // Staging environment on local machine
        PROD_SERVER = "localhost"  // Production environment on local machine
        BRANCH = "main"
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: "${BRANCH}", url: 'https://github.com/your-org/your-repo.git'
            }
        }

        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }

        stage('Deploy to Dev') {
            steps {
                echo "Deploying to Development (Localhost)"
                sh "sudo rm -rf /var/www/html/*"
                sh "sudo cp -r build/* /var/www/html/"
            }
        }

        stage('Deploy to Staging') {
            steps {
                echo "Deploying to Staging (Localhost)"
                sh "sudo rm -rf /var/www/html/*"
                sh "sudo cp -r build/* /var/www/html/"
            }
        }

        stage('Approval for Prod') {
            steps {
                input message: 'Approve deployment to Production?'
            }
        }

        stage('Deploy to Prod') {
            steps {
                echo "Deploying to Production (Localhost)"
                sh "sudo rm -rf /var/www/html/*"
                sh "sudo cp -r build/* /var/www/html/"
            }
        }
    }
}

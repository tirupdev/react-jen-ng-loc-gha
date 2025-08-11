pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git branch: 'prod', url: 'https://github.com/tirupdev/react-jen-ng-loc.git'
            }
        }

        stage('Install') {
            steps {
                sh 'node -v'
                sh 'npm -v'
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy to Nginx') {
            steps {
                // Adjust NGINX_PATH to your actual Nginx HTML directory
                sh 'sudo rm -rf /var/www/html/*'
                sh 'sudo cp -r build/* /var/www/html/'
                sh 'sudo systemctl reload nginx'
            }
        }
    }
}
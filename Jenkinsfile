pipeline {
    agent any 
    
    environment {
        IMAGE_NAME = 'kalumbandara/test'
    }
    
    stages { 
        stage('SCM Checkout') {
            steps {
                retry(3) {
                    git branch: 'main', url: 'https://github.com/AthilaRavindu/Shopping-Hub.git'
                }
            }
        }

        stage('Build Docker Image') {
            steps {  
                bat "docker build -t %IMAGE_NAME%:%BUILD_NUMBER% ./frontend-master"
            }
        }

        stage('Login to Docker Hub') {
            steps {
                withCredentials([string(credentialsId: 'test-dockerpassword', variable: 'DOCKER_PASS')])  {
                    bat "docker login -u kalumbandara -p %DOCKER_PASS%"
                }
            }
        }

        stage('Push Image') {
            steps {
                bat "docker push %IMAGE_NAME%:%BUILD_NUMBER%"
            }
        }
    }

    post {
        always {
            bat 'docker logout'
        }
    }
}
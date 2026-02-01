pipeline {
    agent any

    environment {
        AWS_REGION = "ap-south-1"
        ECR_REPO = "460425809337.dkr.ecr.ap-south-1.amazonaws.com/devops-app-repo"
        IMAGE_TAG = "${BUILD_NUMBER}"
    }

    stages {

        stage('Checkout Code') {
    steps {
        git branch: 'main',
            credentialsId: 'github-creds',
            url: 'https://github.com/zororoman/devops-eks-app.git'
    }
}


        stage('Build Docker Image') {
            steps {
                sh '''
                docker build -t devops-app .
                docker tag devops-app:latest $ECR_REPO:$IMAGE_TAG
                '''
            }
        }

        stage('Push to ECR') {
            steps {
                sh '''
                aws ecr get-login-password --region $AWS_REGION | \
                docker login --username AWS --password-stdin $ECR_REPO
                docker push $ECR_REPO:$IMAGE_TAG
                '''
            }
        }

        stage('Deploy to EKS') {
            steps {
                sh '''
                kubectl set image deployment/devops-app \
                devops-app=$ECR_REPO:$IMAGE_TAG

                kubectl rollout status deployment/devops-app
                '''
            }
        }
    }
}

# 🚀 DevSecOps CI/CD Pipeline on AWS EKS

## 📌 Project Overview

This project demonstrates a **complete end-to-end DevSecOps CI/CD pipeline** implemented on **AWS EKS**.  
The pipeline automates **code integration, security scanning, containerization, deployment, and monitoring** of a Node.js application using modern DevOps and cloud-native tools.

The goal of this project is to showcase **real-world DevSecOps practices**, Kubernetes deployment workflows, and AWS infrastructure integration.

<p align="center">
  <img width="900" alt="DevSecOps Pipeline Architecture" src="https://github.com/user-attachments/assets/829c2ca8-0db9-4f42-8965-c33f45d6e91c" />
</p>

---

## 🧰 Tools & Technologies

### ☁️ Cloud & Infrastructure
- AWS EC2
- AWS EKS
- AWS ECR
- AWS Elastic Load Balancer (ELB)
- AWS IAM
- AWS VPC

### 🔄 CI/CD & Automation
- Jenkins
- Git & GitHub

### 📦 Containers & Orchestration
- Docker
- Kubernetes (kubectl)
- Helm

### 🔐 Security (DevSecOps)
- SonarQube (Static Code Analysis)
- Trivy (Container Image Vulnerability Scanning)

### 📊 Monitoring & Observability
- Prometheus
- Grafana

### 🧑‍💻 Application Stack
- Node.js
- Express.js
- HTML
- CSS
- Linux (Ubuntu)

---

## 🔄 CI/CD Pipeline Workflow

1. Developer commits code to GitHub  
2. Jenkins pipeline is triggered automatically  
3. Source code is analyzed using **SonarQube**  
4. Docker image is scanned for vulnerabilities using **Trivy**  
5. Docker image is built and tagged  
6. Image is pushed to **AWS ECR**  
7. Application is deployed to **AWS EKS** using Kubernetes manifests  
8. Application is exposed publicly using **Kubernetes LoadBalancer (ELB)**  
9. Application and cluster metrics are monitored using **Prometheus & Grafana**

---

## 📊 Monitoring & Observability

- Kubernetes cluster monitoring
- Node-level and Pod-level metrics
- Preconfigured Grafana dashboards
- Prometheus metrics collection using Helm charts

---

## 🚀 Deployment Highlights

- Deployed a containerized Node.js application on **AWS EKS**
- Exposed application via **AWS Elastic Load Balancer**
- Secure access using **IAM roles, security groups, and least-privilege policies**
- Used Helm to deploy Prometheus & Grafana efficiently

---

## 🧠 Key Learnings

- Designing and implementing an end-to-end DevSecOps pipeline
- Integrating security tools into CI/CD workflows
- Kubernetes service exposure and networking
- AWS EKS cluster setup and troubleshooting
- Real-world debugging of CI/CD, Docker, Kubernetes, and AWS issues
- AWS cost management and resource cleanup best practices

---

## 🧹 Cost Optimization

All AWS resources (EKS cluster, EC2 nodes, Load Balancers, ECR images) were **properly deleted after project completion** to avoid unnecessary AWS billing.

---

## 👤 Author

**AjayKumar Ramesh**  
DevSecOps | Cloud | Kubernetes | AWS

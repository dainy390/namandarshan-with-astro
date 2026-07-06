pipeline {
    agent any

    stages {

        stage('Frontend Install') {
            steps {
                bat 'npm install'
            }
        }

        stage('Frontend Test') {
            steps {
                bat 'npm test'
            }
        }

        stage('Frontend Build') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Backend Install') {
            steps {
                dir('backend') {
                    bat 'npm install'
                }
            }
        }

        stage('Backend Test') {
            steps {
                dir('backend') {
                    bat 'npm test'
                }
            }
        }
    }
}
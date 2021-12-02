pipeline {

    agent any

    environment {
        registry = "jenkins-ci-cd"
    }

    stages {

        stage('createing docker image') {
            steps {
                script {
                    docker.build registry
                }
            }
        }

        stage('stopping the previous container') {
            steps {
                sh 'docker rm jenkins-image -f'
            }
        }

        stage('running new container') {
            steps {
                sh 'docker run -d -p 3000:3000 --name jenkins-image jekins-ci-cd'
            }
        }

    }

}
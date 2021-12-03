pipeline {

    agent any

    environment {
        registry = 'matrixxcode'
    }

    stages {

        stage('building docker image') {
            steps {
                script {
                    docker.build registry
                }
            }
        }

        stage('stop the previous container') {
            steps {
                sh 'docker rm matrixxcode-node -f'
            }
        }

        stage('run new container') {
            steps {
                sh 'docker run -d -p 3000:3000 --name matrixxcode-node matrixxcode'
            }
        }

    }

}
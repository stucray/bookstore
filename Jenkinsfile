pipeline{
    agent any

    tools {
        nodejs 'nodejs'
    }

    //Initialise system
    stages{
        stage("Init"){
            steps {
                sh 'npm install -g @angular/cli@11.0.7';
                sh 'npm install';

            }
        }

        stage("Build") {
            steps {
                sh '''#!/bin/bash
                   ng build --prod
                   '''
            }
        }

        stage("Deploy") {
            steps {
                sh 'scp -r dist scray@euler:/var/www/html';
            }
        }
    }


    post{
      always {
        cleanWs()
    }
  }
}

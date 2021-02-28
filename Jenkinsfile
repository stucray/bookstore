pipeline{
    agent any

    tools {
        nodejs 'nodejs'
    }

    //Initialise system
    stages{
        stage("Init"){
            steps{
                sh 'npm install @angular/cli';
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
    }


    post{
      always {
        cleanWs()
    }
  }
}

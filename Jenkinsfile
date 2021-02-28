pipeline{
    agent any

    tools {
        nodejs 'nodejs'
    }

    //Initialise system
    stages{
        stage("Init"){
            steps{
                npm install @angular/cli;
                npm install

            }
            
        }
    }


    post{
      always {
        cleanWs()
    }
  }
}

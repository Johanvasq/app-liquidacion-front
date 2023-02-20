# Liquidation Front
Frontend of project for liquidations of the company IAS software, developed by Johan Vasquez.

## Deployment
  1. Download the project from github using the following command in your terminal 
 ```bash
  git clone https://github.com/Johanvasq/app-liquidacion-front.git
 ```
  2. Open the console in the folder where you downloaded the project.
  3. Navigate to the following path: 
  ```bash
  cd app-front-liquidation/src/app/deployment
  ```
  4. Deploy the application with Docker Compose using the following command:
```bash
docker-compose up
```
  5. This instruction will create the image and deploy the container to the following port:
  - **app-frontend:** port: 4210
 

For more information on how to deploy a Docker Compose, download Docker Desktop and visit its [Documentation](https://docs.docker.com/compose/)

**Note:** it will be deployed on a Docker network called "app-liquidation" using the "bridge" network driver.

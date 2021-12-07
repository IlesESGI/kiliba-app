# kiliba-app

Little application made with Node React Mongo and Nginx

## To launch the app 
You will need **docker-compose**<br>
Go to root folder and type : <br>
**(sudo) docker-compose up --build** <br>
3 services will be launched :
- Node server hosting the API
- MongoDB for the database
- Nginx server to serve the front

Different ports of these services can be edited in the .env file

Once everything is launched you can open your browser and go to **localhost:80** to interact with the front !

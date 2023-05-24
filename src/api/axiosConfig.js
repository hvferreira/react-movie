import axios from 'axios';

export default axios.create({
    baseURL:'https:localhost:8080',
    
  //baseURL:'https://9c96-103-106-239-104.ap.ngrok.io',
   //headers: {"ngrok-skip-browser-warning": "true"} 
   headers: {"ngrok-skip-browser-warning":"true","Access-Control-Allow-Origin": "*"}
});
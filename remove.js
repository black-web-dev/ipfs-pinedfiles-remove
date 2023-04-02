// var axios = require_node('axios');
import axios from 'axios'

var config = {
  method: 'delete',
  url: 'https://api.pinata.cloud/pinning/unpin/',
  headers: { 
    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiIzZjkwNmNlOS05MDVlLTQ5OWYtYWM2YS0wY2FjMzhkNGE4MTMiLCJlbWFpbCI6ImRldnJhYmJpdDUyM0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6IkZSQTEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiMzI4Y2EyOGZmZWI1NzRhNDFlN2IiLCJzY29wZWRLZXlTZWNyZXQiOiI0Zjk3OWM5ZGUyNTdiZGRmNzlmYjg4ZDMzMzFiNmUzMDA5YTA4Y2Y5OTNjNmI1M2YwZjMxYzQwNWM3NmFjMzFmIiwiaWF0IjoxNjU1MTc1Njk3fQ.zTWehasKdqFgDyRCOp_IdXf_lwxQTLBRJ52eodOhbmQ'
  }
};

const res = await axios(config);

console.log(res.data);
import myKey from'./KhaltiKey'
import axios from 'axios'
let Config = {
    // replace this key with yours
    "publicKey": myKey.publicTestKey,
    "productIdentity": "123",
    "productName": "water payment",
    "productUrl": "http://loaclhost:5173",
    "eventHandler": {
        onSuccess (payload) {
           
            console.log(payload);
            const axios = require('axios');

let data = {
  "token": payload.token,
  "amount": payload.amount
};

let config = {
  headers: {'Authorization': myKey.secretKey}
};
axios.post("https://khalti.com/api/v2/payment/verify/", data, config)
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.log(error);
});
        },
        // onError handler is optional
        onError (error) {
            // handle errors
            console.log(error);
        },
        onClose () {
            console.log('widget is closing');
        }
    },
    "paymentPreference": ["KHALTI", "EBANKING","MOBILE_BANKING", "CONNECT_IPS", "SCT"],
};

export default Config;
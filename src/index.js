const axios = require("axios");
var parr = require("./add");

parr([1,2,3,4,5]);
axios.get("https://run.mocky.io/v3/414be5fc-f71e-497a-b1c5-6b3edd3b79ab")
.then(res=>{
    console.log(res.data);
}
    
)
// axios   -- js
// get ----> get data
//post --> add
//delete --> delete

const axios = require('axios');
async function fetchData(){
    try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        // console.log(response);
        return response.data
    }
    catch(err){
        throw new Error(err)
    }
}

async function main(){
    try{
        const data = await fetchData();
        console.log(data,"s");
    }catch(err){
        console.log(err.message);
    }
}

main();

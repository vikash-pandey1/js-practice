let data = {name:'vikash',age:22};
function fetchData(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(data);
        },2000)
    })
}
// fetchData().then(data=>{ console.log(data);})
// .catch( err=>{ console.log(err)})
// .finally( ()=> {console.log('promise completed')})

async function handleData(){
    try {
        console.log('fetching data...')
        let data = await fetchData();
        console.log("success",data);
    } catch (error) {
        console.log("error", error)
    }
}
handleData()
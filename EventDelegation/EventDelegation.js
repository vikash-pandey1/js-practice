document.getElementById("parent").addEventListener("click",function(e){
    if(e.target.tagName==="BUTTOn"){
        alert(`button clicked ${e.target.innerText}`);
    }
})
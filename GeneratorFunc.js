function* infiniteSequence(){
    let num = 1;
    while(true){
        yield num;
        num++;
    }
}

const seq = infiniteSequence()
for(let i=0;i<10;i++){
    console.log(seq.next().value)
}

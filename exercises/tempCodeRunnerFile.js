
function multiply(x, y){
    let pos = 0;
if (y<0){ pos=(-y);}else{ pos=y;}
    
    let totx =0;
    for (let i=0; i<pos;i++ )

totx  += x;

    return (totx);
}
console.log(multiply(-123, -22));
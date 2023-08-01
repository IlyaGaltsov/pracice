let str = '',
    start = 10,
    end = 20;

for(let i = start; i <= end; i++){
    let calculate = i*i
    if(i === end){
        str += `${calculate} .`
    } else {
        str += `${calculate} ,`
    }
}
console.log(str);
let str = '';
let start = 10;
let end = 20

for (let i = start; i <= end; i++) {
    if(i === end){
        str += `${i}.`
    }else{
        str += `${i},`
    }
}
console.log(str);


function sorterFun(arr){
    let output = null;

    while(output !== true){
   
    output = true


for(let i = 0;i< arr.length;i++){
    let comparer = arr[i - 1];
    let current = arr[i]
    if(comparer > current){
       output = false;

        let temp = comparer;
        arr[i - 1] = arr[i];
        arr[i] =temp;
    }



}
} 
return arr;

}

console.log(sorterFun([6,2,4,1,5,3]))
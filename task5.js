function canPay(arr,total){
    let sum=0
    if(arr.length===0){
        return "Your array is empty"
    }
    for(x of arr){
        sum+=x
    }
    if(sum>=total){
        return true
    }else{
        return false
    }
    

}
const numbers=[1,2,5]
const target=10
const result=canPay(numbers,target)
console.log(result)
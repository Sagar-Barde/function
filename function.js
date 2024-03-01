function map(f,a){
    const result =new
    Array(a.length);
    for (let i=0; i<=a.length;i++){
        result[i]=f(a[i])
    }
    return result;
}
const cube= function (x){
    return x* x* x;

};
const number =[1,2,3,5,10]
console.log(map(cube,number));
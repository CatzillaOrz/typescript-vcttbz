// no cache
/*
function fib(n: number): number {
    let result: number;
    if(n < 2)
        result = n
    else 
        result = fib(n-1) + fib(n-2)
    return result
};
*/
// cache
let cache = new Map();
let result: number;
function fib(n: number): number {
    if(cache.has(n)){
        return cache.get(n)
    }
    if(n<2){
       result = n; 
    }else{
        result = fib(n-1) + fib(n-2)
    }
    cache.set(n, result);
    return result
}

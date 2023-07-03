function fibo(n){
    var arr=[1, 1];
    for(var i=2; i<n; i++)
    {
        arr.push(arr[i-1] + arr[i-2]);
    }
    console.log(`So fibonacci thu ${n} la:` + arr[n-1]);
}
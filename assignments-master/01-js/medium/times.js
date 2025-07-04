/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100 -0ms
2. Sum from 1-100000 -12ms
3. Sum from 1-1000000000-79ms
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    let time=new Date();
    let before=time.getMilliseconds();
    sum=1;
    for(let i=1;i<n;i++){
        sum+=i;
    }
    let t=new Date();
    let after=t.getMilliseconds();
    return after-before;
}

console.log(calculateTime(100));
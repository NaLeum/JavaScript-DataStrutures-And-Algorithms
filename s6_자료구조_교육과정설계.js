function solution(need, plan){
    let answer="YES";
    let queue=need.split('');
    for(let x of plan){
        if(x===queue[0]){
            queue.shift();
        }
    }
    if(queue.length !== 0) return "NO"
    return answer;
}

let a="CBA";
let b="CADBGE";
console.log(solution(a, b));
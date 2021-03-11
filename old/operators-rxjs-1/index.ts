import {from, of, defer} from 'rxjs';
import {ajax} from 'rxjs/ajax';

console.log('test');
const seq1$ = of(1,2,3,4)
    .subscribe((v)=>console.log(v));

const seq2$ = from([1,2,3,4])
    .subscribe((v)=>console.log(v));

const seq3$ = from(
                fetch('https://jsonplaceholder.typicode.com/todos')
                    .then((res)=>res.json())
            );
seq3$.subscribe((v)=>console.log(v));
console.log('########################################################################');
const random = Math.round(Math.random() * 10);

const seq4$ = defer(()=>{
    return random > 5
        ? random >=8
            ? of('random value > 5')
            : of('random value >5 <8')
        : of('random value < 5');    
});

seq4$.subscribe((v)=>console.log(v));

console.log('########################################################################');

const seq5$ = ajax('https://jsonplaceholder.typicode.com/todos');

seq5$.subscribe((v:any)=> console.log(v.response));

setTimeout(()=>{
    seq1$.unsubscribe();
    seq2$.unsubscribe();
    console.log('done');
}, 5000)

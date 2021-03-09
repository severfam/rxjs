/*
import {Observable} from "rxjs";

const sequence$ = new Observable((subscriber) => {
    let count = 1;
    const intervalId = setInterval( ()=> {
        if(count % 5 === 0) {
            clearInterval(intervalId);
            subscriber.complete();
            return ;
        }
        subscriber.next(count++);
    }, 1000);
});

sequence$.subscribe((v)=> {
    console.log(v);
    }, ()=> {}, () => {
    console.log('Comleted!');
});
*/


import {interval} from 'rxjs';

const sequence$ = interval(1000);

const sub1 = sequence$.subscribe( (v) => console.log('Sub_1 = ', v));

const sub2 = sequence$.subscribe( (v) => console.log('Sub_2 = ', v));

setTimeout(()=>sub2.unsubscribe(), 5000);
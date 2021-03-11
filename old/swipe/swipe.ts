import {fromEvent, Observable, zip, merge} from 'rxjs';
import {map} from 'rxjs/operators'

/*
myGet(fromEvent<MouseEvent>(document, 'mousedown'));
myGet(fromEvent<MouseEvent>(document, 'mouseup'));
*/    
swipe(zip(
        getX(fromEvent<TouchEvent>(document, 'touchstart'), fromEvent<MouseEvent>(document, 'mousedown')), 
        getX(fromEvent<TouchEvent>(document, 'touchend'), fromEvent<MouseEvent>(document, 'mouseup'))
))
.subscribe((direction)=>{
    if(direction < 0) {
        console.log('Swipe left');
        return;
    }
    console.log('Swipe right');
});

function getX(source1$ : Observable<TouchEvent>, source2$: Observable<MouseEvent>) { 
    return merge(source1$, source2$)
                .pipe(
                    //pluck('changedTouches', 0, 'clientX'),
                    map((event: TouchEvent | MouseEvent) => {
                        if (event instanceof TouchEvent) {
                            return event.changedTouches[0].clientX;
                        } 
                        return event.clientX;  
                    })
                );
}

function swipe(source$: Observable<[number, number]>) {
    return source$
                .pipe(map(([x, y]) => (y-x)));
}

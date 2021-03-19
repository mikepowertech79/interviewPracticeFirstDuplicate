

//firstDuplicate Given an array a that contains only numbers in the range from 1 to a.length, find the first duplicate number for which the second occurrence has the minimal index. In other words, if there are more than 1 duplicated numbers, return the number for which the second occurrence has a smaller index than the second occurrence of the other number does. If there are no such elements, return -1.

debugger;

a = [2, 4, 3, 1, 4, 2]

firstDuplicate = a => {
    r = new Set()
    for (e of a)
        if (r.has(e))
            return e
        else
            r.add(e)
    return -1
}

debugger;

var result = firstDuplicate(a);

debugger;

a = [2, 4, 3, 1, 4, 2]

function firstDuplicate1(a) {
    let NewArray={};
    let length=a.length;
    
    for(let i=0; i<length;i++){

           var arrI = a[i];
           
        if(NewArray[arrI]==1){
            return arrI;
           }else{
               NewArray[arrI]=1;
           }
    }
    return -1;
}

debugger;

var result1 = firstDuplicate1(a);


debugger;
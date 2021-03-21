
debugger;
//firstDuplicate Given an array a that contains only numbers in the range from 1 to a.length, find the first duplicate number for which the second occurrence has the minimal index. In other words, if there are more than 1 duplicated numbers, return the number for which the second occurrence has a smaller index than the second occurrence of the other number does. If there are no such elements, return -1.

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
var result = firstDuplicate(a);

//PRACTICE 20210320


firstDuplicate7 = a => {

r = new Set()
for (e of a )
if (r.has(e)) return e
else  r.add(e)
return - 1

}

result = null;
result = firstDuplicate7(a)


//PRACTICE 20210321

firstDuplicate = a => {
	
	r = new Set()
	
	for (e of a)
	
	if(r.has(e)) rerutn e;
	else r.add(e);
	
	rerutn -1;
}

result = null;
result = firstDuplicate9(a);





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
result = null;
result = firstDuplicate1(a);


debugger;
//firstNotRepeatingCharacter Given an array a that contains only numbers in the range from 1 to a.length, find the first duplicate number for which the second occurrence has the minimal index. In other words, if there are more than 1 duplicated numbers, return the number for which the second occurrence has a smaller index than the second occurrence of the other number does. If there are no such elements, return -1.


var s = "abacabad";

firstNotRepeatingCharacter = s => {
    r = {}
    for (e of s)
        r[e] = -~r[e]
    for (e in r)
        if (r[e] == 1)
            return e
    return '_'
}

result = null;
result = firstNotRepeatingCharacter(s);


debugger;



function firstNotRepeatingCharacter1(s) {
    
    var arr = s.split("");
    
    for(var i = 0; i < arr.length; i++){
        var chr = arr[i];
        if( arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i])){
            return arr[i]
        }
        
    }
    
    return "_"
}


result = null;
result = firstNotRepeatingCharacter1(s);




function firstNotRepeatingCharacter2(a) {
    for (var i = 0; i < a.length; i++) {

        if (a.indexOf(a[i]) === a.lastIndexOf(a[i])) {
            return a[i];
        }
    }
    return '_';
}


result = null;
result = firstNotRepeatingCharacter2(s);



function firstNotRepeatingCharacter3(s) {
    
    var map = new Array(26).fill(0);
    for(var i in s) {
        var val = s.charCodeAt(i);
        map[val] = map[val] ? Infinity : +i+1;
    }
    
    //Return the character at the minimum index.
    //If there is no such character, return '_'.
    return s[Math.min(...map.filter( val => val ))-1] || "_";
    
}
debugger;
result = null;
result = firstNotRepeatingCharacter3(s);

debugger;
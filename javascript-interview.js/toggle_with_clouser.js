   




function toggle(){
    var arr = arguments;
    var index = -1;

    return function(){
        index = index +1;

        if(index>=arr.length){
            index = 0
        }
        return arr[index]
    }
}

const toggler = toggle('on','off')


console.log(toggler())
console.log(toggler())
console.log(toggler())


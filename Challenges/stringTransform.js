function transformString(str) {
    
    let stringLength = str.length
  console.log(`The lenght of given string is : ${stringLength}`)

    if(stringLength  % 3 === 0 && stringLength  % 5 === 0){
         const str1 = str.split('').reverse().join('');

        const str2 = str.split('').map(char => char .charCodeAt(0)).join('');
    
        return `${str1} \n ${str2} `;
        

    }

    else if ( stringLength  % 3 === 0){
        str = str.split('').reverse().join('');
    }

    else if ( stringLength  % 5 === 0){
        str = str.split('').map(char => char .charCodeAt(0)).join('');
    }
  
    else{
        return "Not divisible by 3 , 5 or both";
    }


    return str;

}

let str = "Hello Carine" 
console.log(transformString(str)); 

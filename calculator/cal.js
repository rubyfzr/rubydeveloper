const getId = () =>{
    let id = Math.floor(Math.random() * 1000000);
    document.getElementById('uid').value = id
}

if(opt == 'add'){
    out = `Sum of number is ${Number(a)+Number(b)}`
}else{
    out = `Sub of number is ${a-b}`
}
else{
    out = `mul of number is ${a*b}`
}
else{
    out = `div of number is ${a/b}`
}
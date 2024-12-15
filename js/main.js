function convertDollar(){
    var dollar = document.getElementById('dollar').value;
    var result = document.getElementById('result');
    
    if(isNaN(dollar)){
        result.innerHTML = "Enter Number Not Text";
    }else if(dollar<0){
        result.innerHTML = "Enter Positive Number";
    }else if(dollar==0){
        result.innerHTML = "Enter Number Rather Than Zero";
    }else{
        result.innerHTML = dollar* 50 + 'EGP';
    }
    
    return false;
}
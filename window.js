var name = 'shuvo';
function add (num1, num2){
    var result = num1 +num2;
    console.log('inside name', name);
    function double (num){
        return num * 2;
    }

}
console.log('outside name', name);
var sum = add(13, 21);
console.log(sum);

let point;
let final;
const arr = [];
function multiply(...args){
for(let i = 0; i < args.length; i++){
const num = String(args[i]);
const last = num.indexOf('.') + 1;
const exp = num.length - last;
arr.push(exp);
};
 point = arr.reduce((total , value)=>{
    return total + value;
});
final = args.reduce((total , value) => {
   return total * value;
})
return final.toFixed(point);
}
function add(...args){
    for(let i = 0; i < args.length; i++){
    const num = String(args[i]);
    const last = num.indexOf('.') + 1;
    const exp = num.length - last;
    arr.push(exp);
    };
     point = Math.max(...arr);
    final = args.reduce((total , value) => {
       return total + value;
    })
    return final.toFixed(point);
    }
    module.exports = {multiply , add};
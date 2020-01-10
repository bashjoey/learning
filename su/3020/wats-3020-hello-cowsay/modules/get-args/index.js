// get the first string from list of args
// if there is no string returns null

exports.getStringArg = function(){
  let arg = process.argv.slice(2)
 if (arg.length > 0){
   return arg[0]
 }
 return null
}
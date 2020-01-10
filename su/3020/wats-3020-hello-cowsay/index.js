
//TODO require cowsay

//TODO require getargs

// get first string from command line
let textArg = getargs.getStringArg()

// if use entered a string cowsay it with
// default eyes and tail
if (textArg != null) {
  console.log(cowsay.say({
    text: textArg,
    e: "oO",
    T: "U "
  }));
}
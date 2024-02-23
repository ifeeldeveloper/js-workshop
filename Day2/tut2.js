var gilas = "paani";
let belya = "Saag";
const dontManipulate = "Ask First";

if (true) {
  var gilas = "Chaha";
  let belya = "Chauchau";
  const dontManipulate = "Surprise";

  console.log(gilas, "Declared in Block Scope of if and takes value from Block Scope")
  console.log(belya, "Declared in Block Scope of if and takes value from Block Scope")
  console.log(dontManipulate, "Declared in Block Scope of if and takes value from Block Scope")
}
console.log(gilas, "Declared in Global Scope but takes value from Block Scope of if")
console.log(belya, "Declared in Global Scope and takes value from Global Scope")
console.log(dontManipulate, "Declared in Global Scope and takes value from Global Scope")
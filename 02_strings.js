const name1="Vikas"
const repoCount=30

console.log(name1+repoCount)

console.log(`Hello my name is ${name1} and my reposetry value is ${repoCount} How are you?`)


//It is called string interpolation******
const Name="Vikas Gupta"
const ID="22087669"
console.log(`Hello my name is ${Name} and my college ID is ${ID}`)


const Gname=new String('VIKAS')
console.log(Gname.__proto__)//To check the  datatype
console.log(Gname.length)//to find the length of the string
console.log(Gname.toUpperCase())//to make all the letter in upper case
console.log(Gname.charAt(5))//to find the charater at index
console.log(Gname.charCodeAt(3))//to find the ascii value
console.log(Gname.indexOf('V'))//to find the index 


const newName=Gname.substring(0,4)
console.log(newName)

const Newname=Gname.slice(1,-4)
console.log(Newname)

//**********Trim and replece************
const NAME="  Hello and welcome   "
console.log(NAME)
console.log(NAME.trim())


const url="https://vikasgupta.com/%20vikaskumar"
console.log(url.replace("%20","-"))
//console.log(Gname[0,4])
//console.log(Gname.__proto__)

*/


//const name="Vikas"


/*
const Id="22087669"
console.log(name+ " "+Id)
console.log(`Hello,My name is : ${name} and my College Id is : ${Id}`)


const newName=new String("Ramesh Kumar")
console.log(newName)
console.log(newName.__proto__)
console.log(newName.toUpperCase())
console.log(newName.toLowerCase())
console.log(newName.charCodeAt('s'))
console.log(newName.indexOf('K'))
console.log(newName.length);

const n="Vikas"
const NEWname=n.slice(-0,14)
console.log(NEWname)

console.log(NEWname.substring(0,11))



const varname="    hello    "

console.log(varname)
console.log(varname.trim())


const url="https://vikasgupta.com/Vikas%20Gupta"
console.log(url.replace("%20","-"))

console.log(url.includes('Vikas'))
console.log(url.includes('heena'))
console.log(url.split(''))


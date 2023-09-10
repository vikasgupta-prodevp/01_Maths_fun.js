let date=new Date()
console.log(date.toDateString())
console.log(date.toLocaleString())


//different methods in Date ()
console.log(date.toISOString())
console.log(date.toTimeString())
console.log(date.getUTCHours())
console.log(date.toLocaleDateString())
console.log(date.toJSON())
console.log(date.toLocaleTimeString())
console.log(typeof date)


let mycreatedDate=new Date(2023,02,10)
console.log(mycreatedDate)
console.log(mycreatedDate.toDateString())


let myDate=new Date(2023,12,11)
console.log(myDate)
console.log(myDate.toDateString())//to show the date


const c=new Date(2302,0,12,5,1,50)//time and date
console.log(c)
console.log(c.toLocaleString())


const c1=new Date("2023-01-14")//yy-mm-dd
console.log(c1)
console.log(c1.toLocaleString())


const c1=new Date("01-14-2023")//mm-dd-yy
console.log(c1)
console.log(c1.toLocaleString())





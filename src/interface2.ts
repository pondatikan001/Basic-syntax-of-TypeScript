interface IPerson {
    fistName:string,
    lastName:String,
    sayHi: ()=>string
}

var customer:IPerson = {
    fistName:"Atikan",
    lastName:"Kannang",
    sayHi: ():string =>{return "Hey bro"}
}

console.log("Customer Object")
console.log(customer.fistName)
console.log(customer.lastName)
console.log(customer.sayHi())
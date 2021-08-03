interface employeeInformation {
    fistName?: string;
    lastName?: string;
    employeeId?: number;
    age?: number;
    salary?: number;
    bonus?: boolean;
}
function Empolyee(config:employeeInformation): {fistName: string; lastName: string; employeeId: number; age: number; saraly: number; bonus: boolean;} {
    let newEmployee = {fistName: "Default firstname", lastName:"Default lastName",employeeId: 11111, age: 0, saraly: 20000, bonus: true}
    
    if(config.fistName){
        newEmployee.fistName = config.fistName
    }
    if(config.lastName){
        newEmployee.lastName = config.lastName 
    }
    if(config.employeeId){
        newEmployee.employeeId = config.employeeId 
    }
    if(config.age){
        newEmployee.age = config.age
    }
    if(config.salary) {
        newEmployee.saraly = config.salary
    if(config.bonus == true) {
        newEmployee.saraly = config.salary*2.5
        newEmployee.bonus = config.bonus
        }
    }
    if(config.bonus == false) {
        newEmployee.bonus = config.bonus
    }

    return newEmployee;
}

let myEmployee = Empolyee({fistName: "Atikan",lastName:"Kannang",employeeId: 622110340,age: 23, salary:15000, bonus: true })
console.log(`myEmployee`, myEmployee)
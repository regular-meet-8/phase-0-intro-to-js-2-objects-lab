// Write your solution in this file!
let employee = {
    name : `Naivedias Cash`,
    streetAddress : `12 Broadway`
}

function updateEmployeeWithKeyAndValue(obj, key, value){
    let newObj = {...obj}
    newObj[key] = value;
return newObj;
}
const newEmployee = updateEmployeeWithKeyAndValue(employee, `StreetAddress`, `11 Broadway`)
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key ,value){
obj[key] = value;
return obj;
}
employee = destructivelyUpdateEmployeeWithKeyAndValue(employee, `StreetAddress`, `12 Broadway`)

function deleteFromEmployeeByKey(obj, key, value){
   obj = {...employee}
    delete obj[key]
    return obj;
}
function destructivelyDeleteFromEmployeeByKey(obj, key, value){
delete obj[key];
return obj

}

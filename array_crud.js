const students = [
    {id : 1, name: "John Doe", age:20},
    {id : 2, name: "Jane", age:22},
    {id : 3, name: "Alice", age:20},

];
const newStudent = {id:4, name:"Bob", age:21};
students.push(newStudent);
console.log("List of students:",students);
const studentIdToGet = 2;
const student = students.find((s) => s.id ===studentIdToGet);
if(student)
{
    console.log('Student with ID ${studentIdToGet}: ',student);
}
else
{
    console.log("Student with ID ${studentIdToGet} not found");
}
const studentToUpdate = 3;
const updatedStudent = {id : 3, name : "Rohan", age: 21 };
const updateIndex = students.findIndex((s) => s.id === studentToUpdate);
if(updateIndex !== -1)
{
    students[updateIndex] = updatedStudent;
    console.log("Student with ID ${updateIndex}  updated Successfully");
}
else
{
    console.log("Students with ID ${studentToUpdate} not found");
}
const studentsToDelete = 1;
const indexToDelete= students.findIndex((s) => s.id === studentsToDelete);
if(indexToDelete !== -1)
{
    const deletedStudent = students.splice(indexToDelete,1);
    console.log("Student with ID ${studentsToDelete} deleted successfully");
}
else
{
    console.log("Student with ID ${studentsToDelete} not found");
}
console.log("Final list of students: ",students);




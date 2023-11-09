import {Student} from "./Student";

class School {
    students:Student[] = [
    new Student(101,"Mohammad"),
    new Student(102,"Ibrahim"),
    new Student(103,"Mani"),
    new Student(104,"Kumar")
]
display() :void{
    for(var i in this.students){
        console.log(this.students[i]);
    }
}


}
let school:School=new School() 
    school.display();

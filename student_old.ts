class student_old {
    studentName: string;
    studentAge: number;
    studentrank: number;
    studentmarks: number;

    getStudentGrade():string{
        if(this.studentmarks >= 90){
            return "A";
        }else if(this.studentmarks >= 80 && this.studentmarks < 90){
            return "B";

        }else if(this.studentmarks >= 70 && this.studentmarks < 80){
            
            return "C";

        }else if(this.studentmarks >= 60 && this.studentmarks < 70){

            return "D";

        }else if(this.studentmarks < 60){
            return "F";
        }
            
    }
}
let s1 = new student_old();
s1.studentName = "<Magesh>";
s1.studentAge = 23;
s1.studentrank = 1;
s1.studentmarks = 40;

console.log(s1.getStudentGrade());
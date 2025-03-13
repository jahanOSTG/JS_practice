//how to create an object
// how to add value in object
//create an constructor
//create function inside constructor

function Student(name,age,cgpa,lan){
    this.name=name;
    this.age=age;
    this.cgpa=cgpa;
    this.lan=lan;


    this.display=function(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.cgpa);
        console.log(this.lan);
    }


}
let student1=new Student("Faria Jahan Janie",20,4.00,["Bangla","English"]);
let student2=new Student("Mina",22,3.00,["Bangla","English","Hindi"]);
student1.display();
student2.display();
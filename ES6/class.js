class student{
   constructor(id,name){
    this.id=id
    this.name=name
   }
   //set

   set newName(name){
    this.name=name;
   }
}
let s1=new student(551,"janie")
//console.log(s1)
console.log(s1.name)
s1.newName="Faria"
console.log(s1.name)
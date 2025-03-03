// write a progam the sum of all the number that are devisible by 3 and 5 between 1 to 100.

var x=1;
var sum=0;
document.write("Numbers are : "+ "\n");


while(x<=100){
    if(x%3==0 && x%5==0){
      

        document.write("  " +x);
        sum=sum+x;
    }

    x++;
   
}

document.write("\n"+"Summation : "+sum);

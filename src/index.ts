// let age: number=30;
// if(age<50)
// {
//   age += 10;
//   console.log(age);
// }
// let sales: number=123_345_456;
// let course: string="TypeScript";
// let is_published: boolean=true;
// let x=35;
// let y;
// function render(document: number){
//   console.log(

//     document
//   );
  
// }

// render(32);

let arr:number[]=[];
 arr[0]=45;
console.log(typeof(arr));

function calculateAge(birthYear:number):number
{
  return 2024-birthYear;
}
function caclculatetax(income:number):number{
  if(income<5000)
  {
    return income*0.1;
  }
  else
  {
    return income*0.2;
  }
}

function  incomeTaxByYear(salary:number,year?:number):number{
        if((year||2022)>2034){
          return salary*0.2;
        }
        return salary*0.1;
}

let employee:{ readonly name:string,age:number}={
  name:"John",
  age:30
}


//union types


function kgToLbs(weight:number | string):number{
  //narrowing
  if(typeof weight==="number")
  {
    return weight*2.2;
  }
  else
  {
    return parseInt(weight)*2.2;
  }
}
//intersection types
type Draggable={
  drag:()=>void;      
}
type Resizable={
  resize:()=>void;
}
type UIWidget=Draggable&Resizable;
let textBox:UIWidget={
  drag:()=>{},
  resize:()=>{}
} 


//litrell types
type Quantity=50|100;


let quantity:Quantity=100;
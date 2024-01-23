import { LightningElement } from 'lwc';

export default class Demo extends LightningElement {
    data = [
        { name: "john", age: 24, profession: "developer" },
        { name: "jane", age: 27, profession: "admin" },
      ];
      
      // 1. Print Developers
       printDeveloper() {
        data.forEach((element)=>{
            if(element.profession=="developer"){
                console.log(element)
                document.write(element)
            }
        })
      }
      
      // 2. Add Data
       addData() {
        let uerinput = {};
        uerinput.name= prompt("enter name :")
        uerinput.age = parseInt(prompt("enter age :"))
        uerinput.profession = prompt("enter profession :")
        data.push(uerinput)
      }
      
      // 3. Remove Admins
       removeAdmin() {
        let res = data.filter((element)=>{
            return element.profession!= "admin"
        })
        console.log(res);
      }
      
      // 4. Concatenate Array
       concatenateArray() {
        let arr = [7,4,2,5,70]
        let congat = data.concat(arr)
        console.log(congat)
      }
      
      // 5. Average Age
       averageAge() {
        let sum =0;
        data.forEach((element)=>{
            sum+=element.age
        })
        console.log(parseInt(sum/data.length))
      }
      
      // 6. Age Check
       checkAgeAbove25() {
        data.filter((element)=>{
            console.log(element.age>25);
        })
      }
      
      // 7. Unique Professions
       uniqueProfessions() {
        let unquearr = [];
        data.forEach((element)=>{
            if(!unquearr.includes(element.profession)){
                unquearr.push(element);
            }
        })
      }
      
      // 8. Sort by Age
       sortByAge() {
       data.sort((a,b)=>{
        return a.age-b.age
       })
       console.log(data);
      }
      
      // 9. Update Profession
       updateJohnsProfession() {
        data.forEach((element)=>{
            if(element.name=="john"){
                element.profession = "manager"
            }
        })
      }
      
      // 10. Profession Count
       getTotalProfessions() {
        let dev = 0; admin = 0; manager = 0;
        data.forEach((element)=>{
            if(element.profession=="manager"){
                manager+=1;
            }
            else if(element.profession=="admin"){
                admin+=1;
            }
            else{
                dev+=1;
            }
        })
        console.log(`admin count is ${admin}
        manager count is ${manager}
        developer count is ${dev}`)
      }
}
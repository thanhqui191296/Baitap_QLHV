import { Person } from "./Person.js";
class ListPerson {
    constructor(){
        this.danhSachNguoiDung=[];
    }
    addPerson(person){
        this.danhSachNguoiDung.push(person)
    }
    removePerson(ma){
        this.danhSachNguoiDung = this.danhSachNguoiDung.filter(person => person.ma !== ma)
    }
    updatePerson(person,newInfor){
        const index = this.listPerson.indexOf(person);
        if (index !== -1){
            Object.assign(this.listPerson[index],newInfor)
        }
    }
}
export { ListPerson }

    
    

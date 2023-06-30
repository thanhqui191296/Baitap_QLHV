import { Person } from "./Person.js";

class Student extends Person{
    constructor(toan,ly,hoa,...restPerson){
        super(...restPerson);
        this.toan = toan;
        this.ly = ly;
        this.hoa = hoa;
    }
    getDiemTrungBinh(){
        this.dtb = (this.toan + this.ly + this.hoa)/3;
        return this.dtb
    }
}
export { Student };
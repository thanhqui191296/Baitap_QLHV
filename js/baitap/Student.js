import { Person } from "./Person.js";

export class Student extends Person{
    dtb = 0
    constructor(hoTen,diaChi,ma,email,toan,ly,hoa){
       super(hoTen,diaChi,ma,email)
        this.toan = toan;
        this.ly = ly;
        this.hoa = hoa;
        this.type = "Student"
    }
    getDiemTrungBinh(){
        this.dtb = (this.toan + this.ly + this.hoa)/3;
        return this.dtb
    }
    get math(){
        return this.toan
    }
    get physics(){
        return this.ly
    }
    get chemistry(){
        return this.hoa
    }
}

import { Person } from "./Person.js";

class Employee extends Person{
    constructor(soNgayLam,luongTheoNgay,...restPerson){
        super(...restPerson);
        this.soNgayLam = soNgayLam;
        this.luongTheoNgay = luongTheoNgay;
    }
    getLuong(){
        this.luong= (this.soNgayLam * this.luongTheoNgay)
        return this.luong
    }
}
export { Employee };
import { Person } from "./Person.js";

export class Employee extends Person {
    luong = 0
    constructor(hoTen, diaChi, ma, email, soNgayLam, luongTheoNgay) {
        super(hoTen, diaChi, ma, email,);
        this.soNgayLam = soNgayLam;
        this.luongTheoNgay = luongTheoNgay;
        this.loaiND = "Employee"
    }
    get Work() {
        return this.soNgayLam
    }
    get dailySalary() {
        return this.luongTheoNgay
    }
    getLuong() {
        this.luong = this.soNgayLam * this.luongTheoNgay
        return this.luong
    }
}


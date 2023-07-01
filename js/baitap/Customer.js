import { Person } from "./Person.js";

export class Customer extends Person{
    constructor(hoTen,diaChi,ma,email,tenCTY, triGiaHD, danhGia,){
        super(hoTen,diaChi,ma,email);
        this.tenCTY = tenCTY;
        this.triGiaHD = triGiaHD;
        this.danhGia = danhGia;
    }
   get companyName(){
    return this.tenCTY
   }
   get triGiaHoaDon(){
    return this.triGiaHD
   }
   get danhGia(){
    return this.danhGia
   }
}

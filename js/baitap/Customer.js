import { Person } from "./Person.js";

export class Customer extends Person{
    constructor(hoTen,diaChi,ma,email,tenCTY, triGiaHD, danhGia,){
        super(hoTen,diaChi,ma,email);
        this.tenCTY = tenCTY;
        this.triGiaHD = triGiaHD;
        this.danhGia = danhGia;
        this.type = "Customer"
    }
   get companyName(){
    return this.tenCTY
   }
   get triGiaHoaDon(){
    return this.triGiaHD
   }
   get danhGiaCustomer(){
    return this.danhGia
   }
}

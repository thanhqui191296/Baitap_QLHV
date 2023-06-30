export class Person{
    dtb = 0;
    luong = 0
    loaiND = ""
    constructor (hoTen,diaChi,ma,email,loaiND){
        
        this.hoTen = hoTen;
        this.diaChi = diaChi;
        this.ma = ma;
        this.email = email;
        this.loaiND = loaiND
    }
    xetLoaiND(){
        if (this.loaiND === "Student") {
            console.log("Loại người dùng: Student");
        }if (this.loaiND === "Employee") {
            console.log("Loại người dùng: Employee");
        } if (this.loaiND === "Customer"){
            console.log("Loại người dùng: Customer");
        }
    }
    getDiemTrungBinh(){
        console.log("[Điểm trung bình]", this.dtb)
        return this.dtb
    }
    getLuong(){
        console.log('Lương')
    }
    getCty(){
        
    }
} 
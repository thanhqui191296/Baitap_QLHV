export class Person{
    dtb = 0;
    luong = 0
    
    constructor (hoTen,diaChi,ma,email){
        
        this.hoTen = hoTen;
        this.diaChi = diaChi;
        this.ma = ma;
        this.email = email;
        
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
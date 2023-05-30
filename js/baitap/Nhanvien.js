function NhanVien(tKhoan,hoTen,email,matKhau,ngayLam,luongCB,chucVu,gioLam) {
    this.taiKhoan = tKhoan;
    this.hoVaTen = hoTen;
    this.email = email;
    this.passwork = matKhau;
    this.ngayLam = ngayLam;
    this.luongCoBan = luongCB;
    this.chucVu = chucVu;
    this.gioLamTrongThang = gioLam;
    this.tongLuong = 0;
    this.loaiNhanVien = "";
    this.xepLoaiNhanVien =  function(){
        if(this.gioLamTrongThang >= 192){
            this.loaiNhanVien = "Nhân Viên Xuất Xắc"
        }if(this.gioLamTrongThang >= 176 && this.gioLamTrongThang < 192 ){
            this.loaiNhanVien = "Nhân Viên Giỏi"
        }if(this.gioLamTrongThang >= 160 && this.gioLamTrongThang < 176){
            this.loaiNhanVien = "Nhân Viên Khá"
        }if (this.gioLamTrongThang >0 && this.gioLamTrongThang < 160) {
            this.loaiNhanVien = "Nhân Viên Trung Bình"
        }
    }
    this.totalLuong = function () {
        if (this.chucVu == "Sếp") {
            this.tongLuong = this.luongCoBan*3
        }if (this.chucVu == "Trưởng phòng") {
            this.tongLuong = this.luongCoBan *2
        }if (this.chucVu == "Nhân viên") {
            this.tongLuong = this.luongCoBan * 1
        }
    }
}
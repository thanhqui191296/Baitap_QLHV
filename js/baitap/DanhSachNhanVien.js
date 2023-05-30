function DanhSachNhanVien() {
    this.mangNV = [];
    this.themNV = function (nv) {
        this.mangNV.push(nv)
    }
    this.timIndex = function(tKhoan){
        var indexFind = -1;
        this.mangNV.map(function (nv, index) {
            if (nv.taiKhoan === tKhoan){
                indexFind = index;
            }
        });
        return indexFind;
    }
    this.xoaNV = function(tKhoan){
        var index = this.timIndex(tKhoan)
        if (index > -1) {
            this.mangNV.splice(index,1)
        }
    }
    this.capNhat = function(nv){
        var indexFind = this.timIndex(nv.taiKhoan);
        if (indexFind > -1) {
            dsnv.mangNV[indexFind] = nv;
            return true
        }else{
            return false
        }
    }
    
}
DanhSachNhanVien.prototype.timKiemTheoLoai = function (tuTim) {
    var mangTK = []
    var tuTimThuong = tuTim.toLowerCase();
    var tuTimReplace = tuTimThuong.replace(/\s/g, "")
    this.mangNV.map(function (nv, index) {
        var loaiThuong = nv.loaiNhanVien.toLowerCase();
        var loaiReplace = loaiThuong.replace(/\s/g, "")
        var result = loaiReplace.indexOf(tuTimReplace)
        if(result > -1){
            mangTK.push(nv)
        }
    })
    return mangTK
}
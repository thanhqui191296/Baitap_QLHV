const dsnv = new DanhSachNhanVien()
const validation = new Validation()
function setLocalStorage() {
    localStorage.setItem("DSNV", JSON.stringify(dsnv.mangNV));
}
function getLocalStorage() {
    var dataLocal = JSON.parse(localStorage.getItem("DSNV"));
    if (dataLocal !== null) {
        inRaTable(dataLocal)
        dsnv.mangNV = dataLocal;
    }
}
getLocalStorage()
function themNhanVien() {
    var tKhoan = document.getElementById("tknv").value;
    var hoTen = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var matKhau = document.getElementById("password").value;
    var ngayLam = document.getElementById("datepicker").value;
    var luongCB = document.getElementById("luongCB").value;
    var chucVu = document.getElementById("chucvu").value;
    var gioLam = document.getElementById("gioLam").value;
    // console.log(tKhoan,hoTen,email,matKhau,ngayLam,luongCB,chucVu,gioLam)
    var isValid = true
    isValid &= validation.checkID(tKhoan, "tbTKNV", "Tài khoản tối đa 4 - 6 ký số, không để trống") && validation.checkEmpty(tKhoan, "tbTKNV", "Tài khoản không được để trống") && validation.checkTrungID(tKhoan, "tbTKNV", "Tài khoản bị trùng", dsnv.mangNV)
    isValid &= validation.checkEmpty(hoTen, "tbTen", "Tên không được bỏ trống") && validation.checkTen(hoTen, "tbTen", "Tên nhân viên phải là chữ, không để trống", dsnv.mangNV)
    isValid &= validation.checkEmail(email, "tbEmail", "Email phải đúng định dạng, không để trống")
    isValid &= validation.checkMatKhau(matKhau, "tbMatKhau", "mật Khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)", dsnv.mangNV) && validation.checkEmpty(matKhau, "tbMatKhau", "Không được để trống")
    isValid &= validation.checkNgay(ngayLam, "tbNgay", "định dạng mm/dd/yyyy", dsnv.mangNV) && validation.checkEmpty(ngayLam, "tbNgay", "Ngày làm không được để trống")
    isValid &= validation.checkLuong(luongCB, "tbLuongCB", "Lương cơ bản từ 1 000 000 - 20 000 000", dsnv.mangNV) && validation.checkLuong(luongCB, "tbLuongCB", "Lương không được để trống")
    isValid &= validation.checkEmpty(chucVu, "tbChucVu", "Chức vụ không được bỏ trống") && validation.checkChucVu(chucVu, "tbChucVu", "Chọn chức vụ phù hợp", dsnv.mangNV)
    isValid &= validation.checkGio(gioLam, "tbGiolam", "Số giờ làm trong tháng không được ít hoặc nhiều hơn 80 - 200h/tháng", dsnv.mangNV) && validation.checkEmpty(gioLam, "tbGiolam", "Số giờ làm không được để trống")
    if (isValid) {
        var nv = new NhanVien(tKhoan, hoTen, email, matKhau, ngayLam, luongCB, chucVu, gioLam)
        nv.xepLoaiNhanVien()
        nv.totalLuong()
        // console.log(nv)
        dsnv.themNV(nv)
        // console.log(dsnv.mangNV)
        setLocalStorage()
        inRaTable(dsnv.mangNV)
    }

}
document.getElementById("btnThemNV").onclick = themNhanVien
function inRaTable(mang) {
    var content = "";
    mang.map(function (nv, index) {
        var trNV = `<tr>
        <td>${nv.taiKhoan}</td>
        <td>${nv.hoVaTen}</td>
        <td>${nv.email}</td>
        <td>${nv.ngayLam}</td>
        <td>${nv.chucVu}</td>
        <td>${nv.tongLuong}</td>
        <td>${nv.loaiNhanVien}</td>
        <td>
            <button class = "btn btn-danger" onclick ="xoaNhanVien('${nv.taiKhoan}')">Xóa</button>
            <button class = "btn btn-info" onclick ="xemThongTin('${nv.taiKhoan}')">Xem</button>
        </td>
        </tr>`;
        content += trNV;
    })
    console.log(content)
    document.getElementById("tableDanhSach").innerHTML = content
}
function xoaNhanVien(tKhoan) {
    dsnv.xoaNV(tKhoan)
    inRaTable(dsnv.mangNV)
}
function xemThongTin(tKhoan) {
    var indexFind = dsnv.timIndex(tKhoan);
    if (indexFind > -1) {
        var nvFind = dsnv.mangNV[indexFind]
        document.getElementById("tknv").value = nvFind.taiKhoan
        document.getElementById("tknv").disabled = true
        document.getElementById("name").value = nvFind.hoVaTen
        document.getElementById("email").value = nvFind.email
        document.getElementById("password").value = nvFind.passwork
        document.getElementById("datepicker").value = nvFind.ngayLam
        document.getElementById("luongCB").value = nvFind.luongCoBan
        document.getElementById("chucvu").value = nvFind.chucVu
        document.getElementById("gioLam").value = nvFind.gioLamTrongThang
    }
}
function capNhatNV() {
    var tKhoan = document.getElementById("tknv").value;
    var hoTen = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var matKhau = document.getElementById("password").value;
    var ngayLam = document.getElementById("datepicker").value;
    var luongCB = document.getElementById("luongCB").value;
    var chucVu = document.getElementById("chucvu").value;
    var gioLam = document.getElementById("gioLam").value;

    var nv = new NhanVien(tKhoan, hoTen, email, matKhau, ngayLam, luongCB, chucVu, gioLam)
    nv.xepLoaiNhanVien()
    nv.totalLuong()
    console.log(nv)
    var result = dsnv.capNhat(nv);
    if (result) {
        setLocalStorage();
        inRaTable(dsnv.mangNV);

    } else {
        alert("Cập nhật thất bại")
    }
}
document.getElementById("btnCapNhat").onclick = capNhatNV
document.getElementById("searchName").onkeyup = function () {
    var tuTim = document.getElementById("searchName").value;
    var mangTK = dsnv.timKiemTheoLoai(tuTim)
    inRaTable(mangTK)
}
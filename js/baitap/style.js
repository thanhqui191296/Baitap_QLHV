const listPerson = new ListPerson();
const validation = new Validation();
function setLocalStorage() {
    localStorage.setItem("DSND", JSON.stringify(listPerson.mangND))
}
function getLocalStorage() {
    const dataLocal = JSON.parse(localStorage.getItem("DSND"));
    
    if (dataLocal !== null) {
        inRaTable(dataLocal)
        dsnv.mangNV = dataLocal;
    }
}
getLocalStorage()

function themNguoiDung() {

    const hoTen = document.getElementById('name').value;
    const diaChi = document.getElementById('diachi').value;
    const ma = document.getElementById('ma').value;
    const email = document.getElementById('email').value;
    const loaiND = document.getElementById('loaiND').value;
    const tenCTY = document.getElementById('cty').value;
    const triGiaHD = document.getElementById('hoaDon').value;
    const danhGia = document.getElementById('danhGia').value;
    const luongTheoNgay = document.getElementById('luongTheoNgay').value;
    const soNgayLam = document.getElementById('soNgayLam').value;
    const toan = +document.getElementById('toan').value;
    const ly = +document.getElementById('ly').value;
    const hoa = +document.getElementById('hoa').value;
    const isValid = true
    isValid && validation.checkEmpty(hoTen, "tbTen", "Tên không được bỏ trống") && validation.checkTen(hoTen, "tbTen", "Tên nhân viên phải là chữ, không để trống")
    isValid && validation.checkEmail(email, "tbEmail", "Email phải đúng định dạng, không để trống")
    isValid && validation.checkDiaChi(diaChi, "tbDiaChi", "Nhập đúng địa chỉ") && validation.checkEmpty(diaChi, "tbDiaChi", "Địa chỉ không được bỏ trống")
    isValid && validation.checkMa(ma, "tbMa", "Mã phải theo loại người dùng VD:student là ST, employee là EM, customer là CS. và số thứ tự") && validation.checkEmpty(ma, "tbMa", "mã không được bỏ trống") && validation.checkTrungID(ma, "tbMa", "Mã bị trùng", listPerson.mangND)
    isValid && validation.checkDiem(toan,  "tbToan", "Điểm không được trên 10")
    isValid && validation.checkDiem( ly,"tbLy", "Điểm không được trên 10")
    isValid && validation.checkDiem( hoa,"tbHoa", "Điểm không được trên 10")
    isValid && validation.checkLoaiNguoiDung(loaiND, "tbLoaiND", "Chọn loại người dùng không được bỏ chọn")
    isValid && validation.checkCongTy(tenCTY, "tbCTY", "Nhập đúng tên cty không được bỏ trống")
    isValid && validation.checkDanhGia(danhGia, "tbDanhGia", "Nhập đánh giá nếu có")
    isValid && validation.checkTriGiaHoaDon(triGiaHD, "tbHoaDon", "Nhập trị giá hóa đơn không được để trống, không có số âm")
    isValid && validation.checkLuongTheoNgay(luongTheoNgay, "tbLuong", "Nhập đúng lương không được dưới 0")
    isValid && validation.checkSoNgayLam(soNgayLam, "tbNgayLam", "Nhập đúng số ngày làm không được được bỏ trống")
    if (isValid) {
        const nd = new Person(hoTen, email, diaChi, ma, loaiND, tenCTY, triGiaHD, danhGia, toan, ly, hoa)
        listPerson.themND(nd)
        console.log("Người dùng đã được thêm vào mảng:", listPerson.mangND);
        // console.log(dsnv.mangNV)
        setLocalStorage()
        console.log("Dữ liệu đã được lưu vào Local Storage");
        inRaTable(listPerson.mangND)
        console.log("Dữ liệu đã được hiển thị trong bảng");
    }

}
document.getElementById('btnThemND').onclick = themNguoiDung

import { Student } from "./Student.js";
import { Employee } from "./Employee.js";
import { Customer } from "./Customer.js";
import { ListPerson } from "./ListPerson.js";
function saveToLocalStorage() {
    localStorage.setItem("listPerson", JSON.stringify(listPerson.danhSachNguoiDung))
}
function restoreFromLocalStorage() {
    const savedList = localStorage.getItem("listPerson");
    if (savedList) {
        listPerson.danhSachNguoiDung = JSON.parse(savedList)
    }
}

const listPerson = new ListPerson()
restoreFromLocalStorage()
document.getElementById('btnThemND').addEventListener('click', () => {

    const soNgayLam = document.getElementById('soNgayLam').value
    const luongTheoNgay = document.getElementById('luongTheoNgay').value
    const hoTen = document.getElementById('name').value
    const diaChi = document.getElementById('diachi').value
    const ma = document.getElementById('ma').value;
    const loaiND = document.getElementById('loaiND').value;
    const email = document.getElementById('email').value
    const employee = new Employee(soNgayLam, luongTheoNgay, hoTen, diaChi, ma, email, loaiND);
    listPerson.addPerson(employee);
    const tenCTY = document.getElementById('cty').value;
    const triGiaHD = document.getElementById('hoaDon').value;
    const danhGia = document.getElementById('danhGia').value;
    const customer = new Customer(tenCTY, triGiaHD, danhGia, hoTen, diaChi, ma, email, loaiND);
    listPerson.addPerson(customer);
    const toan = document.getElementById('toan').value
    const ly = document.getElementById('ly').value;
    const hoa = document.getElementById('hoa').value;
    const student = new Student(toan, ly, hoa, hoTen, diaChi, ma, email, loaiND);
    listPerson.addPerson(student);
    console.log({
        employee,
        customer,
        student
    })
    saveToLocalStorage()
    const renderTable = () => {
        let content = "";
        listPerson.danhSachNguoiDung.forEach((person) => {
            const tr = `
        <tr>
        <td>${person.hoTen}</td>
        <td>${person.email}</td>
        <td>${person.diaChi}</td>
        <td>${person.ma}</td>
        <td>${person.loaiND}</td>
        <td>
        <button class = "btn btn-danger" onclick = "xoaNguoiDung('${person.ma}')">Xóa</button>
        </td>
        <td>
        
        </td>
        </tr>`

            content += tr
        })

        document.getElementById("tableDanhSach").innerHTML = content;
    };renderTable()
   
})









import { showNotification } from "./showNotification.js";   
import { Student } from "./Student.js";
import { Employee } from "./Employee.js";
import { Customer } from "./Customer.js";
import { ListPerson } from "./ListPerson.js";
import { renderHTML } from "./RenderHTML.js";





export const listPerson = new ListPerson()
const addPerson = () => {
    const hoTen = document.getElementById('name').value
    const diaChi = document.getElementById('diachi').value
    const ma = document.getElementById('ma').value;
    const type = document.getElementById('loaiND').value;
    const email = document.getElementById('email').value
    let person;
    if (type === "Student") {
        const toan = +document.getElementById('toan').value
        const ly = +document.getElementById('ly').value;
        const hoa = +document.getElementById('hoa').value;
        person = new Student(hoTen,diaChi,ma,email,toan, ly, hoa);
        person.getDiemTrungBinh()
    } else if (type === "Employee") {
        const soNgayLam = +document.getElementById('soNgayLam').value
        const luongTheoNgay = +document.getElementById('luongTheoNgay').value
        person = new Employee(hoTen, diaChi, ma, email,soNgayLam, luongTheoNgay);
        person.getLuong()
    } else if (type === "Customer") {
        const tenCTY = document.getElementById('cty').value;
        const triGiaHD = document.getElementById('hoaDon').value;
        const danhGia = document.getElementById('danhGia').value;
        person = new Customer(hoTen, diaChi, ma, email,tenCTY, triGiaHD, danhGia);
    }
    listPerson.addPerson(person)
    listPerson.saveToLocalStorage();
    showNotification("Thêm thành công", true)
    renderHTML(listPerson.persons)
    resetForm()

}
document.getElementById('btnThemND').addEventListener('click', addPerson)

window.showFields = (selectID) => {
    document.getElementById('studentFiedlds').style.display = "none"
    document.getElementById('employeeFields').style.display = "none"
    document.getElementById('customerFields').style.display = "none"
    if(selectID === "loaiND"){
        const select = document.getElementById(selectID)
        const selectedOption  = select.options[select.selectedIndex].text
        if(selectedOption === "Student"){
            document.getElementById('studentFiedlds').style.display = "block"
        } else if(selectedOption === "Employee"){
            document.getElementById('employeeFields').style.display = "block"
        } else if (selectedOption === "Customer"){
            document.getElementById('customerFields').style.display = "block"
        }
    }
}
const updatePerson = () => {
    listPerson.restoreFromLocalStorage()
    const hoTen = document.getElementById('name').value
    const diaChi = document.getElementById('diachi').value
    const ma = document.getElementById('ma').value;
    const type = document.getElementById('loaiND').value;
    const email = document.getElementById('email').value
    let person;
    if (type === "Student") {
        const toan = +document.getElementById('toan').value
        const ly = +document.getElementById('ly').value;
        const hoa = +document.getElementById('hoa').value;
        person = new Student(toan, ly, hoa, hoTen, diaChi, ma, email);
        person.getDiemTrungBinh()
    } else if (type === "Employee") {
        const soNgayLam = +document.getElementById('soNgayLam').value
        const luongTheoNgay = +document.getElementById('luongTheoNgay').value
        person = new Employee(soNgayLam, luongTheoNgay, hoTen, diaChi, ma, email);
        person.getLuong()
    } else if (type === "Customer") {
        const tenCTY = document.getElementById('cty').value;
        const triGiaHD = document.getElementById('hoaDon').value;
        const danhGia = document.getElementById('danhGia').value;
        person = new Customer(tenCTY, triGiaHD, danhGia, hoTen, diaChi, ma, email);
    }
    const isUpdate = listPerson.updatePerson(person)
    if (isUpdate) {
        listPerson.saveToLocalStorage();
        renderHTML(listPerson.persons)
        resetForm()
        showNotification('Cập nhật thành công', true)
    } else {
        showNotification('Không tìm thấy người dùng', false)
    }
}
const saveBtn = document.getElementById('btnCapNhat')
saveBtn.addEventListener('click', updatePerson)
const resetForm = () => {
    document.getElementById('form').reset()
}
const filterByLoaiND = () => {
    const selectEle = document.getElementById('loaiND');
    const selectedType = selectEle.value
    const filteredPersons = listPerson.filterByLoaiND(selectedType)
    renderHTML(filteredPersons)
};
const selectEle = document.getElementById('loaiND');
selectEle.addEventListener('change', filterByLoaiND)

let shortOrder = 'asc';
const sortByName = document.getElementById('locTheoTen')
const sortIcon = document.getElementById('sortArrowIcon')
sortByName.addEventListener('click', sortPersonByName)
function sortPersonByName() {
    listPerson.sortPersonByName(shortOrder);
    if (shortOrder === 'asc') {
        shortOrder = 'desc';
        sortIcon.classList.remove('fa-sort-down');
        sortIcon.classList.add('fa-sort-up')
    } else {
        shortOrder = 'asc'
        sortIcon.classList.remove('fa-sort-up')
        sortIcon.classList.add('fa-sort-down')
    }
    renderHTML(listPerson.persons)
}
const searchInput = document.getElementById('searchName')
searchInput.addEventListener('input', searchPersonByName)
function searchPersonByName() {
    const key = searchInput.value.toLowerCase()
    const savedList = localStorage.getItem("persons");
    let persons  = []
    if (savedList) {
        persons  = JSON.parse(savedList)
    }
    const searchPerson = persons.filter(person => person.name.toLowerCase().includes(key))
    renderHTML(searchPerson)
}
window.addEventListener('DOMContentLoaded', () => {
    listPerson.restoreFromLocalStorage()
    renderHTML(listPerson.persons)
})










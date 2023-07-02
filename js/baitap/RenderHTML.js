import { Person } from "./Person.js";
import { listPerson } from "./main.js";
import { showNotification } from "./showNotification.js";


export const renderHTML = (persons) => {
    const userContent = document.getElementById('tableDanhSach');
    userContent.innerHTML = '';
    persons.forEach(person => {
        // person trong scope nay ma, ok chua ne oki a
        console.log(person)
        const row = `
            <tr>
                <td>${person.hoTen}</td>
                <td>${person.email}</td>
                <td>${person.diaChi}</td>
                <td>${person.ma}</td>
                <td>${person.type}</td>
                <td>
                    <button class="btn btn-success view-info-btn" data-person-name="${person.hoTen}">Xem thông tin</button>
                </td>
                <td>
                <button class="btn btn-primary btn-sm btn-userinfo" data-person-name="${person.hoTen}" data-toggle="modal"
                data-target="#myModal"><i class="fa-solid fa-pen-to-square"></i></button>
                <button  class="btn btn-danger btn-sm btn-delete" data-person-name="${person.hoTen}"><i class="fa-solid fa-trash"></i></button>
                </td>

            </tr>
        `;
        userContent.innerHTML += row
        console.log(person)
    })
    
    const viewInfoButtons = document.querySelectorAll('.view-info-btn')
    viewInfoButtons.forEach(button => {
        button.addEventListener('click', handleViewInfo)
    })
    const deleteButton = document.querySelectorAll('.btn-delete')
    deleteButton.forEach(button => {
        button.addEventListener('click', handleDeletePerson)
    })
    const userInforButton = document.querySelectorAll('btn-userinfo')
    userInforButton.forEach(button => {
        button.addEventListener('click', handleShowUser)
    })

}

const handleViewInfo = (event) => {
    event.preventDefault()
    const personName = event.target.dataset.personName
    const storedPersons = localStorage.getItem("persons");
    if (storedPersons) {
        const persons = JSON.parse(storedPersons)
        const person = persons.find(p => p.hoTen === personName)
        let popupContent = "";
        let popupSubtitle = "";
        if (person.type === "Student") {
            popupSubtitle = "Student";
            popupContent = `
            <label for="field1">Điểm toán</label>
            <input type="text" id="field1" value="${person.toan}" disabled>
                <label for="field2">Điểm Lý :</label>
                <input type="text" id="field2" value="${person.ly}" disabled>
                <label for="field3">Điểm Hoá:</label>
                <input type="text" id="field3" value="${person.hoa}" disabled>
                <label for="field3">Điểm trung bình:</label>
                <div class="alert alert-warning" role="alert">
                    👉<span id="txtArray">${person.dtb}</span>
                </div> 
            `;
        } else if (person.type === "Employee") {
            popupSubtitle = "Employee"
            popupContent = `
            <label for="field1">Số ngày làm việc :</label>
                <input type="text" id="field1" value="${person.soNgayLam}" disabled>
                <label for="field2">Lương theo ngày :</label>
                <input type="text" id="field2" value="${person.luongTheoNgay}" disabled>
                <label for="field3">Tổng lương:</label>
                <div class="alert alert-warning" role="alert">
                    👉<span id="txtArray">${person.luong}</span>
                </div> 
            `
        } else if (person.type === "Customer") {
            popupSubtitle = "Customer";
            popupContent = `
            <label for="field1">Tên công ty :</label>
                <input type="text" id="field1" value="${person.tenCTY}" disabled>
                <label for="field2">Trị giá hoá đơn :</label>
                <input type="text" id="field2" value="${person.triGiaHD}" disabled>
                <label for="field3">Đánh giá :</label>
                <input type="text" id="field3" value="${person.danhGia}" disabled>   
            `;
        }
        showPopup(personName, popupSubtitle, popupContent)
    }
}
const showPopup = (personName, popupSubtitle, popupContent) => {
    const popupHTML = `
    <div class="popup-overlay">
            <div class="popup-container">
                <h2>Thông tin của ${personName}</h2>
                <h3>${popupSubtitle}</h3>
                <div class="popup-content">
                    ${popupContent}
                </div>
                <button class="popup-close">Đóng</button>
            </div>
        </div>
    `;
    const tempDiv = document.createElement('div')
    tempDiv.innerHTML = popupHTML
    const popup = tempDiv.firstElementChild
    const closeButton = popup.querySelector('.popup-close');
    closeButton.addEventListener('click', () => {
        popup.parentNode.removeChild(popup)
    })
    document.body.appendChild(popup)
}
const handleDeletePerson = (event) => {
    const personName = event.currentTarget.dataset.personName
    const person = listPerson.persons.find(p => p.hoTen === personName)
    if (person) {
        const confirmation = confirm("Xóa người dùng này!!")
        if (confirmation) {
            listPerson.removePerson(person.ma)
            listPerson.saveToLocalStorage()
            showNotification("Xóa thành công", true)
            renderHTML(listPerson.persons)
        }
    }
}
const handleShowUser = (event) => {
    const personName = event.currentTarget.dataset.personName
    const person = listPerson.persons.find(p => p.hoTen === personName)
    if (person) {
        const index = listPerson.persons.findIndex(person => person.ma === person.ma)
        if (index > -1) {
            const userInfor = listPerson.persons[index]
            document.getElementById('name').value = userInfor.hoTen
            document.getElementById('diachi').value = userInfor.diaChi
            document.getElementById('ma').value = userInfor.ma
            document.getElementById('loaiND').value = userInfor.type
            document.getElementById('email').value = userInfor.email
            window.showFields('loaiND')
            if (userInfor.type === "Student") {
                document.getElementById('toan').value = userInfor.toan
                document.getElementById('ly').value = userInfor.ly
                document.getElementById('hoa').value = userInfor.hoa
            } else if (userInfor.type === "Employee") {
                document.getElementById('soNgayLam').value = userInfor.soNgayLam
                document.getElementById('luongTheoNgay').value = userInfor.luongTheoNgay
            } else if (userInfor.type === "Customer") {
                document.getElementById('cty').value = userInfor.tenCTY
                document.getElementById('hoaDon').value = userInfor.triGiaHD
                document.getElementById('danhGia').value = userInfor.danhGia
            }
            listPerson.saveToLocalStorage()
        }

    }
}

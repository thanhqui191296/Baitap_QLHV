
function showFields(){
    const selectElement = document.getElementById('loaiND')
    const selectedValue = selectElement.value
    const studentFiedlds = document.getElementById('studentFiedlds')
    const employeeFields = document.getElementById('employeeFields')
    const customerFields = document.getElementById('customerFields')
    if (selectedValue === "Student"){
        studentFiedlds.style.display = "block";
        employeeFields.style.display = "none";
        customerFields.style.display = "none";
    }else if (selectedValue === "Employee"){
        studentFiedlds.style.display = "none";
        employeeFields.style.display = "block";
        customerFields.style.display = "none";
    }else if(selectedValue === "Customer"){
        studentFiedlds.style.display = "none";
        employeeFields.style.display = "none";
        customerFields.style.display = "block";
    }
}
const selectElement = document.getElementById('loaiND')
selectElement.addEventListener('change', function() {
    showFields();
});

showFields();

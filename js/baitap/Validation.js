function Validation() {
    this.checkEmpty = function (value, spanID, message) {
        if (value === "") {
            document.getElementById(spanID).innerHTML = message
            document.getElementById(spanID).style.display = "block";
            return false
        }
        document.getElementById(spanID).innerHTML = "";
        document.getElementById(spanID).style.display = "none";
        return true;
    }
    this.checkTrungID = function (value, spanID, message, mangNV) {
        var isExist = mangNV.some(function (nv, index) {
            return nv.mangNV === value;
        });
        if(isExist){
            ocument.getElementById(spanID).innerHTML = message
            document.getElementById(spanID).style.display = "block";
            return false
        }
        document.getElementById(spanID).innerHTML = "";
        document.getElementById(spanID).style.display = "none";
        return true;
    }
    this.checkID = function (value, spanID, message) {
        var pattern = /^[0-9]+$/
        if (value.match(pattern) && value.length >= 4 && value.length <= 6) {
            document.getElementById(spanID).innerHTML = ""
            document.getElementById(spanID).style.display = "none"
            return true;
        }
        document.getElementById(spanID).innerHTML = message
        document.getElementById(spanID).style.display = "block"
        return false
    }
    this.checkTen = function (value, spanID, message) {
        var pattern = /^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/
        if (value.match(pattern)) {
            document.getElementById(spanID).innerHTML = ""
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        document.getElementById(spanID).innerHTML = message
        document.getElementById(spanID).style.display = "block";
        return false;
    }
    this.checkEmail = function (value, spanID, message) {
        var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (value.match(pattern)) {
            document.getElementById(spanID).innerHTML = ""
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        document.getElementById(spanID).innerHTML = message
        document.getElementById(spanID).style.display = "block";
        return false;
    }
    this.checkMatKhau = function (value, spanID, message) {
        var pattern = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})/g
        if (value.match(pattern)&&  value.length >= 6 && value.length <= 10){
            document.getElementById(spanID).innerHTML = ""
            document.getElementById(spanID).style.display = "none";
            return true
        }
        document.getElementById(spanID).innerHTML = message
        document.getElementById(spanID).style.display = "block";
        return false;
    }
    this.checkNgay = function (value, spanID, message) {
        var pattern = /^(0?[1-9]|1[0-2])[\/](0?[1-9]|[12]\d|3[01])[\/](19|20)\d{2}$/
        if (value.match(pattern)) {
            document.getElementById(spanID).innerHTML = ""
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    }
    this.checkLuong = function (value, spanID, message) {
        var pattern = /^[0-9]+$/
        if (value.match(pattern)&& value >= 1000000 && value <=20000000) {
            document.getElementById(spanID).innerHTML = ""
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        document.getElementById(spanID).innerHTML = message
        document.getElementById(spanID).style.display = "block";
        return false;
        
    }
    this.checkGio = function (value, spanID, message) {
        var pattern = /^[0-9]+$/
        if (value.match(pattern)&& value >= 80 && value <= 200) {
            document.getElementById(spanID).innerHTML = ""
            document.getElementById(spanID).style.display = "none";
            return true
        }
        document.getElementById(spanID).innerHTML = message
        document.getElementById(spanID).style.display = "block";
        return false
    }
    this.checkChucVu = function (value, spanID, message) {
        if (value === "Chọn chức vụ"){
            document.getElementById(spanID).innerHTML = message
            document.getElementById(spanID).style.display = "block";
            return false
        }
        document.getElementById(spanID).innerHTML = ""
        document.getElementById(spanID).style.display = "none"
        return true;
    }
}
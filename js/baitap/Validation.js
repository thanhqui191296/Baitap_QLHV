function Validation() {
    this.checkEmpty = function (value, spanID, message) {
        if (value === "") {
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block"
            return false
        }
        document.getElementById(spanID).innerHTML = "";
        document.getElementById(spanID).style.display = "none";
        return true
    }
    this.checkTrungMa = function (value, spanID, message, mangND) {
        const isExist = mangND.some(function (nd, index) {
            return nd.mangND === value
        });
        if (isExist) {
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
            return false
        }
        document.getElementById(spanID).innerHTML = "";
        document.getElementById(spanID).style.display = "none";
        return true;
    }
    this.checkDiaChi = function (value, spanID, message) {
        const pattern = /^(\d+)\s+([\w\s]+),\s+([^\d]+),\s+(\w+)$/
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
    this.checkMa = function (value, spanID, message) {
        const pattern = /^[a-zA-Z0-9]+$/
        if (value.match(pattern)) {
            document.getElementById(spanID).innerHTML = ""
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        document.getElementById(spanID).innerHTML = message
        document.getElementById(spanID).style.display = "block";
        return false;
    }
    this.checkLoaiNguoiDung = function (value, spanID, message) {
        if (value === "Chọn loại người dùng") {
            document.getElementById(spanID).innerHTML = message
            document.getElementById(spanID).style.display = "block";
            return false
        }
        document.getElementById(spanID).innerHTML = ""
        document.getElementById(spanID).style.display = "none"
        return true;
    }
    this.checkDiem= function(value, spanID, message){
        value = parseFloat(value);
        if (isNaN(value)) {
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
            return false;
        }
        document.getElementById(spanID).innerHTML = "";
        document.getElementById(spanID).style.display = "none";
        return true;
    }
    this.checkSoNgayLam = function(value, spanID, message) {
        value = parseInt(value, 10);
        if (isNaN(value) || value <= 0) {
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
            return false;
        }
        document.getElementById(spanID).innerHTML = "";
        document.getElementById(spanID).style.display = "none";
        return true;
    }

    this.checkLuongTheoNgay = function(value, spanID, message) {
        value = parseFloat(value);
        if (isNaN(value) || value <= 0) {
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
            return false;
        }
        document.getElementById(spanID).innerHTML = "";
        document.getElementById(spanID).style.display = "none";
        return true;
    }
    this.checkCongTy= function(value, spanID, message) {
        if (value.trim() === "") {
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
            return false;
        }
        document.getElementById(spanID).innerHTML = "";
        document.getElementById(spanID).style.display = "none";
        return true;
    }

    this.checkTriGiaHoaDon=function(value, spanID, message) {
        value = parseFloat(value);
        if (isNaN(value) || value <= 0) {
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
            return false;
        }
        document.getElementById(spanID).innerHTML = "";
        document.getElementById(spanID).style.display = "none";
        return true;
    }

    this.checkDanhGia =function(value, spanID, message) {
        value = parseInt(value, 10);
        if (isNaN(value) || value < 1 || value > 5) {
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
            return false;
        }
        document.getElementById(spanID).innerHTML = "";
        document.getElementById(spanID).style.display = "none";
        return true;
    }
}

import { Person } from "./Person.js";

class Customer extends Person{
    constructor(tenCTY, triGiaHD, danhGia,...restPerson){
        super(...restPerson);
        this.tenCTY = tenCTY;
        this.triGiaHD = triGiaHD;
        this.danhGia = danhGia;
    }
    getCty(){
        return`
        <h1>${this.tenCTY}</h1>
        <p>${this.triGiaHD}</p>
        <p>${this.danhGia}</p>
        `
    }
}
export { Customer };

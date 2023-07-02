import { Person } from "./Person.js";

 export class ListPerson {
    constructor() {
        this.persons = [];
    }
    addPerson(Person) {
        this.persons.push(Person)
    }
    removePerson(ma) {
        this.persons = this.persons.filter(person => Person.ma !== ma)
    }
    updatePerson(ma, updatedPerson) {
        const index = this.persons.findIndex(person => Person.ma === ma);
        if (index !== -1) {
            this.persons[index] = updatedPerson
        }
    }
  
    filterByLoaiND(selectedType){
        if(selectedType === "ALL"){
            return this.persons
        } else{
            return this.persons.filter(person => Person.type === selectedType)
        }
    }
    findIndex(ma){
        this.persons = this.persons.filter(person => person.ma !==ma)
    }
    sortPersonByName(shortOrder){
        this.persons.sort((a,b) =>{
            const nameA = a.name.toUpperCase()
            const nameB = b.name.toUpperCase()
            if (shortOrder === 'asc'){
                if (nameA < nameB){
                    return -1
                }
                if(nameA > nameB){
                    return 1
                }
            }else{
                if (nameA > nameB){
                    return -1
                }
                if (nameA < nameB){
                    return 1
                }
            }
            return 0
        })
    }
    saveToLocalStorage() {
        localStorage.setItem("persons", JSON.stringify(this.persons))
    }
    restoreFromLocalStorage() {
        const storedPersons  = localStorage.getItem("persons");
        if (storedPersons ) {
            this.persons = JSON.parse(storedPersons )
        }
    }
}





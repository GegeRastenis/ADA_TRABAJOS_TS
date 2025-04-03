import{
    add, 
    substract, 
    capitalize, 
    reverse, 
    createUser
} from './utils_index'

const sumas = add(8,5)
console.log(sumas);
const restas = substract(10, 5)
console.log(restas);
const mayuscula = capitalize("Giselle")
console.log(mayuscula);
const alReves = reverse("capicua")
console.log(alReves);
const newPerson = createUser("Pedro", 58)
console.log(newPerson);





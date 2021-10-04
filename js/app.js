// Clase Usuario con sus atributos y métodos

class User {
    constructor(name, surname, pets, books){
        this.name = name;
        this.surname = surname;
        this.pets = pets;
        this.books = books;
    }
    getFullName() {
       console.log(`El nombre del usuario es ${this.name} y su apellido ${this.surname}`)
    }

    addMascota() {
       console.log(`El nombre de la mascota es ${this.pets}`)
    }

    countMascotas() {
        console.log(`El usuario tiene ${(mascotas.length)} mascotas`)
    }
    
    static nameAutor = ({nombre: 'The black cat', autor:'Edgar Allan Poe'})
    
    addBooks () {
        console.log(`El nombre del libro y del autor es`, User.nameAutor) 
    }

    getBookNames() {
        console.log(filtered)
    }

    }     

const user = new User('Flavia', 'Maldonado')

const userPet = new User('mia')

let mascotas = ['lola', 'camilo', 'ringo'];
mascotas.push(userPet);


const userBooks = new User({nombre: 'The black cat', autor:'Edgar Allan Poe'})
let libros = [
    {
     nombre: 'Pet sementary',
     autor: 'Stephen King'
    },
    {
     nombre: 'Doctor Sleep',
     autor: 'Stephen King'
    }
];

libros.push(userBooks);

const filtered = libros.map(librosName => 
    librosName.nombre
    );


// Invocación de sus métodos

user.getFullName();
userPet.addMascota();
userBooks.getBookNames();
userBooks.addBooks();
userPet.countMascotas();

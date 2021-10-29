// Clase Usuario con sus atributos y métodos

class User {
    constructor(name, surname, pets, books){
        this.name = name;
        this.surname = surname;
        this.pets = ['lola', 'camilo', 'ringo'];
        this.books = [
            {
             nombre: 'Pet sementary',
             autor: 'Stephen King'
            },
            {
             nombre: 'Doctor Sleep',
             autor: 'Stephen King'
            }
        ];
        
    }
    getFullName() {
       console.log(`El nombre del usuario es ${this.name} y su apellido ${this.surname}`)
    }


    addMascota(mascota) {
        this.pets.push(mascota);
        console.log(mascota)
    }

    countMascotas() {
        console.log(`El usuario tiene ${(this.pets.length)} mascotas`)
    }
    
    
    addBooks(name, author) {
     const userBook = {nombre: name, autor: author}
        this.books.push(userBook);
        console.log(userBook)
    }

    getBookNames() {
    console.log(this.books.map(libroName=> libroName.nombre))
    }   

}

const usuario = new User('Flavia', 'Maldonado')


// Invocación de sus métodos

usuario.getFullName();
usuario.addMascota('mia');
usuario.getBookNames();
usuario.addBooks('The black cat','Edgar Allan Poe');
usuario.countMascotas();

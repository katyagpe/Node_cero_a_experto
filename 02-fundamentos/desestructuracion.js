const deedpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    // edad: 50,
    getNombre() {
        return `${ this.nombre } ${ this.apellido } ${ this.poder }`
    }
}

// const nombre   = deedpool.nombre;
// const apellido = deedpool.apellido;
// const poder = deedpool.poder;

function imprimeHeroe({ nombre, apellido, poder, edad = 0 }) {

    console.log(nombre, apellido, poder, edad);

}

// imprimeHeroe( deedpool );

const heroes = ['Deadpool', 'Superman', 'Batman'];

// const h1 = heroes[0];
// const h2 = heroes[1];
// const h3 = heroes[2];

// console.log(h1);
// console.log(h2);
// console.log(h3);

const [ , , h3] = heroes;
console.log( h3 );
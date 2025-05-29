db.librosEspeciales.insertOne(
    {
        _id: 1,
        titulo: 'Peter Pan',
        genero: 'aventura',
        autores: ['Phill Collins'],
        nroPaginas: 60,
        nivelDeLectura: 'infantil', 
        precio: [{tipo: 'físico', precio: 3500}, {tipo: 'digital', precio: 2500}], 
        disponibleStock: true,
        editorial: {nombre: 'Planeta', pais: 'Canada', anioFundacion: 2008}
    }
)

db.librosEspeciales.insertOne(
    {
        _id: 2,
        titulo: '100 vueltas al cielo',
        genero: 'aventura',
        autores: ['Carlos Gómez'],
        nroPaginas: 60,
        nivelDeLectura: 'infantil', 
        precio: [{tipo: 'físico', precio: 3500}, {tipo: 'digital', precio: 2500}], 
        disponibleStock: true,
        editorial: {nombre: 'Planeta', pais: 'Canada', anioFundacion: 2008}
    }
)

db.librosEspeciales.insertOne(
    {
        _id: 3,
        titulo: '100 vueltas al cielo 2',
        genero: 'aventura',
        autores: ['Carlos Gómez', 'Gonzalo Pierre'],
        nroPaginas: 60,
        nivelDeLectura: 'infantil', 
        precio: [{tipo: 'físico', precio: 3500}, {tipo: 'digital', precio: 2500}], 
        disponibleStock: true,
        editorial: {nombre: 'Planeta', pais: 'Canada', anioFundacion: 2008}
    }
)

db.librosEspeciales.insertOne(
    {
        _id: 4,
        titulo: 'Amor a primera vista',
        genero: 'romance',
        autores: ['Lucía Herrera', 'Melody Luz'],
        nroPaginas: 60,
        nivelDeLectura: 'infantil', 
        precio: [{tipo: 'físico', precio: 3500}, {tipo: 'digital', precio: 2500}], 
        disponibleStock: true,
        editorial: {nombre: 'Planeta', pais: 'Canada', anioFundacion: 2008}
    }
)

db.librosEspeciales.insertOne(
    {
        _id: 5,
        titulo: 'Cuando te vi',
        genero: 'romance',
        autores: ['Lucía Herrera'],
        nroPaginas: 60,
        nivelDeLectura: 'infantil', 
        precio: [{tipo: 'físico', precio: 3500}, {tipo: 'digital', precio: 2500}], 
        disponibleStock: true,
        editorial: {nombre: 'Planeta', pais: 'Canada', anioFundacion: 2008}
    }
)

db.librosEspeciales.insertOne(
    {
        _id: 6,
        titulo: 'Harry Potter, el prisionero de Azcaban',
        genero: 'aventura',
        autores: ['J.K Rowling'],
        nroPaginas: 400,
        nivelDeLectura: 'juvenil', 
        precio: [{tipo: 'físico', precio: 3500}, {tipo: 'digital', precio: 2500}], 
        disponibleStock: true,
        editorial: {nombre: 'Planeta', pais: 'Canada', anioFundacion: 2008}
    }
)

db.librosEspeciales.insertOne(
    {
        _id: 7,
        titulo: 'Harry Potter, la piedra filosofal',
        genero: 'aventura',
        autores: ['J.K Rowling'],
        nroPaginas: 200,
        nivelDeLectura: 'juvenil', 
        precio: [{tipo: 'físico', precio: 3500}, {tipo: 'digital', precio: 2500}], 
        disponibleStock: true,
        editorial: {nombre: 'Planeta', pais: 'Canada', anioFundacion: 2008}
    }
)

db.librosEspeciales.insertOne(
    {
        _id: 8,
        titulo: 'Harry Potter, la camara secreta',
        genero: 'aventura',
        autores: ['J.K Rowling'],
        nroPaginas: 300,
        nivelDeLectura: 'juvenil', 
        precio: [{tipo: 'físico', precio: 3500}, {tipo: 'digital', precio: 2500}], 
        disponibleStock: true,
        editorial: {nombre: 'Planeta', pais: 'Canada', anioFundacion: 2008}
    }
)

db.librosEspeciales.insertOne(
    {
        _id: 9,
        titulo: 'Harry Potter, las reliquias de la muerte',
        genero: 'aventura',
        autores: ['J.K Rowling'],
        nroPaginas: 400,
        nivelDeLectura: 'juvenil', 
        precio: [{tipo: 'físico', precio: 3500}, {tipo: 'digital', precio: 2500}], 
        disponibleStock: true,
        editorial: {nombre: 'Planeta', pais: 'Canada', anioFundacion: 2008}
    }
)

db.librosEspeciales.insertOne(
    {
        _id: 10,
        titulo: 'Harry Potter, el caliz de fuego',
        genero: 'aventura',
        autores: ['J.K Rowling'],
        nroPaginas: 200,
        nivelDeLectura: 'juvenil', 
        precio: [{tipo: 'físico', precio: 3500}, {tipo: 'digital', precio: 2500}], 
        disponibleStock: true,
        editorial: {nombre: 'Planeta', pais: 'Canada', anioFundacion: 2008}
    }
)

//2
db.librosEspeciales.find({autores:'Carlos Gómez'}).count()

//3
db.librosEspeciales.find( {$and : [{genero : 'romance', autores:'Lucía Herrera'}]}).count()

//4
db.librosEspeciales.find({nivelDeLectura: 'juvenil'},  {_id : 0, titulo : 1, nroPaginas : 1})

//5
db.librosEspeciales.find({$and : [{nroPaginas : {$gte : 200}}, {nroPaginas : {$lte : 400}}]}, {_id : 0, titulo : 1, nroPaginas : 1, nivelDeLectura : 1})

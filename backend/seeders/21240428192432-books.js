'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const booksData = [
      {
        title: 'El Quijote',
        author: 'Miguel de Cervantes',
        description: 'El Quijote es una de las obras más importantes de la literatura española y universal. Narra las aventuras de un hidalgo que enloquece tras leer demasiados libros de caballería y decide salir al mundo como caballero andante.',
        ISBN: '978-3-16-148410-0',
        price: 14000,
        stock: 10,
        category_id: 1,
        image_url: 'https://http2.mlstatic.com/D_NQ_NP_605203-MLU71305186600_082023-O.webp'
      },
      {
        title: 'Cien Años de Soledad',
        author: 'Gabriel García Márquez',
        description: 'Cien Años de Soledad es una novela que narra la historia de la familia Buendía a lo largo de siete generaciones en el pueblo ficticio de Macondo. Es considerada una obra maestra del realismo mágico.',
        ISBN: '978-3-16-148411-7',
        price: 12000,
        stock: 5,
        category_id: 2,
        image_url: 'https://planetadelibrosmx.wordpress.com/wp-content/uploads/2014/07/cien-anos-de-soledad-gabriel-garcia-marquez-rm4-6722-mlm5103628283_092013-f.jpg'
      },
      {
        title: '1984',
        author: 'George Orwell',
        description: '1984 es una novela distópica que presenta un futuro totalitario donde el gobierno ejerce un control absoluto sobre la población, manipulando la verdad y eliminando cualquier forma de libertad individual.',
        ISBN: '978-3-16-148412-4',
        price: 10000,
        stock: 8,
        category_id: 3,
        image_url: 'https://data.livriz.com/media/MediaSpace/F9AFB48D-741D-4834-B760-F59344EEFF34/45/c921505e-4e2f-4d95-934a-3e51efc2c14b/3c6abce1-64ec-4681-a21b-cbbf4d475c87.jpg'
      },
      {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        description: 'To Kill a Mockingbird es una novela que aborda temas como la injusticia racial y la moralidad a través de la historia de un abogado que defiende a un hombre negro acusado injustamente de violación en el sur de Estados Unidos durante la década de 1930.',
        ISBN: '978-3-16-148413-1',
        price: 8000,
        stock: 12,
        category_id: 4,
        image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/800px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg'
      },
      {
        title: 'El Gran Gatsby',
        author: 'F. Scott Fitzgerald',
        description: 'El Gran Gatsby es una novela que explora los excesos del sueño americano durante la década de 1920 en Estados Unidos. Narra la historia del enigmático Jay Gatsby y su obsesión por recuperar un amor del pasado.',
        ISBN: '978-3-16-148414-8',
        price: 9000,
        stock: 7,
        category_id: 1,
        image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/The_Great_Gatsby_cover_1925_wikisource.jpg/640px-The_Great_Gatsby_cover_1925_wikisource.jpg'
      },
      {
        title: 'Moby Dick',
        author: 'Herman Melville',
        description: 'Moby Dick es una novela que narra la obsesión del capitán Ahab por vengarse de Moby Dick, una ballena blanca que le arrancó una pierna en una expedición anterior. La historia es narrada por Ishmael, un tripulante del barco Pequod.',
        ISBN: '978-3-16-148415-5',
        price: 12000,
        stock: 4,
        category_id: 5,
        image_url: 'https://data.livriz.com/media/MediaSpace/F9AFB48D-741D-4834-B760-F59344EEFF34/45/8cd53738-9fb4-4cc6-b61f-50aa3262dd83/9789873952050.jpg'
      },
      {
        title: 'Orgullo y prejuicio',
        author: 'Jane Austen',
        description: 'Orgullo y prejuicio es una novela romántica que sigue la historia de Elizabeth Bennet y su relación con el rico y orgulloso Sr. Darcy. La novela critica la sociedad de la época victoriana y aborda temas como el matrimonio y el estatus social.',
        ISBN: '978-3-16-148416-2',
        price: 7000,
        stock: 6,
        category_id: 6,
        image_url: 'https://assets-global.website-files.com/6034d7d1f3e0f52c50b2adee/6540f3a95dd2301ef9751dd6_H2tjHnUNhg_lBh5PnN9lJhXAfqX5EUHakOyByeEodU4.jpeg'
      },
      {
        title: 'El Principito',
        author: 'Antoine de Saint-Exupéry',
        description: 'El Principito es una novela corta que narra la historia de un joven príncipe que viaja de planeta en planeta y conoce a distintos personajes, cada uno representando diferentes aspectos de la sociedad y la vida.',
        ISBN: '978-3-16-148417-9',
        price: 9000,
        stock: 20,
        category_id: 7,
        image_url: 'https://1lectoralibre.wordpress.com/wp-content/uploads/2019/01/portada_el-principito_antoine-de-saint-exupery_201703281853.jpg'
      },
      {
        title: 'Los Miserables',
        author: 'Victor Hugo',
        description: 'Los Miserables es una novela que sigue la vida de varios personajes en la Francia del siglo XIX, destacando la historia de Jean Valjean, un exconvicto que busca redimirse, y el inspector Javert, quien lo persigue implacablemente.',
        ISBN: '978-3-16-148418-6',
        price: 14000,
        stock: 3,
        category_id: 1,
        image_url: 'https://i.pinimg.com/736x/45/76/5b/45765b91a909c38e2ab840e30a04e651.jpg'
      },
      {
        title: 'Fahrenheit 451',
        author: 'Ray Bradbury',
        description: 'Fahrenheit 451 es una novela distópica que se desarrolla en un futuro donde los libros están prohibidos y son quemados por el gobierno. Sigue la historia de Guy Montag, un bombero encargado de quemar libros que comienza a cuestionar su papel en la sociedad.',
        ISBN: '978-3-16-148419-3',
        price: 10000,
        stock: 9,
        category_id: 3,
        image_url: 'https://dyn1.heritagestatic.com/lf?set=path%5B4%2F1%2F6%2F2%2F4162280%5D&call=url%5Bfile%3Aproduct.chain%5D'
      }
    ];
    await queryInterface.bulkInsert('books', booksData, {});
  },


  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('books', null, {});
  }
};

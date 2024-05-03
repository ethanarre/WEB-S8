'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Medicamentos', [
      {
        descripcionMed: 'Paracetamol',
        fechaFabricacion: new Date('2023-01-15'),
        Presentacion: 'Tabletas',
        stock: 100,
        precioVentaUni: 5.99,
        precioVentaPres: 15.99,
        Marca: 'Genérico'
      },
      {
        descripcionMed: 'Ibuprofeno',
        fechaFabricacion: new Date('2023-02-20'),
        Presentacion: 'Cápsulas',
        stock: 50,
        precioVentaUni: 7.49,
        precioVentaPres: 20.99,
        Marca: 'Genérico'
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Medicamentos', null, {});
  }
};

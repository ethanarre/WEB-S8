'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('DetalleOrdenCompras', [
      {
        NroOrdenC: 1,
        CodMedicamento: 1,
        descripcion: 'Paracetamol Tabletas',
        cantidad: 10,
        precio: 5.99,
        montouni: 59.90,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        NroOrdenC: 2,
        CodMedicamento: 2,
        descripcion: 'Ibuprofeno Cápsulas',
        cantidad: 5,
        precio: 7.49,
        montouni: 37.45,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('DetalleOrdenCompras', null, {});
  }
};

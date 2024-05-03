'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('OrdenCompras', [
      {
        fechaemision: new Date(),
        situacion: 'Pendiente',
        total: 100.00,
        nrofacturaprov: '123456789',
        codlab: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fechaemision: new Date(),
        situacion: 'Pagada',
        total: 250.00,
        nrofacturaprov: '987654321',
        codlab: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('OrdenCompras', null, {})
  }
};

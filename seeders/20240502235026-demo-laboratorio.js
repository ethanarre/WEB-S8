'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Laboratorios', [
      {
        razonsocial: 'Laboratorio ABC',
        direccion: 'Calle Principal 123',
        email: 'info@laboratorioabc.com',
        telefono: '123456789',
        contacto: 'Juan Pérez'
      },
      {
        razonsocial: 'Laboratorio XYZ',
        direccion: 'Avenida Central 456',
        email: 'info@laboratorioxyz.com',
        telefono: '987654321',
        contacto: 'María Gómez'
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Laboratorios', null, {})
  }
};

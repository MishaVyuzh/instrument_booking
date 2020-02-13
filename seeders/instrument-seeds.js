// Подключаем mongoose.
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/instrument', { useNewUrlParser: true });


const Instrument = require('../models/instrument');


const instrumentes = [
  {
    title: 'Прибор 1',
    body: 'Улучшенная версия 2015 года',
    profilePicture: '\\',
  },
  {
    title: 'Прибор 2',
    body: 'Улучшенная версия 2014 года',
    profilePicture: '\\',
  },
  {
    title: 'Прибор 3',
    body: 'Улучшенная версия 2013 года',
    profilePicture: '\\',
  },
  {
    title: 'Прибор 4',
    body: 'Улучшенная версия 2012 года',
    profilePicture: '\\',
  },
  {
    title: 'Прибор 5',
    body: 'Улучшенная версия 2011 года',
    profilePicture: '\\',
  },
];

Instrument.insertMany(instrumentes).then(() => {
  mongoose.connection.close();
});
'use strict'

const db = require('../config/db');
const uuid = require('uuid');
const moment = require('moment');
const squel = require('squel').useFlavour('mysql');

//////INITIALIZE TABLE
db.query(`create table if not exists images (
  id varchar(50),
  url varchar(100),
  title varchar(100),
  description varchar(500),
  createAt timestamp
)`, err => {
  if(err) console.log('table create err:', err);
})



//////////  GET ALL ////////////
exports.getAll = function() {
  return new Promise((resolve, reject) => {
    let sql = squel.select().from('images').toString();
    db.query(sql, (err, images) => {
      if(err) {
        reject(err);
      } else {
        resolve(images);
      }
    });
  });
}

//////////  CREATE NEW POST ////////////
exports.create = function(newImage) {
  return new Promise((resolve, reject) => {
    let timestamp = moment().format('YYYY/MM/DD HH:mm:ss');
    let sql = squel.insert()
    .into('images')
    .setFields(newImage)
    .set('id', uuid())
    .set('createAt', timestamp)
    .toString();

    db.query(sql, err => {
      if(err) {
        reject (err);
      } else {
        resolve();
      }
    });
  });
};


//////////  DELETE  ////////////
exports.delete = function(id) {
  return new Promise((resolve, reject) => {
    let sql = squel.delete()
                   .from('images')
                   .where('id = ?', id)
                   .toString();

    db.query(sql, err => {
      if(err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

import fs from 'fs';
import { promisify } from 'util';
import jwt from 'jsonwebtoken';
import db from '../../../resources/storage/memory/db.json';
import config from '../../config';

const writeFile = promisify(fs.writeFile);

export default {
  findByParam(req, res, next, id) {
    if (!id) {
      return next(new Error('Not Found Error'));
    }
    req.id = id;
    return next();
  },
  getAll(req, res) {
    res.send({ status: 'OK', message: 'getAll', data: db.users });
  },
  async createOne(req, res, next) {
    try {
      const newUser = {};
      newUser.id = db.users.length + 1;
      newUser.username = req.body.username;
      newUser.password = req.body.password;
      newUser.email = req.body.email;
      const token = await jwt.sign({ id: newUser.id }, process.env.JWT_SECRET);
      newUser.accessToken = token;
      if (db.users.find(userDb => userDb.username === req.body.username)) {
        res.throw(400, `Username ${req.body.username} already taken`);
      }
      db.users.push(newUser);
      await writeFile(config.resourcesDir + '/storage/memory/db.json', JSON.stringify(db, null, 2));
      res.status(201);
      res.send({ status: 'Created', message: 'createOne', data: newUser });
    } catch (err) {
      next(err);
    }
  },
  getOne(req, res) {
    res.send({ status: 'OK', message: 'getOne', data: req.id });
  },
  updateOne(req, res) {
    res.send({ status: 'OK', message: 'updateOne', data: req.body });
  },
  deleteOne(req, res) {
    res.send({ status: 'OK', message: 'deleteOne', data: req.id });
  },
  login(req, res, next) {
    try {
      const user = db.users.find(userDb => userDb.username === req.body.username);
      if (!user || user.password !== req.body.password) {
        res.throw(401, 'Invalid user');
      }
      res.send({
        status: 'OK',
        message: 'login',
        data: user,
      });
    } catch (err) {
      next(err);
    }
  },
  me(req, res) {
    res.send({
      status: 'OK',
      message: 'me',
      data: req.user,
    });
  },
};

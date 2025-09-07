import express from 'express';
import { getAllUser, login, saveUser } from '../controller/User_Controller.js';
const User_Router = express.Router();
User_Router.route('/signUp').post(saveUser);
User_Router.route('/users').get(getAllUser);
User_Router.route('/login').post(login);


export default User_Router;
import express from 'express';

const auth = express.Router();
auth.post('/register',encrypt, UserRegistration);
export {auth};
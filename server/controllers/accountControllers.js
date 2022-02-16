const bcrypt = require('bcrypt');
const { resourceLimits } = require('worker_threads');
const db = require('../database');


const controller = {};

//hash a user inputted password
controller.hash = async (req, res, next) => {
  try {
    const { username, password, fullName } = req.body;
    await bcrypt.hash(password, 10, (err, hash) => {
      const userSignup = {
        username: username,
        hashedPw: hash,
        fullName: fullName,
      };
      res.locals.signupInfo = userSignup;
      return next();
    });
  } catch (error) {
    return next({
      log: `controller.hash ERROR found`,
      status: 500,
      message: {
        err: 'Error occurred in controller.hash. Check the server logs.',
      },
    });
  }
};

//Create a new user account
controller.newAccount = async (req, res, next) => {
  try {
    const { username, hashedPw, fullName } = res.locals.signupInfo;
    console.log('res.locals.signupInfo', res.locals.signupInfo);
    const text = `
        INSERT INTO public.accounts (
          username,
          password,
          fullName)
        VALUES ($1, $2, $3)
        RETURNING *
        `;

    const results = await db.query(text, [username, hashedPw, fullName]);
    const data = results.rows;

    console.log('data', data);
    if (data) {
      return next();
    }
    return next('Unable to create new account');
  } catch (error) {
    return next({
      log: `controller.newAccount ERROR found`,
      status: 500,
      message: {
        err: 'Error occurred in controller.newAccount. Check the server logs.',
      },
    });
  }
};

//get user accounts by username
controller.getAccount = async (req, res, next) => {
  try {
    const { username, password } = req.body; // for sql WHERE
    
    const text = `SELECT user_id, username, password, fullname FROM public.accounts WHERE username = $1`;

    const results = await db.query(text, [username]);
    const data = results.rows;

    res.locals.accInfo = {
      userPass: password,
      dbData: data,
    };

    return next();
  } catch (error) {
    return next({
      log: `controller.getAccount ERROR found`,
      status: 500,
      message: {
        err: 'Error occurred in controller.getAccount. Check the server logs.',
      },
    });
  }
};

controller.verifyAccount = async (req, res, next) => {
  try {
    const { userPass, dbData } = res.locals.accInfo;

    //decrypt dbData.pass and compare with userPass
    await bcrypt.compare(userPass, dbData[0].password, (err, ok) => {
      if (ok) {
        console.log('bcrypt comparison check OK');
        res.locals.data = {
          verified: true,
          user_id: dbData[0].user_id,
        };
        return next();
      } else {
        res.send(err);
      }
    });
  } catch (error) {
    return next({
      log: `controller.verifyAccount ERROR found`,
      status: 500,
      message: {
        err: 'Error occured in controller.verifyAccount. Check the server logs.',
      },
    });
  }
};

controller.logout = (req, res, next) => {
  //clear cookies in controller if we setup
  next();
};

module.exports = controller;

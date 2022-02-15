const db = require('../database');

const appController = {};

//Get applications
appController.getApp = async (req, res, next) => {
<<<<<<< HEAD
  try {
    const { user_id } = res.locals.data;

    const applications = `SELECT * FROM "public"."applications" WHERE user_id = $1`;

    const results = await db.query(applications, [user_id]);
    res.locals.applications = results.rows;
    next();
  } catch (error) {
    return next({
      log: `controller.getApp ERROR found`,
      status: 500,
      message: {
        error: 'Error occurred in controller.getApp. Check server logs.',
=======
  console.log('this is req.body', req.body);
  try {
    const {
      app_id,
      user_id,
      company_name,
      job_title,
      description,
      url,
      salary,
      location,
      deadline,
      contact,
      stage,
    } = req.body;
    const applications = `SELECT * FROM "public"."applications" LIMIT 100`;

    const results = await db.query(applications);
    res.locals.applications = results.data;
    next();
  } catch (error) {
    return next({
      log: `controller.createApp ERROR found`,
      status: 500,
      message: {
        error: 'Error occurred in controller.createApp. Check server logs.',
>>>>>>> dev
      },
    });
  }
};

//Add applications
appController.createApp = async (req, res, next) => {
  console.log('this is req.body', req.body);
  try {
    const {
      user_id,
      company_name,
      job_title,
      description,
      url,
      salary,
      location,
      deadline,
      contact,
      stage,
    } = req.body;

    const createQuery = `
      INSERT INTO applications(
        user_id, 
        company_name, 
        job_title, 
        description, 
        url, 
        salary, 
        location, 
        deadline, 
        contact, 
        stage) 
      VALUES (($1),($2),($3),($4),($5),($6),($7),($8),($9), ($10)) 
      RETURNING *`;

    const dbParams = [
      user_id,
      company_name,
      job_title,
      description,
      url,
      salary,
      location,
      deadline,
      contact,
      stage,
    ];
    const results = await db.query(createQuery, dbParams);
    res.locals.createApp = results;
    next();
  } catch (error) {
    return next({
      log: `controller.createApp ERROR found`,
      status: 500,
      message: {
        error: 'Error occurred in controller.createApp. Check server logs.',
      },
    });
  }
};

//Update applications
<<<<<<< HEAD
// UPDATE table_name
// SET column1 = value1,
//     column2 = value2,
=======
// UPDATE courses
// SET published_date = '2020-07-01'
// WHERE course_id = 2
// UPDATE table_name
// SET column1 = value1,
//     column2 = value2,
//     ...
>>>>>>> dev
// WHERE condition
// RETURNING *

appController.updateApp = async (req, res, next) => {
  console.log('this is req.body', req.body);
  try {
    const {
      company_name,
      job_title,
      description,
      url,
      salary,
      location,
      deadline,
      contact,
      stage,
    } = req.body;

    const updateQuery = `
      UPDATE applications 
      SET company_name = ($1),
          job_title = ($2), 
          description = ($3), 
          url = ($4),
          salary = ($5), 
          location = ($6), 
          deadline = ($7), 
          contact = ($8), 
          stage = ($9)
<<<<<<< HEAD
      WHERE app_id = $1
=======
      WHERE app_id = 
>>>>>>> dev
      RETURNING * `;
    const dbParams = [
      company_name,
      job_title,
      description,
      url,
      salary,
      location,
      deadline,
      contact,
      stage,
    ];

    const results = await db.query(updateQuery, dbParams);
    res.locals.updateApp = results;
    next();
  } catch (error) {
    return next({
      log: `controller.updateApp ERROR found`,
      status: 500,
      message: {
        error: 'Error occurred in appController.updateApp. Check server logs.',
      },
    });
  }
};

//Delete applications
// DELETE FROM links
// WHERE id = 8;

appController.deleteApp = async (req, res, next) => {
  console.log('this is req.body', req.body);
  try {
    const { app_id } = req.body;

    const deleteQuery =
<<<<<<< HEAD
      'DELETE FROM applications WHERE app_id = $1 RETURNING * ';
=======
      'DELETE FROM applications WHERE app_id = 1 RETURNING * ';
>>>>>>> dev

    const results = await db.query(deleteQuery);
    res.locals.deleteApp = results;
    next();
  } catch (error) {
    return next({
      log: `controller.deleteApp ERROR found`,
      status: 500,
      message: {
        error: 'Error occurred in appController.deleteApp. Check server logs.',
      },
    });
  }
};

module.exports = appController;

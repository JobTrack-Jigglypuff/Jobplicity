const db = require('../database');

const appController = {};

//Get applications
appController.getApp = async (req, res, next) => {
  try {
    if (!res.locals.verified) return next();
      const { user_id, fullname } = res.locals.data;
    console.log('fullname', fullname)

    const applications = `SELECT * FROM "public"."applications" WHERE user_id = $1`;

    const results = await db.query(applications, [user_id]);
    res.locals.applications = results.rows;
    const data = {
      fullname: fullname,
      user_id: user_id,
      applied: [],
      phone: [],
      interview: [],
      rejected: [],
      offer: [],
    };

    res.locals.applications.forEach((application) => {
      data[application.stage].push(application);
    });

    res.locals.data = data;
    console.log(res.locals.data);

    return next();
  } catch (error) {
    return next({
      log: `controller.getApp ERROR found`,
      status: 500,
      message: {
        error: 'Error occurred in controller.getApp. Check server logs.',
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
      if(!results) res.locals.response = true;
      else {
        res.locals.response = false;
        res.locals.createApp = results;
        res.locals.data = {user_id};
        res.locals.verified = true;
    };
    return next();
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

appController.updateApp = async (req, res, next) => {
  console.log('this is updateApp req.body', req.body);
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
      app_id,
    } = req.body;

    const updateQuery = `
      UPDATE applications 
      SET company_name = '${company_name}',
          job_title = '${job_title}', 
          description = '${description}', 
          url = '${url}',
          salary = '${salary}', 
          location = '${location}', 
          deadline = '${deadline}', 
          contact = '${contact}', 
          stage = '${stage}'
      WHERE app_id = '${app_id}'
      RETURNING * `;


    const results = await db.query(updateQuery);
    res.locals.update = results.rows;
    res.locals.data = { user_id };
    res.locals.verified = true;
    console.log('res.locals.updateApp', res.locals.data);


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
      'DELETE FROM applications WHERE app_id = $1 RETURNING * ';

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

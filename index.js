const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 3080;
const db = require('./queries');
const templates = require('./templateQueries');
const dbTest = require("./models");
var fs = require('file-system');

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
)

app.use(express.static(path.join(__dirname, '../app/build')));

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

// Temp for delivering image for template generation
app.get('/api/logo', function(req, res){
  var img = fs.readFile(path.join(__dirname, 'logo.png'), function (err, data) {
    var contentType = 'image/png';
    var base64 = Buffer.from(data).toString('base64');
    base64='data:image/png;base64,'+base64;
    res.send(base64);
  });
});

app.get('/api/users', db.getUsers)
app.get('/api/users/:id', db.getUserById)
app.post('/api/users', db.createUser)
app.put('/api/users/:id', db.updateUser)
app.delete('/api/users/:id', db.deleteUser)

app.get('/api/templates', templates.getTemplates)
app.get('/api/templates/:id', templates.getTemplateById)
app.post('/api/templates', templates.createTemplate)
app.put('/api/templates/:id', templates.updateTemplate)
app.put('/api/templates/:id', templates.updateTemplateDetails)
app.delete('/api/templates/:id',templates.deleteTemplate)

app.get('/api/templateItems', templates.getTemplateItems)
app.get('/api/templateItemsCustom', templates.getCustomTemplateItems)
app.post('/api/templateItemsCustom', templates.createCustomTemplateItem)
app.get('/api/templateTypes', templates.getTemplateTypes)

// app.get('/api/customControls', templates.getCustomControls)
// app.get('/api/customControlsLibrary', templates.getCustomControlsLibrary)

const controller = require("./controllers/project.controller");

const run = async () => {
  const project1 = await controller.createProject({
    title: "Project#1",
    description: "Project#1 Description",
  });
  
  const project2 = await controller.createProject({
    title: "Project#2",
    description: "Project#2 Description",
  });

  const template1 = await controller.createTemplateData(project1.id, {
    title: "New Template One",
    data: "{content: '<p>This is a test save test</p>'}",
    date_asof:"2023-03-24T05:00:00.000Z",
    active:true
  });

  await controller.createTemplateData(project1.id, {
    title: "New Template Two",
    data: "{content: '<p>This is a test save test</p>'}",
    date_asof:"2023-03-24T05:00:00.000Z",
    active:true
  });

  const template2 = await controller.createTemplateData(project2.id, {
    title: "New Template For Project Two",
    data: "{content: '<p>This is a test save test</p>'}",
    date_asof:"2023-03-24T05:00:00.000Z",
    active:true
  });

  await controller.createTemplateData(project2.id, {
    title: "Second Template for project two",
    data: "{content: '<p>This is a test save test</p>'}",
    date_asof:"2023-03-24T05:00:00.000Z",
    active:true
  });

  const project1Data = await controller.findProjectById(project1.id);
  console.log(
    ">> Project id=" + project1.id,
    JSON.stringify(project1Data, null, 2)
  );

  const project2Data = await controller.findProjectById(project2.id);
  console.log(
    ">> Project id=" + project2.id,
    JSON.stringify(project2Data, null, 2)
  );

  const template1Data = await controller.findTemplateDataById(template1.id);
  console.log(
    ">> Template id=" + template1.id,
    JSON.stringify(template1Data, null, 2)
  );

  const template2Data = await controller.findTemplateDataById(template2.id);
  console.log(
    ">> Template id=" + template2.id,
    JSON.stringify(template2Data, null, 2)
  );

  const projects = await controller.findAll();
  console.log(">> All projects", JSON.stringify(projects, null, 2));
}

dbTest.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
    // run();
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

require("./routes/project.routes")(app);

require("./routes/tutorial.routes")(app);
require("./routes/templateData.routes")(app);
require("./routes/templateType.routes")(app);
require("./routes/customControls.routes")(app);
require("./routes/customControlsLibrary.routes")(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


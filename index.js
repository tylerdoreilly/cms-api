const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 3080;
const db = require('./queries');
const templates = require('./templateQueries');
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

app.get('/api/customControls', templates.getCustomControls)
app.get('/api/customControlsLibrary', templates.getCustomControlsLibrary)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
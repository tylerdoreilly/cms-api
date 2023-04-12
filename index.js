const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 3080;
const db = require('./queries')

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

app.get('/api/users', db.getUsers)
app.get('/api/users/:id', db.getUserById)
app.post('/api/users', db.createUser)
app.put('/api/users/:id', db.updateUser)
app.delete('/api/users/:id', db.deleteUser)

app.get('/api/templates', db.getTemplates)
app.get('/api/templates/:id', db.getTemplateById)
app.post('/api/templates', db.createTemplate)
app.put('/api/templates/:id', db.updateTemplate)
app.delete('/api/templates/:id',db.deleteTemplate)

app.get('/api/templateItems', db.getTemplateItems)
app.get('/api/templateItemsCustom', db.getCustomTemplateItems)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
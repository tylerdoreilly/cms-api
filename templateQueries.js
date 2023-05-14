const Pool = require('pg').Pool
const pool = new Pool({
  user: 'admin',
  host: 'localhost',
  database: 'api',
  password: 'adminpass',
  port: 5432,
})

// Get Templates
const getTemplates = (request, response) => {
  pool.query('SELECT templates.id, templates.title, templates.data, templates.date_created, templates.date_asof, templates.date_updated, template_types.id as type_id, template_types.type FROM templates INNER JOIN template_types ON templates.type_new = template_types.id ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getTemplateById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT templates.id, templates.title, templates.date_created, templates.date_asof, templates.date_updated, template_types.id as type_id, template_types.type, templates.data FROM templates INNER JOIN template_types ON templates.type_new = template_types.id WHERE templates.id = $1', 
  [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

// Get Template Items / Custom Items
const getTemplateItems = (request, response) => {
  pool.query('SELECT * FROM template_items ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getCustomTemplateItems = (request, response) => {
  pool.query('SELECT * FROM template_items_custom ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getCustomControls = (request, response) => {
  pool.query('SELECT * FROM custom_controls ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getCustomControlsLibrary = (request, response) => {
  pool.query('SELECT * FROM custom_controls_library ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

// Get Templates
const getTemplateTypes = (request, response) => {
  pool.query('SELECT * FROM template_types ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}


// Create Template
const createTemplate = (request, response) => {
  const { id, title, data, date_created, date_asof, date_updated, type_new } = request.body

  pool.query('INSERT INTO templates (id, title, data, date_created, date_asof, date_updated, type_new) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *', 
  [id, title, data, date_created, date_asof, date_updated, type_new], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Template added with ID: ${results.rows[0].id}`)
  })
}

const createCustomTemplateItem = (request, response) => {
  const { id, name, field, position, content } = request.body

  pool.query('INSERT INTO template_items_custom (id, name, field, position, content) VALUES ($1, $2, $3, $4, $5) RETURNING *', 
  [id, name, field, position, content], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Custom Template Item added with ID: ${results.rows[0].id}`)
  })
}


// Updates
const updateTemplate = (request, response) => {
  let params = request.params
  let id = params.id

  const { type_new, title, data, date_updated} = request.body
  console.log('request',request)
  pool.query(
    'UPDATE templates SET type_new = $1, title = $2, data = $3, date_updated = $4 WHERE id = $5',
    [type_new, title, data, date_updated, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Template modified with ID: ${id}`)
    }
  )
}

const updateTemplateDetails = (request, response) => {
  let params = request.params
  let id = params.id

  const {title, type_new, date_asof} = request.body
  console.log('request',request)
  pool.query(
    'UPDATE templates SET title = $1, type_new = $2, date_asof = $3 WHERE id = $4',
    [title, type_new, date_asof, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Template modified with ID: ${id}`)
    }
  )
}

// Deletes
const deleteTemplate = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM templates WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Template deleted with ID: ${id}`)
  })
}

module.exports = {
    getTemplates,
    getTemplateById,
    createTemplate,
    updateTemplate,
    deleteTemplate,
    getTemplateItems,
    getCustomTemplateItems,
    getTemplateTypes,
    updateTemplateDetails,
    createCustomTemplateItem,
    getCustomControls,
    getCustomControlsLibrary
  }
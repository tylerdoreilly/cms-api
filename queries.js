const Pool = require('pg').Pool
const pool = new Pool({
  user: 'admin',
  host: 'localhost',
  database: 'api',
  password: 'adminpass',
  port: 5432,
})

const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
}

const getUserById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
}

const createUser = (request, response) => {
    const { name, email } = request.body
  
    pool.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *', [name, email], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User added with ID: ${results.rows[0].id}`)
    })
}

const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { name, email } = request.body
  
    pool.query(
      'UPDATE users SET name = $1, email = $2 WHERE id = $3',
      [name, email, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`User modified with ID: ${id}`)
      }
    )
}

const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User deleted with ID: ${id}`)
    })
}

// const getTemplates = (request, response) => {
//   pool.query('SELECT * FROM templates ORDER BY id ASC', (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(200).json(results.rows)
//   })
// }
const getTemplates = (request, response) => {
  pool.query('SELECT templates.id, templates.title, templates.date_created, templates.date_asof, templates.date_updated, template_types.id as type_id, template_types.type FROM templates INNER JOIN template_types ON templates.type_new = template_types.id ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

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

const getTemplateTypes = (request, response) => {
  pool.query('SELECT * FROM template_types ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

// const getTemplateById = (request, response) => {
//   const id = parseInt(request.params.id)

//   pool.query('SELECT * FROM templates WHERE id = $1', [id], (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(200).json(results.rows)
//   })
// }

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

const deleteTemplate = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${id}`)
  })
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    getTemplates,
    getTemplateById,
    createTemplate,
    updateTemplate,
    deleteTemplate,
    getTemplateItems,
    getCustomTemplateItems,
    getTemplateTypes,
    updateTemplateDetails
  }
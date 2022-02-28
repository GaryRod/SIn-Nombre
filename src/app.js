const express = require('express')
const {resolve} = require('path')

const mainRoutes = require('./routes/mainRoutes')
// const productsRoutes = require('./routes/productRoutes')
// const usersRoutes = require('./routes/userRoutes')

const app = express()

// Archivos estáticos
app.use(express.static('public'))

// Requerimientos para templates
app.set('view engine', 'ejs')
app.set('views', resolve(__dirname, './views'))

// Rutas
app.use('/', mainRoutes)
// app.use('/products', productsRoutes)
// app.use('/users', usersRoutes)

// Error 404
// app.use((req, res, next) => {
//     res.status(404).render(resolve(__dirname,'views/products/not-found'))
// })


// Servidor corriendo
const port = 3030

app.listen(process.env.PORT || port, () => { 
    console.log(`Servidor funcionando ${port}`)
});
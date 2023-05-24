var  express = require('express')
const app = express()
const port = 3000
const path = require('path') 
const { engine } = require('express-handlebars')


app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
  

app.use(express.static(path.join(__dirname,"static")));

app.use('/',require(path.join(__dirname,"routes/blog.js")));

 
 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


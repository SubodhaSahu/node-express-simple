const Joi = require('joi')
const express = require('express');
const app = express();

app.use(express.json());

const courses = [
    {id: 1, name: 'Node JS'},
    {id: 2, name: 'React JS'},
    {id: 3, name: 'Vue JS'},
]

app.get('/', (req, res) =>{
res.send('Hello World');
});

app.get('/api/courses', (req, res) =>{
    res.send(courses);
});

app.get('/api/courses/:id', (req, res) =>{
    //res.send(req.params.id);
    const course = courses.find(c => c.id ===  parseInt(req.params.id))
    if(!course) res.status(400).send('The couse with the given ID was not found')
    res.send(course)
});

app.post("/api/courses/", (req, res) => {
    const schema = Joi.object({
        name: Joi.string()
            .min(3)
            .max(30)
            .required()
    });

    const result = schema.validate(req.body, schema);
    console.log(result)
//   if (!req.body.name || req.body.name.length < 3) {
//       res.status(400).send("Invalid Req");
//       return;
//   }

  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.status(201).send(course);
});


//Query parameters
app.get('/api/post/:year/:month', (req, res) => {
    //res.send(req.params);
    res.send(req.query);
})





const port = process.env.PORT || 3000;
app.listen(port, () =>{
    console.log(`Listening to port ${port}...`);
})
import express from 'express';
import cors from 'cors';
import {dummyTodos} from './data/data.js';
import e from 'express';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/api/getAllTodos', async(req,res) => {
    //db function for getting the todos
    res.send(dummyTodos)
})


app.post('/api/todos/addTodo/', async (req,res) =>{
    const todo = {...req.body};
    dummyTodos.push(todo);
    res.send(dummyTodos);


})

app.put('/api/put-Todo/:id', async(req,res)=>{
    const {id} = req.params;
    // const todo = {'id':{id}, title: '...req.body'};
    const todoindex = dummyTodos.findIndex(e => (e.id === {id}));
    console.log(todoindex);
    console.log(dummyTodos[todoindex]);
    // dummyTodos.title[todoindex].splice(req.body.title,0);
    res.send(dummyTodos);
})

app.listen(8000,() => {
    console.log('i am listening on port 8000')
})
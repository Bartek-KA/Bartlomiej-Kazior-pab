import express from 'express'
import {Request, Response} from 'express'
import {Note} from './note'

const app = express()

let notes: Array<Note> = []

let note = notes.find(note => note.id === 10)

app.use(express.json())

app.get('/note/:id', function (req: Request, res: Response) {
  const node = notes.pop()
  console.log(node)
  res.status(200).send(node)
})

app.post('/note', function (req: Request, res: Response) {
  console.log(req.body.title)
  console.log(req.body.content) // e.x. req.body.title 
  const title = req.body.title
  const content = req.body.content
  const date = new Date().toISOString()
  let note: Note = {title: title, content: content, createDate: date}
  notes.push(note)
  res.status(201).send(note)
})

app.listen(3000)
import React, { useState } from 'react'
import Home from './src/screens/home'
import AddNote from './src/screens/addNote'
import EditNote from './src/screens/edit.Note'

// Tambahkan function "addNote" sebagai prop
const CurrentPageWidget = ({
  currentPage,
  noteList,
  setCurrentPage,
  addNote,
  editNote,
  deleteNote,
  currentNote,
  setCurrentNote
}) => {
  switch (currentPage) {
    case 'home':
      return <Home 
      noteList={noteList} 
      setCurrentPage={setCurrentPage} 
      deleteNote={deleteNote}
      setCurrentNote={setCurrentNote}/>
    case 'add':
      // Berikan function "addNote" ke component "AddNote"
      return <AddNote 
      setCurrentPage={setCurrentPage} 
      addNote={addNote} />
    case 'edit':
      return <EditNote setCurrentPage={setCurrentPage} editNote={editNote} currentNote={currentNote} />
    default:
      return <Home />
  }
}
      
const App = () => {
  const [currentPage, setCurrentPage] = useState('home')
  const [noteList, setNoteList] = useState([
    {
      id: 1,
      title: 'Note pertama',
      desc:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    },
  ])
  const [currentNote, setCurrentNote] = useState(null)

  const addNote = (title, desc) => {
    const id = noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1
    setNoteList([
      ...noteList,
      {
        id,
        title: title,
        desc: desc,
      },
    ])
  }

  const deleteNote = (id) => {
    setNoteList(noteList.filter(note => note.id !== id))
  }

  const editNote = (id, newTitle, newDesc) => {
    setNoteList(noteList.map(note => 
      note.id === id ? { ...note, title: newTitle, desc: newDesc } : note
    ))
  }

  return (
    <CurrentPageWidget
      currentPage={currentPage}
      noteList={noteList}
      setCurrentPage={setCurrentPage}
      addNote={addNote}
      editNote={editNote}
      deleteNote={deleteNote}
      currentNote={currentNote}
      setCurrentNote={setCurrentNote}
    />
  )
}

export default App;
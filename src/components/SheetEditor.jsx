import React, { createContext, useState, useEffect } from 'react';
import Buttons from './Buttons';
import EditNote from './EditNote';
import Nav from './Nav';
import Cards from './Cards';
import '../styles.css';
import FreshStart from './FreshStart';

export const appContext = createContext();

function SheetEditor() {

  const [selectedNote, setselectedNote] = useState(null);
  const [note, setnote] = useState({});
  const [noteColor, setnoteColor] = useState('rgb(254,156,65)');
  const [locked, setlocked] = useState(false);
  const [editMode, seteditMode] = useState(false);
  const [notes, setnotes] = useState([])
  const [cards, setcards] = useState([]);

  useEffect(() => {
    var savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      setnotes(JSON.parse(localStorage.getItem('notes')))
    }
  }, [])

  useEffect(() => {
    setcards(notes);
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes])

  const saveData = () => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }


  var values = { selectedNote, setselectedNote, note, setnote, noteColor, setnoteColor, locked, setlocked, editMode, seteditMode, notes, setnotes, cards, setcards, saveData }

  return (
    <appContext.Provider value={values}>
      <div id="globalWrapper" className="flexCol paddingH">
        <Nav />
        {editMode ? <EditNote /> : <b />}
        {editMode ? <b /> : <Cards />}
        {notes.length == 0 && !editMode ? <FreshStart /> : <b />}
        {editMode ? <Buttons /> : <b />}
      </div >
    </appContext.Provider >
  )
}

export default SheetEditor
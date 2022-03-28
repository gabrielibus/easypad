import React, { useContext } from 'react'
import { appContext } from './SheetEditor';

function Buttons() {

    const { note, notes, setnotes, selectedNote, seteditMode, setselectedNote, locked, noteColor, setlocked, setnoteColor } = useContext(appContext);

    function setRandomColor() {
        var randomColor = () => (Math.random().toString()).split('.')[1] % 255;
        return `rgb(${randomColor()},${randomColor()},${randomColor()})`;
    }

    const deleteNote = () => {
        var notesCopy = [...notes];
        notesCopy.splice(selectedNote, 1);
        setnotes(notesCopy);
        setselectedNote(null);
        seteditMode(false);
    }



    return (
        <div id="buttonsBox" className="flexRow spaceBtwn transparent alignCenter fixed">
            <div id="btn2" className="btn marginH" onClick={deleteNote}>
                <svg className="marginR" width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    color="#fa7272">
                    <g>
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                        </path>
                        <line x1="10" y1="11" x2="10" y2="17"></line>
                        <line x1="14" y1="11" x2="14" y2="17"></line>
                    </g>
                </svg>
                <span className="">Delete</span>
            </div>
            <div id="btn3" className="btn marginH" onClick={() => setnoteColor(setRandomColor())}>
                <svg id="colorIcon" style={{ color: note[2] || noteColor }} className="marginR" width="23" height="23" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                >
                    <g><circle cx="12" cy="12" r="10"></circle></g>
                </svg>
                <span className="">Color</span>
            </div>
            <div id="btn4" className={`btn marginH ${locked ? 'bgColor2' : ''}`} onClick={() => setlocked(prevState => !prevState)}>
                <svg className="marginR" width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" color="#FFF">
                    <g>
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                        <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
                        <path style={locked ? { display: 'block' } : { display: 'none' }} d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </g>
                </svg>
                <span id='btn4Text'>{locked ? 'Locked' : "Unlocked"}</span>
            </div>
        </div>
    )
}

export default Buttons
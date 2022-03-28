import React, { useContext } from 'react'
import SearchBar from './SearchBar';
// import { getSheetsData } from '../../../server/sheets';
import { appContext } from './SheetEditor'

function Nav() {
    const { selectedNote, setselectedNote, editMode, seteditMode, note, setnote, notes, setnotes, saveData, locked, noteColor } = useContext(appContext);

    const bt1Action = () => {
        var isInHome = !editMode;
        if (isInHome) {
            setnote({})
        }
        else { // when return from editMode to home!

            if (selectedNote != null) {
                var notesCopy = [...notes];
                if (note.input1 == "" && note.input2 == "") { // IF DELETE ALL INPUTS IN UPDATE MODE
                    notesCopy.splice(selectedNote, 1)
                }
                else { // IF UPDATE NOTE
                    notesCopy[selectedNote] = [note.input1, note.input2, noteColor, locked];
                }
                setnotes(notesCopy);
                setselectedNote(null);
            }
            else { // IF NEW NOTE
                var prevState = [...notes];
                if (note.input1 || note.input2) {
                    if (note.input1 != "" && note.input2 != "") {
                        prevState.push([note.input1, note.input2, noteColor, locked]);
                        setnotes(prevState);
                    }
                }
            }
            saveData();
        }
        seteditMode(prevState => !prevState);
    }


    return (
        <div>
            <div id="nav" className="flexRow spaceBtwn alignCenter ">
                <h1 className="color1 font1 noMargin">
                    <span id="navSymbol">E</span>
                    <span>EasyPad</span>
                </h1>
                {editMode ? <b /> : <SearchBar />}
                <div
                    id="btn1"
                    className="btn color2 flexRow spaceBtwn alignCenter bgColor2"
                    onClick={bt1Action}>
                    <svg className="marginR" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" color="#A3F7BF">
                        <g>
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </g>
                    </svg>
                    <span><b>{
                        editMode && selectedNote != null ? 'Update note' : !editMode ? 'New note' : "Save and exit"
                    }</b></span>
                </div>
            </div>
            <hr id="hr" />
        </div >
    )
}

export default Nav
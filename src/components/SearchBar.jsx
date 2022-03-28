import React, { useContext } from 'react';
import { appContext } from './SheetEditor';

function SearchBar() {
    const { notes, setcards } = useContext(appContext);


    const searchAction = (searchText) => {
        // var searchWordsArray = searchText.split(" ");
        // var notesArray = notes.map(note => note[0].concat(" ", note[1]));
        // var res = searchWordsArray.map(word => notesArray.map(e => e.includes(word) ? true : false));
        // var notesCopy = [...notes];
        // console.log(res)
        var notesCopy = [...notes];
        var res = [];
        notesCopy.forEach((e, idx) => {
            if (e[0].includes(searchText) || e[1].includes(searchText)) res.push(notes[idx])
        })
        setcards(res);
    }

    return (
        <div>
            <input
                type="text"
                className='btn'
                placeholder='Search something here...'
                onChange={e => searchAction(e.target.value)}
            />
        </div>
    )
}

export default SearchBar
import React, { useContext, useEffect, useState } from 'react'
import { appContext } from './SheetEditor';

function EditNote() {
    const { note, setnote, locked } = useContext(appContext);

    const [titleHeight, settitleHeight] = useState('64px');
    const [descriptionHeight, setdescriptionHeight] = useState('auto');

    const handleChange = (e) => {
        setnote(prevState => { return { ...prevState, [e.target.id]: e.target.value } })
    }

    useEffect(() => { // correct autogrowtext areas tags
        var hiddenBox = document.getElementById('_heigthSizing');
        var hiddenBox2 = document.getElementById('_heigthSizingText');
        hiddenBox.innerHTML = note.input1;
        hiddenBox2.innerHTML = note.input2;
        settitleHeight(hiddenBox.scrollHeight);
        setdescriptionHeight(hiddenBox2.scrollHeight);
    }, [])

    return (
        < div >
            <textarea
                id="input1"
                value={note.input1}
                style={{ height: titleHeight }}
                className="noteTitle font1"
                placeholder="Enter Title"
                type="text"
                onChange={(e) => handleChange(e)}
                onInput={(e) => {
                    var hiddenBox = document.getElementById('_heigthSizing');
                    hiddenBox.innerHTML = e.target.value;
                    settitleHeight(hiddenBox.scrollHeight);

                }}
                disabled={locked}
            />
            <textarea
                id="input2"
                value={note.input2}
                style={{ height: descriptionHeight }}
                className="transparent noteTitle color3 font2"
                placeholder="Start Typing..."
                type="text"
                onChange={(e) => handleChange(e)}
                onInput={(e) => {
                    var hiddenBox = document.getElementById('_heigthSizingText');
                    hiddenBox.innerHTML = e.target.value;
                    setdescriptionHeight(hiddenBox.scrollHeight);
                }}
                disabled={locked}
            />
            {/* for autogrow textareas */}
            <textarea id="_heigthSizing" className="noteTitle font1" ></textarea>
            <textarea id="_heigthSizingText" className="transparent noteTitle color3 font2"></textarea>
        </ div>
    )
}

export default EditNote
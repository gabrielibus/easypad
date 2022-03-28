import React, { useContext } from 'react';
import { appContext } from './SheetEditor';

function Cards() {
    const { setselectedNote, cards, seteditMode, setnote, noteColor } = useContext(appContext);
    var notes = cards;

    var Notes = () => {
        var cards = notes.map((note, idx) => {
            return (
                <div id="card" key={idx} className="flexRow alignCenter spaceCenter" >
                    <div id="cardColor" style={{ backgroundColor: note[2] || noteColor }}></div>
                    <div id="cardContent">
                        <div
                            style={{ cursor: 'pointer' }}
                            onClick={(e) => {
                                seteditMode(prevState => !prevState);
                                setnote({ input1: notes[idx][0], input2: notes[idx][1] });
                                setselectedNote(idx);
                            }}>
                            <span id="cardTitle">{note[0]}</span>
                            <p id="cardDescription">{note[1]}</p>
                        </div>
                        <div className="flexRow">
                            <button className="btn bgColor1">
                                <svg className="marginH" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <g>
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <polyline points="12 6 12 12 16 14"></polyline>
                                    </g>
                                </svg>
                                Invalid date
                            </button>
                            <button className="btn bgColor1 marginH">
                                <svg className="marginH" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <g>
                                        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                                        <polyline points="16 6 12 2 8 6"></polyline>
                                        <line x1="12" y1="2" x2="12" y2="15"></line>
                                    </g>
                                </svg>
                                Share
                            </button>
                        </div>
                    </div>
                </div>
            )
        })
        return cards;
    }
    return (
        <div id="cardsWrapper">
            <Notes />
        </div>
    )
}

export default Cards
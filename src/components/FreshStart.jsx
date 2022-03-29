import React from 'react'
import logo from "../media/fresh.svg"

function FreshStart() {
    return (
        <div>
            <div className="flexCol alignCenter spaceCenter" id='freshBox'>
                <img src={logo} alt="No Notes Found" width="250px" />
                <h1 className='color3'>It's a Fresh Start !</h1>
                <p className='color3'>Click on new note button at top right corner</p>
                <br />
            </div>
            <a className='btn' id="freshFooter" href='http://compufacilito.com' target="_blank" rel="noreferrer">made by compuFacilito</a>
        </div>
    )
}

export default FreshStart
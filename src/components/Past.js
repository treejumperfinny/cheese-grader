import React from 'react';
import ChzContainer from './ChzContainer';


function Past({ cheese }) {

return <>

        <div className='past_card' id="past">
            <h1 className='past'> Former Fromage "Friends" </h1>
            <img src={require("./images/Gimme_Gouda.png")} alt="placeholder" className="yas_cheese" />
            <div className='past_lovers'>
                <ChzContainer cheeses={cheese} />
            </div>
        </div>
    </>
}

export default Past;
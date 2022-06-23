import React from 'react';

function HomePage() {
    return <>
        <div className='welcome_card' id="home">
            <h1 className='welcome'>
                Welcome cheese lover!
            </h1>
            <h2> We know you have great taste. 😏</h2>
            <img src={require("./images/yas_cheese.png")} alt="placeholder" className="yas_cheese" />
            <p>You can file away and put down all of the info you may have on your the past cheeses you have <strike> wined and dined and dated</strike> tasted.</p>
            <p>Here you might find something that tantalizes your tastebuds perfectly. Maybe an old favorite or something entirely brand new. We have plenty of different kinds to choose from!
            </p>
        </div>
    </>
}

export default HomePage;
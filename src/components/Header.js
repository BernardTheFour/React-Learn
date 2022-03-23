import React from "react";

//import css
import './Header.css'

export default Header

// functions
function Header() {
    let hour = new Date().getHours()
    //let hour = 12
    var name = 'Bernard'
    var messages

    // inline css
    var styles = {}

    // conditional rendering
    if (hour >= 6 && hour < 12){
        messages = 'Morning'

        styles.color ='#000C66'
        styles.backgroundColor = '#7EC8E3'
    } else if (hour >= 12 && hour <= 17){
        messages = 'Afternoon'

        styles.color = 'white'
        styles.backgroundColor ='#0000FF'
    } else {
        messages = 'Night'

        styles.color = '#7EC8E3'
        styles.backgroundColor ='#050A30'
    }

    return (
        <header style={styles} className="navbar">
            Good {messages}, {name}!
        </header>
    )
}
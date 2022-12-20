import React from "react";

function Keypad() {
    function handleChange() {
        console.log("Entering password...")
    }
    return (
        <div>
            <input onChange={handleChange} />
        </div>
    )
}

export default Keypad;
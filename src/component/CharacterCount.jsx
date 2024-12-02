import React from "react"

function CharacterCount({ count }) {
    return (
        <p className="note-input__characterCount">Sisa karakter: {count}/50</p>
    )
}

export default CharacterCount
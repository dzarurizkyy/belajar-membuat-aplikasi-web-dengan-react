import React from "react"
import formatDate from "../util/formatDate"

function NoteItemTextContainer({ title, createdAt, body }) {
    return (
        <div className="note-item__textContainer">
            <h3 className="note-item__title">{title}</h3>
            <p className="note-item__createdAt">{formatDate(createdAt)}</p>
            <p className="note-item__body">{body}</p>
        </div>
    )
}

export default NoteItemTextContainer
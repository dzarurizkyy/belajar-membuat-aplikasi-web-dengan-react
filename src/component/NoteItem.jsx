import React from "react"
import NoteItemTextContainer from "./NoteItemTextContainer"
import NoteItemButtonContainer from "./NoteItemButtonContainer"

function NoteItem({ title, createdAt, body, id, archived, onDelete, onArchive }) {
    return (
        <div className="note-item">
            <NoteItemTextContainer title={title} createdAt={createdAt} body={body} />
            <NoteItemButtonContainer id={id} archived={archived} onDelete={onDelete} onArchive={onArchive} />
        </div>
    )
}

export default NoteItem
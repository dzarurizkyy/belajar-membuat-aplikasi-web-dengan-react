import React from "react"
import DeleteButton from "./DeleteButton"
import ArchiveButton from "./ArchiveButton"

function NoteItemButtonContainer({ id, archived, onDelete, onArchive }) {
    return (
        <div className="note-item__buttonContainer">
            <DeleteButton id={id} onDelete={onDelete} />
            <ArchiveButton id={id} archived={archived} onArchive={onArchive} />
        </div>
    )
}

export default NoteItemButtonContainer
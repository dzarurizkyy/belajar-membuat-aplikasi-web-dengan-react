import React from "react"
import { IoMdArchive } from "react-icons/io"
import { MdUnarchive } from "react-icons/md";

function ArchiveButton({ id, archived, onArchive }) {
    return <button className="note-item__archive" onClick={() => onArchive(id)}>
        {archived !== true ? (<IoMdArchive />) : (<MdUnarchive />)}
    </button>
}

export default ArchiveButton
import React from "react"
import { getInitialData } from "../util/index"
import NoteList from "./NoteList"
import NoteInput from "./NoteInput"
import SearchButton from "./SearchButton"
import "../style/style.css"
class NoteApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = { notes: getInitialData(), backupNotes: getInitialData() }
        this.onDeleteHandler = this.onDeleteHandler.bind(this)
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this)
        this.onArchiveHandler = this.onArchiveHandler.bind(this)
        this.onSearchHandler = this.onSearchHandler.bind(this)
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id)
        const backupNotes = this.state.backupNotes.filter(note => note.id !== id)

        this.setState({ notes })
        this.setState({ backupNotes })
    }

    onAddNoteHandler({ title, body }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes, {
                        id: String(+new Date()),
                        title,
                        body,
                        archived: false,
                        createdAt: new Date().toISOString()
                    }
                ],
                backupNotes: [
                    ...prevState.notes, {
                        id: String(+new Date()),
                        title,
                        body,
                        archived: false,
                        createdAt: new Date().toISOString()
                    }
                ],
            }
        })
    }

    onArchiveHandler(id) {
        const notes = this.state.notes.map(note => note.id === id ? { ...note, archived: !note.archived } : note)
        const backupNotes = this.state.backupNotes.map(note => note.id === id ? { ...note, archived: !note.archived } : note)

        this.setState({ notes })
        this.setState({ backupNotes })
    }

    onSearchHandler({ search }) {
        if (search.trim() === "") {
            this.setState({ notes: this.state.backupNotes })
        } else {
            const filter = this.state.notes.filter(note => note.title.toLowerCase().includes(search.toLowerCase()))
            this.setState({ notes: filter })
        }
    }

    render() {
        return (
            <div className="note-app">
                <h1 className="note-app__title">Aplikasi Catatan</h1>
                <h2 className="note-app__section">Tambah Catatan</h2>
                <NoteInput addNote={this.onAddNoteHandler} />
                <h2 className="note-app__section">Cari Catatan</h2>
                <SearchButton searchByTitle={this.onSearchHandler} />
                {this.state.notes.length !== 0 ? (
                    <div className="note-app__container">
                        <h1 className="note-app__section">Daftar Catatan</h1>
                        <NoteList notes={(this.state.notes).filter(note => note.archived !== true)} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
                        <h1 className="note-app__section">Arsip</h1>
                        <NoteList notes={(this.state.notes).filter(note => note.archived !== false)} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
                    </div>
                ) : (
                    <h1 className="note-app__section">Tidak ada catatan</h1>
                )}
            </div>
        )
    }
}

export default NoteApp
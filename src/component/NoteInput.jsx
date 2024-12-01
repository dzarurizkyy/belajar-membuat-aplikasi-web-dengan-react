import React from "react"

class NoteInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = { title: "", body: "" }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this)
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this)
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this)
    }

    onTitleChangeEventHandler(event) {
        const input = event.target.value
        if (input.length <= 50) this.setState({ title: input })
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value
            }
        })
    }

    onSubmitEventHandler(event) {
        event.preventDefault()
        this.props.addNote(this.state)
    }

    render() {
        return (
            <form className="note-input" onSubmit={this.onSubmitEventHandler}>
                <p>Sisa karakter : {this.state.title.trim().length}/50</p>
                <input type="text" placeholder="Masukkan judul catatan" value={this.state.title} onChange={this.onTitleChangeEventHandler} />
                <textarea rows={4} cols={50} placeholder="Masukkan deksripsi catatan" value={this.state.body} onChange={this.onBodyChangeEventHandler} />
                <button type="submit">Tambah</button>
            </form>
        )
    }
}

export default NoteInput

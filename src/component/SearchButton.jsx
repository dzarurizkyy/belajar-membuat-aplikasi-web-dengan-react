import React from "react"

class SearchButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = { search: "" }

        this.onSearchChangeEventHandler = this.onSearchChangeEventHandler.bind(this)
    }

    onSearchChangeEventHandler(event) {
        this.setState({ search: event.target.value }, () => { this.props.searchByTitle(this.state) })
    }

    render() {
        return <input type="text" value={this.state.search} onChange={this.onSearchChangeEventHandler} placeholder="Cari catatan" />
    }
}

export default SearchButton
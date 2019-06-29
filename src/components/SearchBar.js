import React from 'react';

class SearchBar extends React.Component {
    state = { text: '' }
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.text);
    }
    onInputChange(event) {
        console.log(event.target.value);
    }
    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Search</label>
                        <input type="text"
                            value={this.state.text}
                            onChange={(e) => { this.setState({ text: e.target.value.toUpperCase() }) }}></input>
                    </div>
                </form>
            </div>
        );
    }
}
export default SearchBar;
import React, { Component } from "react";

export default class Filter extends Component {
    state = {
    name: ''
    }

    render() {
        return (
            <label>
                Find contacts by name
            <input
                type="text"
                name="filter"
                className="input-name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                onChange = {this.props.handleChange}
                value = {this.props.filter}>
            </input>
            </label>
        )
    }
    
}
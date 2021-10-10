import React, {Component} from "react"

export default class Form extends Component {
    render() {
        return (
            <form>
                <label> Name
                <input
                  type="text"
                  name="name"
                  className="input-name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                  required
                  onChange = {this.props.handleChange}
                  value = {this.props.name}
                />
                </label>
                <br/>
                <label> Number
                <input
                  type="tel"
                  name="number"
                  className="input-name"
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                  required
                  onChange = {this.props.handleChange}
                  value = {this.props.number}
                />
                </label>
                <br/>
                <button
                    type="submit"
                    className="btn-submit"
                    onClick = {this.props.handleSubmit}>
                    Add contact
                </button>
            </form>
        )
    }
}
import React, {Component} from "react"
import ListItem from "../ListItem/ListItem"
import s from './list.module.scss'

export default class List extends Component {
    state = {
        edit: false
    }

    handleCheckbox = (e) => {
        this.setState({ edit: e.target.checked })
    }

    changeCheckbox = (status) => {
        this.setState({ edit: status })
    }

    render() {
        let classNameCheckbox = 'checkboxEdit'
        if (this.state.edit) {
        classNameCheckbox += ' checkboxEditActive'
        }

        return (
            <div className={s.contactsList}>
                {this.props.filtredContacts.length > 0
                    ? (<label
                        className={classNameCheckbox}>
                        Edit
                        <input
                        type="checkbox"
                            className={s.hidden}
                            checked={this.state.edit}
                            onChange={this.handleCheckbox}
                        />
                        </label>)
                    : (<></>)
                }    
                <ul className={s.list}>
                    <ListItem
                        filtredContacts={this.props.filtredContacts}
                        changeCheckbox={this.changeCheckbox}
                        checboxForEdit={this.state.edit}
                        deleteContact={this.props.deleteContact}
                    />
                </ul>
            </div>
        )
    }
}
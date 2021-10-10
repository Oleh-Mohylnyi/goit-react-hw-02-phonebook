import React, { Component } from "react";
import s from './listItem.module.scss'

export default class ListItem extends Component {
    
    render() {
        return (
            <>
            {this.props.contacts.map(({id, name, number}) => {
                const nameContact = name.toLowerCase()
                const filter = this.props.filter.toLowerCase()
                if (nameContact.includes(filter)) {
                    return (
                        <li key={id} className={s.item}>
                            <span>{name} </span>
                            <span>{number} </span>
                            <button
                                type="button"
                                onClick={() => this.props.deleteContact(id)}>
                                Delete
                            </button>
                        </li>
                    )
                }
            })}
            </>
        )
    }
}
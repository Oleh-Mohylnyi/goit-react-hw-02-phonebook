import React, { Component } from "react";
import s from './listItem.module.scss'

export default class ListItem extends Component {
    
    // filterContact = () => {
    //     const {name} = this.props.contacts;
    //     const nameContact = name.toLowerCase();
    //     const filter = this.props.filter.toLowerCase();
    //     nameContact.includes(filter) ? true : false
    // }
    deleteItem = (id) => {
        this.props.deleteContact(id)
        if (this.props.filtredContacts.length < 2) {
            this.props.changeCheckbox(false)
        }
    }

    
    render() {
        let classNameBtn = 'btn_delete'
        if (!this.props.checboxForEdit) {
        classNameBtn += ' hidden'
        }
        
        
        
        return (
            <>
                {this.props.filtredContacts.map((contact) => (
                    <li
                        key={contact.id}
                        style={this.props.filtredContacts.indexOf(contact) % 2 !==0 ? {backgroundColor: 'transparent'} : {backgroundColor: 'white'} }
                        className={s.item}>
                        <div className={s.contactSpan}>
                        <span>{contact.name} </span>
                        <span>{contact.number} </span>
                        </div>
                        <button
                            type="button"
                            className={classNameBtn}
                            onClick={() => this.deleteItem(contact.id)}>
                            Delete
                        </button>
                    </li> )) }
            </>)
    }   
}
    
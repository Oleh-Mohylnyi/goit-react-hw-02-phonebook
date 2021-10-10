import React, {Component} from "react"
import ListItem from "../ListItem/ListItem"
import s from './list.module.scss'

export default class List extends Component {

    render() {
        return (
            
            <ul className={s.list}>
                <ListItem
                    deleteContact={this.props.deleteContact}
                    contacts={this.props.contacts}
                    filter={this.props.filter}
                />
            </ul>
        )
    }
}
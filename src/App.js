// import logo from './logo.svg';
import React from 'react';
import { Component } from 'react';
import s from './App.module.css';
import Form from './components/Form'
import List from './components/List'
import { v4 as uuid } from 'uuid';
import Filter from './components/Filter';

class App extends Component {

  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    name: '',
    number: '',
    filter: ''
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.contacts.find(contact => contact.name === this.state.name)) {
      alert(`${this.state.name} is already in contacts`)
    } else {
      this.saveContact(e)
      this.resetContact()
    }
  }

  resetContact = () => {
    this.setState({ name: '', number: '' })
  }

  saveContact = e => {
    const contact = {
      id: uuid(),
      name: this.state.name,
      number: this.state.number
    }
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(todo => todo.id !== id)
    }))
  }

  render() {
    return (
      <div className={s.app}>
        <h1>Phonebook</h1>
        <Form
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          name={this.state.name}
          number={this.state.number} />
        
        {this.state.contacts.length > 0 
          ? (<>
            <h2>Contacts</h2>
              <Filter
                  handleChange={this.handleChange}
                  filter={this.state.filter} />
          </>)
                    : (<p>no contacts at the moment</p>)
                }
        <List
          handleChange={this.handleChange}
          deleteContact={this.deleteContact}
          contacts={this.state.contacts}
          filter={this.state.filter}
          />
      </div>
    )
  }
}

export default App;


// import logo from './logo.svg';
import React from 'react';
import { Component } from 'react';
import './App.css';
import Form from './components/Form'
import List from './components/List'
import { v4 as uuid } from 'uuid';
import Filter from './components/Filter';

class App extends Component {

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: ''
  }

  handleFilterChange = (e) => {
    this.setState({ filter: e.target.value })
  }

  onSubmit = (name, number) => {
    if (this.state.contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`)
    } else {
      this.saveContact({ name, number })
    }
  }

  saveContact = (newContact) => {
    const {name, number} = newContact
    const contact = {
      id: uuid(),
      name,
      number
    }
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }))
  }

  render() {

    const filtredContacts = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter.toLowerCase()))

    return (
      <div className="app">
        <h1>Phonebook</h1>
        <Form
          saveForm={this.onSubmit}
          />
        
        {this.state.contacts.length > 0 
          ? (<>
            <h2>Contacts</h2>
            <Filter
                handleChange={this.handleFilterChange}
                filter={this.state.filter} />
            </>)
          : (<p>no contacts at the moment</p>)
        }
        <List
          filtredContacts={filtredContacts}
          deleteContact={this.deleteContact}
          />
      </div>
    )
  }
}

export default App;


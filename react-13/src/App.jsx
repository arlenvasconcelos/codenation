import React from 'react';

//import Components
import Topbar from './components/Topbar';
import Filters from './components/Filters';
import Contacts from './components/Contacts';

//import service
import { getContacts } from "./service";

//import css
import './App.scss';

class App extends React.Component {

  constructor (){
    super();
    this.state = {
      contacts: [],
      filteredContacts: []
    }
  }

  componentDidMount() {
    //get contacts
    getContacts().then((data) => {
      this.setState({ 
        contacts: data,
        filteredContacts: data,
      });
    });
  }

  //filter contacts
  handleFilter(filter){
    const filteredContacts = this.state.contacts
      .filter( contact => (
        contact.name.toUpperCase().includes(filter.query.toUpperCase())
      ))
      .sort(function (a, b) {
        if (a[filter['sortBy']] > b[filter['sortBy']]) {
          return 1;
        }
        if (a[filter['sortBy']] < b[filter['sortBy']]) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });
    //set filteredContacts from state
    this.setState({'filteredContacts': filteredContacts})

  }

  render() {
    return (
      <React.Fragment>
        <Topbar />
        <Filters handleFilter={(filter) => this.handleFilter(filter)}/>
        <Contacts contacts={this.state.filteredContacts}/>
      </React.Fragment>
    )
  }
}

export default App;

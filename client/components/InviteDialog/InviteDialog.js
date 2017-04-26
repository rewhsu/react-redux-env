import React from 'react';
import styles from './InviteDialog.css';
import InviteEntry from '../InviteEntry/InviteEntry.js';

var data = [
  {
    "_id" : "pmX8NahEGH6nwovm",
    "first_name": "Kevin",
    "last_name" : "Knopf",
    "email": "kevin@cancercommons.org",
    "title": "MD",
    "createdAt" : "2017-0410T18:21:35748Z",
    "collaborations": ["robert@cancercommons.org"],
  },
  {
    "_id" : "pmX8NFHWaehnveinEwovm",
    "first_name": "Jevin",
    "last_name" : "Jnopf",
    "email": "jevin@cancercommons.org",
    "title": "MD",
    "createdAt" : "2017-0410T18:27:35748Z",
    "collaborations": ["robert@cancercommons.org"],
  },
  {
    "_id" : "pmX8NFHWnveiHJnwovm",
    "first_name": "Levin",
    "last_name" : "Lnopf",
    "email": "levin@cancercommons.org",
    "title": "MD",
    "createdAt" : "2017-0410T18:23:35748Z",
    "collaborations": ["robert@cancercommons.org"],
  }
];

export default class InviteDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: null,
      entries: 0,
    }
    this.handleChange = this.handleChange.bind(this);
  }
  getEmails() {
    return data.map((entry) => {
      return entry.email;
    });
  }
  handleEmailFocus(e) {

  }
  handleEmailChange(e) {
    console.log('handling email change');
    this.setState({ text: e.target.value });
  }
  handleChange(e) {
    console.log('handling change');
    this.setState({ text: e.target.value });
  }
  addEntry() {
    this.setState({
      entries: this.state.entries + 1,
    });
  }
  render() {
    console.log('message', this.props.message);
    var entries = [];
    for (var i = 0; i < this.state.entries; i++) {
      entries.push(<InviteEntry data={data} />)
    }
    return (
      <div>
        <div>This is the InviteDialog component</div>
        {entries ? 
          entries
          : null}
        <button onClick={() => this.addEntry()}>+ Add Additional</button>
        <button onClick={() => this.invite()}>Invite</button>
      </div>
    );
  }
}
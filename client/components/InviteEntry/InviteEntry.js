import React from 'react';
import styles from './InviteEntry.css';
import Autocomplete from 'react-autocomplete';

export default class InviteEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // text: null,
      email: "Invite Collaborators",
      firstName: null,
      lastName: null,
      inital: null,
      message: null,
      value: null,
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleBlur(e) {

  }
  handleChange(e) {
    console.log('handling change');
  }
  handleFocus(e) {
    console.log('handling focus');
    if (this.state.email === "Invite Collaborators") {
      e.currentTarget.blur();
    }
  }
  handleEmailSelect(email) {
    var data = this.props.data;
    for (var i = 0; i < data.length; i++) {
      if (data[i].email === email) {
        this.setState({
          email,
          entry: i,
          firstName: data[i].first_name,
          lastName: data[i].last_name,
          title: data[i].title,
          message: data[i].message,
        });
      }
    }
  }
  shouldItemRender(item) {
    if (this.state.email === "Invite Collaborators") {
      return true;
    }
    if (item.email.startsWith(this.state.email)) {
      return true;
    }
  }
  render() {
    console.log('message', this.props.message);
    return (
      <div>
        <div>This is the InviteEntry component</div>
        <Autocomplete
          value={this.state.email}
          items={this.props.data}
          getItemValue={(item) => item.email}
          onChange={(event, email) => this.setState({ email })}
          onSelect={(email) => this.handleEmailSelect(email)}
          shouldItemRender={(item) => this.shouldItemRender(item)}
          renderItem={(item, isHighlighted) => (
            <div
              style={isHighlighted ? styles.highlightedItem : styles.item}
              key={item.abbr}
            >{item.email}</div>
          )}
        />
        <input type="text" className={styles.name} value={this.state.firstName} placeholder="First" onChange={(e) => this.handleChange(e)} onFocus={(e) => this.handleFocus(e)}></input>
        <input type="text" className={styles.name} value={this.state.lastName} placeholder="Last" onChange={(e) => this.handleChange(e)} onFocus={(e) => this.handleFocus(e)}></input>
        <input type="text" className={styles.initial} value={this.state.title} placeholder="Initial" onChange={(e) => this.handleChange(e)} onFocus={(e) => this.handleFocus(e)}></input>
        <input type="text" className={styles.message} value={this.state.message} placeholder="Custom Message" onChange={(e) => this.handleChange(e)} onFocus={(e) => this.handleFocus(e)}></input>
        {/*<button onClick={() => this.props.displayMessage(this.state.text)}>Test</button>
        <button onClick={() => this.props.saveMessage(this.state.text)}>Persist</button>*/}
      </div>
    );
  }
}
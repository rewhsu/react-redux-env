import React from 'react';
import InviteDialog from './InviteDialog/InviteDialog.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: null,
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    console.log('handling change');
    this.setState({ text: e.target.value });
  }
  render() {
    console.log('message', this.props.message);
    return (
      <div>
        <div>This is the Apps component</div>
        {/*<input type="text" placeholder="Create Message" onChange={(e) => this.handleChange(e)}></input>
        <button onClick={() => this.props.displayMessage(this.state.text)}>Test</button>
        <button onClick={() => this.props.saveMessage(this.state.text)}>Persist</button>*/}
        <InviteDialog />
        {this.props.message ?
          <div>{`${this.props.message.text}`}</div>
          : <div>Redux is not tested</div>
        }
      </div>
    );
  }
}
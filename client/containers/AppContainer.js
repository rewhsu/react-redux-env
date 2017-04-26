import { connect } from 'react-redux';
import { changeMessage } from '../actions/actions';
import App from '../components/App';
import db from '../../db/controller';

const mapStateToProps = (state) => {
  return {
    message: state.message,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    displayMessage: ((text) => {
      dispatch(changeMessage({ text: `Redux is working: ${text}` }));
    }),
    saveMessage: ((message) => {
      db.saveMessage(message, function(msg) {console.log(msg)});
    }),
  };
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default AppContainer;
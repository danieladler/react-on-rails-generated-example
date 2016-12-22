// Simple example of a React "smart" component
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as actions from '../actions/CatsActionCreators';

import CatsWrapper from '../components/CatsWrapper'

// Which part of the Redux global state does our component want to receive as props?
const mapStateToProps = (state) => ({ cats: state.cats });

// Don't forget to actually use connect!
// Note that we don't export CatsContainer, but the redux "connected" version of it.
// See https://github.com/reactjs/react-redux/blob/master/docs/api.md#examples
const mapDispatchToProps = (dispatch) => (
  bindActionCreators(actions, dispatch)
);

const CatsContainer = connect(mapStateToProps, mapDispatchToProps)(CatsWrapper);

export default CatsContainer

// // QUESTION: why does this also work, without 'actions' explicitly laying out where
// // dispatch is bound, as in mapDispatchToProps?
// const CatsContainer = connect(mapStateToProps, actions)(CatsCollection);

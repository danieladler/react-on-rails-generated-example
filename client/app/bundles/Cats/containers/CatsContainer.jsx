// Simple example of a React "smart" component

import { connect } from 'react-redux';
import CatsCollection from '../components/CatsCollection';
import * as actions from '../actions/CatsActionCreators';

// Which part of the Redux global state does our component want to receive as props?
const mapStateToProps = (state) => ({ cats: state.cats });

// Don't forget to actually use connect!
// Note that we don't export Cats, but the redux "connected" version of it.
// See https://github.com/reactjs/react-redux/blob/master/docs/api.md#examples
export default connect(mapStateToProps, actions)(CatsCollection);

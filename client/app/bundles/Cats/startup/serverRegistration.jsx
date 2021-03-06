// Shows the mapping from the exported object to the name used by the server rendering.
import ReactOnRails from 'react-on-rails';

// React components
import CatsCollection from '../components/CatsCollection';
import CatForm from '../components/CatForm';
import AddCatForm from '../components/AddCatForm';

// Generator function
import CatsApp from './CatsApp';

ReactOnRails.register({
  CatsCollection,
  CatForm,
  AddCatForm,
  CatsApp
});

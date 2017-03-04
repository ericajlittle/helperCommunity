import ReactOnRails from 'react-on-rails';

import App from '../components/App';
import NewEvent from '../components/NewEvent';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  App, NewEvent
});

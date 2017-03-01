import ReactOnRails from 'react-on-rails';

import App from '../components/App';
import Map from '../components/Map';
import NewEvent from '../components/NewEvent';
import HelloWorld from '../components/HelloWorld';
import MyReact from '../components/MyReact';
// import Event from '../components/Event';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  App, Map, NewEvent, HelloWorld, MyReact
});

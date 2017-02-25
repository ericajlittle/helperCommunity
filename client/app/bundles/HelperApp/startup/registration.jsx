import ReactOnRails from 'react-on-rails';

import HelloWorld from '../components/HelloWorld';
import MyReact from '../components/MyReact';
import Event from '../components/Event';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  HelloWorld, MyReact, Event
});

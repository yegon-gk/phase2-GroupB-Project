import React from 'react';
import ReactDOM from 'react-dom';
import ContactForm from './Components/ContactForm';
import './Components/Contact.css';

function App() {
  return (
    <div>
      <ContactForm />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;

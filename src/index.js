import React from 'react';
    import ReactDOM from 'react-dom/client';
    import { MuiCookieConsent } from '@material-ui/icons';
    import { CookieConsent } from '@material-ui/lab';

    function App() {
      return (
        <div>
          <MuiCookieConsent
            cookieName="myCookie"
            language="en-GB"
            onCookieDeclined={() => console.log('Cookie declined')}
            onCookieAccepted={() => console.log('Cookie accepted')}
          >
            You must accept cookies to use this website.
          </MuiCookieConsent>
        </div>
      );
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<App />);

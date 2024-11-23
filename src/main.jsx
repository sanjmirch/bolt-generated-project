import React from 'react';
    import ReactDOM from 'react-dom/client';
    import Button from '@mui/material/Button';
    import Snackbar from '@mui/material/Snackbar';
    import MuiAlert from '@mui/material/Alert';

    function App() {
      const [open, setOpen] = React.useState(false);

      const handleClick = () => {
        setOpen(true);
      };

      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
      };

      return (
        <div>
          <Button variant="outlined" onClick={handleClick}>
            Show Cookie Consent
          </Button>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <MuiAlert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
              You must accept cookies to use this website.
            </MuiAlert>
          </Snackbar>
        </div>
      );
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<App />);

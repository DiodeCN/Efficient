import { TextField, Typography, Box } from '@mui/material';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Typography variant="h1" align="center">
        Vite + React
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Box sx={{ width: 300 }}>
          <Typography variant="body1" align="center">
            Edit <code>src/App.tsx</code> and save to test HMR
          </Typography>
          <TextField label="Enter Text" variant="outlined" fullWidth sx={{ mt: 2 }} />
          <Box sx={{ border: '1px solid #ccc', borderRadius: 4, p: 2, mt: 2 }}>
            <Typography variant="body1">
              This is a bordered paragraph.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Typography variant="body1" align="center" sx={{ mt: 4 }}>
        Click on the Vite and React logos to learn more
      </Typography>
    </>
  );
}

export default App;

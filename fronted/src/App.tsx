import { TextField, Typography, Box } from '@mui/material';
import './App.css';

function App() {

  return (
    <>
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

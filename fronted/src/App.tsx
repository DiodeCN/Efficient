import { TextField, Typography, Box } from '@mui/material';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [textFieldTitle, setTextFieldTitle] = useState('Default Title');
  const [textFieldContext, setTextFieldContext] = useState('Default Context');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fileReader = new FileReader();
        fileReader.onload = function (event) {
          const content = event.target.result;
          const data = JSON.parse(content);

          if (data.title && data.context) {
            setTextFieldTitle(data.title);
            setTextFieldContext(data.context);
          } else {
            // Create default values if required fields are missing
            setTextFieldTitle('Default Title');
            setTextFieldContext('Default Context');
          }
        };

        fileReader.onerror = function (error) {
          // Handle any error while reading the file
          console.error('Error reading the JSON file:', error);
          // Create default values if the file doesn't exist
          setTextFieldTitle('Default Title');
          setTextFieldContext('Default Context');
        };

        fileReader.readAsText('data.json');
      } catch (error) {
        // Handle any error while fetching the JSON file
        console.error('Error fetching JSON file:', error);
        // Create default values if the file doesn't exist
        setTextFieldTitle('Default Title');
        setTextFieldContext('Default Context');
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Box sx={{ width: 300 }}>
          <TextField label={textFieldTitle} variant="outlined" fullWidth sx={{ mt: 2 }} />
          <Box sx={{ border: '1px solid #ccc', borderRadius: 4, p: 2, mt: 2 }}>
            <Typography variant="body1">
              {textFieldContext}
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

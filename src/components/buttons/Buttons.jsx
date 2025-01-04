import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const AppButton = ({
    disbaled,
    onClick,
    children,
    endIcon,
    loading
}) =>  {
  return (
    <Stack spacing={2} direction="row">
      <Button 
        endIcon={endIcon}
        disabled={disbaled} 
        disableElevation
        onClick={onClick}
        loading={loading}
        sx={{
            backgroundColor: '#48a0dc',
            '&:hover': { backgroundColor: '#3a89b5' }, // Darker shade for hover effect
            color: '#fff', // Text color
            width: "100%"
          }}
        loadingPosition="end"
      variant="contained"
      >{children}</Button>
    </Stack>
  );
}


export default AppButton
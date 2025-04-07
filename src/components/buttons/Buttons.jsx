import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Drawer } from '@mui/material';

const AppButton = ({
    disbaled,
    onClick,
    className,
    children,
    endIcon,
    loading,
    type
}) =>  {
  return (
    <Stack spacing={2} direction="row">
      <Button 
      type={type}
      className={className}
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
            // marginLeft: 
          }}
        loadingPosition="end"
      variant="contained"
      >{children}</Button>


    </Stack>



  );
}


export default AppButton
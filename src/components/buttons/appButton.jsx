import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Drawer } from '@mui/material';
import { IoChevronForward } from "react-icons/io5";
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
    // <Stack spacing={2} direction="row">
      <Button 
      // startIcon={<IoChevronForward  className='text-xs'/>}
      type={type}
      className={className}
        // endIcon={endIcon}
        disabled={disbaled} 
        disableElevation
        onClick={onClick}
        loading={true}
        sx={{
            backgroundColor: '#48a0dc',
            borderRadius: 1,
            overflow: "hidden",
            padding: 0,
            paddingRight: 10,
            marginTopp: 10,
            height: 44,
            '&:hover': { backgroundColor: '#3a89b5' }, // Darker shade for hover effect
            color: '#fff', // Text color
            // width: "100%"
          }}
        loadingPosition="end"
      variant="contained"
      >
        <span className='bg-[#1980c5]  h-full w-10 flex justify-center items-center'>
        <IoChevronForward  className='text-xs'/>
        </span>
       <p className='text-xs pl-5'>
       {children}

       </p>
        
      
      
      </Button>



  );
}


export default AppButton
import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function PopperItem({btnInnerContent, popPosition, innerContent, btnStyle, func}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    func();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    func();
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button 
        aria-describedby={id} 
        onClick={handleClick}
        sx={btnStyle}
      >
        {btnInnerContent}
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={popPosition}
        sx={{
          '& .MuiPaper-root':{
            marginLeft: '0.5rem'
          }
        }}
      >
        <Typography sx={{ p: 2}}>{innerContent}</Typography>
      </Popover>
    </div>
  );
}
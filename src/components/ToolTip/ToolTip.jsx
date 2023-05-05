import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

export default function ToolTip({label, placement, element, distance, color, bgColor, top}) {
    
const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    top: top ? top :'',
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: bgColor ? bgColor : theme.palette.common.black,
      color: color ? color : "#ffffff",
      marginLeft: `${distance ? distance : "5px"} !important` ,
      fontSize: "0.8rem",
      border: "0.05rem solid black",
    }
  }));
  
  return (
      <BootstrapTooltip title={label} placement={placement}>
        {element}
      </BootstrapTooltip>
  );
}
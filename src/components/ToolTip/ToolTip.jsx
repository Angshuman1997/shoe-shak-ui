import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

export default function ToolTip({label, placement, element, distance}) {
    
const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black,
      marginLeft: `${distance ? distance : "5px"} !important` ,
      fontSize: "1rem"
    }
  }));
  
  return (
      <BootstrapTooltip title={label} placement={placement}>
        {element}
      </BootstrapTooltip>
  );
}
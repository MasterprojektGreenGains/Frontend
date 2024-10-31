import { SvgIconComponent } from "@mui/icons-material";
import { IconButton } from "@mui/material";

type Props = {
  icon: SvgIconComponent;
  text: string;
  color?: "primary" | "secondary";
  fontSize?: "small" | "medium" | "large" | "inherit";
  sx?: object;
  className?: string;
};

const MuiIconButtonWithText = ({
  icon: IconComponent,
  text,
  color = "primary",
  fontSize = "small",
  sx,
  className,
}: Props) => {
  return (
    <div className={"flex items-center"}>
      <IconButton color={color} disableRipple size="large" sx={sx} >
        <IconComponent fontSize={fontSize}/>
      </IconButton>
      <div className={className}>{text}</div>
    </div>
  );
};

export default MuiIconButtonWithText;

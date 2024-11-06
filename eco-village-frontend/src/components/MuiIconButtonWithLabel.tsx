import { SvgIconComponent } from "@mui/icons-material";
import { IconButton } from "@mui/material";

type Props = {
  icon: SvgIconComponent;
  text: string;
  color?: "primary" | "secondary";
  fontSize?: "small" | "medium" | "large" | "inherit";
  sx?: object;
  onClick?: () => void;
  disableRipple?: boolean;
  className?: string;
};

const MuiIconButtonWithLabel = ({
  icon: IconComponent,
  text,
  color = "primary",
  fontSize = "small",
  sx,
  className,
  onClick,
  disableRipple
}: Props) => {

  return (
    <div className={"flex items-center"}>
      <IconButton color={color} sx={sx} onClick={onClick} disableRipple={disableRipple}>
        <IconComponent fontSize={fontSize} />
      </IconButton>
      {color === "secondary" ? (
        <div className={`text-[#1976d2] ${className}`}>{text}</div>
      ) : (
        <div className={className}>{text}</div>
      )}
    </div>
  );
};

export default MuiIconButtonWithLabel;

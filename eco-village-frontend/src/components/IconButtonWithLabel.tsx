import { ReactNode } from "react";
import { IconButton } from "@mui/material";

type Props = {
  icon: ReactNode;
  text: string | undefined;
  color?: "primary" | "secondary";
  sx?: object;
  className?: string;
};

const IconButtonWithLabel = ({
  icon,
  text,
  color = "primary",
  sx,
  className,
}: Props) => {
  return (
    <div className={"flex items-center"}>
      <IconButton color={color} disableRipple sx={sx}>
        {icon}
      </IconButton>
      <div className={className}>{text}</div>
    </div>
  );
};

export default IconButtonWithLabel;

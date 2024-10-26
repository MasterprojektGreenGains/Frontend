import { default as MuiButton } from "@mui/material/Button";

type Props = {
  children: string;
  onClick?: () => void;
  variant?: "text" | "outlined" | "contained";
  disabled?: boolean;
  color?: "primary" | "secondary"
  size?: "small" | "medium" | "large",
  className?: string;
};

const Button = ({
  children,
  onClick,
  variant,
  disabled,
  color,
  size,
  className
}: Props) => {
  return (
    <>
      <MuiButton
        variant={variant}
        onClick={() => (onClick !== undefined ? onClick() : "")}
        disabled={disabled}
        color={color}
        size={size}
        sx={{textTransform: "none"}}
        disableRipple
        className={className}
      >
        {children}
      </MuiButton>
    </>
  );
};

export default Button;

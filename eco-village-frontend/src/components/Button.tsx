import { default as MuiButton } from "@mui/material/Button";

type Props = {
  children: String;
  onClick?: () => void;
  variant?: "text" | "outlined" | "contained";
  disabled?: boolean;
  color?: "success" | "secondary" | "error";
  size?: "small" | "medium" | "large";
};

const Button = ({
  children,
  onClick,
  variant,
  disabled,
  color,
  size,
}: Props) => {
  return (
    <>
      <MuiButton
        variant={variant}
        onClick={() => (onClick !== undefined ? onClick() : "")}
        disabled={disabled}
        color={color}
        size={size}
      >
        {children}
      </MuiButton>
    </>
  );
};

export default Button;

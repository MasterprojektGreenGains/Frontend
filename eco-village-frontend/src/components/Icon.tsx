import { SvgIconComponent } from "@mui/icons-material";

type Props = {
  icon: SvgIconComponent;
  size?: "small" | "medium" | "large" | "inherit";
};

const Icon = ({ icon: IconComponent, size = "medium" }: Props) => {
  return <IconComponent fontSize={size} />;
};

export default Icon;

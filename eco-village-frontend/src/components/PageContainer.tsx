import Container from "@mui/material/Container";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const PageContainer = ({ children, className }: Props) => {
  return (
    <div className={`${className} w-full h-screen`}>
      <Container maxWidth={"xl"} className={`${className} py-[2%] w-full h-screen`}>
        {children}
      </Container>
    </div>
  );
};

export default PageContainer;

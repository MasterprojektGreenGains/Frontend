import Container from "@mui/material/Container";

type Props = {
  children: React.ReactNode;
};

const AppContainer = ({ children }: Props) => {
    return (
        <Container maxWidth={"xl"} className="my-[2%]">
            {children}
        </Container>
    )
}

export default AppContainer;
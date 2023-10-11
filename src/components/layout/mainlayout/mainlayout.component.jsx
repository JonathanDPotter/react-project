import TopNav from "../topnav/topnav.component";
import { Container } from "react-bootstrap";

const MainLayout = ({ className, children }) => {
  return (
    <div {...{ className }}>
      <TopNav />
      <Container>
        <div className="my-4">{children}</div>
      </Container>
    </div>
  );
};
export default MainLayout;

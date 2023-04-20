import React from "react";
import Container from "react-bootstrap/esm/Container";

//Footer программы.
const Footer = () => {
  return (
    <div >
      <footer id="footer" className="pt-4 border-top bg-primary text-white d-flex align-items-center">
        <Container >
          <div variant="primary ">
            <h3>© Rostov-on-Don 2023</h3>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;

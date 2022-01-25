/*eslint-disable*/
import React from "react";
import { Container, Row } from "reactstrap";
// used for making the prop types of this component
import PropTypes from "prop-types";

function Footer(props) {
  return (
    <footer className={"footer" + (props.default ? " footer-default" : "")}>
      <Container fluid={props.fluid ? true : false}>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a href="https://olveraconsultores.com/intro.html" target="_blank">OlveraConsultores</a>
              </li>
              <li>
                <a href="https://olveraconsultores.com/inicio.html" target="_blank">Nosotros</a>
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">
                &copy; {1900 + new Date().getYear()}, Diseñado por{" "}
              <a href="https://olveraconsultores.com/intro.html" target="_blank">
                OlveraConsultores
              </a>
              . Código por{" "}
              <a
                href="https://www.linkedin.com/in/gil-p%C3%A9rez-123b92119/"
                target="_blank"
              >
                Gilberto Pérez
              </a>
              .
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  default: PropTypes.bool,
  fluid: PropTypes.bool,
};

export default Footer;

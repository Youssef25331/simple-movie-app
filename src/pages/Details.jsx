import "./details.scss";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
export default function DetailsPage() {
  return (
    <div className="details-background">
      <div className="position-relative">
        <Container>
          <Row className="position-absolute top-0">
            <Col xs={"auto"}>
              <Image
                className="details-image"
                src="https://image.tmdb.org/t/p/w500/b33nnKl1GSFbao4l3fZDDqsMx0F.jpg"
                rounded
              />
            </Col>
            <Col>
              <p className="fs-1">
                "A live broadcast of a late-night talk show in 1977 goes
                horribly wrong, unleashing evil into the nation's living rooms."
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

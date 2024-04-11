import React from "react";
import Header from "../Components/Header";
import MenuItems from "../Components/MenuItems";
import Footer from "../Components/Footer";
import styles from "./Menu.module.css";
import { Container, Col, Row } from "react-bootstrap";

function Menu() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Container className={`py-5 ${styles["menu-container"]}`}>
          <Row>
            <Col lg={8} sm={6} className="mx-auto">
              <img
                src="images/border-top.png"
                alt="Border"
                className={styles.border}
              />
              <img
                src="images/banner.png"
                alt="Food"
                className={`my-5 ${styles["menu-image"]}`}
              />
              <img 
                src="images/banner-small.png"
                alt="Food"
                className={`my-4 w-100 mx-auto ${styles["menu-image-small"]}`}
              />
              <h1 className={styles.heading}>Menu</h1>
              <MenuItems />
              <img
                src="images/border-bottom.png"
                alt="Border"
                className={styles.border}
              />
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default Menu;

// Image by <a href="https://pixabay.com/users/anestiev-2736923/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2157244">Christo Anestev</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2157244">Pixabay</a>

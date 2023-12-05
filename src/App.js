import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { BsInstagram } from "react-icons/bs";
import { BsFillCircleFill } from "react-icons/bs";
import Card from "react-bootstrap/Card";
import { FiTruck } from "react-icons/fi";
import { RiContactsLine } from "react-icons/ri";
import { BsCreditCard } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShopping } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";

function App() {
  const settings = {
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row d-flex p-2">
          <div className="col-4 text-start text-1">
            <a>Call: +1 078 2376</a>
          </div>
          <div className="col-4 text-center text-2">
            <a>New year sale - 30% off</a>
          </div>
          <div className="col-4 text-end text-3">
            <a>Login</a>
          </div>
        </div>
        <Navbar expand="lg" className="bg-body">
          <Container>
            <Navbar.Brand href="#home">
              <img
                src="https://spreethemesprevious.github.io/bisum/html/assets/img/logo.png"
                alt=""
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto text-center fs-5 gap-4">
                <NavDropdown title="Home" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Home1</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Home2</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Home3</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">Home4</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#link">Shop</Nav.Link>
                <NavDropdown title="Blog" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Blog</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Blog Details
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Pages" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    About Us
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Contact
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">FAQ</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    404 Page
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.5">Login</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.6">
                    Register
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Wishlist
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Cart</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Checkout
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#link">Contact</Nav.Link>
              </Nav>
              <div className="icon d-flex gap-3 fs-4">
                <div className="icon-2">
                  <BiSearch />
                </div>
                <div className="icon-2">
                  <AiOutlineHeart />
                </div>
                <div className="icon-2">
                  <AiOutlineShopping />
                </div>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div className="banner">
        <Slider {...settings}>
          <img
            src="https://spreethemesprevious.github.io/bisum/html/assets/img/slideshow/s1.jpg"
            alt=""
          />
          <img
            src="https://spreethemesprevious.github.io/bisum/html/assets/img/slideshow/s2.jpg"
            alt=""
          />
        </Slider>
      </div>
      <div className="card">
        <div className="card-1 d-flex">
          <Card style={{ width: "18rem" }} className="card-2">
            <Card.Body>
              <Card.Text>
                <FiTruck className="icon-1" />
                Free Shipping & Return On all order over $99.00
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }} className="card-3">
            <Card.Body>
              <Card.Text>
                <RiContactsLine className="icon-1" />
                Free Shipping & Return On all order over $99.00
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }} className="card-4">
            <Card.Body>
              <Card.Text>
                <BsCreditCard className="icon-1" />
                Free Shipping & Return On all order over $99.00
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <h1 className="pr text-center mt-5">Popular Products</h1>
      <div className="card-fox p-5 d-flex">
      <div className="fox-card1">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://spreethemesprevious.github.io/bisum/html/assets/img/products/shoe/9.jpg"
          />
          <Card.Body>
            <div className="icon-card">
            <BsFillCircleFill/>
            <BsFillCircleFill className="icon-card-1 ms-2"/>
            <BsFillCircleFill className="icon-card-2 ms-2"/>
            </div>
            <Card.Title>Best Trucker</Card.Title>
            <div className="d-flex">
            <Card.Text className="fw-bold">$1529</Card.Text>
            <Card.Text className="Danger ms-2 fw-bold text-decoration-line-through">$1759</Card.Text>
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className="fox-card2">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://spreethemesprevious.github.io/bisum/html/assets/img/products/shoe/10.jpg"
          />
          <Card.Body>
            <div className="icon-card">
            <BsFillCircleFill/>
            <BsFillCircleFill className="icon-card-1 ms-2"/>
            <BsFillCircleFill className="icon-card-2 ms-2"/>
            </div>
            <Card.Title>Best Trucker</Card.Title>
            <div className="d-flex">
            <Card.Text className="fw-bold">$1529</Card.Text>
            <Card.Text className="Danger ms-2 fw-bold text-decoration-line-through">$1759</Card.Text>
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className="fox-card3">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://spreethemesprevious.github.io/bisum/html/assets/img/products/shoe/11.jpg"
          />
          <Card.Body>
            <div className="icon-card">
            <BsFillCircleFill/>
            <BsFillCircleFill className="icon-card-1 ms-2"/>
            <BsFillCircleFill className="icon-card-2 ms-2"/>
            </div>
            <Card.Title>Best Trucker</Card.Title>
            <div className="d-flex">
            <Card.Text className="fw-bold">$1529</Card.Text>
            <Card.Text className="Danger ms-2 fw-bold text-decoration-line-through">$1759</Card.Text>
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className="fox-card4">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://spreethemesprevious.github.io/bisum/html/assets/img/products/shoe/14.jpg"
          />
          <Card.Body>
            <div className="icon-card">
            <BsFillCircleFill/>
            <BsFillCircleFill className="icon-card-1 ms-2"/>
            <BsFillCircleFill className="icon-card-2 ms-2"/>
            </div>
            <Card.Title>Best Trucker</Card.Title>
            <div className="d-flex">
            <Card.Text className="fw-bold">$1529</Card.Text>
            <Card.Text className="Danger ms-2 fw-bold text-decoration-line-through">$1759</Card.Text>
            </div>
          </Card.Body>
        </Card>
      </div>
      </div>
      <div className="card-fox p-5 d-flex">
      <div className="fox-card5">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://spreethemesprevious.github.io/bisum/html/assets/img/products/shoe/9.jpg"
          />
          <Card.Body>
            <div className="icon-card">
            <BsFillCircleFill/>
            <BsFillCircleFill className="icon-card-1 ms-2"/>
            <BsFillCircleFill className="icon-card-2 ms-2"/>
            </div>
            <Card.Title>Best Trucker</Card.Title>
            <div className="d-flex">
            <Card.Text className="fw-bold">$1529</Card.Text>
            <Card.Text className="Danger ms-2 fw-bold text-decoration-line-through">$1759</Card.Text>
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className="fox-card6">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://spreethemesprevious.github.io/bisum/html/assets/img/products/shoe/10.jpg"
          />
          <Card.Body>
            <div className="icon-card">
            <BsFillCircleFill/>
            <BsFillCircleFill className="icon-card-1 ms-2"/>
            <BsFillCircleFill className="icon-card-2 ms-2"/>
            </div>
            <Card.Title>Best Trucker</Card.Title>
            <div className="d-flex">
            <Card.Text className="fw-bold">$1529</Card.Text>
            <Card.Text className="Danger ms-2 fw-bold text-decoration-line-through">$1759</Card.Text>
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className="fox-card7">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://spreethemesprevious.github.io/bisum/html/assets/img/products/shoe/11.jpg"
          />
          <Card.Body>
            <div className="icon-card">
            <BsFillCircleFill/>
            <BsFillCircleFill className="icon-card-1 ms-2"/>
            <BsFillCircleFill className="icon-card-2 ms-2"/>
            </div>
            <Card.Title>Best Trucker</Card.Title>
            <div className="d-flex">
            <Card.Text className="fw-bold">$1529</Card.Text>
            <Card.Text className="Danger ms-2 fw-bold text-decoration-line-through">$1759</Card.Text>
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className="fox-card8">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://spreethemesprevious.github.io/bisum/html/assets/img/products/shoe/14.jpg"
          />
          <Card.Body>
            <div className="icon-card">
            <BsFillCircleFill/>
            <BsFillCircleFill className="icon-card-1 ms-2"/>
            <BsFillCircleFill className="icon-card-2 ms-2"/>
            </div>
            <Card.Title>Best Trucker</Card.Title>
            <div className="d-flex">
            <Card.Text className="fw-bold">$1529</Card.Text>
            <Card.Text className="Danger ms-2 fw-bold text-decoration-line-through">$1759</Card.Text>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
    <div className="row d-flex">
        <div className="col-2 d-flex">
          <img src="https://spreethemesprevious.github.io/bisum/html/assets/img/banner/shoe-1.jpg" alt="" />
          <img src="https://spreethemesprevious.github.io/bisum/html/assets/img/banner/shoe-2.jpg" alt="" />
        </div>
      </div>
      <h4 className="fo-1 text-center">WHAT'S NEW</h4>
      <h1 className="pr text-center mt-2">The Latest Drop</h1>
      <div className="card-fox p-5 d-flex">
      <div className="fox-card9">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://spreethemesprevious.github.io/bisum/html/assets/img/products/shoe/1.jpg"
          />
          <Card.Body>
            <div className="icon-card">
            <BsFillCircleFill/>
            <BsFillCircleFill className="icon-card-1 ms-2"/>
            <BsFillCircleFill className="icon-card-2 ms-2"/>
            </div>
            <Card.Title>Best Trucker</Card.Title>
            <div className="d-flex">
            <Card.Text className="fw-bold">$1529</Card.Text>
            <Card.Text className="Danger ms-2 fw-bold text-decoration-line-through">$1759</Card.Text>
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className="fox-card10">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://spreethemesprevious.github.io/bisum/html/assets/img/products/shoe/10.jpg"
          />
          <Card.Body>
            <div className="icon-card">
            <BsFillCircleFill/>
            <BsFillCircleFill className="icon-card-1 ms-2"/>
            <BsFillCircleFill className="icon-card-2 ms-2"/>
            </div>
            <Card.Title>Best Trucker</Card.Title>
            <div className="d-flex">
            <Card.Text className="fw-bold">$1529</Card.Text>
            <Card.Text className="Danger ms-2 fw-bold text-decoration-line-through">$1759</Card.Text>
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className="fox-card11">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://spreethemesprevious.github.io/bisum/html/assets/img/products/shoe/7.jpg"
          />
          <Card.Body>
            <div className="icon-card">
            <BsFillCircleFill/>
            <BsFillCircleFill className="icon-card-1 ms-2"/>
            <BsFillCircleFill className="icon-card-2 ms-2"/>
            </div>
            <Card.Title>Best Trucker</Card.Title>
            <div className="d-flex">
            <Card.Text className="fw-bold">$1529</Card.Text>
            <Card.Text className="Danger ms-2 fw-bold text-decoration-line-through">$1759</Card.Text>
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className="fox-card12">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://spreethemesprevious.github.io/bisum/html/assets/img/products/shoe/2.jpg"
          />
          <Card.Body>
            <div className="icon-card">
            <BsFillCircleFill/>
            <BsFillCircleFill className="icon-card-1 ms-2"/>
            <BsFillCircleFill className="icon-card-2 ms-2"/>
            </div>
            <Card.Title>Best Trucker</Card.Title>
            <div className="d-flex">
            <Card.Text className="fw-bold">$1529</Card.Text>
            <Card.Text className="Danger ms-2 fw-bold text-decoration-line-through">$1759</Card.Text>
            </div>
          </Card.Body>
        </Card>
      </div>
      </div>
      <div className="ban">
        <img src="https://spreethemesprevious.github.io/bisum/html/assets/img/banner/single-banner.jpg" width="100%" alt="" />
        {/* <div classname="image-contatnt">
            <h3>Climb up to the mountain with NIK</h3>
            <p>Free shipping, and no hassle returns. NIK Running shoes for men & women</p>
        </div> */}
      </div>
      <div className="ic-13">
      <BsInstagram/>
      <h1 className="h2">Shoe products</h1>
      <h5 className="h1">See how our customers styled shoe products in their foot</h5>
      </div>
      <div className="pics d-flex">
      <div className="fo-card1">
        <Card style={{ width: "17rem" }}>
          <Card.Img
            variant="top"
            src="https://spreethemesprevious.github.io/bisum/html/assets/img/instagram/s1.jpg"
          />
        </Card>
      </div>
      <div className="fo-card2">
        <Card style={{ width: "17rem" }}>
          <Card.Img
            variant="top"
            src="https://spreethemesprevious.github.io/bisum/html/assets/img/instagram/s2.jpg"
          />
        </Card>
      </div>
      <div className="fo-card3">
        <Card style={{ width: "17rem" }}>
          <Card.Img
            variant="top"
            src="https://spreethemesprevious.github.io/bisum/html/assets/img/instagram/s3.jpg"
          />
        </Card>
      </div>
      <div className="fo-card4">
        <Card style={{ width: "17rem" }}>
          <Card.Img
            variant="top"
            src="https://spreethemesprevious.github.io/bisum/html/assets/img/instagram/s4.jpg"
          />
        </Card>
      </div>
      </div>
      <Container>
      <Row>
        <Col xs={3} md={2.10}>
          <Image src="https://spreethemesprevious.github.io/bisum/html/assets/img/brand/1.png" rounded  />
        </Col>
        <Col xs={3} md={2.10}>
          <Image src="https://spreethemesprevious.github.io/bisum/html/assets/img/brand/2.png" rounded  />
        </Col>
        <Col xs={3} md={2}>
          <Image src="https://spreethemesprevious.github.io/bisum/html/assets/img/brand/3.png" rounded  />
        </Col>
        <Col xs={3} md={2}>
          <Image src="https://spreethemesprevious.github.io/bisum/html/assets/img/brand/5.png" rounded  />
        </Col>
        <Col xs={3} md={2}>
          <Image src="https://spreethemesprevious.github.io/bisum/html/assets/img/brand/6.png" rounded  />
        </Col>
      </Row>
    </Container>
  </div>
  );
}

export default App;

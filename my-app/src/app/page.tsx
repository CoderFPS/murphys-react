"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { Container } from "react-bootstrap";
import Image from "next/image";
import background from "./murphys-new-background.jpeg";
import logo from "./murphyslogowhite.png";

export default function Home() {
  return (
    <main>
      {/* Top Navigation Bar */}
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#1d472b" }}
      >
        <Container className="d-flex justify-content-between">
          <a className="navbar-brand" href="/">
            <Image src={logo} alt="Murphy's Logo" width={150} height={50} />
          </a>
          <div>
            <a href="/" className="nav-link text-white d-inline mx-2">
              Home
            </a>
            <a href="/about" className="nav-link text-white d-inline mx-2">
              About Us
            </a>
            <a href="/st-patricks" className="nav-link text-white d-inline mx-2">
              St. Patrick's Day
            </a>
            <a href="/ordering" className="nav-link text-white d-inline mx-2">
              To Go Ordering
            </a>
          </div>
        </Container>
      </nav>

      {/* Hero Section with Background Image */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "500px",
          backgroundImage: `url(${background.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "white",
        }}
      >
        <Container>
          <h1 style={{ fontWeight: "bold" }}>Now accepting reservations for St. Patrick’s Day</h1>
          <h3>Please call 808-531-0422 for reservations</h3>
          <h4>St Patrick’s Day To-Go Orders can be ordered on our website menu.</h4>
        </Container>
      </div>

      {/* Footer Section with Three Columns */}
      <div style={{ backgroundColor: "#1d472b", color: "white", padding: "20px 0" }}>
        <Container>
          <div className="row text-center">
            <div className="col-md-4">
              <h5>Lunch</h5>
              <p>Monday - Friday: 11:00am - 2:30pm</p>
              <p>Saturday - Sunday: Not open</p>
            </div>
            <div className="col-md-4">
              <h5>Bar</h5>
              <p>Monday - Friday: From 11:00am to closing</p>
              <p>Saturday - Sunday: Not open</p>
            </div>
            <div className="col-md-4">
              <h5>Dinner</h5>
              <p>Monday - Friday: 5:00pm - 9:00pm</p>
              <p>Saturday - Sunday: Not open</p>
            </div>
          </div>
        </Container>
      </div>
    </main>
  );
}

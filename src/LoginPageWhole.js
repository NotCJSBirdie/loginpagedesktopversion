import React from "react";
import BrandBanner from "./components/BrandBanner.js";
import HeaderRevised from "./components/HeaderRevised.js";
import LoginPage from "./LoginPage.js";
import Footer from "./components/Footer.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./LoginWholePage.css";

function LoginPageWhole() {
	return (
		<div className="loginwholepage">
			<BrandBanner />
			<HeaderRevised />
			<Container fluid className="wholelist">
				<Row>
					<Col>
						<LoginPage />
					</Col>
				</Row>
			</Container>
			<Footer />
		</div>
	);
}

export default LoginPageWhole;

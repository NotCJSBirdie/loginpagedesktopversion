import React from "react";
import BrandBanner from "./components/BrandBanner.js";
import HeaderRevised from "./components/HeaderRevised.js";
import SignInPage from "./SignInPage.js";
import Footer from "./components/Footer.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./SignInWholePage.css";

function SignInWholePage() {
	return (
		<div className="signinwholepage">
			<BrandBanner />
			<HeaderRevised />
			<Container fluid className="wholelist">
				<Row>
					<Col>
						<SignInPage />
					</Col>
				</Row>
			</Container>
			<Footer />
		</div>
	);
}

export default SignInWholePage;

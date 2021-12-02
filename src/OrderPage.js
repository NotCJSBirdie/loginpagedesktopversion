import React from "react";
import OrderRightColumn from "./components/OrderRightColumn.js";
import OrderLeftColumn from "./components/OrderLeftColumn.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./OrderPage.css";
import BrandBanner from "./components/BrandBanner.js";
import HeaderRevised from "./components/HeaderRevised.js";
import Box from "@mui/material/Box";
import Footer from "./components/Footer.js";

function OrderPage() {
	return (
		<div className="orderpage">
			<BrandBanner />
			<HeaderRevised />
			<Box sx={{ mb: 10 }}></Box>
			<h2 className="orderpagetitle">
				<strong> Оформление заказа</strong>
			</h2>
			<Box sx={{ mb: 10 }}></Box>
			<Container>
				<Row>
					<Col xs={6}>
						<OrderLeftColumn />
					</Col>
					<Col xs={6}>
						<OrderRightColumn />
					</Col>
				</Row>
			</Container>
			<Box sx={{ mt: 10 }}></Box>
			<Footer />
		</div>
	);
}

export default OrderPage;

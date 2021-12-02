import React from "react";
import Form from "react-bootstrap/Form";
import FormCheck from "react-bootstrap/FormCheck";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import "./OrderRightColumn.css";
import Pic31 from "./assets/pic31.png";
import Pic32 from "./assets/pic32.png";
import Pic33 from "./assets/pic33.png";
import Stack from "react-bootstrap/Stack";

function OrderRightColumn() {
	return (
		<div>
			<List
				sx={{
					width: "100%",
					height: "100%",
					maxWidth: 500,
					bgcolor: "#FFFFFF",
					boxShadow: 7,
				}}
				className="rightcolumn"
			>
				<Navbar className="firstrightrow">
					<Container>
						<Navbar.Brand>
							<Navbar.Text className="rightlabelpart1">
								Ваш заказ
							</Navbar.Text>
						</Navbar.Brand>
						<Navbar.Toggle />
						<Navbar.Collapse className="justify-content-end">
							<Navbar.Text className="rightlabelpart2">
								Изменить
							</Navbar.Text>
						</Navbar.Collapse>
					</Container>
				</Navbar>

				<Box sx={{ mb: 5 }}></Box>

				<Container fluid className="rightcontainer">
					<Row className="rightrow">
						<Col xs={5}>
							<img alt="" src={Pic31} className="orderpic" />
						</Col>
						<Col xs={7}>
							<Stack className="rightstack">
								<div className="righttitle">
									<strong>
										Аналоговый 4-дюймовый видеодомофон с
										сенсорными кнопками Slinex SQ-04 Black
									</strong>
								</div>
								<Box sx={{ mb: 1 }}></Box>
								<div className="rightsubtitle">
									<h6>Цена: 7000₴</h6>
								</div>
								<div className="rightsubtitle">
									<h6>Количество: 1 шт.</h6>
								</div>
							</Stack>
						</Col>
					</Row>
				</Container>

				<Container fluid className="rightcontainer">
					<Row className="rightrow">
						<Col xs={5}>
							<img alt="" src={Pic32} className="orderpic" />
						</Col>
						<Col xs={7}>
							<Stack className="rightstack">
								<div className="righttitle">
									<strong>
										Аналоговый 4-дюймовый видеодомофон с
										сенсорными кнопками Slinex SQ-04 Black
									</strong>
								</div>
								<Box sx={{ mb: 1 }}></Box>
								<div className="rightsubtitle">
									<h6>Цена: 7000₴</h6>
								</div>
								<div className="rightsubtitle">
									<h6>Количество: 1 шт.</h6>
								</div>
							</Stack>
						</Col>
					</Row>
				</Container>

				<Container fluid className="rightcontainer">
					<Row className="rightrow">
						<Col xs={5}>
							<img alt="" src={Pic33} className="orderpic" />
						</Col>
						<Col xs={7}>
							<Stack className="rightstack">
								<div className="righttitle">
									<strong>
										Аналоговый 4-дюймовый видеодомофон с
										сенсорными кнопками Slinex SQ-04 Black
									</strong>
								</div>
								<Box sx={{ mb: 1 }}></Box>
								<div className="rightsubtitle">
									<h6>Цена: 7000₴</h6>
								</div>
								<div className="rightsubtitle">
									<h6>Количество: 1 шт.</h6>
								</div>
							</Stack>
						</Col>
					</Row>
				</Container>

				<Navbar className="lastrightrow">
					<Container>
						<Navbar.Brand>
							<Navbar.Text className="lastleftpart">
								<h4>
									<strong>К оплате</strong>
								</h4>
							</Navbar.Text>
						</Navbar.Brand>
						<Navbar.Toggle />
						<Navbar.Collapse className="justify-content-end">
							<Navbar.Text className="lastrightpart">
								<h4>
									<strong>19300₴</strong>
								</h4>
							</Navbar.Text>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</List>
		</div>
	);
}

export default OrderRightColumn;

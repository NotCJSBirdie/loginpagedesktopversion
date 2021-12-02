import React, { useState } from "react";
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
import Pic31 from "./assets/pic31.png";
import Pic32 from "./assets/pic32.png";
import Pic33 from "./assets/pic33.png";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./OrderLeftColumn.css";
import Dropdown from "react-bootstrap/Dropdown";
import Button2 from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import OrderPageLogo from "./assets/orderpagelogo.png";

function OrderLeftColumn() {
	const [age, setAge] = React.useState("");

	const handleChange = (event) => {
		setAge(event.target.value);
	};

	return (
		<div>
			<List
				sx={{
					width: "100%",
					height: "100%",
					maxWidth: 650,
					bgcolor: "#FFFFFF",
					boxShadow: 7,
				}}
				className="leftcolumn"
			>
				<Form>
					<Box className="label">
						<Form.Label>
							<strong>Информация о получателе</strong>
						</Form.Label>
					</Box>

					<Box className="input">
						<Row className="mb-3">
							<Form.Group as={Col} controlId="formGridEmail">
								<Form.Control
									type="email"
									placeholder="Имя"
									className="textbox"
								/>
							</Form.Group>

							<Form.Group as={Col} controlId="formGridPassword">
								<Form.Control
									type="password"
									placeholder="Фамилия"
									className="textbox"
								/>
							</Form.Group>
						</Row>
					</Box>

					<Box className="input">
						<Form.Group
							className="mb-3"
							controlId="formGridAddress1"
						>
							<Form.Control
								placeholder="Номер телефона"
								className="textbox"
							/>
						</Form.Group>
					</Box>

					<Box className="input">
						<Form.Group
							className="mb-3"
							controlId="formGridAddress1"
						>
							<Form.Control
								placeholder="Email"
								className="textbox"
							/>
						</Form.Group>
					</Box>

					<Box className="label">
						<Form.Label>
							<strong>Способ доставки</strong>
						</Form.Label>
					</Box>

					<Box sx={{ minWidth: 120 }} className="dropdownofficial">
						<FormControl fullWidth className="dropdownbg">
							<InputLabel id="demo-simple-select-label">
								<Container className="fontofdropdown">
									<Row>
										<Col>
											<img
												alt=""
												src={OrderPageLogo}
												className="orderpagelogo"
											/>
										</Col>
										<Col>
											<Stack>
												<div>
													<strong>
														Самовывоз с "Укрпошта"
													</strong>
												</div>
												<div>бесплатно</div>
											</Stack>
										</Col>
									</Row>
								</Container>
							</InputLabel>

							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={age}
								label="Age"
								onChange={handleChange}
								className="dropdownheight"
							>
								<MenuItem value={10}></MenuItem>
								<MenuItem value={20}></MenuItem>
								<MenuItem value={30}></MenuItem>
							</Select>
						</FormControl>
					</Box>

					<Box sx={{ minWidth: 120 }} className="dropdownofficial">
						<FormControl fullWidth className="dropdownbg">
							<InputLabel id="demo-simple-select-label">
								<Container className="fontofdropdown">
									Город
								</Container>
							</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={age}
								label="Age"
								onChange={handleChange}
							>
								<MenuItem value={10}></MenuItem>
								<MenuItem value={20}></MenuItem>
								<MenuItem value={30}></MenuItem>
							</Select>
						</FormControl>
					</Box>

					<Box sx={{ minWidth: 120 }} className="dropdownofficial">
						<FormControl fullWidth className="dropdownbg">
							<InputLabel id="demo-simple-select-label">
								<Container className="fontofdropdown">
									Отделение
								</Container>
							</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={age}
								label="Age"
								onChange={handleChange}
							>
								<MenuItem value={10}></MenuItem>
								<MenuItem value={20}></MenuItem>
								<MenuItem value={30}></MenuItem>
							</Select>
						</FormControl>
					</Box>

					<Box className="label">
						<Form.Label>
							<strong>Способ оплаты</strong>
						</Form.Label>
					</Box>

					<Box sx={{ minWidth: 120 }} className="dropdownofficial">
						<FormControl fullWidth className="dropdownbg">
							<InputLabel id="demo-simple-select-label">
								<Container className="fontofdropdown">
									<Row>
										<Col>
											<Stack>
												<div>
													<strong>
														Наложеныый платёж
													</strong>
												</div>
												<div>
													оплата при получении в
													отделении почты
												</div>
											</Stack>
										</Col>
									</Row>
								</Container>
							</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={age}
								label="Age"
								onChange={handleChange}
								className="dropdownheight"
							>
								<MenuItem value={10}>
									<Container className="fontofdropdown">
										<Row>
											<Col>
												<Stack>
													<div>
														<strong>
															Оплата на карту
														</strong>
													</div>
													<div>
														полная оплата на карту
													</div>
												</Stack>
											</Col>
										</Row>
									</Container>
								</MenuItem>
								<MenuItem value={20}>
									<Container className="fontofdropdown">
										<Row>
											<Col>
												<Stack>
													<div>
														<strong>
															Предоплата на карту
														</strong>
													</div>
													<div>
														половина суммы заказа в
														начале - половина в
														конце
													</div>
												</Stack>
											</Col>
										</Row>
									</Container>
								</MenuItem>
								<MenuItem value={30}>
									<Container className="fontofdropdown">
										<Row>
											<Col>
												<Stack>
													<div>
														<strong>
															Наложеныый платёж
														</strong>
													</div>
													<div>
														оплата при получении в
														отделении почты
													</div>
												</Stack>
											</Col>
										</Row>
									</Container>
								</MenuItem>
							</Select>
						</FormControl>
					</Box>

					<Form.Label className="label">
						<strong>Коментарий к заказу</strong>
					</Form.Label>

					<Form.Group
						controlId="formBasicEmail"
						className="commentarea"
					>
						<Form.Control
							as="textarea"
							rows={7}
							placeholder="Уточнение к заказу"
							className="commentbg"
						/>
					</Form.Group>

					<Navbar>
						<Container>
							<Navbar.Brand>
								<Navbar.Text className="leftpart">
									<h2>
										<strong>К оплате</strong>
									</h2>
								</Navbar.Text>
							</Navbar.Brand>
							<Navbar.Toggle />
							<Navbar.Collapse className="justify-content-end">
								<Navbar.Text className="rightpart">
									<h2>
										<strong>19300</strong>
									</h2>
								</Navbar.Text>
								<Navbar.Text className="rightpart">
									<h4>
										<strong>₴</strong>
									</h4>
								</Navbar.Text>
							</Navbar.Collapse>
						</Container>
					</Navbar>
					<Box className="blockbutton">
						<div className="d-grid gap-2">
							<Button
								variant="primary"
								size="lg"
								className="buttonbg"
							>
								Оформить заказ
							</Button>
						</div>
					</Box>
				</Form>
			</List>
		</div>
	);
}

export default OrderLeftColumn;

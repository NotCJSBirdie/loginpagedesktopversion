import React from "react";
import "./SignInPage.css";
import Form from "react-bootstrap/Form";
import FormCheck from "react-bootstrap/FormCheck";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Menu from "@mui/material/Menu";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import Stack from "react-bootstrap/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";

import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";

import GoogleIcon from "./components/assets/googleicon.png";
import FacebookIcon from "./components/assets/facebookicon.png";

function SignInPage() {
	const [values, setValues] = React.useState({
		password: "",

		showPassword: false,
	});

	const handleChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value });
	};

	const handleClickShowPassword = () => {
		setValues({
			...values,
			showPassword: !values.showPassword,
		});
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};
	return (
		<div className="signinpage">
			<List
				sx={{
					width: "100%",
					height: "100%",
					maxWidth: 650,
					bgcolor: "#FFFFFF",
					boxShadow: 7,
				}}
				className="loginlist"
			>
				<Form>
					<Box className="logintitle">
						<Form.Label>
							<h4 className="logintitleword">
								<strong>Регистрация</strong>
							</h4>
						</Form.Label>
					</Box>
					<Divider variant="middle"></Divider>

					<Box sx={{ mb: 2 }}></Box>

					<Box
						component="form"
						noValidate
						autoComplete="off"
						className="margininput1"
					>
						<TextField
							id="outlined-basic"
							label="Номер телефона или эл.почта"
							variant="outlined"
							className="logininput"
							sx={{
								fontFamily: "Inter",
								backgroundColor: "#F9F9F9",
							}}
						/>
					</Box>

					<Box className="margininput2">
						<FormControl variant="outlined" className="logininput">
							<InputLabel htmlFor="outlined-adornment-password">
								Введите пароль
							</InputLabel>
							<OutlinedInput
								id="outlined-adornment-password"
								type={values.showPassword ? "text" : "password"}
								value={values.password}
								onChange={handleChange("password")}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={handleClickShowPassword}
											onMouseDown={
												handleMouseDownPassword
											}
											edge="end"
										>
											{values.showPassword ? (
												<VisibilityOff />
											) : (
												<Visibility />
											)}
										</IconButton>
									</InputAdornment>
								}
								label="Введите пароль"
								sx={{
									fontFamily: "Inter",
									backgroundColor: "#F9F9F9",
								}}
							/>
						</FormControl>
					</Box>

					<Box className="margininput2">
						<FormControl variant="outlined" className="logininput">
							<InputLabel htmlFor="outlined-adornment-password">
								Повторите пароль
							</InputLabel>
							<OutlinedInput
								id="outlined-adornment-password"
								type={values.showPassword ? "text" : "password"}
								value={values.password}
								onChange={handleChange("password")}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={handleClickShowPassword}
											onMouseDown={
												handleMouseDownPassword
											}
											edge="end"
										>
											{values.showPassword ? (
												<VisibilityOff />
											) : (
												<Visibility />
											)}
										</IconButton>
									</InputAdornment>
								}
								label="Повторите пароль"
								sx={{
									fontFamily: "Inter",
									backgroundColor: "#F9F9F9",
								}}
							/>
						</FormControl>
					</Box>

					<Box sx={{ mb: 5 }}></Box>

					<Box className="loginbutton1">
						<Button
							variant="contained"
							sx={{ backgroundColor: "#004194" }}
						>
							<p className="buttontext">ВОЙТИ</p>
						</Button>
					</Box>

					<Box sx={{ mb: 4 }}></Box>

					<Divider variant="middle">
						<p className="dividerp">или войти через</p>
					</Divider>

					<Box sx={{ mb: 2 }}></Box>
					<Container>
						<Row>
							<Col>
								<Box className="googlebutton">
									<Button
										startIcon={
											<img alt="" src={GoogleIcon} />
										}
										variant="outlined"
										sx={{
											color: "#000000",
											borderColor: "#000000",
											pr: 4,
											pl: 4,
										}}
										size="small"
										className="buttonmargin"
									>
										Google
									</Button>
								</Box>
							</Col>
							<Col>
								<Box className="facebookbutton">
									<Button
										startIcon={
											<img alt="" src={FacebookIcon} />
										}
										variant="outlined"
										sx={{
											color: "#000000",
											borderColor: "#000000",
											pr: 4,
											pl: 4,
										}}
										size="small"
										className="buttonmargin"
									>
										Facebook
									</Button>
								</Box>
							</Col>
						</Row>
					</Container>

					<Box sx={{ mb: 5 }}></Box>
				</Form>
			</List>
		</div>
	);
}

export default SignInPage;

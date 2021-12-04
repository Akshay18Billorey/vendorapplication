import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import Axios from "axios";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
// import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
// import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
// import CardFooter from "components/Card/CardFooter.js";
import { Input } from "@material-ui/core";
// import avatar from "assets/img/faces/marc.jpg";
import ReactDOM from "react-dom";
// import { api } from "../config/index";
import Admin from "./Admin";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
};

const useStyles = makeStyles(styles);
export default function Login() {
  // let history = useHistory();
  // history.push("/admin");
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [userpassword, setPassword] = useState("");

  const [token, setToken] = useState();
  console.log(token);
  const submitReview = () => {
    Axios.post(
      "https://vendor-backend-api.herokuapp.com/api/auth/admin/login",
      {
        email: email,
        password: userpassword,
      }
    ).then((response) => {
      console.log(response);
      // if (response.status === "200") {
      setToken(response.data.token);
      // }
      // alert("Successful Insert");
    });
  };
  if (token) {
    window.localStorage.setItem("token", token);
    ReactDOM.render(
      <BrowserRouter>
        <Switch>
          {/* <Route path="/App" component={App} /> */}
          <Route path="/admin" component={Admin} />
          {/* <Route path="/rtl" component={RTL} /> */}
          <Redirect from="/" to="/admin" />
        </Switch>
      </BrowserRouter>,
      document.getElementById("root")
    );
  }
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={4}></GridItem>
      <GridItem xs={12} sm={12} md={4}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Login</h4>
          </CardHeader>
          <CardBody>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12} style={{ textAlign: "center" }}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <br />
                  <Input
                    id="email"
                    name="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <br />
              </GridItem>
              <GridItem xs={12} sm={12} md={12} style={{ textAlign: "center" }}>
                <label htmlFor="password">Password</label>
                <br />
                <Input
                  id="password"
                  name="password"
                  type="password"
                  className="form-control"
                  value={userpassword}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={12} style={{ textAlign: "center" }}>
                <br />
                <Button color="primary" onClick={submitReview}>
                  Login
                </Button>
              </GridItem>
            </GridContainer>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={4}></GridItem>
    </GridContainer>
  );
}

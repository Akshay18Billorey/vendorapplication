import React, { useEffect, useState } from "react";
import Axios from "axios";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
// import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import MaterialTable from "material-table";
// import { Button } from "@material-ui/core";
// import axios from "axios";
// import { useEffect, useState } from "react";
const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};

const useStyles = makeStyles(styles);
export default function TableList() {
  const AuthStr = window.localStorage.getItem("token");
  // console.log(AuthStr);
  const classes = useStyles();
  const [canLoginTruedata, setcanLoginTruedata] = useState([]);
  const [canLoginFalsedata, setcanLoginFalsedata] = useState([]);
  const canLoginFalsedataColumn = [
    { title: "Name", field: "name" },
    { title: "Contact No", field: "phone" },
    { title: "Date", field: "date", type: "date" },
    // { title: "Password", field: "password" },
  ];
  const canLoginTruedataColumn = [
    // { title: "id", field: "_id" },
    { title: "Name", field: "name" },
    { title: "Contact No", field: "phone" },
    { title: "Date", field: "date", type: "date" },
    // { title: "Password", field: "password" },
  ];

  useEffect(() => {
    Axios.get("https://vendor-backend-api.herokuapp.com/api/users", {
      headers: { "x-auth-token": AuthStr },
    })
      .then((response) => {
        // setcanLoginTruedata(response.data);
        // If request is good...
        // console.log(response.data);
        // const canLogin = response;
        // console.log(canLogin);
        let tmpArray = [];
        let canLoginTrue = [];
        let canLoginFalse = [];
        // let VendorDetails = [];
        // console.log(VendorDetails);
        // console.log(response.data.length);
        for (var i = 0; i < response.data.length; i++) {
          tmpArray.push(response.data[i].canLogin);
          if (response.data[i].canLogin) {
            canLoginTrue.push(response.data[i]);
            // setcanLoginTruedata(canLoginTrue);
            // console.log(canLoginTrue);
            // let index = response.data[i]._id;
            // console.log(index);
            // VendorDetails.push(User_GetData(index));
            // console.log(VendorDetails);
          } else {
            canLoginFalse.push(response.data[i]);
            // console.log(canLoginFalse);
          }
        }
        setcanLoginTruedata(canLoginTrue);
        setcanLoginFalsedata(canLoginFalse);
      })
      .catch((error) => {
        console.log("error" + error);
      });
  }, []);
  const User_Approve = (x) => {
    console.log(x);
    Axios.put(
      "https://vendor-backend-api.herokuapp.com/api/users/approve/" + x,
      {
        canLogin: true,
      },
      { headers: { "x-auth-token": AuthStr } }
    ).then((response) => {
      console.log(response.data);
    });
  };
  const User_Update = (index) => {
    Axios.put(
      "https://vendor-backend-api.herokuapp.com/api/records/" + index._id,
      {
        name: index.name,
        phone: index.phone,
        date: index.date,
      },
      {
        headers: { "x-auth-token": AuthStr },
      }
    ).then((response) => {
      console.log(response.data);
      window.location.reload();
    });
  };
  const User_Delete = (index) => {
    console.log(index);
    Axios.delete(
      "https://vendor-backend-api.herokuapp.com/api/records/" + index,
      {
        headers: { "x-auth-token": AuthStr },
      }
    ).then((response) => {
      console.log(response.data);
      alert(response);
    });
  };
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>User Waitng List</h4>
          </CardHeader>
          <CardBody>
            <MaterialTable
              title="User Waitng List"
              columns={canLoginFalsedataColumn}
              data={canLoginFalsedata}
              actions={[
                {
                  icon: "how_to_reg",
                  tooltip: "Aprove User",
                  onClick: (event, rowData) => {
                    User_Approve(rowData._id);
                  },
                },
                // {
                //   icon: "edit",
                //   tooltip: "Edit User",
                //   onClick: (event, rowData) => {
                //     User_Update(rowData._id);
                //   },
                // },
                // {
                //   icon: "delete",
                //   tooltip: "Delete User",
                //   onClick: (event, rowData) => {
                //     User_Delete(rowData._id);
                //   },
                // },
              ]}
              editable={{
                onRowUpdate: (oldData) =>
                  new Promise((resolve, reject) => {
                    setTimeout(() => {
                      // User_Update(oldData.user);
                      User_Update(oldData);
                      resolve();
                      // console.log(oldData.user);
                      console.log(reject);
                    }, 1000);
                  }),
                onRowDelete: (oldData) =>
                  new Promise((resolve, reject) => {
                    setTimeout(() => {
                      User_Delete(oldData._id);
                      resolve();
                      console.log(reject);
                    }, 1000);
                  }),
              }}
              options={{
                actionsColumnIndex: -1,
                // filtering: true,
                // exportButton: true,
              }}
            />
          </CardBody>
        </Card>
      </GridItem>

      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>User List</h4>
          </CardHeader>
          <CardBody>
            {/* <MaterialTable
              title="Basic Tree Data Preview"
              columns={canLoginTruedataColumn}
              data={canLoginTruedata}
              parentChildData={(row, rows) =>
                rows.find((a) => a._id === row._id)
              }
              options={{
                selection: true,
              }}
            /> */}
            <MaterialTable
              title="User List"
              columns={canLoginTruedataColumn}
              data={canLoginTruedata}
              editable={{
                onRowUpdate: (oldData) =>
                  new Promise((resolve, reject) => {
                    setTimeout(() => {
                      User_Update(oldData);
                      resolve();
                      console.log(reject);
                    }, 1000);
                  }),
                onRowDelete: (oldData) =>
                  new Promise((resolve, reject) => {
                    setTimeout(() => {
                      User_Delete(oldData._id);
                      resolve();
                      console.log(reject);
                    }, 1000);
                  }),
              }}
              options={{
                actionsColumnIndex: -1,
                filtering: true,
                exportButton: true,
              }}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}

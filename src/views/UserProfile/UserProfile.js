import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import MaterialTable from "material-table";
import Axios from "axios";
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
  console.log(AuthStr);
  const classes = useStyles();
  const [subvendor, setSubVender] = useState();
  // const [tableData, setTableData] = useState([]);
  // const columns = [
  //   { title: "Name", field: "name" },
  //   { title: "IFSC", field: "IFSC" },
  //   { title: "Account No", field: "accountNo" },
  //   { title: "Amount", field: "amount" },
  //   { title: "Date", field: "date", type: "date" },
  // ];
  useEffect(() => {
    Axios.get("https://vendor-backend-api.herokuapp.com/api/records", {
      headers: { "x-auth-token": AuthStr },
    })
      .then((response) => {
        // If request is good...
        console.log(response.data.data);
        // setTableData(response.data.data);
      })
      .catch((error) => {
        console.log("error" + error);
      });
  }, []);
  const [canLoginTruedata, setcanLoginTruedata] = useState([]);
  const venderlist = [
    // { title: "id", field: "_id" },
    { title: "Main vendor", field: "name" },
    { title: "Sub Vendor count", field: "subVendorCount" },
    { title: "Date", field: "date", type: "date" },
    { title: "Total amount", field: "totalAmount" },
  ];
  useEffect(() => {
    Axios.get("https://vendor-backend-api.herokuapp.com/api/users", {
      headers: { "x-auth-token": AuthStr },
    })
      .then((response) => {
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
      })
      .catch((error) => {
        console.log("error" + error);
      });
  }, []);
  const User_GetData = (index) => {
    // console.log(index);
    Axios.get(
      "https://vendor-backend-api.herokuapp.com/api/records/userId/" + index,
      {
        headers: { "x-auth-token": AuthStr },
      }
    ).then((response) => {
      console.log(response.data);
      console.log(response.data.data);
      setSubVender(response.data.data);
    });
  };
  // const User_Delete = (index) => {
  //   console.log(index);
  //   Axios.delete(
  //     "https://vendor-backend-api.herokuapp.com/api/records/" + index,
  //     {
  //       headers: { "x-auth-token": AuthStr },
  //     }
  //   ).then((response) => {
  //     console.log(response.data);
  //   });
  // };
  // const User_Update = (index) => {
  //   Axios.put(
  //     "https://vendor-backend-api.herokuapp.com/api/records/" + index._id,
  //     {
  //       name: index.name,
  //       username: index.username,
  //       accountNo: index.accountNo,
  //       IFSC: index.IFSC,
  //       amount: index.amount,
  //       date: index.date,
  //     },
  //     {
  //       headers: { "x-auth-token": AuthStr },
  //     }
  //   ).then((response) => {
  //     console.log(response.data);
  //     // window.location.reload();
  //   });
  // };
  return (
    <GridContainer>
      {/* <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>User Data</h4>
          </CardHeader>
          <CardBody>
                      <MaterialTable
              title="User Data"
              columns={columns}
              data={tableData}
              options={{
                actionsColumnIndex: -1,
                filtering: true,
                exportButton: true,
              }}
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
            />
          </CardBody>
        </Card>
      </GridItem> */}
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>User Data</h4>
          </CardHeader>
          <CardBody>
            <MaterialTable
              columns={venderlist}
              data={canLoginTruedata}
              title="User Data"
              options={{
                actionsColumnIndex: -1,
                filtering: true,
                exportButton: true,
                defaultExpanded: false,
              }}
              detailPanel={[
                {
                  tooltip: "Show Group",
                  render: () => {
                    return (
                      <div id="project-features">
                        <table
                          style={{
                            border: "1px solid black",
                            width: "100%",
                          }}
                        >
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>IFSC</th>
                              <th>accountNo</th>
                              <th>amount</th>
                              <th>date</th>
                              {/* <th>Action</th> */}
                            </tr>
                          </thead>
                          <tbody>
                            {subvendor.map((item, i) => {
                              return (
                                <tr
                                  key={i}
                                  style={{ border: "1px solid black" }}
                                >
                                  <td>{item.name}</td>
                                  <td>{item.IFSC}</td>
                                  <td>{item.accountNo}</td>
                                  <td>{item.amount}</td>
                                  <td>{item.date} </td>
                                  {/* <td>
                                    <button onClick={User_Delete(item._id)} >
                                      Delete
                                    </button>
                                  </td> */}
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    );
                  },
                },
              ]}
              // onRowClick={(event, rowData, togglePanel) => {
              //   User_GetData(rowData._id);
              //   togglePanel();
              // }}
              onRowClick={(event, rowData) => User_GetData(rowData._id)}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}

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
  // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYTc4MGQ4Y2U4NDA3MDM4OTRhZjUzNSIsImlhdCI6MTYzODQyNjcxOCwiZXhwIjoxNjM4Nzg2NzE4fQ.9kFZXMnQQdpMGUGGR6DsLK0HXM8-U7W0czXqps251yw";
  const classes = useStyles();
  const [tableData, setTableData] = useState([]);
  // const [tableData, setTableData] = useState(emplist);
  // const [selectedRows, setSelectedRows] = useState([]);
  const columns = [
    { title: "Name", field: "name" },
    { title: "IFSC", field: "IFSC" },
    { title: "Account No", field: "accountNo" },
    { title: "Amount", field: "amount" },
    { title: "Date", field: "date", type: "date" },
  ];
  useEffect(() => {
    Axios.get(
      "https://vendor-backend-api.herokuapp.com/api/records",
      // "https://vendor-backend-api.herokuapp.com/api/records/userId/61a780d8ce840703894af535",
      {
        headers: { "x-auth-token": AuthStr },
      }
    )
      .then((response) => {
        // If request is good...
        console.log(response.data.data[0].user);
        setTableData(response.data.data);
      })
      .catch((error) => {
        console.log("error" + error);
      });
  }, []);
  const User_Delete = (index) => {
    console.log(index);
    Axios.delete(
      "https://vendor-backend-api.herokuapp.com/api/records/" + index,
      {
        headers: { "x-auth-token": AuthStr },
      }
    ).then((response) => {
      console.log(response.data);
    });
  };
  const User_Update = (index) => {
    Axios.put(
      "https://vendor-backend-api.herokuapp.com/api/records/" + index._id,
      {
        name: index.name,
        username: index.username,
        accountNo: index.accountNo,
        IFSC: index.IFSC,
        amount: index.amount,
        date: index.date,
      },
      {
        headers: { "x-auth-token": AuthStr },
      }
    ).then((response) => {
      console.log(response.data);
      // window.location.reload();
    });
  };
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
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
                // selection: true,
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
      </GridItem>
    </GridContainer>
  );
}

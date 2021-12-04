import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import MaterialTable from "material-table";
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
const emplist = [
  {
    sno: "1",
    date: "22/11/2021",
    name: "Mehmet",
    acno: "10724100312345",
    IFSC: "PKGB0010863",
    Amount: "100000",
    userName: "NAGARAJ MAGALA",
  },
  {
    sno: "2",
    date: "22/11/2021",
    name: "NAGARAJ",
    acno: "10724100312345",
    IFSC: "PKGB0010863",
    Amount: "100000",
    userName: "NAGARAJ MAGALA",
  },
  {
    sno: "3",
    date: "22/11/2021",
    name: "Mehmet",
    acno: "10724100312345",
    IFSC: "PKGB0010863",
    Amount: "100000",
    userName: "NAGARAJ MAGALA",
  },
  {
    sno: "4",
    date: "22/11/2021",
    name: "MAGALA",
    acno: "10724100312345",
    IFSC: "PKGB0010863",
    Amount: "100000",
    userName: "NAGARAJ MAGALA",
  },
  {
    sno: "5",
    date: "22/11/2021",
    name: "Mehmet",
    acno: "10724100312345",
    IFSC: "PKGB0010863",
    Amount: "100000",
    userName: "NAGARAJ MAGALA",
  },
  {
    sno: "6",
    date: "22/11/2021",
    name: "Mehmet",
    acno: "10724100312345",
    IFSC: "PKGB0010863",
    Amount: "100000",
    userName: "NAGARAJ MAGALA",
  },
];
export default function TableList() {
  const classes = useStyles();
  const [tableData, setTableData] = useState(emplist);
  const [selectedRows, setSelectedRows] = useState([]);
  const columns = [
    { title: "Id", field: "sno", filtering: false },
    { title: "Date", field: "date", type: "date" },
    { title: "Name", field: "name" },
    { title: "Ac No", field: "acno" },
    { title: "IFSC", field: "IFSC" },
    { title: "Amount", field: "Amount", type: "numeric" },
    { title: "Logged in user Name", field: "userName" },
  ];
  const handelBulkDelet = () => {
    const updatedData = tableData.filter((row) => !selectedRows.includes(row));
    setTableData(updatedData);
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
              actions={[
                {
                  tooltip: "Remove All Selected Users",
                  icon: "delete",
                  // onClick: () => console.log(selectedRows),
                  onClick: () => handelBulkDelet(),
                  // onClick: (evt, data) =>
                  //   alert("You want to delete " + data.length + " rows"),
                },
              ]}
              onSelectionChange={(rows) => setSelectedRows(rows)}
              options={{
                selection: true,
                // actionsColumnIndex: -1,
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

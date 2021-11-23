import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
// import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Button from "@material-ui/core/Button";
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
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>User Data</h4>
          </CardHeader>
          <CardBody>
            <Table className="table">
              <TableHead>
                <TableRow>
                  <TableCell className="text-center">#</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Ac No</TableCell>
                  <TableCell>IFSC</TableCell>
                  <TableCell>Amount</TableCell>
                  <TableCell>Logged in user Name</TableCell>
                  <TableCell className="text-center">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell className="text-center">1</TableCell>
                  <TableCell>22/11/2021</TableCell>
                  <TableCell>MANJAVVA KANVALLI</TableCell>
                  <TableCell>10724100312345</TableCell>
                  <TableCell>PKGB0010863</TableCell>
                  <TableCell>&#8377; 100000</TableCell>
                  <TableCell>NAGARAJ MAGALA</TableCell>
                  <TableCell className="td-actions">
                    <Button>
                      <i className="material-icons">edit</i>
                    </Button>
                    <Button>
                      <i className="material-icons">close</i>
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-center">2</TableCell>
                  <TableCell>22/11/2021</TableCell>
                  <TableCell>MANJAVVA KANVALLI</TableCell>
                  <TableCell>10724100312345</TableCell>
                  <TableCell>PKGB0010863</TableCell>
                  <TableCell>&#8377; 100000</TableCell>
                  <TableCell>NAGARAJ MAGALA</TableCell>
                  <TableCell className="td-actions">
                    <Button>
                      <i className="material-icons">edit</i>
                    </Button>
                    <Button>
                      <i className="material-icons">close</i>
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-center">3</TableCell>
                  <TableCell>22/11/2021</TableCell>
                  <TableCell>MANJAVVA KANVALLI</TableCell>
                  <TableCell>10724100312345</TableCell>
                  <TableCell>PKGB0010863</TableCell>
                  <TableCell>&#8377; 100000</TableCell>
                  <TableCell>NAGARAJ MAGALA</TableCell>
                  <TableCell className="td-actions">
                    <Button>
                      <i className="material-icons">edit</i>
                    </Button>
                    <Button>
                      <i className="material-icons">close</i>
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>

            {/* <Table
              tableHeaderColor="primary"
              tableHead={[
                "Date",
                "Name",
                "Account No",
                "IFSC Code",
                "Amount",
                "Logged in user Name",
              ]}
              tableData={[
                [
                  "21/11/2021",
                  "S HANUMANTHAPPA",
                  "10724100312345",
                  "PKGB0010863",
                  "59000",
                  "NAGARAJ MAGALA",
                ],
                [
                  "21/11/2021",
                  "S HANUMANTHAPPA",
                  "10724100312345",
                  "PKGB0010863",
                  "59000",
                  "NAGARAJ MAGALA",
                ],
              ]}
            /> */}
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}

import React, {useState, useEffect} from "react";
import Axios from "axios";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  FormText,
  Row,
  Col,
  CardText, 
} from "reactstrap";

// core components
import ReactTable from "components/ReactTable/ReactTable.js";
import ReactBSAlert from "react-bootstrap-sweetalert";

/*const dataTable = [
  ["Tiger Nixon", "System Architect", "Edinburgh", "61"],
  ["Garrett Winters", "Accountant", "Tokyo", "63"],
  ["Ashton Cox", "Junior Technical Author", "San Francisco", "66"],
  ["Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "22"],
  ["Airi Satou", "Accountant", "Tokyo", "33"],
  ["Brielle Williamson", "Integration Specialist", "New York", "61"],
  ["Herrod Chandler", "Sales Assistant", "San Francisco", "59"],
  ["Rhona Davidson", "Integration Specialist", "Tokyo", "55"],
  ["Colleen Hurst", "Javascript Developer", "San Francisco", "39"],
  ["Sonya Frost", "Software Engineer", "Edinburgh", "23"],
  ["Jena Gaines", "Office Manager", "London", "30"],
  ["Quinn Flynn", "Support Lead", "Edinburgh", "22"],
  ["Charde Marshall", "Regional Director", "San Francisco", "36"],
  ["Haley Kennedy", "Senior Marketing Designer", "London", "43"],
  ["Tatyana Fitzpatrick", "Regional Director", "London", "19"],
  ["Michael Silva", "Marketing Designer", "London", "66"],
  ["Paul Byrd", "Chief Financial Officer (CFO)", "New York", "64"],
  ["Gloria Little", "Systems Administrator", "New York", "59"],
  ["Bradley Greer", "Software Engineer", "London", "41"],
  ["Dai Rios", "Personnel Lead", "Edinburgh", "35"],
  ["Jenette Caldwell", "Development Lead", "New York", "30"],
  ["Yuri Berry", "Chief Marketing Officer (CMO)", "New York", "40"],
  ["Caesar Vance", "Pre-Sales Support", "New York", "21"],
  ["Doris Wilder", "Sales Assistant", "Sidney", "23"],
  ["Angelica Ramos", "Chief Executive Officer (CEO)", "London", "47"],
  ["Gavin Joyce", "Developer", "Edinburgh", "42"],
  ["Jennifer Chang", "Regional Director", "Singapore", "28"],
  ["Brenden Wagner", "Software Engineer", "San Francisco", "28"],
  ["Fiona Green", "Chief Operating Officer (COO)", "San Francisco", "48"],
  ["Shou Itou", "Regional Marketing", "Tokyo", "20"],
  ["Michelle House", "Integration Specialist", "Sidney", "37"],
  ["Suki Burks", "Developer", "London", "53"],
  ["Prescott Bartlett", "Technical Author", "London", "27"],
  ["Gavin Cortez", "Team Leader", "San Francisco", "22"],
  ["Martena Mccray", "Post-Sales support", "Edinburgh", "46"],
  ["Unity Butler", "Marketing Designer", "San Francisco", "47"],
  ["Howard Hatfield", "Office Manager", "San Francisco", "51"],
  ["Hope Fuentes", "Secretary", "San Francisco", "41"],
  ["Vivian Harrell", "Financial Controller", "San Francisco", "62"],
  ["Timothy Mooney", "Office Manager", "London", "37"],
  ["Jackson Bradshaw", "Director", "New York", "65"],
  ["Olivia Liang", "Support Engineer", "Singapore", "64"],
];*/

function CodesSat() {
    const [alert, setAlert] = React.useState(null);
    // to stop the warning of calling setState of unmounted component
    React.useEffect(() => {
        return function cleanup() {
        var id = window.setTimeout(null, 0);
        while (id--) {
            window.clearTimeout(id);
        }
        };
    }, []);

    const [dataCode, setCode] = useState('');
    const [dataName, setName] = useState('');

    useEffect(() =>{
        Axios.get("http://localhost:6001/api/showCodes").then((response) =>{
          setDataState(response.data);
        })
    }, []);

    const submitAdd = () =>{
        Axios.post('http://localhost:6001/api/addCode', {
          dataCode:dataCode, 
          dataName:dataName
        });
          
        setDataState([...dataState,{CODE:dataCode,NAME:dataName,'STATUS':'Activo'}]);
    };

    const successAlert = () => {
        setAlert(
          <ReactBSAlert
            success
            style={{ display: "block", marginTop: "-100px" }}
            title="????xito!"
            onConfirm={() => hideAlert()}
            onCancel={() => hideAlert()}
            confirmBtnBsStyle="info"
            btnSize=""
          >
            Se agreg?? la Clave SAT.
          </ReactBSAlert>
        );
      };

    const dataTable = [
    ];

    const [dataState, setDataState] = useState([
      dataTable.map((data, key) => {
        return {
          ID:  key,
          CODE: data[1],
          NAME: data[2],
          STATUS: data[3],
          actions: (
            // we've added some custom button actions
            <div className="actions-right">
              {/* use this button to add a like kind of action */}
              <Button
                onClick={() => {
                  let obj = dataState.find((o) => o.id === key);
                  alert(
                    "Diste click en boton LIKE con \n{ \nID: "+
                      obj.id +
                      ", \nC??digo: " +
                      obj.code +
                      ", \nnombre: " +
                      obj.name +
                      ", \nestatus: " +
                      obj.status +
                      "\n}."
                  );
                }}
                className="btn-icon btn-round"
                color="info"
                size="sm"
              >
                <i className="fa fa-heart" />
              </Button>{" "}
              {/* use this button to add a edit kind of action */}
              <Button
                onClick={() => {
                  let obj = dataState.find((o) => o.id === key);
                  alert(
                    "Diste click en boton LIKE con \n{ \nID: "+
                      obj.id +
                      ", \nC??digo: " +
                      obj.code +
                      ", \nnombre: " +
                      obj.name +
                      ", \nestatus: " +
                      obj.status +
                      "\n}."
                  );
                }}
                className="btn-icon btn-round"
                color="warning"
                size="sm"
              >
                <i className="fa fa-edit" />
              </Button>{" "}
              {/* use this button to remove the data row */}
              <Button
                onClick={() => {
                  var data = dataState;
                  data.find((o, i) => {
                    if (o.id === key) {
                      // here you should add some custom code so you can delete the data
                      // from this component and from your server as well
                      data.splice(i, 1);
                      console.log(data);
                      return true;
                    }
                    return false;
                  });
                  setDataState(data);
                }}
                className="btn-icon btn-round"
                color="danger"
                size="sm"
              >
                <i className="fa fa-times" />
              </Button>{" "}
            </div>
          ),
        };
      })
    ]);
  return (
    <>
      <div className="content">
        {alert}
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Claves SAT</CardTitle>
              </CardHeader>
              <CardBody>
                <Form action="/" method="get">
                    <Row>
                        <Col sm="6">
                            <label>C??digo</label>
                            <FormGroup>
                                <Input placeholder="C??digo" type="text" id="dataCode" name="dataCode" onChange={(e) =>{
                                    setCode(e.target.value)
                                    }} />
                            </FormGroup>
                        </Col>
                        <Col sm="6">
                            <label>Nombre</label>
                            <FormGroup>
                                <Input placeholder="Nombre" type="text" id="dataName" name="dataName" onChange={(e) =>{
                                    setName(e.target.value)
                                    }}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Row>
                    <Col md="10" />
                    <Col md="2">
                        <Button className="btn-round" color="info" type="submit" onClick={submitAdd}>
                        Agregar
                        </Button>
                    </Col>
                </Row>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Claves SAT</CardTitle>
              </CardHeader>
              <CardBody>
                <ReactTable
                  data={dataState}
                  columns={[
                    /*{
                      Header: "ID",
                      accessor: "ID",
                    },*/
                    {
                      Header: "CODIGO",
                      accessor: "CODE",
                    },
                    {
                      Header: "NOMBRE",
                      accessor: "NAME",
                    },
                    {
                      Header: "STATUS",
                      accessor: "STATUS",
                    },
                    /*{
                      Header: "Actions",
                      accessor: "actions",
                      sortable: false,
                      filterable: false,
                    },*/
                  ]}
                  /*
                      You can choose between primary-pagination, info-pagination, success-pagination, warning-pagination, danger-pagination or none - which will make the pagination buttons gray
                    */
                  className="-striped -highlight primary-pagination"
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default CodesSat;

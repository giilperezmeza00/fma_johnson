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
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
} from "reactstrap";

// core components
import ReactTable from "components/ReactTable/ReactTable.js";
import ReactBSAlert from "react-bootstrap-sweetalert";
import Select from "react-select";
import ReactDatetime from "react-datetime";

function Formulations() {

    //const [singleSelect, selectOptions] = React.useState(null);
    const [cve_copr, setcve_copr] = useState('');
    const [new_copr, setnew_copr] = useState('');
    const [ren_copr, setren_copr] = useState('');
    const [uncfor, setuncfor] = useState('');
    const [cve_prod, setcve_prod] = useState('');
    const [new_med, setnew_med] = useState('');
    const [undfor, setundfor] = useState('');
    const [can_copr, setcan_copr] = useState('');
    const [tip_copr, settip_copr] = useState('');
    const [gas_copr, setgas_copr] = useState('');
    const [esp_copr, setesp_copr] = useState('');

    const dataTable = [
    ];

    const [dataState, setDataState] = useState(
        dataTable.map((data, key) => {
        return {
            id_form:  key,
            cve_copr: data[1],
            new_copr: data[2],
            ren_copr: data[3],
            cve_prod: data[4],
            status: data[5],
            actions: (
            <div className="actions-right">
                {}
                <Button
                onClick={() => {
                    let obj = dataState.find((o) => o.id_form === key);
                    alert(
                    "Diste click en boton LIKE con \n{ \nID: "+
                        obj.id_form +
                        ", \nCódigo: " +
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
                {}
                <Button
                onClick={() => {
                    let obj = dataState.find((o) => o.id === key);
                    alert(
                    "Diste click en boton LIKE con \n{ \nID: "+
                        obj.id +
                        ", \nCódigo: " +
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
                {}
                <Button
                onClick={() => {
                    var data = dataState;
                    data.find((o, i) => {
                    if (o.id === key) {
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
    );
    
    /*const [singleSelect, selectOptions] = useState(
        datos.map((data)=>{
            return {value:data.id, label:data.code}
        }),
    );*/

    useEffect(() =>{
        Axios.get("http://localhost:6001/api/showFormulations").then((response) =>{
            //console.log(response.data[0]);
            setDataState(response.data);
        }).catch((err) =>{
            console.log(err);
        })
    }, []);

    const submitAdd = () =>{
        Axios.post('http://localhost:6001/api/addFormulations', {
            cve_copr:cve_copr,
            new_copr:new_copr,
            ren_copr:ren_copr,
            uncfor:uncfor,
            cve_prod:cve_prod,
            new_med:new_med, 
            undfor:undfor, 
            can_copr:can_copr,
            tip_copr:tip_copr,
            gas_copr:gas_copr,
            esp_copr:esp_copr,
        });

        //setDataState([...dataState,{cve_copr:cve_copr,new_copr:new_copr,ren_copr:ren_copr,cve_prod:cve_prod,'status':'Activo'}]);
    };
    
  return (
    <>
      <div className="content">
        {alert}
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Formulaciones</CardTitle>
              </CardHeader>
              <CardBody>
                <Form action="/" method="get">
                    <Row>
                        <Col sm="2">
                            <label>Clave</label>
                            <FormGroup>
                                <Input placeholder="Clave" type="text" id="cve_copr" name="cve_copr" onChange={(e) =>{
                                    setcve_copr(e.target.value)
                                    }} />
                            </FormGroup>
                        </Col>
                        <Col sm="2">
                            <label>Clave de Atributo</label>
                            <FormGroup>
                                <Input placeholder="Clave de Atributo" type="text" id="new_copr" name="new_copr" onChange={(e) =>{
                                    setnew_copr(e.target.value)
                                    }} />
                            </FormGroup>
                        </Col>
                        <Col sm="3">
                            <label>Rendimiento Estándar</label>
                            <FormGroup>
                                <Input placeholder="Rendimiento Estándar" type="text" id="ren_copr" name="ren_copr" onChange={(e) =>{
                                    setren_copr(e.target.value)
                                    }} />
                            </FormGroup>
                        </Col>
                        <Col sm="2">
                            <label>Unidad</label>
                            <FormGroup>
                                <Input placeholder="Unidad" type="text" id="uncfor" name="uncfor" onChange={(e) =>{
                                    setuncfor(e.target.value)
                                    }} />
                            </FormGroup>
                        </Col>
                        <Col sm="3">
                        <label>Clave del Componente</label>
                        <FormGroup>
                            <Input placeholder="Clave del componente" type="text" id="cve_prod" name="cve_prod" onChange={(e) =>{
                                setcve_prod(e.target.value)
                                }} />
                        </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                    <Col sm="3">
                        <label>Clave del atributo Componente</label>
                        <FormGroup>
                            <Input placeholder="Clave del Atributo Componente" type="text" id="new_med" name="new_med" onChange={(e) =>{
                                setnew_med(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Unidad del Componente</label>
                        <FormGroup>
                            <Input placeholder="Unidad del Componente" type="text" id="undfor" name="undfor" onChange={(e) =>{
                                setundfor(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Cantidad del Componente</label>
                        <FormGroup>
                            <Input placeholder="Cantidad del Componente" type="number" id="can_copr" name="can_copr" onChange={(e) =>{
                                setcan_copr(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="3">
                        <label>Tipo de Componente</label>
                        <Select
                        className="react-select primary"
                        classNamePrefix="react-select"
                        id="tip_copr"
                        name="tip_copr"
                        value={tip_copr}
                        onChange={(value) => settip_copr(value)}
                        options={[
                            {
                            value: "1",
                            label: "Sin una selección",
                            isDisabled: true,
                            },
                            { value: "1", label: "Material Directo" },
                            { value: "2", label: "Mano de Obra Directa" },
                            { value: "3", label: "Gastos de Fabricación" },
                        ]}
                        placeholder="Selecione"
                        />
                    </Col>
                    <Col sm="2">
                        <label>Gastos por cada $1.00 de MD</label>
                        <FormGroup>
                            <Input placeholder="Gastos" type="number" id="gas_copr" name="gas_copr" onChange={(e) =>{
                                setgas_copr(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    </Row>
                    <Row>
                    <Col sm="5"></Col>
                    <Col sm="2">
                        <label>Gastos Especiales por URE</label>
                        <FormGroup>
                            <Input placeholder="Gastos" type="number" id="esp_copr" name="esp_copr" onChange={(e) =>{
                                setesp_copr(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Row>
                    <Col md="5" />
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
                <CardTitle tag="h4">Formulaciones</CardTitle>
              </CardHeader>
              <CardBody>
                <ReactTable 
                  data={dataState}
                  columns={[
                    {
                      Header: "Clave",
                      accessor: "cve_copr",
                    },
                    {
                      Header: "Clave Atributo",
                      accessor: "new_copr",
                    },
                    {
                      Header: "Rendimiento",
                      accessor: "ren_copr",
                    },
                    {
                      Header: "Clave Atributo Componente",
                      accessor: "cve_prod",
                    },
                    {
                      Header: "Estatus",
                      accessor: "status",
                    },
                    /*{
                      Header: "Acciones",
                      accessor: "actions",
                      sortable: true,
                      filterable: true,
                    },*/
                  ]}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Formulations;

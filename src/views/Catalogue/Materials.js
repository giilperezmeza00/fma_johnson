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

function Materials() {

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
                <CardTitle tag="h4">Materias Primas</CardTitle>
              </CardHeader>
              <CardBody>
                <Form action="/" method="get">
                    <Row>
                        <Col sm="2">
                            <label>Codigo</label>
                            <FormGroup>
                                <Input placeholder="Clave" type="text" id="cve_copr" name="cve_copr" onChange={(e) =>{
                                    setcve_copr(e.target.value)
                                    }} />
                            </FormGroup>
                        </Col>
                        <Col sm="2">
                            <label>Descripción</label>
                            <FormGroup>
                                <Input placeholder="Clave de Atributo" type="text" id="new_copr" name="new_copr" onChange={(e) =>{
                                    setnew_copr(e.target.value)
                                    }} />
                            </FormGroup>
                        </Col>
                        <Col sm="3">
                            <label>Costo Compra</label>
                            <FormGroup>
                                <Input placeholder="Rendimiento Estándar" type="text" id="ren_copr" name="ren_copr" onChange={(e) =>{
                                    setren_copr(e.target.value)
                                    }} />
                            </FormGroup>
                        </Col>
                        <Col sm="2">
                            <label>Precio Venta</label>
                            <FormGroup>
                                <Input placeholder="Unidad" type="text" id="uncfor" name="uncfor" onChange={(e) =>{
                                    setuncfor(e.target.value)
                                    }} />
                            </FormGroup>
                        </Col>
                        <Col sm="3">
                            <label>Tipo</label>
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
                                { value: "1", label: "Directa" },
                                { value: "2", label: "Indirecta" },
                                { value: "3", label: "Complemento" },
                                { value: "4", label: "Otros" },
                            ]}
                            placeholder="Selecione"
                            />
                        </Col>
                    </Row>
                    <Row>
                    <Col sm="3">
                        <label>Grupo</label>
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
                            { value: "1", label: "Grupo 1" },
                            { value: "2", label: "Grupo 2" },
                        ]}
                        placeholder="Selecione"
                        />
                    </Col>
                    <Col sm="3">
                        <label>SubGrupo</label>
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
                            { value: "1", label: "SubGrupo 1" },
                            { value: "2", label: "subGrupo 2" },
                        ]}
                        placeholder="Selecione"
                        />
                    </Col>
                    <Col sm="3">
                        <label>Unidad</label>
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
                            { value: "1", label: "Unidad 1" },
                            { value: "2", label: "Unidad 2" },
                        ]}
                        placeholder="Selecione"
                        />
                    </Col>
                    <Col sm="3">
                        <label>SAT</label>
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
                            { value: "1", label: "SAT 1" },
                            { value: "2", label: "SAT 2" },
                        ]}
                        placeholder="Selecione"
                        />
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

export default Materials;
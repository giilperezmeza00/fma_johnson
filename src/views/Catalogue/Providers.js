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

function Providers() {
    //const [singleSelect, selectOptions] = React.useState(null);
    const [cve_prov, setcve_prov] = useState('');
    const [nom_prov, setnom_prov] = useState('');
    const [cve_iva, setcve_iva] = useState('');
    const [dir_prov, setdir_prov] = useState('');
    const [ne_prov, setne_prov] = useState('');
    const [ni_prov, setni_prov] = useState('');
    const [col_prov, setcol_prov] = useState('');
    const [cd_prov, setcd_prov] = useState('');
    const [edo_prov, setedo_prov] = useState('');
    const [delega_pro, setdelega_pro] = useState('');
    const [cp_prov, setcp_prov] = useState('');
    const [pais_prov, setpais_prov] = useState('');
    const [rfc_prov, setrfc_prov] = useState('');
    const [curp_prov, setcurp_prov] = useState('');
    const [lada, setlada] = useState('');
    const [tel1_prov, settel1_prov] = useState('');
    const [tel2_prov, settel2_prov] = useState('');
    const [tel3_prov, settel3_prov] = useState('');
    const [fax_prov, setfax_prov] = useState('');
    const [email_prov, setemail_prov] = useState('');
    const [www_prov, setwww_prov] = useState('');
    const [tipoprorat, settipoprorat] = useState('');
    const [proddef, setproddef] = useState('');
    const [variab, setvariab] = useState('');
    const [txt_ing, settxt_ing] = useState('');
    const [stacre, setstacre] = useState('');
    const [vfe_ven, setvfe_ven] = useState('');
    const [descxpp, setdescxpp] = useState('');
    const [diasxpp, setdiasxpp] = useState('');
    const [ncrexpp, setncrexpp] = useState('');
    const [lim_cre, setlim_cre] = useState('');
    const [dia_cre, setdia_cre] = useState('');
    const [contacto, setcontacto] = useState('');
    const [ventas, setventas] = useState('');
    const [cobra, setcobra] = useState('');
    const [nom_ent, setnom_ent] = useState('');
    const [dir_ent, setdir_ent] = useState('');
    const [col_ent, setcol_ent] = useState('');
    const [edo_ent, setedo_ent] = useState('');
    const [cd_ent, setcd_ent] = useState('');
    const [delega_ent, setdelega_ent] = useState('');
    const [cp_ent, setcp_ent] = useState('');
    const [pais_ent, setpais_ent] = useState('');
    const [desc_prov, setdesc_prov] = useState('');
    const [desc_pro2, setdesc_pro2] = useState('');
    const [desc_pro3, setdesc_pro3] = useState('');
    const [desc_pro4, setdesc_pro4] = useState('');
    const [observa, setobserva] = useState('');

    const dataTable = [
    ];

    const [dataState, setDataState] = useState(
        dataTable.map((data, key) => {
        return {
            id_wha:  key,
            code: data[1],
            name: data[2],
            status: data[3],
            actions: (
            // we've added some custom button actions
            <div className="actions-right">
                {/* use this button to add a like kind of action */}
                <Button
                onClick={() => {
                    let obj = dataState.find((o) => o.id === key);
                    alert(
                    "Diste click en boton LIKE con \n{ \nID: "+
                        obj.id_wha +
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
                {/* use this button to add a edit kind of action */}
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
    );
    
    /*const [singleSelect, selectOptions] = useState(
        datos.map((data)=>{
            return {value:data.id, label:data.code}
        }),
    );*/

    useEffect(() =>{
        Axios.get("http://localhost:6001/api/showClassProds").then((response) =>{
            console.log(response);
            //selectOptions(response.data);
        }).catch((err) =>{
            console.log(err);
        })
    }, []);

    useEffect(() =>{
        Axios.get("http://localhost:6001/api/showProviders").then((response) =>{
            //console.log(response.data[0]);
            setDataState(response.data);
        }).catch((err) =>{
            console.log(err);
        })
    }, []);

    const submitAdd = () =>{
        Axios.post('http://localhost:6001/api/addProviders', {
            cve_prov:cve_prov, 
            nom_prov:nom_prov,
            cve_iva:cve_iva,
            dir_prov:dir_prov,
            ne_prov:ne_prov,
            ni_prov:ni_prov,
            col_prov:col_prov,
            cd_prov:cd_prov,
            edo_prov:edo_prov,
            delega_pro:delega_pro,
            cp_prov:cp_prov,
            pais_prov:pais_prov,
            rfc_prov:rfc_prov,
            curp_prov:curp_prov,
            lada:lada,
            tel1_prov:tel1_prov,
            tel2_prov:tel2_prov,
            tel3_prov:tel3_prov,
            fax_prov:fax_prov,
            email_prov:email_prov,
            www_prov:www_prov,
            tipoprorat:tipoprorat,
            proddef:proddef,
            variab:variab,
            txt_ing:txt_ing,
            stacre:stacre,
            vfe_ven:vfe_ven,
            descxpp:descxpp,
            diasxpp:diasxpp,
            ncrexpp:ncrexpp,
            lim_cre:lim_cre,
            dia_cre:dia_cre,
            contacto:contacto,
            ventas:ventas,
            cobra:cobra,
            nom_ent:nom_ent,
            dir_ent:dir_ent,
            col_ent:col_ent,
            edo_ent:edo_ent,
            cd_ent:cd_ent,
            delega_ent:delega_ent,
            cp_ent:cp_ent,
            pais_ent:pais_ent,
            desc_prov:desc_prov,
            desc_pro2:desc_pro2,
            desc_pro3:desc_pro3,
            desc_pro4:desc_pro4,
            observa:observa,
        });

        //setDataState([...dataState,{CODE:dataCode,NAME:dataName,'STATUS':'Activo'}]);
    };
    
  return (
    <>
      <div className="content">
        {alert}
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Proveedores</CardTitle>
              </CardHeader>
              <CardBody>
                <Form action="/" method="get">
                    <Row>
                        <Col sm="4">
                            <label>Clave</label>
                            <FormGroup>
                                <Input placeholder="Clave" type="text" id="cve_prov" name="cve_prov" onChange={(e) =>{
                                    setcve_prov(e.target.value)
                                    }} />
                            </FormGroup>
                        </Col>
                        <Col sm="4">
                            <label>Nombre</label>
                            <FormGroup>
                                <Input placeholder="Nombre" type="text" id="nom_prov" name="nom_prov" onChange={(e) =>{
                                    setnom_prov(e.target.value)
                                    }}
                                />
                            </FormGroup>
                        </Col>
                        <Col sm="4">
                            <label>Tipo de Proveedor</label>
                            <Select
                            className="react-select primary"
                            classNamePrefix="react-select"
                            id="cve_iva"
                            name="cve_iva"
                            value={cve_iva}
                            onChange={(value) => setcve_iva(value)}
                            options={[
                                {
                                value: "0",
                                label: "Sin un Tipo Seleccionado",
                                isDisabled: true,
                                },
                                { value: "1", label: "Tipo 01" },
                                { value: "2", label: "Tipo 02" },
                            ]}
                            placeholder="Selecione Un Tipo"
                            />
                        </Col>
                    </Row>
                    <Row>
                    <Col sm="5">
                        <label>Dirección</label>
                        <FormGroup>
                            <Input placeholder="Dirección" type="text" id="dir_prov" name="dir_prov" onChange={(e) =>{
                                setdir_prov(e.target.value)
                                }}
                            />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>No. Exterior</label>
                        <FormGroup>
                            <Input placeholder="No. Exterior" type="text" id="ne_prov" name="ne_prov" onChange={(e) =>{
                                setne_prov(e.target.value)
                                }}
                            />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>No. Interior</label>
                        <FormGroup>
                            <Input placeholder="No. Interior" type="text" id="ni_prov" name="ni_prov" onChange={(e) =>{
                                setni_prov(e.target.value)
                                }}
                            />
                        </FormGroup>
                    </Col>
                    <Col sm="3">
                        <label>Colonia</label>
                        <FormGroup>
                            <Input placeholder="Colonia" type="text" id="col_prov" name="col_prov" onChange={(e) =>{
                                setcol_prov(e.target.value)
                                }}
                            />
                        </FormGroup>
                    </Col>
                    </Row>
                    <Row>
                    <Col sm="3">
                        <label>Ciudad</label>
                        <FormGroup>
                            <Input placeholder="Ciudad" type="text" id="cd_prov" name="cd_prov" onChange={(e) =>{
                                setcd_prov(e.target.value)
                                }}
                            />
                        </FormGroup>
                    </Col>
                    <Col sm="3">
                        <label>Estado</label>
                        <FormGroup>
                            <Input placeholder="Estado" type="text" id="edo_prov" name="edo_prov" onChange={(e) =>{
                                setedo_prov(e.target.value)
                                }}
                            />
                        </FormGroup>
                    </Col>
                    <Col sm="4">
                        <label>Delegación</label>
                        <FormGroup>
                            <Input placeholder="Delegación" type="text" id="delega_pro" name="delega_pro" onChange={(e) =>{
                                setdelega_pro(e.target.value)
                                }}
                            />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>C.P.</label>
                        <FormGroup>
                            <Input placeholder="C.P." type="text" id="cp_prov" name="cp_prov" onChange={(e) =>{
                                setcp_prov(e.target.value)
                                }}
                            />
                        </FormGroup>
                    </Col>
                    </Row>
                    <Row>
                    <Col sm="3">
                        <label>País</label>
                        <FormGroup>
                            <Input placeholder="País" type="text" id="pais_prov" name="pais_prov" onChange={(e) =>{
                                setpais_prov(e.target.value)
                                }}
                            />
                        </FormGroup>
                    </Col>
                    <Col sm="3">
                        <label>RFC</label>
                        <FormGroup>
                            <Input placeholder="RFC" type="text" id="rfc_prov" name="rfc_prov" onChange={(e) =>{
                                setrfc_prov(e.target.value)
                                }}
                            />
                        </FormGroup>
                    </Col>
                    <Col sm="3">
                        <label>CURP</label>
                        <FormGroup>
                            <Input placeholder="CURP" type="text" id="curp_prov" name="curp_prov" onChange={(e) =>{
                                setcurp_prov(e.target.value)
                                }}
                            />
                        </FormGroup>
                    </Col>
                    <Col sm="3">
                        <label>Código de Área</label>
                        <FormGroup>
                            <Input placeholder="Código de Área" type="text" id="lada" name="lada" onChange={(e) =>{
                                setlada(e.target.value)
                                }}
                            />
                        </FormGroup>
                    </Col>
                    </Row>
                    <Row>
                    <Col sm="3">
                        <label>Teléfono 1</label>
                        <FormGroup>
                            <Input placeholder="Teléfono 1" type="text" id="tel1_prov" name="tel1_prov" onChange={(e) =>{
                                settel1_prov(e.target.value)
                                }}
                            />
                        </FormGroup>
                    </Col>
                    <Col sm="3">
                        <label>Teléfono 2</label>
                        <FormGroup>
                            <Input placeholder="Teléfono 2" type="text" id="tel2_prov" name="tel2_prov" onChange={(e) =>{
                                settel2_prov(e.target.value)
                                }}
                            />
                        </FormGroup>
                    </Col>
                    <Col sm="3">
                        <label>Teléfono 3</label>
                        <FormGroup>
                            <Input placeholder="Teléfono 3" type="text" id="tel3_prov" name="tel3_prov" onChange={(e) =>{
                                settel3_prov(e.target.value)
                                }}
                            />
                        </FormGroup>
                    </Col>
                    <Col sm="3">
                        <label>Fax</label>
                        <FormGroup>
                            <Input placeholder="Fax" type="text" id="fax_prov" name="fax_prov" onChange={(e) =>{
                                setfax_prov(e.target.value)
                                }}
                            />
                        </FormGroup>
                    </Col>
                    </Row>
                    <Row>
                    <Col sm="3">
                        <label>Correo</label>
                        <FormGroup>
                            <Input placeholder="Correo" type="email" id="email_prov" name="email_prov" onChange={(e) =>{
                                setemail_prov(e.target.value)
                                }}
                            />
                        </FormGroup>
                    </Col>
                    <Col sm="3">
                        <label>Página</label>
                        <FormGroup>
                            <Input placeholder="Página" type="text" id="www_prov" name="www_prov" onChange={(e) =>{
                                setwww_prov(e.target.value)
                                }}
                            />
                        </FormGroup>
                    </Col>
                    <Col sm="3">
                        <label>Tipo de Prorrateo</label>
                        <Select
                        className="react-select primary"
                        classNamePrefix="react-select"
                        id="tipoprorat"
                        name="tipoprorat"
                        value={tipoprorat}
                        onChange={(value) => settipoprorat(value)}
                        options={[
                            {
                            value: "0",
                            label: "Sin un Tipo",
                            isDisabled: true,
                            },
                            { value: "1", label: "Tipo 01" },
                            { value: "2", label: "Tipo 02" },
                        ]}
                        placeholder="Tipo de Prorrateo"
                        />
                    </Col>
                    <Col sm="3">
                        <label>Productos o Servicios</label>
                        <Select
                        className="react-select primary"
                        classNamePrefix="react-select"
                        id="proddef"
                        name="proddef"
                        value={proddef}
                        onChange={(value) => setproddef(value)}
                        options={[
                            {
                            value: "0",
                            label: "Sin una selección",
                            isDisabled: true,
                            },
                            { value: "1", label: "NO" },
                            { value: "2", label: "SI" },
                        ]}
                        placeholder="Productos o Servicios"
                        />
                    </Col>
                    </Row>
                    <Row>
                    <Col sm="3">
                        <label>Nombre Variable</label>
                        <Select
                        className="react-select primary"
                        classNamePrefix="react-select"
                        id="variab"
                        name="variab"
                        value={variab}
                        onChange={(value) => setvariab(value)}
                        options={[
                            {
                            value: "0",
                            label: "Sin una selección",
                            isDisabled: true,
                            },
                            { value: "1", label: "NO" },
                            { value: "2", label: "SI" },
                        ]}
                        placeholder="Nombre Variable"
                        />
                    </Col>
                    <Col sm="3">
                        <label>Formato de Impresión</label>
                        <Select
                        className="react-select primary"
                        classNamePrefix="react-select"
                        id="txt_ing"
                        name="txt_ing"
                        value={txt_ing}
                        onChange={(value) => settxt_ing(value)}
                        options={[
                            {
                            value: "0",
                            label: "Sin una selección",
                            isDisabled: true,
                            },
                            { value: "1", label: "Inglés" },
                            { value: "2", label: "Español" },
                        ]}
                        placeholder="Formato de Impresión"
                        />
                    </Col>
                    <Col sm="3">
                        <label>¿Acreedor o Proveedor?</label>
                        <Select
                        className="react-select primary"
                        classNamePrefix="react-select"
                        id="stacre"
                        name="stacre"
                        value={stacre}
                        onChange={(value) => setstacre(value)}
                        options={[
                            {
                            value: "0",
                            label: "Sin una selección",
                            isDisabled: true,
                            },
                            { value: "1", label: "Proveedor" },
                            { value: "2", label: "Acreedor" },
                        ]}
                        placeholder="¿Acreedor o Proveedor?"
                        />
                    </Col>
                    <Col sm="3">
                        <label>Días de Crédito Vencimiento</label>
                        <Select
                        className="react-select primary"
                        classNamePrefix="react-select"
                        id="vfe_ven"
                        name="vfe_ven"
                        value={vfe_ven}
                        onChange={(value) => setvfe_ven(value)}
                        options={[
                            {
                            value: "0",
                            label: "Sin una selección",
                            isDisabled: true,
                            },
                            { value: "1", label: "A partir de fecha revisión" },
                            { value: "2", label: "A partir de fehca factura" },
                        ]}
                        placeholder="Crédito Vncimiento"
                        />
                    </Col>
                    </Row>
                    <Row>
                    <Col sm="2">
                        <label>Descuento PP (%)</label>
                        <FormGroup>
                            <Input placeholder="Descuento" type="number" id="descxpp" name="descxpp" onChange={(e) =>{
                                setdescxpp(e.target.value)
                                }}
                            />
                        </FormGroup>
                    </Col>
                    <Col sm="3">
                        <label>Días para Descuento</label>
                        <FormGroup>
                            <Input placeholder="Días para Descuento" type="number" id="diasxpp" name="diasxpp" onChange={(e) =>{
                                setdiasxpp(e.target.value)
                                }}
                            />
                        </FormGroup>
                    </Col>
                    <Col sm="3">
                        <label>Tipo de Descuento</label>
                        <Select
                        className="react-select primary"
                        classNamePrefix="react-select"
                        id="ncrexpp"
                        name="ncrexpp"
                        value={ncrexpp}
                        onChange={(value) => setncrexpp(value)}
                        options={[
                            {
                            value: "0",
                            label: "Sin una selección",
                            isDisabled: true,
                            },
                            { value: "1", label: "DESCXPP" },
                            { value: "2", label: "DESCXPP2" },
                        ]}
                        placeholder="Tipo de Descuento"
                        />
                    </Col>
                    <Col sm="2">
                        <label>Límite de Crédito</label>
                        <FormGroup>
                            <Input placeholder="Límite" type="number" id="lim_cre" name="lim_cre" onChange={(e) =>{
                                setlim_cre(e.target.value)
                                }}
                            />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Días de Crédito</label>
                        <FormGroup>
                            <Input placeholder="Días" type="number" id="dia_cre" name="dia_cre" onChange={(e) =>{
                                setdia_cre(e.target.value)
                                }}
                            />
                        </FormGroup>
                    </Col>
                    </Row>
                    <Row>
                    <Col sm="4">
                        <label>Contacto</label>
                        <FormGroup>
                            <Input placeholder="Contacto" type="text" id="contacto" name="contacto" onChange={(e) =>{
                                setcontacto(e.target.value)
                                }}
                            />
                        </FormGroup>
                    </Col>
                    <Col sm="4">
                        <label>Contacto Ventas</label>
                        <FormGroup>
                            <Input placeholder="Contacto Ventas" type="text" id="ventas" name="ventas" onChange={(e) =>{
                                setventas(e.target.value)
                                }}
                            />
                        </FormGroup>
                    </Col>
                    <Col sm="4">
                        <label>Contacto Cobranza</label>
                        <FormGroup>
                            <Input placeholder="Contacto Cobranza" type="text" id="cobra" name="cobra" onChange={(e) =>{
                                setcobra(e.target.value)
                                }}
                            />
                        </FormGroup>
                    </Col>
                    </Row>
                    <Row>
                    <Col sm="4">
                        <label>Nombre de Entrega Estandar</label>
                        <FormGroup>
                            <Input placeholder="Nombre de Entrega Estandar" type="text" id="nom_ent" name="nom_ent" onChange={(e) =>{
                                setnom_ent(e.target.value)
                                }}
                            />
                        </FormGroup>
                    </Col>
                    <Col sm="4">
                        <label>Dirección de Entrega Estandar</label>
                        <FormGroup>
                            <Input placeholder="Dirección de Entrega Estandar" type="text" id="dir_ent" name="dir_ent" onChange={(e) =>{
                                setdir_ent(e.target.value)
                                }}
                            />
                        </FormGroup>
                    </Col>
                    <Col sm="4">
                        <label>Colonia de Entrega Estandar</label>
                        <FormGroup>
                            <Input placeholder="Colonia de Entrega Estandar" type="text" id="col_ent" name="col_ent" onChange={(e) =>{
                                setcol_ent(e.target.value)
                                }}
                            />
                        </FormGroup>
                    </Col>
                    </Row>
                    <Row>
                    <Col sm="3">
                        <label>Estado de Entrega Estandar</label>
                        <FormGroup>
                            <Input placeholder="Estado de Entrega Estandar" type="text" id="edo_ent" name="edo_ent" onChange={(e) =>{
                                setedo_ent(e.target.value)
                                }}
                            />
                        </FormGroup>
                    </Col>
                    <Col sm="3">
                        <label>Ciudad de Entrega Estandar</label>
                        <FormGroup>
                            <Input placeholder="Ciudad" type="text" id="cd_ent" name="cd_ent" onChange={(e) =>{
                                setcd_ent(e.target.value)
                                }}
                            />
                        </FormGroup>
                    </Col>
                    <Col sm="4">
                        <label>Delegación de Entrega Estandar</label>
                        <FormGroup>
                            <Input placeholder="Delegación " type="text" id="delega_ent" name="delega_ent" onChange={(e) =>{
                                setdelega_ent(e.target.value)
                                }}
                            />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>C.P: EE</label>
                        <FormGroup>
                            <Input placeholder="C.P. EE" type="text" id="cp_ent" name="cp_ent" onChange={(e) =>{
                                setcp_ent(e.target.value)
                                }}
                            />
                        </FormGroup>
                    </Col>
                    </Row>
                    <Row>
                    <Col sm="4">
                        <label>País de Entrega Estandar</label>
                        <FormGroup>
                            <Input placeholder="País de Entrega Estandar" type="text" id="pais_ent" name="pais_ent" onChange={(e) =>{
                                setpais_ent(e.target.value)
                                }}
                            />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Descuento Estandar</label>
                        <FormGroup>
                            <Input placeholder="Descuento " type="number" id="desc_prov" name="desc_prov" onChange={(e) =>{
                                setdesc_prov(e.target.value)
                                }}
                            />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Descuento Estandar 2</label>
                        <FormGroup>
                            <Input placeholder="Descuento 2" type="number" id="desc_pro2" name="desc_pro2" onChange={(e) =>{
                                setdesc_pro2(e.target.value)
                                }}
                            />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Descuento Estandar 3</label>
                        <FormGroup>
                            <Input placeholder="Descuento 3" type="number" id="desc_pro3" name="desc_pro3" onChange={(e) =>{
                                setdesc_pro3(e.target.value)
                                }}
                            />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Descuento Estandar 4</label>
                        <FormGroup>
                            <Input placeholder="Descuento 4" type="number" id="desc_pro4" name="desc_pro4" onChange={(e) =>{
                                setdesc_pro4(e.target.value)
                                }}
                            />
                        </FormGroup>
                    </Col>
                    </Row>
                    <Row>
                    <Col sm="12">
                        <label>Observaciones</label>
                        <FormGroup>
                            <Input placeholder="Observaciones" type="text" id="observa" name="observa" onChange={(e) =>{
                                setobserva(e.target.value)
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
                <CardTitle tag="h4">Subclases de Producto</CardTitle>
              </CardHeader>
              <CardBody>
                <ReactTable 
                  data={dataState}
                  columns={[
                    {
                      Header: "Código",
                      accessor: "code",
                    },
                    {
                      Header: "Nombre",
                      accessor: "name",
                    },
                    {
                      Header: "Correo",
                      accessor: "mail",
                    },
                    {
                      Header: "Teléfono",
                      accessor: "phone",
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

export default Providers;

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

function Products() {
    //const [singleSelect, selectOptions] = React.useState(null);
    const [cve_prod, setcve_prod] = useState('');
    const [c_prds, setc_prds] = useState('');
    const [desc_prod, setdesc_prod] = useState('');
    const [uni_med, setuni_med] = useState('');
    const [cve_tial, setcve_tial] = useState('');
    const [cse_prod, setcse_prod] = useState('');
    const [sub_cse, setsub_cse] = useState('');
    const [sub_subcse, setsub_subcse] = useState('');
    const [desc_prod2, setdesc_prod2] = useState('');
    const [desc1, setdesc1] = useState('');
    const [desc2, setdesc2] = useState('');
    const [staclas1, setstaclas1] = useState('');
    const [kit, setkit] = useState('');
    const [staiva, setstaiva] = useState('');
    const [frac_aranc, setfrac_aranc] = useState('');
    const [porcadvalo, setporcadvalo] = useState('');
    const [staretiva, setstaretiva] = useState('');
    const [fact_peso, setfact_peso] = useState('');
    const [base_prom, setbase_prom] = useState('');
    const [stalote, setstalote] = useState('');
    const [diasvida, setdiasvida] = useState('');
    const [cve_monc, setcve_monc] = useState('');
    const [cto_ent, setcto_ent] = useState('');
    const [cve_monp, setcve_monp] = useState('');
    const [f_act_pre, setf_act_pre] = useState('');
    const [prec_prod, setprec_prod] = useState('');
    const [prec_prod2, setprec_prod2] = useState('');
    const [prec_prod3, setprec_prod3] = useState('');
    const [prec_prod4, setprec_prod4] = useState('');
    const [prec_prod5, setprec_prod5] = useState('');
    const [prec_prod6, setprec_prod6] = useState('');
    const [margen, setmargen] = useState('');
    const [margen2, setmargen2] = useState('');
    const [margen3, setmargen3] = useState('');
    const [margen4, setmargen4] = useState('');
    const [margen5, setmargen5] = useState('');
    const [margen6, setmargen6] = useState('');
    const [dcto1p1, setdcto1p1] = useState('');
    const [dcto2p1, setdcto2p1] = useState('');
    const [dcto1p2, setdcto1p2] = useState('');
    const [dcto2p2, setdcto2p2] = useState('');
    const [dcto1p3, setdcto1p3] = useState('');
    const [dcto2p3, setdcto2p3] = useState('');
    const [dcto1p4, setdcto1p4] = useState('');
    const [dcto2p4, setdcto2p4] = useState('');
    const [dcto1p5, setdcto1p5] = useState('');
    const [dcto2p5, setdcto2p5] = useState('');
    const [dcto1p6, setdcto1p6] = useState('');
    const [dcto2p6, setdcto2p6] = useState('');
    const [mrgprod, setmrgprod] = useState('');
    const [porcmrg, setporcmrg] = useState('');
    const [dato_1, setdato_1] = useState('');
    const [dato_2, setdato_2] = useState('');
    const [dato_3, setdato_3] = useState('');
    const [dato_4, setdato_4] = useState('');
    const [dato_5, setdato_5] = useState('');
    const [dato_6, setdato_6] = useState('');
    const [dato_7, setdato_7] = useState('');
    const [dato_8, setdato_8] = useState('');
    const [stapitex, setstapitex] = useState('');
    const [codbar, setcodbar] = useState('');
    const [porceniva, setporceniva] = useState('');
    const [imag_cot, setimag_cot] = useState('');
    const [imag_ent, setimag_ent] = useState('');
    const [imag_ecc, setimag_ecc] = useState('');
    const [lista_med, setlista_med] = useState('');
    const [gral_med, setgral_med] = useState('');
    const [clie_med, setclie_med] = useState('');
    const [prov_med, setprov_med] = useState('');
    const [imag_med, setimag_med] = useState('');
    const [maxm_med, setmaxm_med] = useState('');
    const [excdesd1, setexcdesd1] = useState('');
    const [exchast1, setexchast1] = useState('');
    const [excdesd2, setexcdesd2] = useState('');
    const [exchast2, setexchast2] = useState('');
    const [excdesd3, setexcdesd3] = useState('');
    const [exchast3, setexchast3] = useState('');
    const [excdesd4, setexcdesd4] = useState('');
    const [exchast4, setexchast4] = useState('');
    const [excdesd5, setexcdesd5] = useState('');
    const [exchast5, setexchast5] = useState('');
    const [excdesd6, setexcdesd6] = useState('');
    const [exchast6, setexchast6] = useState('');
    const [staretisr, setstaretisr] = useState('');
    const [prov1, setprov1] = useState('');
    const [prov2, setprov2] = useState('');
    const [prov3, setprov3] = useState('');
    const [prov4, setprov4] = useState('');
    const [prov5, setprov5] = useState('');
    const [prov6, setprov6] = useState('');
    const [prov7, setprov7] = useState('');
    const [prov8, setprov8] = useState('');
    const [prov9, setprov9] = useState('');
    const [prov10, setprov10] = useState('');
    const [unidad1, setunidad1] = useState('');
    const [unidad2, setunidad2] = useState('');
    const [unidad3, setunidad3] = useState('');
    const [unidad4, setunidad4] = useState('');
    const [unidad5, setunidad5] = useState('');
    const [unidad6, setunidad6] = useState('');
    const [unidad7, setunidad7] = useState('');
    const [unidad8, setunidad8] = useState('');
    const [unidad9, setunidad9] = useState('');
    const [unidad10, setunidad10] = useState('');
    const [factor1, setfactor1] = useState('');
    const [factor2, setfactor2] = useState('');
    const [factor3, setfactor3] = useState('');
    const [factor4, setfactor4] = useState('');
    const [factor5, setfactor5] = useState('');
    const [factor6, setfactor6] = useState('');
    const [factor7, setfactor7] = useState('');
    const [factor8, setfactor8] = useState('');
    const [factor9, setfactor9] = useState('');
    const [factor10, setfactor10] = useState('');
    const [codbarun1, setcodbarun1] = useState('');
    const [codbarun2, setcodbarun2] = useState('');
    const [codbarun3, setcodbarun3] = useState('');
    const [codbarun4, setcodbarun4] = useState('');
    const [codbarun5, setcodbarun5] = useState('');
    const [codbarun6, setcodbarun6] = useState('');
    const [codbarun7, setcodbarun7] = useState('');
    const [codbarun8, setcodbarun8] = useState('');
    const [codbarun9, setcodbarun9] = useState('');
    const [codbarun10, setcodbarun10] = useState('');
    const [xlugar1, setxlugar1] = useState('');
    const [xlugar2, setxlugar2] = useState('');
    const [xlugar3, setxlugar3] = useState('');
    const [xlugar4, setxlugar4] = useState('');
    const [xlugar5, setxlugar5] = useState('');
    const [xlugar6, setxlugar6] = useState('');
    const [xlugar7, setxlugar7] = useState('');
    const [xlugar8, setxlugar8] = useState('');
    const [xlugar9, setxlugar9] = useState('');
    const [xlugar10, setxlugar10] = useState('');
    const [xmax1, setxmax1] = useState('');
    const [xmax2, setxmax2] = useState('');
    const [xmax3, setxmax3] = useState('');
    const [xmax4, setxmax4] = useState('');
    const [xmax5, setxmax5] = useState('');
    const [xmax6, setxmax6] = useState('');
    const [xmax7, setxmax7] = useState('');
    const [xmax8, setxmax8] = useState('');
    const [xmax9, setxmax9] = useState('');
    const [xmax10, setxmax10] = useState('');
    const [xmin1, setxmin1] = useState('');
    const [xmin2, setxmin2] = useState('');
    const [xmin3, setxmin3] = useState('');
    const [xmin4, setxmin4] = useState('');
    const [xmin5, setxmin5] = useState('');
    const [xmin6, setxmin6] = useState('');
    const [xmin7, setxmin7] = useState('');
    const [xmin8, setxmin8] = useState('');
    const [xmin9, setxmin9] = useState('');
    const [xmin10, setxmin10] = useState('');
    const [xpr1, setxpr1] = useState('');
    const [xpr2, setxpr2] = useState('');
    const [xpr3, setxpr3] = useState('');
    const [xpr4, setxpr4] = useState('');
    const [xpr5, setxpr5] = useState('');
    const [xpr6, setxpr6] = useState('');
    const [xpr7, setxpr7] = useState('');
    const [xpr8, setxpr8] = useState('');
    const [xpr9, setxpr9] = useState('');
    const [xpr10, setxpr10] = useState('');
    const [xcs1, setxcs1] = useState('');
    const [xcs2, setxcs2] = useState('');
    const [xcs3, setxcs3] = useState('');
    const [xcs4, setxcs4] = useState('');
    const [xcs5, setxcs5] = useState('');
    const [xcs6, setxcs6] = useState('');
    const [xcs7, setxcs7] = useState('');
    const [xcs8, setxcs8] = useState('');
    const [xcs9, setxcs9] = useState('');
    const [xcs10, setxcs10] = useState('');
    const [xloca1, setxloca1] = useState('');
    const [xloca2, setxloca2] = useState('');
    const [xloca3, setxloca3] = useState('');
    const [xloca4, setxloca4] = useState('');
    const [xloca5, setxloca5] = useState('');
    const [xloca6, setxloca6] = useState('');
    const [xloca7, setxloca7] = useState('');
    const [xloca8, setxloca8] = useState('');
    const [xloca9, setxloca9] = useState('');
    const [xloca10, setxloca10] = useState('');

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
            cve_prod:cve_prod,
            c_prds:c_prds,
            desc_prod:desc_prod,
            uni_med:uni_med, 
            cve_tial:cve_tial, 
            sub_cse:sub_cse, 
            sub_subcse:sub_subcse, 
            desc_prod2:desc_prod2, 
            desc1:desc1, 
            desc2:desc2,
            staclas1:staclas1, 
            kit:kit,
            staiva:staiva, 
            frac_aranc:frac_aranc,
            porcadvalo:porcadvalo, 
            staretiva:staretiva, 
            fact_peso:fact_peso, 
            base_prom:base_prom, 
            stalote:stalote, 
            diasvida:diasvida,
            cve_monc:cve_monc, 
            cto_ent:cto_ent, 
            cve_monp:cve_monp, 
            f_act_pre:f_act_pre, 
            prec_prod:prec_prod, 
            prec_prod2:prec_prod2, 
            prec_prod3:prec_prod3, 
            prec_prod4:prec_prod4,
            prec_prod5:prec_prod5,
            prec_prod6:prec_prod6, 
            margen:margen, 
            margen2:margen2,
            margen3:margen3,
            margen4:margen4,
            margen5:margen5,
            margen6:margen6,
            dcto1p1:dcto1p1,
            dcto2p1:dcto2p1,
            dcto1p2:dcto1p2,
            dcto2p2:dcto2p2,
            dcto1p3:dcto1p3,
            dcto2p3:dcto2p3,
            dcto1p4:dcto1p4,
            dcto2p4:dcto2p4,
            dcto1p5:dcto1p5,
            dcto2p5:dcto2p5,
            dcto1p6:dcto1p6,
            dcto2p6:dcto2p6,
            mrgprod:mrgprod,
            porcmrg:porcmrg,
            dato_1:dato_1,
            dato_2:dato_2,
            dato_3:dato_3,
            dato_4:dato_4,
            dato_5:dato_5,
            dato_6:dato_6,
            dato_7:dato_7,
            dato_8:dato_8,
            stapitex:stapitex,
            codbar:codbar,
            porceniva:porceniva,
            imag_cot:imag_cot,
            imag_ent:imag_ent,
            imag_ecc:imag_ecc,
            lista_med:lista_med,
            gral_med:gral_med,
            clie_med:clie_med,
            prov_med:prov_med,
            imag_med:imag_med,
            maxm_med:maxm_med,
            excdesd1:excdesd1,
            exchast1:exchast1,
            excdesd2:excdesd2,
            exchast2:exchast2,
            excdesd3:excdesd3,
            exchast3:exchast3,
            excdesd4:excdesd4,
            exchast4:exchast4,
            excdesd5:excdesd5,
            exchast5:exchast5,
            excdesd6:excdesd6,
            exchast6:exchast6,
            staretisr:staretisr,
            prov1:prov1,
            prov2:prov2,
            prov3:prov3,
            prov4:prov4,
            prov5:prov5,
            prov6:prov6,
            prov7:prov7,
            prov8:prov8,
            prov9:prov9,
            prov10:prov10,
            unidad1:unidad1,
            unidad2:unidad2,
            unidad3:unidad3,
            unidad4:unidad4,
            unidad5:unidad5,
            unidad6:unidad6,
            unidad7:unidad7,
            unidad8:unidad8,
            unidad9:unidad9,
            unidad10:unidad10,
            factor1:factor1,
            factor2:factor2,
            factor3:factor3,
            factor4:factor4,
            factor5:factor5,
            factor6:factor6,
            factor7:factor7,
            factor8:factor8,
            factor9:factor9,
            factor10:factor10,
            codbarun1:codbarun1,
            codbarun2:codbarun2,
            codbarun3:codbarun3,
            codbarun4:codbarun4,
            codbarun5:codbarun5,
            codbarun6:codbarun6,
            codbarun7:codbarun7,
            codbarun8:codbarun8,
            codbarun9:codbarun9,
            codbarun10:codbarun10,
            xlugar1:xlugar1,
            xlugar2:xlugar2,
            xlugar3:xlugar3,
            xlugar4:xlugar4,
            xlugar5:xlugar5,
            xlugar6:xlugar6,
            xlugar7:xlugar7,
            xlugar8:xlugar8,
            xlugar9:xlugar9,
            xlugar10:xlugar10,
            xmax1:xmax1,
            xmax2:xmax2,
            xmax3:xmax3,
            xmax4:xmax4,
            xmax5:xmax5,
            xmax6:xmax6,
            xmax7:xmax7,
            xmax8:xmax8,
            xmax9:xmax9,
            xmax10:xmax10,
            xmin1:xmin1,
            xmin2:xmin2,
            xmin3:xmin3,
            xmin4:xmin4,
            xmin5:xmin5,
            xmin6:xmin6,
            xmin7:xmin7,
            xmin8:xmin8,
            xmin9:xmin9,
            xmin10:xmin10,
            xpr1:xpr1,
            xpr2:xpr2,
            xpr3:xpr3,
            xpr4:xpr4,
            xpr5:xpr5,
            xpr6:xpr6,
            xpr7:xpr7,
            xpr8:xpr8,
            xpr9:xpr9,
            xpr10:xpr10,
            xcs1:xcs1,
            xcs2:xcs2,
            xcs3:xcs3,
            xcs4:xcs4,
            xcs5:xcs5,
            xcs6:xcs6,
            xcs7:xcs7,
            xcs8:xcs8,
            xcs9:xcs9,
            xcs10:xcs10,
            xloca1:xloca1,
            xloca2:xloca2,
            xloca3:xloca3,
            xloca4:xloca4,
            xloca5:xloca5,
            xloca6:xloca6,
            xloca7:xloca7,
            xloca8:xloca8,
            xloca9:xloca9,
            xloca10:xloca10,
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
                <CardTitle tag="h4">Productos</CardTitle>
              </CardHeader>
              <CardBody>
                <Form action="/" method="get">
                    <Row>
                        <Col sm="2">
                            <label>Clave</label>
                            <FormGroup>
                                <Input placeholder="Clave" type="text" id="cve_prod" name="cve_prod" onChange={(e) =>{
                                    setcve_prod(e.target.value)
                                    }} />
                            </FormGroup>
                        </Col>
                        <Col sm="2">
                            <label>Clave SAT</label>
                            <Select
                            className="react-select primary"
                            classNamePrefix="react-select"
                            id="c_prds"
                            name="c_prds"
                            value={c_prds}
                            onChange={(value) => setc_prds(value)}
                            options={[
                                {
                                value: "0",
                                label: "Sin una Clave Seleccionado",
                                isDisabled: true,
                                },
                                { value: "1", label: "42312400" },
                                { value: "2", label: "42312401" },
                            ]}
                            placeholder="Selecione"
                            />
                        </Col>
                        <Col sm="6">
                            <label>Descripción</label>
                            <FormGroup>
                                <Input placeholder="Descripción" type="text" id="desc_prod" name="desc_prod" onChange={(e) =>{
                                    setdesc_prod(e.target.value)
                                    }} />
                            </FormGroup>
                        </Col>
                        <Col sm="2">
                            <label>Unidad de Medida</label>
                            <Select
                            className="react-select primary"
                            classNamePrefix="react-select"
                            id="uni_med"
                            name="uni_med"
                            value={uni_med}
                            onChange={(value) => setuni_med(value)}
                            options={[
                                {
                                value: "0",
                                label: "Sin una unidad Seleccionada",
                                isDisabled: true,
                                },
                                { value: "1", label: "KG" },
                                { value: "2", label: "METRO" },
                            ]}
                            placeholder="Selecione"
                            />
                        </Col>
                    </Row>
                    <Row>
                    <Col sm="2">
                        <label>Tipo de Producto</label>
                        <Select
                        className="react-select primary"
                        classNamePrefix="react-select"
                        id="cve_tial"
                        name="cve_tial"
                        value={cve_tial}
                        onChange={(value) => setcve_tial(value)}
                        options={[
                            {
                            value: "0",
                            label: "Sin un Tipo Seleccionado",
                            isDisabled: true,
                            },
                            { value: "1", label: "Tipo 1" },
                            { value: "2", label: "Tipo 2" },
                        ]}
                        placeholder="Selecione"
                        />
                    </Col>
                    <Col sm="2">
                        <label>Clase de Producto</label>
                        <Select
                        className="react-select primary"
                        classNamePrefix="react-select"
                        id="cse_prod"
                        name="cse_prod"
                        value={cse_prod}
                        onChange={(value) => setcse_prod(value)}
                        options={[
                            {
                            value: "0",
                            label: "Sin una Clase Seleccionado",
                            isDisabled: true,
                            },
                            { value: "1", label: "Clase 1" },
                            { value: "2", label: "Clase 2" },
                        ]}
                        placeholder="Selecione"
                        />
                    </Col>
                    <Col sm="2">
                        <label>Grupo de Producto</label>
                        <Select
                        className="react-select primary"
                        classNamePrefix="react-select"
                        id="sub_cse"
                        name="sub_cse"
                        value={sub_cse}
                        onChange={(value) => setsub_cse(value)}
                        options={[
                            {
                            value: "0",
                            label: "Sin un Grupo Seleccionado",
                            isDisabled: true,
                            },
                            { value: "1", label: "Grupo 1" },
                            { value: "2", label: "Grupo 2" },
                        ]}
                        placeholder="Selecione"
                        />
                    </Col>
                    <Col sm="2">
                        <label>Subgrupo de Producto</label>
                        <Select
                        className="react-select primary"
                        classNamePrefix="react-select"
                        id="sub_subcse"
                        name="sub_subcse"
                        value={sub_subcse}
                        onChange={(value) => setsub_subcse(value)}
                        options={[
                            {
                            value: "0",
                            label: "Sin un Subgrupo Seleccionado",
                            isDisabled: true,
                            },
                            { value: "1", label: "Subgrupo 1" },
                            { value: "2", label: "Subgrupo 2" },
                        ]}
                        placeholder="Selecione"
                        />
                    </Col>
                    <Col sm="4">
                            <label>Descripción (Inglés)</label>
                            <FormGroup>
                                <Input placeholder="Descripción (Inglés)" type="text" id="desc_prod2" name="desc_prod2" onChange={(e) =>{
                                    setdesc_prod2(e.target.value)
                                    }} />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                    <Col sm="12">
                        <label>Descripción (Larga)</label>
                        <FormGroup>
                            <Input placeholder="Descripción (Larga)" type="text" id="desc1" name="desc1" onChange={(e) =>{
                                setdesc1(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    </Row>
                    <Row>
                    <Col sm="12">
                        <label>Descripción (Larga Inglés)</label>
                        <FormGroup>
                            <Input placeholder="Descripción (Larga Inglés)" type="text" id="desc2" name="desc2" onChange={(e) =>{
                                setdesc2(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    </Row>
                    <Row>
                    <Col sm="2">
                        <label>¿Producto o Servicio?</label>
                        <Select
                        className="react-select primary"
                        classNamePrefix="react-select"
                        id="staclas1"
                        name="staclas1"
                        value={staclas1}
                        onChange={(value) => setstaclas1(value)}
                        options={[
                            {
                            value: "0",
                            label: "Sin una Selección",
                            isDisabled: true,
                            },
                            { value: "1", label: "Producto" },
                            { value: "2", label: "Servicio" },
                        ]}
                        placeholder="Selecione"
                        />
                    </Col>
                    <Col sm="2">
                        <label>¿Kit?</label>
                        <Select
                        className="react-select primary"
                        classNamePrefix="react-select"
                        id="kit"
                        name="kit"
                        value={kit}
                        onChange={(value) => setkit(value)}
                        options={[
                            {
                            value: "0",
                            label: "Sin una Selección",
                            isDisabled: true,
                            },
                            { value: "1", label: "NO" },
                            { value: "2", label: "SI" },
                        ]}
                        placeholder="Selecione"
                        />
                    </Col>
                    <Col sm="2">
                        <label>IVA por Tipo</label>
                        <Select
                        className="react-select primary"
                        classNamePrefix="react-select"
                        id="staiva"
                        name="staiva"
                        value={staiva}
                        onChange={(value) => setstaiva(value)}
                        options={[
                            {
                            value: "0",
                            label: "Sin una Selección",
                            isDisabled: true,
                            },
                            { value: "1", label: "Prov/Clie" },
                            { value: "2", label: "Especifico por Producto" },
                            { value: "3", label: "Exento" },
                        ]}
                        placeholder="Selecione"
                        />
                    </Col>
                    <Col sm="3">
                        <label>Fracción Arancelaria</label>
                        <FormGroup>
                            <Input placeholder="Fracción Arancelaria" type="text" id="frac_aranc" name="frac_aranc" onChange={(e) =>{
                                setfrac_aranc(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="3">
                        <label>% Advalorem</label>
                        <FormGroup>
                            <Input placeholder="% Advalorem" type="number" id="porcadvalo" name="porcadvalo" onChange={(e) =>{
                                setporcadvalo(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    </Row>
                    <Row>
                    <Col sm="2">
                        <label>Retensión de IVA</label>
                        <Select
                        className="react-select primary"
                        classNamePrefix="react-select"
                        id="staretiva"
                        name="staretiva"
                        value={staretiva}
                        onChange={(value) => setstaretiva(value)}
                        options={[
                            {
                            value: "0",
                            label: "Sin una Selección",
                            isDisabled: true,
                            },
                            { value: "1", label: "Prov/Clie" },
                            { value: "2", label: "Especifico por Producto" },
                            { value: "3", label: "Exento" },
                        ]}
                        placeholder="Selecione"
                        />
                    </Col>
                    <Col sm="2">
                        <label>Factor de Peso</label>
                        <FormGroup>
                            <Input placeholder="Factor de Peso" type="text" id="fact_peso" name="fact_peso" onChange={(e) =>{
                                setfact_peso(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Precio en Base a Costo Rep</label>
                        <Select
                        className="react-select primary"
                        classNamePrefix="react-select"
                        id="base_prom"
                        name="base_prom"
                        value={base_prom}
                        onChange={(value) => setbase_prom(value)}
                        options={[
                            {
                            value: "0",
                            label: "Sin una Selección",
                            isDisabled: true,
                            },
                            { value: "1", label: "NO" },
                            { value: "2", label: "SI" },
                        ]}
                        placeholder="Selecione"
                        />
                    </Col>
                    <Col sm="2">
                        <label>Existencia en Base a L/S/P</label>
                        <Select
                        className="react-select primary"
                        classNamePrefix="react-select"
                        id="stalote"
                        name="stalote"
                        value={stalote}
                        onChange={(value) => setstalote(value)}
                        options={[
                            {
                            value: "0",
                            label: "Sin una Selección",
                            isDisabled: true,
                            },
                            { value: "1", label: "NO" },
                            { value: "2", label: "SI" },
                            { value: "2", label: "Captura Manual" },
                        ]}
                        placeholder="Selecione"
                        />
                    </Col>
                    <Col sm="2">
                        <label>Días de Vida de Lote</label>
                        <FormGroup>
                            <Input placeholder="Días de Vida" type="number" id="diasvida" name="diasvida" onChange={(e) =>{
                                setdiasvida(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Moneda</label>
                        <Select
                        className="react-select primary"
                        classNamePrefix="react-select"
                        id="cve_monc"
                        name="cve_monc"
                        value={cve_monc}
                        onChange={(value) => setcve_monc(value)}
                        options={[
                            {
                            value: "0",
                            label: "Sin una Selección",
                            isDisabled: true,
                            },
                            { value: "1", label: "Pesos" },
                            { value: "2", label: "Dólares" },
                        ]}
                        placeholder="Selecione"
                        />
                    </Col>
                    </Row>
                    <Row>
                    <Col sm="2">
                        <label>Costo de Reposición</label>
                        <FormGroup>
                            <Input placeholder="Costo de Reposición" type="number" id="cto_ent" name="cto_ent" onChange={(e) =>{
                                setcto_ent(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Moneda Lista de Precios</label>
                        <Select
                        className="react-select primary"
                        classNamePrefix="react-select"
                        id="cve_monp"
                        name="cve_monp"
                        value={cve_monp}
                        onChange={(value) => setcve_monp(value)}
                        options={[
                            {
                            value: "0",
                            label: "Sin una Selección",
                            isDisabled: true,
                            },
                            { value: "1", label: "Pesos" },
                            { value: "2", label: "Dólares" },
                        ]}
                        placeholder="Selecione"
                        />
                    </Col>
                    <Col sm="2">
                        <label>Última Actualización</label>
                        <FormGroup>
                        <ReactDatetime
                            inputProps={{
                            className: "form-control",
                            placeholder: "Última Actualización",
                            }}
                            timeFormat={false}
                            id="f_act_pre" name="f_act_pre" onChange={(e) =>{
                            setf_act_pre(e.target.value)
                            }}
                        />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Precio Lista 1</label>
                        <FormGroup>
                            <Input placeholder="Precio Lista 1" type="number" id="prec_prod" name="prec_prod" onChange={(e) =>{
                                setprec_prod(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Precio Lista 2</label>
                        <FormGroup>
                            <Input placeholder="Precio Lista 2" type="number" id="prec_prod2" name="prec_prod" onChange={(e) =>{
                                setprec_prod2(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Precio Lista 3</label>
                        <FormGroup>
                            <Input placeholder="Precio Lista 3" type="number" id="prec_prod3" name="prec_prod3" onChange={(e) =>{
                                setprec_prod3(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    </Row>
                    <Row>
                    <Col sm="2">
                        <label>Precio Lista 4</label>
                        <FormGroup>
                            <Input placeholder="Precio Lista 4" type="number" id="prec_prod4" name="prec_prod4" onChange={(e) =>{
                                setprec_prod4(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Precio Lista 5</label>
                        <FormGroup>
                            <Input placeholder="Precio Lista 5" type="number" id="prec_prod5" name="prec_prod5" onChange={(e) =>{
                                setprec_prod5(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Precio Lista 6</label>
                        <FormGroup>
                            <Input placeholder="Precio Lista 6" type="number" id="prec_prod6" name="prec_prod6" onChange={(e) =>{
                                setprec_prod6(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Margen 1</label>
                        <FormGroup>
                            <Input placeholder="Margen 1" type="number" id="margen" name="margen" onChange={(e) =>{
                                setmargen(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Margen 2</label>
                        <FormGroup>
                            <Input placeholder="Margen 2" type="number" id="margen2" name="margen2" onChange={(e) =>{
                                setmargen2(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Margen 3</label>
                        <FormGroup>
                            <Input placeholder="Margen 3" type="number" id="margen3" name="margen3" onChange={(e) =>{
                                setmargen3(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    </Row>
                    <Row>
                    <Col sm="2">
                        <label>Margen 4</label>
                        <FormGroup>
                            <Input placeholder="Margen 4" type="number" id="margen4" name="margen4" onChange={(e) =>{
                                setmargen4(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Margen 5</label>
                        <FormGroup>
                            <Input placeholder="Margen 5" type="number" id="margen5" name="margen5" onChange={(e) =>{
                                setmargen5(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Margen 6</label>
                        <FormGroup>
                            <Input placeholder="Margen 6" type="number" id="margen6" name="margen6" onChange={(e) =>{
                                setmargen6(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Descuento 1-1</label>
                        <FormGroup>
                            <Input placeholder="Descuento 1-1" type="number" id="dcto1p1" name="dcto1p1" onChange={(e) =>{
                                setdcto1p1(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Descuento 2-1</label>
                        <FormGroup>
                            <Input placeholder="Descuento 2-1" type="number" id="dcto2p1" name="dcto2p1" onChange={(e) =>{
                                setdcto2p1(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Descuento 1-2</label>
                        <FormGroup>
                            <Input placeholder="Descuento 1-2" type="number" id="dcto1p2" name="dcto1p2" onChange={(e) =>{
                                setdcto1p2(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    </Row>
                    <Row>
                    <Col sm="2">
                        <label>Descuento 2-2</label>
                        <FormGroup>
                            <Input placeholder="Descuento 2-2" type="number" id="dcto2p2" name="dcto2p2" onChange={(e) =>{
                                setdcto2p2(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Descuento 1-3</label>
                        <FormGroup>
                            <Input placeholder="Descuento 1-3" type="number" id="dcto1p3" name="dcto1p3" onChange={(e) =>{
                                setdcto1p3(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Descuento 2-3</label>
                        <FormGroup>
                            <Input placeholder="Descuento 2-3" type="number" id="dcto2p3" name="dcto2p3" onChange={(e) =>{
                                setdcto2p3(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Descuento 1-4</label>
                        <FormGroup>
                            <Input placeholder="Descuento 1-4" type="number" id="dcto1p4" name="dcto1p4" onChange={(e) =>{
                                setdcto1p4(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Descuento 2-4</label>
                        <FormGroup>
                            <Input placeholder="Descuento 2-4" type="number" id="dcto2p4" name="dcto2p4" onChange={(e) =>{
                                setdcto2p4(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Descuento 1-5</label>
                        <FormGroup>
                            <Input placeholder="Descuento 1-5" type="number" id="dcto1p5" name="dcto1p5" onChange={(e) =>{
                                setdcto1p5(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    </Row>
                    <Row>
                    <Col sm="2">
                        <label>Descuento 2-5</label>
                        <FormGroup>
                            <Input placeholder="Descuento 2-5" type="number" id="dcto2p5" name="dcto2p5" onChange={(e) =>{
                                setdcto2p5(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Descuento 1-6</label>
                        <FormGroup>
                            <Input placeholder="Descuento 1-6" type="number" id="dcto1p6" name="dcto1p6" onChange={(e) =>{
                                setdcto1p6(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Descuento 2-6</label>
                        <FormGroup>
                            <Input placeholder="Descuento 2-6" type="number" id="dcto2p6" name="dcto2p6" onChange={(e) =>{
                                setdcto2p6(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Margen minimo de venta</label>
                        <Select
                        className="react-select primary"
                        classNamePrefix="react-select"
                        id="mrgprod"
                        name="mrgprod"
                        value={mrgprod}
                        onChange={(value) => setmrgprod(value)}
                        options={[
                            {
                            value: "0",
                            label: "Sin una Selección",
                            isDisabled: true,
                            },
                            { value: "1", label: "NO" },
                            { value: "2", label: "SI" },
                        ]}
                        placeholder="Selecione"
                        />
                    </Col>
                    <Col sm="2">
                        <label>% Margen minimo</label>
                        <FormGroup>
                            <Input placeholder="% Margen minimo" type="number" id="porcmrg" name="porcmrg" onChange={(e) =>{
                                setporcmrg(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Dato 1</label>
                        <FormGroup>
                            <Input placeholder="Dato 1" type="number" id="dato_1" name="dato_1" onChange={(e) =>{
                                setdato_1(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    </Row>
                    <Row>
                    <Col sm="2">
                        <label>Dato 2</label>
                        <FormGroup>
                            <Input placeholder="Dato 2" type="number" id="dato_2" name="dato_2" onChange={(e) =>{
                                setdato_2(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Dato 3</label>
                        <FormGroup>
                            <Input placeholder="Dato 3" type="number" id="dato_3" name="dato_3" onChange={(e) =>{
                                setdato_3(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Dato 4</label>
                        <FormGroup>
                            <Input placeholder="Dato 4" type="number" id="dato_4" name="dato_4" onChange={(e) =>{
                                setdato_4(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Dato 5</label>
                        <FormGroup>
                            <Input placeholder="Dato 5" type="number" id="dato_5" name="dato_5" onChange={(e) =>{
                                setdato_5(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Dato 6</label>
                        <FormGroup>
                            <Input placeholder="Dato 6" type="number" id="dato_6" name="dato_6" onChange={(e) =>{
                                setdato_6(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Dato 7</label>
                        <FormGroup>
                            <Input placeholder="Dato 7" type="number" id="dato_7" name="dato_7" onChange={(e) =>{
                                setdato_7(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    </Row>
                    <Row>
                    <Col sm="2">
                        <label>Dato 8</label>
                        <FormGroup>
                            <Input placeholder="Dato 8" type="number" id="dato_8" name="dato_8" onChange={(e) =>{
                                setdato_8(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>IVA pitex</label>
                        <Select
                        className="react-select primary"
                        classNamePrefix="react-select"
                        id="stapitex"
                        name="stapitex"
                        value={stapitex}
                        onChange={(value) => setstapitex(value)}
                        options={[
                            {
                            value: "0",
                            label: "Sin una Selección",
                            isDisabled: true,
                            },
                            { value: "1", label: "NO" },
                            { value: "2", label: "SI" },
                        ]}
                        placeholder="Selecione"
                        />
                    </Col>
                    <Col sm="2">
                        <label>Código de Barras</label>
                        <FormGroup>
                            <Input placeholder="Código de Barras" type="number" id="codbar" name="codbar" onChange={(e) =>{
                                setcodbar(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>% IVA </label>
                        <FormGroup>
                            <Input placeholder="% IVA" type="number" id="porceniva" name="porceniva" onChange={(e) =>{
                                setporceniva(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="4">
                        <label>Nombre imagen (Cotizaciones)</label>
                        <FormGroup>
                            <Input placeholder="Nombre imagen (Cotizaciones)" type="text" id="imag_cot" name="imag_cot" onChange={(e) =>{
                                setimag_cot(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    </Row>
                    <Row>
                    <Col sm="4">
                        <label>Nombre imagen (Entrada e-commerce)</label>
                        <FormGroup>
                            <Input placeholder="Nombre imagen (Entrada e-commerce)" type="text" id="imag_ent" name="imag_ent" onChange={(e) =>{
                                setimag_ent(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="4">
                        <label>Nombre imagen (e-commerce)</label>
                        <FormGroup>
                            <Input placeholder="Nombre imagen (e-commerce)" type="text" id="imag_ecc" name="imag_ecc" onChange={(e) =>{
                                setimag_ecc(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Lista de Atributos</label>
                        <Select
                        className="react-select primary"
                        classNamePrefix="react-select"
                        id="lista_med"
                        name="lista_med"
                        value={lista_med}
                        onChange={(value) => setlista_med(value)}
                        options={[
                            {
                            value: "0",
                            label: "Sin una Selección",
                            isDisabled: true,
                            },
                            { value: "1", label: "Lista 1" },
                            { value: "2", label: "Lista 2" },
                        ]}
                        placeholder="Selecione"
                        />
                    </Col>
                    <Col sm="2">
                        <label>Manejo por Atributos</label>
                        <Select
                        className="react-select primary"
                        classNamePrefix="react-select"
                        id="gral_med"
                        name="gral_med"
                        value={gral_med}
                        onChange={(value) => setgral_med(value)}
                        options={[
                            {
                            value: "0",
                            label: "Sin una Selección",
                            isDisabled: true,
                            },
                            { value: "1", label: "NO" },
                            { value: "2", label: "SI" },
                        ]}
                        placeholder="Selecione"
                        />
                    </Col>
                    </Row>
                    <Row>
                    <Col sm="2">
                        <label>Manejo Precios por Atributos</label>
                        <Select
                        className="react-select primary"
                        classNamePrefix="react-select"
                        id="clie_med"
                        name="clie_med"
                        value={clie_med}
                        onChange={(value) => setclie_med(value)}
                        options={[
                            {
                            value: "0",
                            label: "Sin una Selección",
                            isDisabled: true,
                            },
                            { value: "1", label: "NO" },
                            { value: "2", label: "SI" },
                        ]}
                        placeholder="Selecione"
                        />
                    </Col>
                    <Col sm="2">
                        <label>Manejo Costo por Atributos</label>
                        <Select
                        className="react-select primary"
                        classNamePrefix="react-select"
                        id="prov_med"
                        name="prov_med"
                        value={prov_med}
                        onChange={(value) => setprov_med(value)}
                        options={[
                            {
                            value: "0",
                            label: "Sin una Selección",
                            isDisabled: true,
                            },
                            { value: "1", label: "NO" },
                            { value: "2", label: "SI" },
                        ]}
                        placeholder="Selecione"
                        />
                    </Col>
                    <Col sm="2">
                        <label>Manejo IMG por Atributos</label>
                        <Select
                        className="react-select primary"
                        classNamePrefix="react-select"
                        id="imag_med"
                        name="imag_med"
                        value={imag_med}
                        onChange={(value) => setimag_med(value)}
                        options={[
                            {
                            value: "0",
                            label: "Sin una Selección",
                            isDisabled: true,
                            },
                            { value: "1", label: "NO" },
                            { value: "2", label: "SI" },
                        ]}
                        placeholder="Selecione"
                        />
                    </Col>
                    <Col sm="2">
                        <label>MAX/MIN/PR por Atributos</label>
                        <Select
                        className="react-select primary"
                        classNamePrefix="react-select"
                        id="maxm_med"
                        name="maxm_med"
                        value={maxm_med}
                        onChange={(value) => setmaxm_med(value)}
                        options={[
                            {
                            value: "0",
                            label: "Sin una Selección",
                            isDisabled: true,
                            },
                            { value: "1", label: "NO" },
                            { value: "2", label: "SI" },
                        ]}
                        placeholder="Selecione"
                        />
                    </Col>
                    <Col sm="2">
                        <label>Rango Inicial L1</label>
                        <FormGroup>
                            <Input placeholder="Rango Inicial L1" type="number" id="excdesd1" name="excdesd1" onChange={(e) =>{
                                setexcdesd1(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Rango Final L1</label>
                        <FormGroup>
                            <Input placeholder="Rango Final L1" type="number" id="exchast1" name="exchast1" onChange={(e) =>{
                                setexchast1(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    </Row>
                    <Row>
                    <Col sm="2">
                        <label>Rango Inicial L2</label>
                        <FormGroup>
                            <Input placeholder="Rango Inicial L2" type="number" id="excdesd2" name="excdesd2" onChange={(e) =>{
                                setexcdesd2(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Rango Final L2</label>
                        <FormGroup>
                            <Input placeholder="Rango Final L2" type="number" id="exchast2" name="exchast2" onChange={(e) =>{
                                setexchast2(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Rango Inicial L3</label>
                        <FormGroup>
                            <Input placeholder="Rango Inicial L3" type="number" id="excdesd3" name="excdesd3" onChange={(e) =>{
                                setexcdesd3(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Rango Final L3</label>
                        <FormGroup>
                            <Input placeholder="Rango Final L3" type="number" id="exchast3" name="exchast3" onChange={(e) =>{
                                setexchast3(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Rango Inicial L4</label>
                        <FormGroup>
                            <Input placeholder="Rango Inicial L4" type="number" id="excdesd4" name="excdesd4" onChange={(e) =>{
                                setexcdesd4(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Rango Final L4</label>
                        <FormGroup>
                            <Input placeholder="Rango Final L4" type="number" id="exchast4" name="exchast4" onChange={(e) =>{
                                setexchast4(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    </Row>
                    <Row>
                    <Col sm="2">
                        <label>Rango Inicial L5</label>
                        <FormGroup>
                            <Input placeholder="Rango Inicial L5" type="number" id="excdesd5" name="excdesd5" onChange={(e) =>{
                                setexcdesd5(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Rango Final L5</label>
                        <FormGroup>
                            <Input placeholder="Rango Final L5" type="number" id="exchast5" name="exchast5" onChange={(e) =>{
                                setexchast5(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Rango Inicial L6</label>
                        <FormGroup>
                            <Input placeholder="Rango Inicial L6" type="number" id="excdesd6" name="excdesd6" onChange={(e) =>{
                                setexcdesd6(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Rango Final L6</label>
                        <FormGroup>
                            <Input placeholder="Rango Final L6" type="number" id="exchast6" name="exchast6" onChange={(e) =>{
                                setexchast6(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Retención ISR</label>
                        <Select
                        className="react-select primary"
                        classNamePrefix="react-select"
                        id="staretisr"
                        name="staretisr"
                        value={staretisr}
                        onChange={(value) => setstaretisr(value)}
                        options={[
                            {
                            value: "0",
                            label: "Sin una Selección",
                            isDisabled: true,
                            },
                            { value: "1", label: "Prov/Clie" },
                            { value: "2", label: "Por Producto" },
                            { value: "3", label: "Sin Retención" },
                        ]}
                        placeholder="Selecione"
                        />
                    </Col>
                    <Col sm="2">
                        <label>Proveedor 1</label>
                        <Select
                        className="react-select primary"
                        classNamePrefix="react-select"
                        id="prov1"
                        name="prov1"
                        value={prov1}
                        onChange={(value) => setprov1(value)}
                        options={[
                            {
                            value: "0",
                            label: "Sin una Selección",
                            isDisabled: true,
                            },
                            { value: "1", label: "Proveedor 1" },
                            { value: "2", label: "Proveedor 2" },
                            { value: "3", label: "Proveedor 3" },
                        ]}
                        placeholder="Selecione"
                        />
                    </Col>
                    </Row>
                    <Row>
                    <Col sm="2">
                        <label>Proveedor 2</label>
                        <Select
                        className="react-select primary"
                        classNamePrefix="react-select"
                        id="prov2"
                        name="prov2"
                        value={prov2}
                        onChange={(value) => setprov2(value)}
                        options={[
                            {
                            value: "0",
                            label: "Sin una Selección",
                            isDisabled: true,
                            },
                            { value: "1", label: "Proveedor 1" },
                            { value: "2", label: "Proveedor 2" },
                            { value: "3", label: "Proveedor 3" },
                        ]}
                        placeholder="Selecione"
                        />
                    </Col>
                    <Col sm="2">
                        <label>Proveedor 3</label>
                        <Select
                        className="react-select primary"
                        classNamePrefix="react-select"
                        id="prov3"
                        name="prov3"
                        value={prov3}
                        onChange={(value) => setprov3(value)}
                        options={[
                            {
                            value: "0",
                            label: "Sin una Selección",
                            isDisabled: true,
                            },
                            { value: "1", label: "Proveedor 1" },
                            { value: "2", label: "Proveedor 2" },
                            { value: "3", label: "Proveedor 3" },
                        ]}
                        placeholder="Selecione"
                        />
                    </Col>
                    <Col sm="2">
                        <label>Proveedor 4</label>
                        <Select
                        className="react-select primary"
                        classNamePrefix="react-select"
                        id="prov4"
                        name="prov4"
                        value={prov4}
                        onChange={(value) => setprov4(value)}
                        options={[
                            {
                            value: "0",
                            label: "Sin una Selección",
                            isDisabled: true,
                            },
                            { value: "1", label: "Proveedor 1" },
                            { value: "2", label: "Proveedor 2" },
                            { value: "3", label: "Proveedor 3" },
                        ]}
                        placeholder="Selecione"
                        />
                    </Col>
                    <Col sm="2">
                        <label>Proveedor 5</label>
                        <Select
                        className="react-select primary"
                        classNamePrefix="react-select"
                        id="prov5"
                        name="prov5"
                        value={cve_iva}
                        onChange={(value) => setprov5(value)}
                        options={[
                            {
                            value: "0",
                            label: "Sin una Selección",
                            isDisabled: true,
                            },
                            { value: "1", label: "Proveedor 1" },
                            { value: "2", label: "Proveedor 2" },
                            { value: "3", label: "Proveedor 3" },
                        ]}
                        placeholder="Selecione"
                        />
                    </Col>
                    <Col sm="2">
                        <label>Proveedor 6</label>
                        <Select
                        className="react-select primary"
                        classNamePrefix="react-select"
                        id="prov6"
                        name="prov6"
                        value={prov6}
                        onChange={(value) => setprov6(value)}
                        options={[
                            {
                            value: "0",
                            label: "Sin una Selección",
                            isDisabled: true,
                            },
                            { value: "1", label: "Proveedor 1" },
                            { value: "2", label: "Proveedor 2" },
                            { value: "3", label: "Proveedor 3" },
                        ]}
                        placeholder="Selecione"
                        />
                    </Col>
                    <Col sm="2">
                        <label>Proveedor 7</label>
                        <Select
                        className="react-select primary"
                        classNamePrefix="react-select"
                        id="prov7"
                        name="prov7"
                        value={cve_iva}
                        onChange={(value) => setprov7(value)}
                        options={[
                            {
                            value: "0",
                            label: "Sin una Selección",
                            isDisabled: true,
                            },
                            { value: "1", label: "Proveedor 1" },
                            { value: "2", label: "Proveedor 2" },
                            { value: "3", label: "Proveedor 3" },
                        ]}
                        placeholder="Selecione"
                        />
                    </Col>
                    </Row>
                    <Row>
                    <Col sm="2">
                        <label>Proveedor 8</label>
                        <Select
                        className="react-select primary"
                        classNamePrefix="react-select"
                        id="prov8"
                        name="prov8"
                        value={prov8}
                        onChange={(value) => setprov8(value)}
                        options={[
                            {
                            value: "0",
                            label: "Sin una Selección",
                            isDisabled: true,
                            },
                            { value: "1", label: "Proveedor 1" },
                            { value: "2", label: "Proveedor 2" },
                            { value: "3", label: "Proveedor 3" },
                        ]}
                        placeholder="Selecione"
                        />
                    </Col>
                    <Col sm="2">
                        <label>Proveedor 9</label>
                        <Select
                        className="react-select primary"
                        classNamePrefix="react-select"
                        id="prov9"
                        name="prov9"
                        value={prov9}
                        onChange={(value) => setprov9(value)}
                        options={[
                            {
                            value: "0",
                            label: "Sin una Selección",
                            isDisabled: true,
                            },
                            { value: "1", label: "Proveedor 1" },
                            { value: "2", label: "Proveedor 2" },
                            { value: "3", label: "Proveedor 3" },
                        ]}
                        placeholder="Selecione"
                        />
                    </Col>
                    <Col sm="2">
                        <label>Proveedor 10</label>
                        <Select
                        className="react-select primary"
                        classNamePrefix="react-select"
                        id="prov10"
                        name="prov10"
                        value={prov10}
                        onChange={(value) => setprov10(value)}
                        options={[
                            {
                            value: "0",
                            label: "Sin una Selección",
                            isDisabled: true,
                            },
                            { value: "1", label: "Proveedor 1" },
                            { value: "2", label: "Proveedor 2" },
                            { value: "3", label: "Proveedor 3" },
                        ]}
                        placeholder="Selecione"
                        />
                    </Col>
                    <Col sm="2">
                        <label>Unidad AC 1</label>
                        <Select
                        className="react-select primary"
                        classNamePrefix="react-select"
                        id="unidad1"
                        name="unidad1"
                        value={unidad1}
                        onChange={(value) => setunidad1(value)}
                        options={[
                            {
                            value: "0",
                            label: "Sin una Selección",
                            isDisabled: true,
                            },
                            { value: "1", label: "TON" },
                            { value: "2", label: "CM" },
                            { value: "3", label: "GR" },
                        ]}
                        placeholder="Selecione"
                        />
                    </Col>
                    <Col sm="2">
                        <label>Unidad AC 2</label>
                        <Select
                        className="react-select primary"
                        classNamePrefix="react-select"
                        id="unidad2"
                        name="unidad2"
                        value={unidad2}
                        onChange={(value) => setunidad2(value)}
                        options={[
                            {
                            value: "0",
                            label: "Sin una Selección",
                            isDisabled: true,
                            },
                            { value: "1", label: "TON" },
                            { value: "2", label: "CM" },
                            { value: "3", label: "GR" },
                        ]}
                        placeholder="Selecione"
                        />
                    </Col>
                    <Col sm="2">
                        <label>Unidad AC 3</label>
                        <Select
                        className="react-select primary"
                        classNamePrefix="react-select"
                        id="unidad3"
                        name="unidad3"
                        value={unidad3}
                        onChange={(value) => setunidad3(value)}
                        options={[
                            {
                            value: "0",
                            label: "Sin una Selección",
                            isDisabled: true,
                            },
                            { value: "1", label: "TON" },
                            { value: "2", label: "CM" },
                            { value: "3", label: "GR" },
                        ]}
                        placeholder="Selecione"
                        />
                    </Col>
                    </Row>
                    <Row>
                    <Col sm="2">
                        <label>Unidad AC 4</label>
                        <Select
                        className="react-select primary"
                        classNamePrefix="react-select"
                        id="unidad4"
                        name="unidad4"
                        value={unidad4}
                        onChange={(value) => setunidad4(value)}
                        options={[
                            {
                            value: "0",
                            label: "Sin una Selección",
                            isDisabled: true,
                            },
                            { value: "1", label: "TON" },
                            { value: "2", label: "CM" },
                            { value: "3", label: "GR" },
                        ]}
                        placeholder="Selecione"
                        />
                    </Col>
                    <Col sm="2">
                        <label>Unidad AC 5</label>
                        <Select
                        className="react-select primary"
                        classNamePrefix="react-select"
                        id="unidad5"
                        name="unidad5"
                        value={unidad5}
                        onChange={(value) => setunidad5(value)}
                        options={[
                            {
                            value: "0",
                            label: "Sin una Selección",
                            isDisabled: true,
                            },
                            { value: "1", label: "TON" },
                            { value: "2", label: "CM" },
                            { value: "3", label: "GR" },
                        ]}
                        placeholder="Selecione"
                        />
                    </Col>
                    <Col sm="2">
                        <label>Unidad AC 6</label>
                        <Select
                        className="react-select primary"
                        classNamePrefix="react-select"
                        id="unidad6"
                        name="unidad6"
                        value={unidad6}
                        onChange={(value) => setunidad6(value)}
                        options={[
                            {
                            value: "0",
                            label: "Sin una Selección",
                            isDisabled: true,
                            },
                            { value: "1", label: "TON" },
                            { value: "2", label: "CM" },
                            { value: "3", label: "GR" },
                        ]}
                        placeholder="Selecione"
                        />
                    </Col>
                    <Col sm="2">
                        <label>Unidad AC 7</label>
                        <Select
                        className="react-select primary"
                        classNamePrefix="react-select"
                        id="unidad7"
                        name="unidad7"
                        value={unidad7}
                        onChange={(value) => setunidad7(value)}
                        options={[
                            {
                            value: "0",
                            label: "Sin una Selección",
                            isDisabled: true,
                            },
                            { value: "1", label: "TON" },
                            { value: "2", label: "CM" },
                            { value: "3", label: "GR" },
                        ]}
                        placeholder="Selecione"
                        />
                    </Col>
                    <Col sm="2">
                        <label>Unidad AC 8</label>
                        <Select
                        className="react-select primary"
                        classNamePrefix="react-select"
                        id="unidad8"
                        name="unidad8"
                        value={unidad8}
                        onChange={(value) => setunidad8(value)}
                        options={[
                            {
                            value: "0",
                            label: "Sin una Selección",
                            isDisabled: true,
                            },
                            { value: "1", label: "TON" },
                            { value: "2", label: "CM" },
                            { value: "3", label: "GR" },
                        ]}
                        placeholder="Selecione"
                        />
                    </Col>
                    <Col sm="2">
                        <label>Unidad AC 9</label>
                        <Select
                        className="react-select primary"
                        classNamePrefix="react-select"
                        id="unidad9"
                        name="unidad9"
                        value={unidad9}
                        onChange={(value) => setunidad9(value)}
                        options={[
                            {
                            value: "0",
                            label: "Sin una Selección",
                            isDisabled: true,
                            },
                            { value: "1", label: "TON" },
                            { value: "2", label: "CM" },
                            { value: "3", label: "GR" },
                        ]}
                        placeholder="Selecione"
                        />
                    </Col>
                    </Row>
                    <Row>
                    <Col sm="2">
                        <label>Unidad AC 10</label>
                        <Select
                        className="react-select primary"
                        classNamePrefix="react-select"
                        id="unidad10"
                        name="unidad10"
                        value={unidad10}
                        onChange={(value) => setunidad10(value)}
                        options={[
                            {
                            value: "0",
                            label: "Sin una Selección",
                            isDisabled: true,
                            },
                            { value: "1", label: "TON" },
                            { value: "2", label: "CM" },
                            { value: "3", label: "GR" },
                        ]}
                        placeholder="Selecione"
                        />
                    </Col>
                    <Col sm="2">
                        <label>Factor de Conversión 1</label>
                        <FormGroup>
                            <Input placeholder="Factor 1" type="number" id="factor1" name="factor1" onChange={(e) =>{
                                setfactor1(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Factor de Conversión 2</label>
                        <FormGroup>
                            <Input placeholder="Factor 2" type="number" id="factor2" name="factor2" onChange={(e) =>{
                                setfactor2(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Factor de Conversión 3</label>
                        <FormGroup>
                            <Input placeholder="Factor 3" type="number" id="factor3" name="factor3" onChange={(e) =>{
                                setfactor3(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Factor de Conversión 4</label>
                        <FormGroup>
                            <Input placeholder="Factor 4" type="number" id="factor4" name="factor4" onChange={(e) =>{
                                setfactor4(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Factor de Conversión 5</label>
                        <FormGroup>
                            <Input placeholder="Factor 5" type="number" id="factor5" name="factor5" onChange={(e) =>{
                                setfactor5(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    </Row>
                    <Row>
                    <Col sm="2">
                        <label>Factor de Conversión 6</label>
                        <FormGroup>
                            <Input placeholder="Factor 6" type="number" id="factor6" name="factor6" onChange={(e) =>{
                                setfactor6(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Factor de Conversión 7</label>
                        <FormGroup>
                            <Input placeholder="Factor 7" type="number" id="factor7" name="factor7" onChange={(e) =>{
                                setfactor7(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Factor de Conversión 8</label>
                        <FormGroup>
                            <Input placeholder="Factor 8" type="number" id="factor8" name="factor8" onChange={(e) =>{
                                setfactor8(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Factor de Conversión 9</label>
                        <FormGroup>
                            <Input placeholder="Factor 9" type="number" id="factor9" name="factor9" onChange={(e) =>{
                                setfactor9(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Factor de Conversión 10</label>
                        <FormGroup>
                            <Input placeholder="Factor 10" type="number" id="factor10" name="factor10" onChange={(e) =>{
                                setfactor10(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>CB Unidad 1</label>
                        <FormGroup>
                            <Input placeholder="CB 1" type="number" id="codbarun1" name="codbarun1" onChange={(e) =>{
                                setcodbarun1(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    </Row>
                    <Row>
                    <Col sm="2">
                        <label>CB Unidad 2</label>
                        <FormGroup>
                            <Input placeholder="CB 2" type="number" id="codbarun2" name="codbarun2" onChange={(e) =>{
                                setcodbarun2(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>CB Unidad 3</label>
                        <FormGroup>
                            <Input placeholder="CB 3" type="number" id="codbarun3" name="codbarun3" onChange={(e) =>{
                                setcodbarun3(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>CB Unidad 4</label>
                        <FormGroup>
                            <Input placeholder="CB 4" type="number" id="codbarun4" name="codbarun4" onChange={(e) =>{
                                setcodbarun4(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>CB Unidad 5</label>
                        <FormGroup>
                            <Input placeholder="CB 5" type="number" id="codbarun5" name="codbarun5" onChange={(e) =>{
                                setcodbarun5(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>CB Unidad 6</label>
                        <FormGroup>
                            <Input placeholder="CB 6" type="number" id="codbarun6" name="codbarun6" onChange={(e) =>{
                                setcodbarun6(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>CB Unidad 7</label>
                        <FormGroup>
                            <Input placeholder="CB 7" type="number" id="codbarun7" name="codbarun7" onChange={(e) =>{
                                setcodbarun7(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    </Row>
                    <Row>
                    <Col sm="2">
                        <label>CB Unidad 8</label>
                        <FormGroup>
                            <Input placeholder="CB 8" type="number" id="codbarun8" name="codbarun8" onChange={(e) =>{
                                setcodbarun8(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>CB Unidad 9</label>
                        <FormGroup>
                            <Input placeholder="CB 9" type="number" id="codbarun9" name="codbarun9" onChange={(e) =>{
                                setcodbarun9(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>CB Unidad 10</label>
                        <FormGroup>
                            <Input placeholder="CB 10" type="number" id="codbarun10" name="codbarun10" onChange={(e) =>{
                                setcodbarun10(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Almacén 1</label>
                        <Select
                        className="react-select primary"
                        classNamePrefix="react-select"
                        id="xlugar1"
                        name="xlugar1"
                        value={xlugar1}
                        onChange={(value) => setxlugar1(value)}
                        options={[
                            {
                            value: "0",
                            label: "Sin una Selección",
                            isDisabled: true,
                            },
                            { value: "1", label: "Almacén 1" },
                            { value: "2", label: "Almacén 2" },
                            { value: "3", label: "Almacén 3" },
                        ]}
                        placeholder="Selecione"
                        />
                    </Col>
                    <Col sm="2">
                        <label>Almacén 2</label>
                        <Select
                        className="react-select primary"
                        classNamePrefix="react-select"
                        id="xlugar2"
                        name="xlugar2"
                        value={xlugar2}
                        onChange={(value) => setxlugar2(value)}
                        options={[
                            {
                            value: "0",
                            label: "Sin una Selección",
                            isDisabled: true,
                            },
                            { value: "1", label: "Almacén 1" },
                            { value: "2", label: "Almacén 2" },
                            { value: "3", label: "Almacén 3" },
                        ]}
                        placeholder="Selecione"
                        />
                    </Col>
                    <Col sm="2">
                        <label>Almacén 3</label>
                        <Select
                        className="react-select primary"
                        classNamePrefix="react-select"
                        id="xlugar3"
                        name="xlugar3"
                        value={xlugar3}
                        onChange={(value) => setxlugar3(value)}
                        options={[
                            {
                            value: "0",
                            label: "Sin una Selección",
                            isDisabled: true,
                            },
                            { value: "1", label: "Almacén 1" },
                            { value: "2", label: "Almacén 2" },
                            { value: "3", label: "Almacén 3" },
                        ]}
                        placeholder="Selecione"
                        />
                    </Col>
                    </Row>
                    <Row>
                    <Col sm="2">
                        <label>Almacén 4</label>
                        <Select
                        className="react-select primary"
                        classNamePrefix="react-select"
                        id="xlugar4"
                        name="xlugar4"
                        value={xlugar4}
                        onChange={(value) => setxlugar4(value)}
                        options={[
                            {
                            value: "0",
                            label: "Sin una Selección",
                            isDisabled: true,
                            },
                            { value: "1", label: "Almacén 1" },
                            { value: "2", label: "Almacén 2" },
                            { value: "3", label: "Almacén 3" },
                        ]}
                        placeholder="Selecione"
                        />
                    </Col>
                    <Col sm="2">
                        <label>Almacén 5</label>
                        <Select
                        className="react-select primary"
                        classNamePrefix="react-select"
                        id="xlugar5"
                        name="xlugar5"
                        value={xlugar5}
                        onChange={(value) => setxlugar5(value)}
                        options={[
                            {
                            value: "0",
                            label: "Sin una Selección",
                            isDisabled: true,
                            },
                            { value: "1", label: "Almacén 1" },
                            { value: "2", label: "Almacén 2" },
                            { value: "3", label: "Almacén 3" },
                        ]}
                        placeholder="Selecione"
                        />
                    </Col>
                    <Col sm="2">
                        <label>Almacén 6</label>
                        <Select
                        className="react-select primary"
                        classNamePrefix="react-select"
                        id="xlugar6"
                        name="xlugar6"
                        value={xlugar6}
                        onChange={(value) => setxlugar6(value)}
                        options={[
                            {
                            value: "0",
                            label: "Sin una Selección",
                            isDisabled: true,
                            },
                            { value: "1", label: "Almacén 1" },
                            { value: "2", label: "Almacén 2" },
                            { value: "3", label: "Almacén 3" },
                        ]}
                        placeholder="Selecione"
                        />
                    </Col>
                    <Col sm="2">
                        <label>Almacén 7</label>
                        <Select
                        className="react-select primary"
                        classNamePrefix="react-select"
                        id="xlugar7"
                        name="xlugar7"
                        value={xlugar7}
                        onChange={(value) => setxlugar7(value)}
                        options={[
                            {
                            value: "0",
                            label: "Sin una Selección",
                            isDisabled: true,
                            },
                            { value: "1", label: "Almacén 1" },
                            { value: "2", label: "Almacén 2" },
                            { value: "3", label: "Almacén 3" },
                        ]}
                        placeholder="Selecione"
                        />
                    </Col>
                    <Col sm="2">
                        <label>Almacén 8</label>
                        <Select
                        className="react-select primary"
                        classNamePrefix="react-select"
                        id="xlugar8"
                        name="xlugar8"
                        value={xlugar8}
                        onChange={(value) => setxlugar8(value)}
                        options={[
                            {
                            value: "0",
                            label: "Sin una Selección",
                            isDisabled: true,
                            },
                            { value: "1", label: "Almacén 1" },
                            { value: "2", label: "Almacén 2" },
                            { value: "3", label: "Almacén 3" },
                        ]}
                        placeholder="Selecione"
                        />
                    </Col>
                    <Col sm="2">
                        <label>Almacén 9</label>
                        <Select
                        className="react-select primary"
                        classNamePrefix="react-select"
                        id="xlugar9"
                        name="xlugar9"
                        value={xlugar9}
                        onChange={(value) => setxlugar9(value)}
                        options={[
                            {
                            value: "0",
                            label: "Sin una Selección",
                            isDisabled: true,
                            },
                            { value: "1", label: "Almacén 1" },
                            { value: "2", label: "Almacén 2" },
                            { value: "3", label: "Almacén 3" },
                        ]}
                        placeholder="Selecione"
                        />
                    </Col>
                    </Row>
                    <Row>
                    <Col sm="2">
                        <label>Almacén 10</label>
                        <Select
                        className="react-select primary"
                        classNamePrefix="react-select"
                        id="xlugar10"
                        name="xlugar10"
                        value={xlugar1}
                        onChange={(value) => setxlugar10(value)}
                        options={[
                            {
                            value: "0",
                            label: "Sin una Selección",
                            isDisabled: true,
                            },
                            { value: "1", label: "Almacén 1" },
                            { value: "2", label: "Almacén 2" },
                            { value: "3", label: "Almacén 3" },
                        ]}
                        placeholder="Selecione"
                        />
                    </Col>
                    <Col sm="2">
                        <label>Máximo Almacén 1</label>
                        <FormGroup>
                            <Input placeholder="Máximo Almacén 1" type="number" id="xmax1" name="xmax1" onChange={(e) =>{
                                setxmax1(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Máximo Almacén 2</label>
                        <FormGroup>
                            <Input placeholder="Máximo Almacén 2" type="number" id="xmax2" name="xmax2" onChange={(e) =>{
                                setxmax2(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Máximo Almacén 3</label>
                        <FormGroup>
                            <Input placeholder="Máximo Almacén 3" type="number" id="xmax3" name="xmax3" onChange={(e) =>{
                                setxmax3(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Máximo Almacén 4</label>
                        <FormGroup>
                            <Input placeholder="Máximo Almacén 4" type="number" id="xmax4" name="xmax4" onChange={(e) =>{
                                setxmax4(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Máximo Almacén 5</label>
                        <FormGroup>
                            <Input placeholder="Máximo Almacén 5" type="number" id="xmax5" name="xmax5" onChange={(e) =>{
                                setxmax5(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    </Row>
                    <Row>
                    <Col sm="2">
                        <label>Máximo Almacén 6</label>
                        <FormGroup>
                            <Input placeholder="Máximo Almacén 6" type="number" id="xmax6" name="xmax6" onChange={(e) =>{
                                setxmax6(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Máximo Almacén 7</label>
                        <FormGroup>
                            <Input placeholder="Máximo Almacén 7" type="number" id="xmax7" name="xmax7" onChange={(e) =>{
                                setxmax7(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Máximo Almacén 8</label>
                        <FormGroup>
                            <Input placeholder="Máximo Almacén 8" type="number" id="xmax8" name="xmax8" onChange={(e) =>{
                                setxmax8(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Máximo Almacén 9</label>
                        <FormGroup>
                            <Input placeholder="Máximo Almacén 9" type="number" id="xmax9" name="xmax9" onChange={(e) =>{
                                setxmax9(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Máximo Almacén 10</label>
                        <FormGroup>
                            <Input placeholder="Máximo Almacén 10" type="number" id="xmax10" name="xmax10" onChange={(e) =>{
                                setxmax10(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Minimo Almacén 1</label>
                        <FormGroup>
                            <Input placeholder="Minimo Almacén 1" type="number" id="xmin1" name="xmin1" onChange={(e) =>{
                                setxmin1(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    </Row>
                    <Row>
                    <Col sm="2">
                        <label>Minimo Almacén 2</label>
                        <FormGroup>
                            <Input placeholder="Minimo Almacén 2" type="number" id="xmin2" name="xmin2" onChange={(e) =>{
                                setxmin2(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Minimo Almacén 3</label>
                        <FormGroup>
                            <Input placeholder="Minimo Almacén 3" type="number" id="xmin3" name="xmin3" onChange={(e) =>{
                                setxmin3(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Minimo Almacén 4</label>
                        <FormGroup>
                            <Input placeholder="Minimo Almacén 4" type="number" id="xmin4" name="xmin4" onChange={(e) =>{
                                setxmin4(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Minimo Almacén 5</label>
                        <FormGroup>
                            <Input placeholder="Minimo Almacén 5" type="number" id="xmin5" name="xmin5" onChange={(e) =>{
                                setxmin5(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Minimo Almacén 6</label>
                        <FormGroup>
                            <Input placeholder="Minimo Almacén 6" type="number" id="xmin6" name="xmin6" onChange={(e) =>{
                                setxmin6(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Minimo Almacén 7</label>
                        <FormGroup>
                            <Input placeholder="Minimo Almacén 7" type="number" id="xmin7" name="xmin7" onChange={(e) =>{
                                setxmin7(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    </Row>
                    <Row>
                    <Col sm="2">
                        <label>Minimo Almacén 8</label>
                        <FormGroup>
                            <Input placeholder="Minimo Almacén 8" type="number" id="xmin8" name="xmin8" onChange={(e) =>{
                                setxmin8(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Minimo Almacén 9</label>
                        <FormGroup>
                            <Input placeholder="Minimo Almacén 9" type="number" id="xmin9" name="xmin9" onChange={(e) =>{
                                setxmin9(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Minimo Almacén 10</label>
                        <FormGroup>
                            <Input placeholder="Minimo Almacén 10" type="number" id="xmin10" name="xmin10" onChange={(e) =>{
                                setxmin10(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>PR Almacén 1</label>
                        <FormGroup>
                            <Input placeholder="PR Almacén 1" type="number" id="xpr1" name="xpr1" onChange={(e) =>{
                                setxpr1(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>PR Almacén 2</label>
                        <FormGroup>
                            <Input placeholder="PR Almacén 2" type="number" id="xpr2" name="xpr2" onChange={(e) =>{
                                setxpr2(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>PR Almacén 3</label>
                        <FormGroup>
                            <Input placeholder="PR Almacén 3" type="number" id="xpr3" name="xpr3" onChange={(e) =>{
                                setxpr3(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    </Row>
                    <Row>
                    <Col sm="2">
                        <label>PR Almacén 4</label>
                        <FormGroup>
                            <Input placeholder="PR Almacén 4" type="number" id="xpr4" name="xpr4" onChange={(e) =>{
                                setxpr4(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>PR Almacén 5</label>
                        <FormGroup>
                            <Input placeholder="PR Almacén 5" type="number" id="xpr5" name="xpr5" onChange={(e) =>{
                                setxpr5(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>PR Almacén 6</label>
                        <FormGroup>
                            <Input placeholder="PR Almacén 6" type="number" id="xpr6" name="xpr6" onChange={(e) =>{
                                setxpr6(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>PR Almacén 7</label>
                        <FormGroup>
                            <Input placeholder="PR Almacén 7" type="number" id="xpr7" name="xpr7" onChange={(e) =>{
                                setxpr7(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>PR Almacén 8</label>
                        <FormGroup>
                            <Input placeholder="PR Almacén 8" type="number" id="xpr8" name="xpr8" onChange={(e) =>{
                                setxpr8(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>PR Almacén 9</label>
                        <FormGroup>
                            <Input placeholder="PR Almacén 9" type="number" id="xpr9" name="xpr9" onChange={(e) =>{
                                setxpr9(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    </Row>
                    <Row>
                    <Col sm="2">
                        <label>PR Almacén 10</label>
                        <FormGroup>
                            <Input placeholder="PR Almacén 10" type="number" id="xpr10" name="xpr10" onChange={(e) =>{
                                setxpr10(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Compra Estandar Alm. 1</label>
                        <FormGroup>
                            <Input placeholder="Compra Estandar Alm. 1" type="number" id="xcs1" name="xcs1" onChange={(e) =>{
                                setxcs1(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Compra Estandar Alm. 2</label>
                        <FormGroup>
                            <Input placeholder="Compra Estandar Alm. 2" type="number" id="xcs2" name="xcs2" onChange={(e) =>{
                                setxcs2(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Compra Estandar Alm. 3</label>
                        <FormGroup>
                            <Input placeholder="Compra Estandar Alm. 3" type="number" id="xcs3" name="xcs3" onChange={(e) =>{
                                setxcs3(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Compra Estandar Alm. 4</label>
                        <FormGroup>
                            <Input placeholder="Compra Estandar Alm. 4" type="number" id="xcs4" name="xcs4" onChange={(e) =>{
                                setxcs4(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Compra Estandar Alm. 5</label>
                        <FormGroup>
                            <Input placeholder="Compra Estandar Alm. 1" type="number" id="xcs5" name="xcs5" onChange={(e) =>{
                                setxcs5(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    </Row>
                    <Row>
                    <Col sm="2">
                        <label>Compra Estandar Alm. 6</label>
                        <FormGroup>
                            <Input placeholder="Compra Estandar Alm. 6" type="number" id="xcs6" name="xcs6" onChange={(e) =>{
                                setxcs6(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Compra Estandar Alm. 7</label>
                        <FormGroup>
                            <Input placeholder="Compra Estandar Alm. 7" type="number" id="xcs7" name="xcs7" onChange={(e) =>{
                                setxcs7(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Compra Estandar Alm. 8</label>
                        <FormGroup>
                            <Input placeholder="Compra Estandar Alm. 8" type="number" id="xcs8" name="xcs8" onChange={(e) =>{
                                setxcs8(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Compra Estandar Alm. 9</label>
                        <FormGroup>
                            <Input placeholder="Compra Estandar Alm. 9" type="number" id="xcs9" name="xcs9" onChange={(e) =>{
                                setxcs9(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Compra Estandar Alm. 10</label>
                        <FormGroup>
                            <Input placeholder="Compra Estandar Alm. 10" type="number" id="xcs10" name="xcs10" onChange={(e) =>{
                                setxcs10(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Localización Almacén 1</label>
                        <FormGroup>
                            <Input placeholder="Localización Almacén 1" type="number" id="xloca1" name="xloca1" onChange={(e) =>{
                                setxloca1(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Localización Almacén 2</label>
                        <FormGroup>
                            <Input placeholder="Localización Almacén 2" type="number" id="xloca2" name="xloca2" onChange={(e) =>{
                                setxloca2(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Localización Almacén 3</label>
                        <FormGroup>
                            <Input placeholder="Localización Almacén 3" type="number" id="xloca3" name="xloca3" onChange={(e) =>{
                                setxloca3(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Localización Almacén 4</label>
                        <FormGroup>
                            <Input placeholder="Localización Almacén 4" type="number" id="xloca4" name="xloca4" onChange={(e) =>{
                                setxloca4(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Localización Almacén 5</label>
                        <FormGroup>
                            <Input placeholder="Localización Almacén 5" type="number" id="xloca5" name="xloca5" onChange={(e) =>{
                                setxloca5(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Localización Almacén 6</label>
                        <FormGroup>
                            <Input placeholder="Localización Almacén 6" type="number" id="xloca6" name="xloca6" onChange={(e) =>{
                                setxloca6(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Localización Almacén 7</label>
                        <FormGroup>
                            <Input placeholder="Localización Almacén 7" type="number" id="xloca7" name="xloca7" onChange={(e) =>{
                                setxloca7(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    </Row>
                    <Row>
                    <Col sm="2">
                        <label>Localización Almacén 8</label>
                        <FormGroup>
                            <Input placeholder="Localización Almacén 8" type="number" id="xloca8" name="xloca8" onChange={(e) =>{
                                setxloca8(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Localización Almacén 9</label>
                        <FormGroup>
                            <Input placeholder="Localización Almacén 9" type="number" id="xloca9" name="xloca9" onChange={(e) =>{
                                setxloca9(e.target.value)
                                }} />
                        </FormGroup>
                    </Col>
                    <Col sm="2">
                        <label>Localización Almacén 10</label>
                        <FormGroup>
                            <Input placeholder="Localización Almacén 10" type="number" id="xloca10" name="xloca10" onChange={(e) =>{
                                setxloca10(e.target.value)
                                }} />
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

export default Products;

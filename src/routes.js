import Buttons from "views/components/Buttons.js";
import Calendar from "views/Calendar.js";
import Charts from "views/Charts.js";
import Dashboard from "views/Dashboard.js";
import ExtendedForms from "views/forms/ExtendedForms.js";
import ExtendedTables from "views/tables/ExtendedTables.js";
import FullScreenMap from "views/maps/FullScreenMap.js";
import GoogleMaps from "views/maps/GoogleMaps.js";
import GridSystem from "views/components/GridSystem.js";
import Icons from "views/components/Icons.js";
import LockScreen from "views/pages/LockScreen.js";
import Login from "views/pages/Login.js";
import Notifications from "views/components/Notifications.js";
import Panels from "views/components/Panels.js";
import ReactTables from "views/tables/ReactTables.js";
import Register from "views/pages/Register.js";
import RegularForms from "views/forms/RegularForms.js";
import RegularTables from "views/tables/RegularTables.js";
import SweetAlert from "views/components/SweetAlert.js";
import Timeline from "views/pages/Timeline.js";
import Typography from "views/components/Typography.js";
import UserProfile from "views/pages/UserProfile.js";
import ValidationForms from "views/forms/ValidationForms.js";
import VectorMap from "views/maps/VectorMap.js";
import Widgets from "views/Widgets.js";
import Wizard from "views/forms/Wizard.js";

//VISTAS
import CodesSat from "views/Catalogue/Sat.js";
import Units from "views/Catalogue/Units.js";
import Types from "views/Catalogue/Types.js";
import ClassProd from "views/Catalogue/ClassProd.js";
import SubClass from "views/Catalogue/SubClass.js";
import Providers from "views/Catalogue/Providers.js";
import Products from "views/Catalogue/Products.js";
import Formulations from "views/Catalogue/Formulations.js";

const routes = [
  {
    path: "/dashboard",
    name: "Panel Principal",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin",
  },
  {
    collapse: true,
    name: "Catálogos",
    icon: "nc-icon nc-align-left-2",
    state: "pagesCollapse",
    views: [
      {
        path: "/sat",
        name: "Claves SAT",
        mini: "SAT",
        component: CodesSat,
        layout: "/admin",
      },
      {
        path: "/units",
        name: "Unidad de Medida",
        mini: "UM",
        component: Units,
        layout: "/admin",
      },
      {
        path: "/types",
        name: "Tipo de Producto",
        mini: "TP",
        component: Types,
        layout: "/admin",
      },
      {
        path: "/class_prod",
        name: "Clases de Producto",
        mini: "CP",
        component: ClassProd,
        layout: "/admin",
      },
      {
        path: "/sub_class",
        name: "Subclase de Producto",
        mini: "SP",
        component: SubClass,
        layout: "/admin",
      },
      {
        path: "/providers",
        name: "Proveedores",
        mini: "PRO",
        component: Providers,
        layout: "/admin",
      },
      {
        path: "/products",
        name: "Productos",
        mini: "PRO",
        component: Products,
        layout: "/admin",
      },
      {
        path: "/formulations",
        name: "Formulaciones",
        mini: "FOR",
        component: Formulations,
        layout: "/admin",
      },
    ],
  },
];

export default routes;

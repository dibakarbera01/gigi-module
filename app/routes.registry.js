
import Home from "./components/Home";
export const RoutesRegistry = {
  Home: {
    Page        : { appComponent: Home.name },
    authRequired: false,
    entityRef   : "home",
    url         : "home"
  },
  defaultModuleRoute: {
    Page        : { appComponent: "ModuleComponent" },
    authRequired: false,
    entityRef   : "wrappid",
    url         : "wrappid"
  },
};
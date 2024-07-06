import Home from "./components/Home";
import ModuleComponent from "./components/ModuleComponent";
import TestComponent from "./components/TestComponent";
import TestComponentMobile from "./components/TestComponentMobile";
import TestComponentWeb from "./components/TestComponentWeb";

export const ComponentsRegistry = {
  Home                : { comp: Home },
  ModuleComponent     : { comp: ModuleComponent },
  TestComponents      : { comp: TestComponent },
  TestComponentsMobile: {
    comp: TestComponentMobile,
    web : false
  },
  TestComponentsWeb: {
    comp  : TestComponentWeb,
    mobile: false
  }
};
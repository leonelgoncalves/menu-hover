import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
global.SVGElement = global.Element;
configure({ adapter: new Adapter() });

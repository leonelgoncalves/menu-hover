import React from "react";
import { mount, shallow } from "enzyme";
import TextComponent from "./Text";
import renderer from "react-test-renderer";

describe("Text:", () => {
  let props;
  let mountedText;
  const text = () => {
    if (!mountedText) {
      mountedText = mount(<TextComponent {...props} />);
    }
    return mountedText;
  };

  beforeEach(() => {
    props = {
      text: undefined,
      textClass: undefined,
      textColor: undefined,
      textRef: undefined
    };
    mountedText = undefined;
  });

  it("always render span", () => {
    const spans = text().find("span");
    expect(spans.length).toBeGreaterThan(0);
  });
});

describe("Text Snapshot:", () => {
  it("should renders correctly", () => {
    expect(shallow(<TextComponent text="Hola!" />)).toMatchSnapshot();
  });

  it("should add color to text", () => {
    expect(
      shallow(<TextComponent textColor="red" text="Hola!" />)
    ).toMatchSnapshot();
  });
});

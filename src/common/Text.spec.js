import React from "react";
import { mount, shallow } from "enzyme";
import TextComponent from "./Text";

describe("Text:", () => {
  const setup = propOverrides => {
    const props = Object.assign(
      {
        text: undefined,
        textClass: undefined,
        textColor: undefined,
        textRef: undefined
      },
      propOverrides
    );
    return {
      props: props,
      span: mount(<TextComponent {...props} />).find("span")
    };
  };

  it("always render span", () => {
    const { span } = setup();
    expect(span.length).toBeGreaterThan(0);
  });
});

describe("Text Snapshots:", () => {
  it("should renders correctly", () => {
    expect(shallow(<TextComponent text="Hola!" />)).toMatchSnapshot();
  });

  it("should add color to text", () => {
    expect(
      shallow(<TextComponent textColor="red" text="Hola!" />)
    ).toMatchSnapshot();
  });
});

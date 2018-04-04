import React from "react";
// import { mount } from "enzyme";
import TextComponent from "./Text";

describe("Text", () => {
  let props;
  let mountedText;
  const lockScreen = () => {
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
  it("is truthy", () => {
    expect(true).toBeTruthy();
  });

  // All tests will go here
});

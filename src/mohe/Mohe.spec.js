import React from "react";
import { mount, render } from "enzyme";
import MoheComponent from "./mohe";

describe("MoheComponent:", () => {
  const setup = propOverrides => {
    const props = Object.assign(
      {
        title: undefined,
        description: undefined,
        titleColor: undefined,
        descriptionColor: undefined
      },
      propOverrides
    );
    const wrapper = mount(<MoheComponent {...props} />);
    return {
      props: props,
      component: wrapper.find("div"),
      anchor: wrapper.find("a")
    };
  };

  it("shoud always render div", () => {
    const { component } = setup();
    expect(component.length).toBeGreaterThan(0);
  });

  describe("Snapshots:", () => {
    it("should renders correctly", () => {
      const { component } = setup({
        title: "Title",
        description: "description"
      });
      expect(component).toMatchSnapshot();
    });
    it("should update the letters styles", () => {
      jest.useFakeTimers();
      const { component, anchor } = setup({
        title: "Title",
        description: "description",
        descriptionColor: "purple"
      });
      anchor.simulate("mouseEnter");
      jest.runAllTimers();
      expect(component).toMatchSnapshot();
    });

    it("should restore letters styles", () => {
      jest.useFakeTimers();
      const { component, anchor } = setup({
        title: "Title",
        description: "description"
      });
      anchor.simulate("mouseEnter");
      jest.runAllTimers();
      anchor.simulate("mouseLeave");
      jest.runAllTimers();
      expect(component).toMatchSnapshot();
    });
  });
});

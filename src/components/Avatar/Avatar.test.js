import React from "react";
import { shallow } from "enzyme";
import Avatar from "./Avatar";

it("render", () => {
  const block = shallow(<Avatar src={"https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"} />);
  expect(block.html()).toEqual(false);
})
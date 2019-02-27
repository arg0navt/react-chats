import React from "react";
import { shallow, mount } from "enzyme";
import Avatar from "./Avatar";

it("render with only src", () => {
  const block = shallow(<Avatar src={"https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"} />);
  const img = block.find("img")
  console.log(img.html());
  // expect(img).toEqual(false);
})
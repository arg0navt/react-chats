import React from "react";
import { shallow } from "enzyme";
import Avatar from "./Avatar";

it("render horizontal image with only src and alt", async () => {
  const urlImg =
    "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png";
  const altImg = "picher";
  const block = shallow(<Avatar src={urlImg} alt={altImg}/>);
  const img = block.find("img");
  expect(img.exists()).toEqual(true);
  expect(img.prop("src")).toEqual(urlImg);
  expect(img.prop("alt")).toEqual(altImg);
  await block.instance().renderImg();
  console.log(img.html())
});

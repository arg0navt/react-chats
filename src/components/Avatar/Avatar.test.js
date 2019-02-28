import React from "react";
import { shallow } from "enzyme";
import Avatar from "./Avatar";

const urlImg =
    "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png";
const altImg = "picher";

it("render image with only src", () => {
  const block = shallow(<Avatar src={urlImg} alt={altImg}/>);
  expect(block.find("img").exists()).toEqual(true);
  expect(block.find("img").prop("src")).toEqual(urlImg);
});

it("render image with alt", () => {
  const block = shallow(<Avatar src={urlImg} alt={altImg}/>);
  expect(block.find("img").prop("alt")).toEqual(altImg);
});

it("render horizontal image", () => {
  const block = shallow(<Avatar src={urlImg} alt={altImg}/>);
  block.instance().getOriginalOrientation({clientHeight: 400, clientWidth: 500});
  expect(block.find("img").prop("style")).toEqual({width: "auto", height: "100%", opacity: 1});
});

it("render vertical image", () => {
  const block = shallow(<Avatar src={urlImg} alt={altImg}/>);
  block.instance().getOriginalOrientation({clientHeight: 400, clientWidth: 500});
  expect(block.find("img").prop("style")).toEqual({width: "auto", height: "100%", opacity: 1});
});

it("render online", () => {
  const block = shallow(<Avatar src={urlImg} alt={altImg} online={true}/>);
  expect(block.find(".online").exists()).toEqual(true);
})
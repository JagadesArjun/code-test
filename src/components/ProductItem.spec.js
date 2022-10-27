import React from "react";
import { shallow } from "enzyme";
import Product from "./Product";
import ProductItem from "./ProductItem";
import "../setupTests";

const setup = (product) => {
  const actions = {
    onAddToCartClicked: jest.fn()
  };

  const component = shallow(<ProductItem product={product} {...actions} />);

  return {
    component: component,
    actions: actions,
    button: component.find("button"),
    product: component.find(Product)
  };
};

let productProps;

describe("ProductItem component", () => {
  beforeEach(() => {
    productProps = {
      title: "Product 1",
      price: 9.99,
      stock: 6
    };
  });

  // it("should render product", () => {
  //   const { product } = setup(productProps);
  //   console.log("AJAGA -> ", productProps, product.props().title);
  //   expect(product.props().title).toMatch(productProps.title);
  // });

  it("should render Add To Cart message", () => {
    const { button } = setup(productProps);
    expect(button.text()).toMatch(/^Add to cart/);
  });

  it("should not disable button", () => {
    const { button } = setup(productProps);
    expect(button.prop("disabled")).toEqual("");
  });

  it("should call action on button click", () => {
    const { button, actions } = setup(productProps);
    button.simulate("click");
    expect(actions.onAddToCartClicked).toBeCalled();
  });

  describe("when product stock is 0", () => {
    beforeEach(() => {
      productProps.stock = 0;
    });

    it("should render Sold Out message", () => {
      const { button } = setup(productProps);
      expect(button.text()).toMatch(/^Sold Out/);
    });

    it("should disable button", () => {
      const { button } = setup(productProps);
      expect(button.prop("disabled")).toEqual("disabled");
    });
  });
});

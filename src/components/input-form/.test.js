import React from "react";
import { act } from 'react-dom/test-utils';
import InputForm from "./index";
import { mount } from "enzyme";
import wait from "waait";

let ui;

describe("When I insert a wrong email ", () => {
    beforeEach(() => {
        ui = mount(<InputForm />);

        const emailField = ui.find("#email").find("input");

        //insert a wrong email
        emailField.simulate("change", {
            target: {
                name: "email",
                value: "foo"
            }
        });

        //simulate the blur
        emailField.simulate("blur");
    });

    it("The error is displayed", async () => {
        await wait(0);
        ui.update();
        const errors = ui.find('p[children="Enter a valid email"]');
        expect(errors.length).toBeGreaterThan(0);
    });

    it("The new email value should be displayed", () => {
        const emailField = ui.find("#email").find("input");
        expect(emailField.prop("value")).toContain("foo");
    });
});

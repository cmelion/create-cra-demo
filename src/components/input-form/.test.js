import React from "react";
import InputForm from "./index";
import { mount } from "enzyme";
import wait from "waait";

let ui;

describe("When I insert a wrong email ", () => {
    // TODO: Fix needed for - Warning: An update to Formik inside a test was not wrapped in act(...).
    // https://github.com/jaredpalmer/formik/issues/1543
    // for now just disable warnings in this test.
    beforeAll(() => {
        console.error = jest.fn();
    });

    afterAll(() => {
        console.error = originalError;
    });

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

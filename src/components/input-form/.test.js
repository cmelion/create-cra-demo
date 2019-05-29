import React from "react";
import InputForm from "./index";
import { mount } from "enzyme";
import wait from "waait";

let ui;
describe("Registration form", () => {
    // TODO: Fix needed for - Warning: An update to Formik inside a test was not wrapped in act(...).
    // https://github.com/jaredpalmer/formik/issues/1543
    // for now just disable warnings in this test.
    beforeAll(() => {
        console.error = jest.fn();
    });

    afterAll(() => {
        console.error = originalError;
    });

    describe("When I don't enter a user name ", () => {
        beforeEach(() => {
            ui = mount(<InputForm/>);

            const nameField = ui.find("#name").find("input");

            //insert a wrong email
            nameField.simulate("change", {
                target: {
                    name: "name",
                    value: ""
                }
            });

            //simulate the blur
            nameField.simulate("blur");
        });

        it("The missing name error is displayed", async () => {
            await wait(0);
            ui.update();
            const errors = ui.find('p[children="Name is required"]');
            expect(errors.length).toBeGreaterThan(0);
        });

    });

    describe("When I enter a wrong email ", () => {
        beforeEach(() => {
            ui = mount(<InputForm/>);

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

        it("The new email value should be displayed", () => {
            const emailField = ui.find("#email").find("input");
            expect(emailField.prop("value")).toContain("foo");
        });

        it("The email error is displayed", async () => {
            await wait(0);
            ui.update();
            const errors = ui.find('p[children="Enter a valid email"]');
            expect(errors.length).toBeGreaterThan(0);
        });

    });

    describe("When I enter a password that is too short ", () => {
        beforeEach(() => {
            ui = mount(<InputForm/>);

            const passwordField = ui.find("#password").find("input");

            //insert a short password
            passwordField.simulate("change", {
                target: {
                    name: "password",
                    value: "foo"
                }
            });

            //simulate the blur
            passwordField.simulate("blur");
        });

        it("The new password value should be displayed", () => {
            const passwordField = ui.find("#password").find("input");
            expect(passwordField.prop("value")).toContain("foo");
        });

        it("The password error is displayed", async () => {
            await wait(0);
            ui.update();
            const errors = ui.find('p[children="Password must contain at least 8 characters"]');
            expect(errors.length).toBeGreaterThan(0);
        });

    });

    describe("When passwords don't match ", () => {
        beforeEach(() => {
            ui = mount(<InputForm/>);

            const passwordField = ui.find("#password").find("input");
            const confirmPassword = ui.find("#confirmPassword").find("input");

            //insert a valid password
            passwordField.simulate("change", {
                target: {
                    name: "password",
                    value: "fooBarBaz1"
                }
            });

            //insert a mismatched confirm password
            confirmPassword.simulate("change", {
                target: {
                    name: "confirmPassword",
                    value: "foo"
                }
            });


            //simulate the blur
            confirmPassword.simulate("blur");
        });

        it("The password error is displayed", async () => {
            await wait(0);
            ui.update();
            const errors = ui.find('p[children="Password does not match"]');
            expect(errors.length).toBeGreaterThan(0);
        });

    });
});

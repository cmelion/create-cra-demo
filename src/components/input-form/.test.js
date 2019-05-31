import React from "react";
import InputForm from "./index";
import { mount } from "enzyme";
import wait from "waait";

let ui;
describe("As someone who wants to Register", () => {
    // TODO: Fix needed for - Warning: An update to Formik inside a test was not wrapped in act(...).
    // https://github.com/jaredpalmer/formik/issues/1543
    // for now just disable warnings in this test.
    beforeAll(() => {
        console.error = jest.fn();
    });

    afterAll(() => {
        console.error = originalError;
    });
    describe("When I fill in the Registration Form", () => {
        const testCases = [
            {
                desc: "And I leave the name field blank",
                field: "name",
                badValue: "",
                goodValue: "foo",
                errorText: "Name is required",
            },
            {
                desc: "Or I enter an invalid email address",
                field: "email",
                badValue: "foo",
                goodValue: "foo@bar.com",
                errorText: "Enter a valid email",
            },
            {
                desc: "Or I enter a password that is too short",
                field: "password",
                badValue: "foo",
                goodValue: "12345678",
                errorText: "Password must contain at least 8 characters",
            },
        ];
        testCases.forEach(function(testCase) {
            describe(testCase.desc, () => {
                beforeEach(() => {
                    ui = mount(<InputForm/>);

                    const field = ui.find(`#${testCase.field}`).find("input");

                    //insert a wrong email
                    field.simulate("change", {
                        target: {
                            name: testCase.field,
                            value: testCase.badValue
                        }
                    });

                    //simulate the blur
                    field.simulate("blur");
                });

                it(`Then the ${testCase.field} error is displayed`, async () => {
                    await wait(0);
                    ui.update();
                    const errors = ui.find(`p[children="${testCase.errorText}"]`);
                    expect(errors.length).toBeGreaterThan(0);
                });

                it(`And the bad ${testCase.field} value is displayed`, () => {
                    const field = ui.find(`#${testCase.field}`).find("input");
                    expect(field.prop("value")).toContain(testCase.badValue);
                });

                it("And the submit button remains disabled", async () => {
                    await wait(0);
                    ui.update();
                    const button = ui.find("button");
                    expect(button.length).toBe(1);
                    expect(button.props().disabled).toBe(true);
                });

                describe(`When the ${testCase.field} is corrected`, () => {
                    it(`Then the ${testCase.field} error is cleared`, async () => {
                        const field = ui.find(`#${testCase.field}`).find("input");

                        //insert a wrong email
                        field.simulate("change", {
                            target: {
                                name: testCase.field,
                                value: testCase.goodValue
                            }
                        });
                        //simulate the blur
                        field.simulate("blur");
                        await wait(0);
                        ui.update();
                        const errors = ui.find(`p[children="${testCase.errorText}"]`);
                        expect(errors.length).toBe(0);
                    });
                });
            });
        });
    });

    describe("When password and confirmation don't match ", () => {
        it("Then the password error is displayed", async () => {
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
            await wait(0);
            ui.update();
            const errors = ui.find('p[children="Password does not match"]');
            expect(errors.length).toBeGreaterThan(0);
        });

    });

});

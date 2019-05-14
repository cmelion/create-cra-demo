import React from "react";
import { Formik } from "formik";
import { Form } from "./form";
import Paper from "@material-ui/core/Paper";
import * as Yup from "yup";
import './styles.scss';

const validationSchema = Yup.object({
    name: Yup.string("Enter a name").required("Name is required"),
    email: Yup.string("Enter your email")
        .email("Enter a valid email")
        .required("Email is required"),
    password: Yup.string("")
        .min(8, "Password must contain atleast 8 characters")
        .required("Enter your password"),
    confirmPassword: Yup.string("Enter your password")
        .required("Confirm your password")
        .oneOf([Yup.ref("password")], "Password does not match")
});

const InputForm = () => {
    const values = {
        name: "",
        email: "",
        confirmPassword: "",
        password: ""
    };
    const submitValues = ({ name, email, confirmPassword, password }) => {
        console.log({ name, email, confirmPassword, password });
    };
    return (
        <div className="container">
            <Paper elevation={1} className="paper">
                <h1>Form</h1>
                <Formik
                    render={props => <Form {...props} />}
                    initialValues={values}
                    validationSchema={validationSchema}
                    onSubmit={submitValues}
                />
            </Paper>
        </div>
    );
};

export default InputForm;

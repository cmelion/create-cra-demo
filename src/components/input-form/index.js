import React from "react";
import { Formik } from "formik";
import { Form } from "./form";
import Paper from "@material-ui/core/Paper";
import { validationSchema} from "./schema";
import './styles.scss';

const values = {
    name: "",
    email: "",
    confirmPassword: "",
    password: ""
};

export const submitValues = ({ name, email, confirmPassword, password }) => {
    console.log({ name, email, confirmPassword, password });
};

const InputForm = () =>
        <div className="container">
            <Paper elevation={1} className="paper">
                <h1>Register</h1>
                <Formik
                    render={props => <Form {...props} />}
                    initialValues={values}
                    validationSchema={validationSchema}
                    onSubmit={submitValues}
                />
            </Paper>
        </div>;

export default InputForm;

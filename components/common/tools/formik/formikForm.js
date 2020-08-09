import { Component } from "react";
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik'

export class FormikForm extends Component {
    render() {
        return (<Formik
            initialValues={this.props.initialValues}
            onSubmit={this.props.onSubmit}>
            <Form>
                {this.props.children}
            </Form>
        </Formik>
        );
    }
}

FormikForm.PropTypes = {
    initialValues: PropTypes.object,
    onSubmit: PropTypes.func
}
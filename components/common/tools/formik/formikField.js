import { Component } from 'react'
import { Field } from 'formik'
import { Input } from '../'

export class FormikField extends Component {
    render() {
        return <Field {...this.props} />
    }
}

FormikField.defaultProps = {
    component: Input
}
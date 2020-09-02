import PropTypes from 'prop-types';

export const Input = ({ field, form: __, ...props }) => {
    return (<input {...field} {...props} required />)
};

Input.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string
};

/*should use "form-check-input" class for chekbox*/
Input.defaultProps = {
    type: "text",
    className: "form-control"
};

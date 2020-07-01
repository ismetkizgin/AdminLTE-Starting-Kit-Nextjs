import PropTypes from 'prop-types';

const AdminFooter = (props) => {
    if (!props.leftContent && !props.rightContent) {
        return null;
    }

    return <footer className="main-footer clearfix">
        {props.rightContent && <div className="float-right d-none d-sm-inline">{props.rightContent}</div>}
        {props.leftContent && props.leftContent}
    </footer>
};

AdminFooter.propTypes = {
    leftContent: PropTypes.element,
    rightContent: PropTypes.string,
};

export default AdminFooter;

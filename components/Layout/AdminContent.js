import PropTypes from 'prop-types';

const AdminContent = (props) => {
    return <div className="content-wrapper" style={{minHeight: '93vh'}}>
        <div className="content-header">
            {props.title && <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-10">
                        <h1 className="m-0 text-dark">{props.title}</h1>
                    </div>
                    <div className="col-sm-2 text-right text-muted">
                        {props.titleButton && props.titleButton}
                    </div>
                </div>
            </div>}
        </div>
        <div className="content">
            <div className="container-fluid">
                {props.children}
            </div>
        </div>
    </div>
};

AdminContent.propTypes = {
    title: PropTypes.string,
    titleButton: PropTypes.element,
};

export default AdminContent;

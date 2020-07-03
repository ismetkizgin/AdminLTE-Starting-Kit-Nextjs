import '../../../styles/styles.scss'
import { AdminHeader } from './AdminHeader'
import { AdminSidebar } from './AdminSidebar'
import { AdminControlSidebar } from './AdminControlSidebar'
import { AdminContent } from './AdminContent'
import PropTypes from 'prop-types';

export class AdminLayoutHoc extends React.Component {
    render() {
        return <div className="wrapper">
            <AdminHeader />
            <AdminSidebar />
            <AdminContent title={this.props.contentTitle} titleButton={this.props.contentTitleButton}>
                {this.props.children}
            </AdminContent>
            <AdminControlSidebar />
            {/*<AdminFooter rightContent={'Some text for the footer'} leftContent={<div>I must be an element</div>}/>*/}
        </div>
    }
}

AdminLayoutHoc.propTypes = {
    contentTitle: PropTypes.string,
    contentTitleButton: PropTypes.element,
};
import { ClientLayout } from '../components/layout'
import { Navbar} from '../components/layout/client/navbar/navbar'
export default class Index extends React.Component {
    render() {
        return (
            <ClientLayout>
                <h1>Hello Word</h1>
            <Navbar></Navbar>
            </ClientLayout>
        )
    }
}
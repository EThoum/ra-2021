import {
    Link
} from "react-router-dom";

export const Home = () => <div>
    <div className="list-group">
        <Link
            className='list-group-item'
            to="/classvsfunctions">
            Class vs Functions
        </Link>
        <Link
            className='list-group-item'
            to="/i18n">
            Localisation
        </Link>
    </div>

</div>;
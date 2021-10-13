import {
    Link
} from "react-router-dom";
import { observer } from "mobx-react-lite";

import Instance from '../instance';
import profils from "./Observables/profils";

const links = [
    {
        to: '/classvsfunctions',
        label: 'Class vs Functions'
    },
    {
        to: '/i18n',
        label: 'Localisation'
    },
    {
        to: '/http-requests',
        label: 'Http requests'
    },
    {
        to: '/useRef',
        label: 'UseRef'
    },
    {
        to: '/useReducer',
        label: 'UseReducer'
    },
    {
        to: '/Observables',
        label: 'Observables'
    },
    {
        to: '/Redux',
        label: 'Redux'
    }
];

const UserCount = observer(() => <div className="text-end py-3">{profils.users.length} users</div>);

const Links = () => links.map(
    (link, index) => <Link
        key={'link-' + index}
        className='list-group-item list-group-item'
        to={link.to}>
        {link.label}
    </Link>);

export const Home = () => <div>
    <h1>{Instance.name}</h1>
    <div className="list-group">
        <Links />
    </div>
    <UserCount />
</div>;
import Profils from './profils';
import { observer } from 'mobx-react-lite';


const UserCard = ({ avatar, id, name }) => <div className="col-2">
    <img className="img-fluid rounded" src={avatar} alt={name} />
</div>;

const UserList = observer(() => Profils.users.map(
    (user, index) => <UserCard {...user} key={index} />
));

export const Observables = () => <>
    <h1>Observables</h1>
    <div className='row gy-3'>
        <UserList />
    </div>
</>
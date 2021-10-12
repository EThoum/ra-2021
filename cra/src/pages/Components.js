import {
    Switch,
    Route
} from "react-router-dom";

import { Paragraphe } from '../components/Paragraphe';
import { ParagrapheClass } from '../components/ParagrapheClass';

export const Components = () => <div>
    <Switch>
        <Route path='/components/class' exact={true}>
            <ParagrapheClass />
        </Route>
        <Route path='/'>
            <Paragraphe text ={'est'} />
        </Route>
    </Switch>
</div>;
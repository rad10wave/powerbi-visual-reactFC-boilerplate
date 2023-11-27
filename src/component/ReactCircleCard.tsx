import * as React from 'react';
import {State} from '../interfaces';

const ReactCircleCard = ({ updateCallback }) => {
    const [state, setState] = React.useState<State>({height: 0, width: 0, message: ''});

    React.useEffect(() => {
        updateCallback(setState);
    }, [updateCallback]);

    return (
        <div>
            {state.message}
        </div>
    );
}

export default ReactCircleCard;
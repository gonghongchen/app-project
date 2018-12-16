import * as React from 'react';
import {Link} from 'react-router-dom'

export default () => {
    return (
        <div>
            <p>This is detail page.</p>
            <p><Link to='/index'>to index</Link></p>
        </div>
    )
}
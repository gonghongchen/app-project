import * as React from 'react';
import {Link} from 'react-router-dom'
import { normalize, schema } from 'normalizr';

const originalData = {
	"id": "123",
	"author": {
		"id": "1",
		"name": "Paul"
	},
	"title": "My awesome blog post",
	"comments": [
		{
			"id": "324",
			"commenter": {
				"id": "2",
				"name": "Nicole"
			}
		}
	]
};

// Define a users schema
const user = new schema.Entity('users');

// Define your comments schema
const comment = new schema.Entity('comments', {
  commenter: user
});

// Define your article
const article = new schema.Entity('articles', {
  author: user,
  comments: [comment]
});

const normalizedData = normalize(originalData, article);
console.log(11111, normalizedData);


export default () => {
    return (
        <div>
            <p>This is detail page.</p>
            <p><Link to='/index'>to index</Link></p>
						<img src="https://img.alicdn.com/tfs/TB1ztBlaMMPMeJjy1XbXXcwxVXa-200-60.png"/>
						<img src="https://img.alicdn.com/tfs/TB1t5ObaBxRMKJjy0FdXXaifFXa-200-60.png"/>
						<img src="https://img.alicdn.com/tfs/TB1MaLKRXXXXXaWXFXXXXXXXXXX-480-260.png"/>
        </div>
    )
}
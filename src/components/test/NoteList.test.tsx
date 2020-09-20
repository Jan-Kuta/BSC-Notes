import React from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router';

import {NoteList} from '../NoteList';

it('NoteList renders correctly', () => {
    const tree = renderer
        .create(
            <MemoryRouter>
                <NoteList />
            </MemoryRouter>
        )
            .toJSON();
    expect(tree).toMatchSnapshot();
});

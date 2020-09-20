import React from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router';

import {NoteEdit} from '../NoteEdit';

it('NoteEdit renders correctly', () => {
    const tree = renderer
        .create(
            <MemoryRouter>
                <NoteEdit />
            </MemoryRouter>
        )
            .toJSON();
    expect(tree).toMatchSnapshot();
});

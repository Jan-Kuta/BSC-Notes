import React from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router';

import {NoteDetail} from '../NoteDetail';

it('NoteDetail renders correctly', () => {
    const tree = renderer
        .create(
            <MemoryRouter>
                <NoteDetail />
            </MemoryRouter>
        )
            .toJSON();
    expect(tree).toMatchSnapshot();
});

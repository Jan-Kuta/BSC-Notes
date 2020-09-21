import React from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter, Route} from 'react-router';

import {NoteDetail} from '../NoteDetail';
import {getMockProvider} from "./MockStore";

describe("NoteDetail", () => {
    let component: renderer.ReactTestRendererJSON | renderer.ReactTestRendererJSON[] | null;

    beforeEach(() => {
        const { MockProvider } = getMockProvider({});
        component = renderer
            .create(
                <MockProvider>
                    <MemoryRouter initialEntries={['/1']}>
                        <Route path="/:id">
                            <NoteDetail />
                        </Route>
                    </MemoryRouter>
                </MockProvider>
            ).toJSON()
    });

    it("it should work", () => {
        expect(component).toMatchSnapshot();
    });
});

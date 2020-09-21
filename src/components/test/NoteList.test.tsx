import React from 'react';
import renderer from 'react-test-renderer';

import {NoteList} from '../NoteList';
import {getMockProvider} from "./MockStore";

describe("NoteList", () => {
    let component: renderer.ReactTestRendererJSON | renderer.ReactTestRendererJSON[] | null;

    beforeEach(() => {
        const { MockProvider } = getMockProvider({});
        component = renderer
            .create(
                <MockProvider>
                    <NoteList />
                </MockProvider>
            ).toJSON()
    });

    it("it should work", () => {
        expect(component).toMatchSnapshot();
    });
});

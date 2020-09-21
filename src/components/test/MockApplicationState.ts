import {RootState} from "../../redux/rootReducer";

export const MockApplicationState: RootState = {
    notes: {
        loading: false,
        data: [
            {id: 1, title: 'test1'},
            {id: 2, title: 'test2'}
        ],
        error: ''
    },
    router: {
        push: jest.fn(),
        replace: jest.fn(),
        go: jest.fn(),
        createHref: jest.fn(),
        createLocation: jest.fn(),
        isActive: jest.fn(),
        matcher: {
            match: jest.fn(),
            getRoutes: jest.fn(),
            isActive: jest.fn(),
            format: jest.fn()
        },
        addTransitionHook: jest.fn()
    }
};

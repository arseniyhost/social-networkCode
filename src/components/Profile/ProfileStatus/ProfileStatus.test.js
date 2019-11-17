import React from 'react';
import { create } from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';

describe("ProfileStatus component", () => {
    test("status should be in the state", () => {
        const component = create(<ProfileStatus status="Hello World!" />)
        const instance = component.getInstance();
        expect(instance.state.status).toBe("Hello World!");
    });

    test("input should be displayed after doubleClick on status", () => {
        const component = create(<ProfileStatus status="Hello World!" />);
        const root = component.root;
        let span = root.findByType("span");
        span.props.onDoubleClick();
        let input = root.findByType("input");
        expect(input.props.value).toBe("Hello World!");
    });
});

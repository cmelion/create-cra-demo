import autodux from "autodux";

export const counter = autodux({
    slice: 'counter',
    initial: { count: 0 },
    actions: {
        increment: state => {
            return { count: state.count + 1 };
        },
        decrement: state => {
            return { count: state.count - 1 };
        }
    }
});

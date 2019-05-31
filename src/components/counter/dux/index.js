import autodux from "autodux";

export const useCounter = autodux({
    slice: 'counter',
    initial: { count: 0 },
    actions: {
        increment: state => { return { count: state.count + 1 } },
        decrement: state => { return { count: state.count - 1 } }
    }
});

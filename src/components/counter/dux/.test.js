import { useCounter } from './index'


describe('Counter duck', () => {
   it('has a "counter" slice', () => {
       expect(useCounter.slice).toEqual('counter');
   });

   it('is initialized to zero', () => {
       expect(useCounter.initial.count).toEqual(0);
   });

    it('can increment the count', () => {
        const state = useCounter.reducer(undefined, useCounter.actions.increment());
        expect(state.count).toEqual(1);
    });

    it('can decrement the count', () => {
        const state = useCounter.reducer(undefined, useCounter.actions.decrement());
        expect(state.count).toEqual(-1);
    });
});

import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'

export const Counter = ({ value }) => {
    const dispatch = useDispatch();
    const increaseCounter = useCallback(
        () => dispatch({ type: 'increment' }),
        []
    );

    return (
        <div>
            <span>{value}</span>
            <button onClick={increaseCounter}>Increase counter</button>
        </div>
    )
};

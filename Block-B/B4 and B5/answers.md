which of React.memo / useMemo / useCallback stops the list re-rendering when only the search text changes, and why?

React.memo() - It performs the comparison and skip re-rendering if there is no change even if the parent element was updated but props passed to child elements were not changed rendering will be skipped

useMemo() - It memorizes the calculation and doesn't recalculate unless the dependency array has changes.

useCallback() - It memorizes the function and don't regenerate them unless dependency array is updated ensuring that even if component re-rendes function are not re-generated

React.memo() stops the list re-rendering when only the search text changes

export const require = (values) => {
    if (values) return undefined;

    return 'Field is required';
}

export const maxLengthSymbols = (max) => (values) => {
    if (values && values.length > max) return `Maximum symbols is ${max}`;

    return undefined
}

export const minValue = (min) => (values) => {
    if (values && values.length > min) return undefined

    return 'Min Symbols is 2';
}
const getNumber = (value, unit) => {
    return +value ? `${value}${unit}` : value;
}

export default getNumber;
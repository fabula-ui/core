const getContext = props => {
    if (props.clear) {
        return 'clear';
    } else if (props.faded) {
        return 'faded';
    } else if (props.gradient) {
        return 'gradient';
    } else if (props.invert) {
        return 'invert';
    } else if (props.outline) {
        return 'outline';
    } else {
        return 'fill';
    }
}

export default getContext;
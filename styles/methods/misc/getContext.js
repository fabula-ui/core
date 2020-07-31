const getContext = props => {
    if (props.adapt || props.adaptColor) {
        return 'adapt';
    } else if (props.clear) {
        return 'clear';
    } if (props.darken) {
        return 'darken'
    } else if (props.faded) {
        return 'faded';
    } else if (props.gradient) {
        return 'gradient';
    } else if (props.invert) {
        return 'invert';
    } else if (props.lighten) {
        return 'lighten';
    } else if (props.outline) {
        return 'outline';
    } else {
        return 'fill';
    }
}

export default getContext;
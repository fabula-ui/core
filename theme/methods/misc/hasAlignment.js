const hasAlignment = props => {
    return !!props.al || !!props.align || !!props.alH || !!props.alignH || !!props.alV || !!props.alignV;
}

export default hasAlignment;
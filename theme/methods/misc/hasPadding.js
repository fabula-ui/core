const hasPadding = props => {
    return !!props.p || !!props.pb || !!props.pl || !!props.pr || !!props.pt || !!props.px || !!props.py;
}

export default hasPadding;
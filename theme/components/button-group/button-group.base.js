export const base = (theme, props) => `.fab-button-group {
    align-items: flex-start;
    box-sizing: border-box;
    display: flex;
    flex-direction: ${props.flow === 'horizontal' ? 'row' : 'column'};
    flex-wrap: ${props.wrap ? 'wrap' : 'nowrap'};
    justify-content: flex-start;
    margin: -${props.spacing || theme.components.buttonGroup.spacing};

    .fab-button-wrapper {
        padding: ${props.spacing || theme.components.buttonGroup.spacing};
    }

    > * {
        box-sizing: border-box;
    }
}`;
import { down, on, up } from './breakpoints';

const ResponsiveStyles = params => {
    const { props, styles } = params;
    const componentStyles = !!styles ? styles : null;
    const downBreakpoint = !!props.down && props.down[0];
    const downProps = !!props.down && props.down[1];
    const downStyles = !!props.down && props.down[3];
    const downUtils = !!props.down && props.down[2];
    const onBreakpoint = !!props.on && props.on[0];
    const onProps = !!props.on && props.on[1];
    const onStyles = !!props.on && props.on[3];
    const onUtils = !!props.on && props.on[2];
    const upBreakpoint = !!props.up && props.up[0];
    const upProps = !!props.up && props.up[1];
    const upStyles = !!props.up && props.up[3];
    const upUtils = !!props.up && props.up[2];

    return `
        & {
            ${(props.down && downBreakpoint) ? down(downBreakpoint, (!!styles && !!downProps) ? styles({ ...params, props: {...props, ...downProps} }) : null, downStyles, downUtils) : ''}
            ${(props.on && onBreakpoint) ? on(onBreakpoint, (!!styles && !!onProps) ? styles({ ...params, props: {...props, ...onProps} }) : null, onStyles, onUtils) : ''}
            ${(props.up && upBreakpoint) ? up(upBreakpoint, (!!styles && !!upProps) ? styles({ ...params, props: {...props, ...upProps} }) : null, upStyles, upUtils) : ''}
        }
    `;
}

export default ResponsiveStyles;
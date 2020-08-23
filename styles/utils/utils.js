import alignUtils from './properties/align';
import displayUtils from './properties/display';
import flexUtils from './properties/flex';
import fontUtils from './properties/font';
import gridUtils from './properties/grid';
import growUtils from './properties/grow';
import hiddenUtils from './properties/hidden';
import marginUtils from './properties/margin';
import overflowUtils from './properties/overflow';
import paddingUtils from './properties/padding';
import sizeUtils from './properties/size';

const UtilsStyles = params => {
    const { props } = params;
    const { fl, flex } = props;

    return `
        ${alignUtils(params)}
        ${displayUtils(props)}
        ${flexUtils(props)}
        ${fontUtils(params)}
        ${gridUtils(props)}
        ${growUtils(params)}
        ${hiddenUtils(params)}
        ${marginUtils(params)}
        ${overflowUtils(props)}
        ${paddingUtils(params)}
        ${sizeUtils(params)}

        ${props.block ? 'display: block!important;' : ''}
        
        > [data-fab-component] {
            ${!!fl || !!flex ? `display: flex;` : ''}
            ${!!fl || !!flex ? `flex-direction: row;` : ''}
        }
        
    `;
}


export default UtilsStyles;
import getComponentVars from '../../methods/misc/getComponentVars';
import getNumber from '../../methods/misc/getNumber';

const TagGroupStyles = params => {
    const { framework, props } = params;
    const vars = getComponentVars('tagGroup');
    const spacing = props.spacing ? getNumber(props.spacing, 'rem') : vars.spacing;

    return `
        ${framework === 'angular' ? `& { display: block; }` : ''}    

        .fab-tag-group {
            align-items: flex-start;
            display: flex;
            flex-wrap: wrap;
            margin: -${spacing};
        }

        .fab-tag-wrapper {
            padding: ${spacing};
        }
    `;
}

export default TagGroupStyles;
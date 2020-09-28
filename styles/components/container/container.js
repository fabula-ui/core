const ContainerStyles = params => {
    const { framework, props } = params;
    const wrapper = framework === 'angular' ? '.fab-container' : '&';

    return `
        ${wrapper} {
            margin-left: auto;
            margin-right: auto;
            padding-left: 15px;
            padding-right: 15px;
            width: 100%;

            @media (min-width: 576px) {
                max-width: 540px;
            }
            
            @media (min-width: 768px) {
                max-width: 720px;
            }

            @media (min-width: 992px) {
                max-width: 960px;
            }

            @media (min-width: 1200px) {
                max-width: 1140px;
            }
        }
    `
}

export default ContainerStyles
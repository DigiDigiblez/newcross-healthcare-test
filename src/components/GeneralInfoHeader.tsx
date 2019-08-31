import React from 'react';
import _GeneralInfoHeader from './styles/_GeneralInfoHeader';

const GeneralInfoHeader: React.FC = props => {
    return (
        <_GeneralInfoHeader>
            <div className="grid-container">
                <div className="grid-item section-title-current">
                    <span className='badge current'>1</span>
                    General Information
                </div>
                <div className="grid-item section-title">
                    <span className='badge'>2</span>
                    Package Details
                </div>
            </div>
        </_GeneralInfoHeader>
    );
};

GeneralInfoHeader.propTypes = {};

export default GeneralInfoHeader;
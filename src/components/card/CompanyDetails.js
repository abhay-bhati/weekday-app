import React from 'react';
import EasyApplyBtn from '../buttons/EasyApplyBtn';
import ReferralBtn from '../buttons/ReferralBtn';

const CompanyDetails = ({job}) => {
    const {companyName, jdLink, jdUid, jobDetailsFromCompany, jobRole, location, logoUrl, maxExp, minExp, salaryCurrencyCode, minJdSalary, maxJdSalary} = job;
    return (
        <div className='company-details-wrapper'>
            <div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <img src={logoUrl} alt="logo" />
                    <div>
                        <div>
                            <h3>{companyName}</h3>
                            <h2>{jobRole}</h2>
                        </div>
                        <p className='country'>{location}</p>
                    </div>
                </div>
                <p className='company-salary'>Estimated Salary: {salaryCurrencyCode} {minJdSalary} - {maxJdSalary} <span>{' '}✅</span></p>
                <div style={{ width: '318px' }}>
                    <p className='about-company'>About Company:</p>
                    <div className='about-content'>{jobDetailsFromCompany}</div>
                </div>
                <div className='view-job'>
                    <a href={jdLink}>View Job</a>
                </div>
            </div>
            <div>
                <div style={{ color: 'rgba(0, 0, 0, 0.87)' }}>
                    <h3 className='minimum-experience'>Minimum Experience</h3>
                    <h2>{minExp} years</h2>
                </div>
                <div className='btn-wrapper'>
                    <EasyApplyBtn />
                    <ReferralBtn />
                </div>
            </div>
        </div>
    )
};

export default CompanyDetails;
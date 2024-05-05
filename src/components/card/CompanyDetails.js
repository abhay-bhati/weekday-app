import React from 'react';
import EasyApplyBtn from '../buttons/EasyApplyBtn';
import ReferralBtn from '../buttons/ReferralBtn';

const CompanyDetails = () => {
    return (
        <div className='company-details-wrapper'>
            <div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <img src="https://storage.googleapis.com/weekday-assets/airtableAttachment_1713271734116_1ci60.png" alt="logo" />
                    <div>
                        <div>
                            <h3>DeGenerous</h3>
                            <h2>Frontend Engineer</h2>
                        </div>
                        <p className='country'>India</p>
                    </div>
                </div>
                <p className='company-salary'>Estimated Salary: ₹12 - 16 LPA <span>{' '}✅</span></p>
                <div style={{ width: '318px' }}>
                    <p className='about-company'>About Company:</p>
                    <div className='about-content'>Zuper is the most flexible and customizable field service management platform for Field and Remote workforce management. Zuper provides industry-leading integration capabilities and is suitable for use in an on-demand work environment. Built for a global audience and available in 10 languages, Zuper allows you to manage your workforce remotely from any part of the globe. Offering best-in-class integrations with easy-to-deploy, no-code applications providing cost-effective service</div>
                </div>
                <div className='view-job'>
                    <a>View Job</a>
                </div>
            </div>
            <div>
                <div style={{ color: 'rgba(0, 0, 0, 0.87)' }}>
                    <h3 className='minimum-experience'>Minimum Experience</h3>
                    <h2>2 years</h2>
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
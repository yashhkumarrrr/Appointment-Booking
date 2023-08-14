import './footer.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import MailIcon from '@mui/icons-material/Mail';
import IconButton from '@mui/material/IconButton';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {

    const [dialogOpen, setDialogOpen] = useState(false);

    const handleDialogOpen = () => {
        setDialogOpen(true);
    };

    const handleDialogClose = () => {
        setDialogOpen(false);
    };

    const clock = require('./images/clock.png');
    const board = require('./images/board.png');
    const plane = require('./images/plane.png');
    const mixpanel = require('./images/mixpanel.png');

    return (
        <>
            <div className='footer-body'>
                <div className='footer-1'>
                    <div className='footer-1-1'>
                        <div className='footer-1-1-1'>
                            <div className='footer-heading-2'>Product</div>
                            <div>
                                <Link
                                    id='footer-links'
                                    to='https://www.appointy.com/'
                                >
                                    Home
                                </Link>
                            </div>

                            <div>
                                <Link
                                    id='footer-links'
                                    onClick={handleDialogOpen}
                                >
                                    Product Tour
                                </Link>
                            </div>

                            <div>
                                <Link
                                    id='footer-links'
                                    to='https://www.appointy.com/customers/'
                                >
                                    Customers
                                </Link>
                            </div>

                            <div>
                                <Link
                                    id='footer-links'
                                    to='https://www.appointy.com/contactUs/'
                                >
                                    Contact Us
                                </Link>
                            </div>

                            <div>
                                <Link
                                    id='footer-links'
                                    to='https://blog.appointy.com/?_gl=1*t9icar*_ga*MTM5NTgxNzM3My4xNjkwODU5MTUy*_ga_CWLJ11ZHBF*MTY5MDg4NTM4MS40LjEuMTY5MDg4NTM4NC41Ny4wLjA.&_ga=2.179532199.2079355036.1690859152-1395817373.1690859152'
                                >
                                    Blog
                                </Link>
                            </div>

                            <div>
                                <Link
                                    id='footer-links'
                                    to='https://www.appointy.com/pricing/'
                                >
                                    Pricing
                                </Link>
                            </div>

                            <div>
                                <Link
                                    id='footer-links'
                                    to='https://business.appointy.com/account/register/?RFP=FOOTER&_gl=1*t9icar*_ga*MTM5NTgxNzM3My4xNjkwODU5MTUy*_ga_CWLJ11ZHBF*MTY5MDg4NTM4MS40LjEuMTY5MDg4NTM4NC41Ny4wLjA.&_ga=2.179532199.2079355036.1690859152-1395817373.1690859152'
                                >
                                    <b>Signup</b>
                                </Link>
                            </div>

                        </div>

                        <div className='footer-1-1-2'>

                            <div className='footer-heading-2'>
                                Features
                            </div>

                            <div>
                                <Link
                                    id='footer-links'
                                    to='https://www.appointy.com/online-appointment-scheduling-software/#schedule'
                                >
                                    Schedule Online
                                </Link>
                            </div>

                            <div>
                                <Link
                                    id='footer-links'
                                    to='https://www.appointy.com/online-appointment-scheduling-software/#increaseProductivity'
                                >
                                    Increase Productivity
                                </Link>
                            </div>

                            <div>
                                <Link
                                    id='footer-links'
                                    to='https://www.appointy.com/online-appointment-scheduling-software/#attract'
                                >
                                    Attract Customers
                                </Link>
                            </div>

                            <div>
                                <Link
                                    id='footer-links'
                                    to='https://www.appointy.com/online-appointment-scheduling-software/#retainCustomer'
                                >
                                    Retain Customers
                                </Link>
                            </div>

                        </div>
                    </div>

                    <div className='footer-1-2'>

                        <div className='footer-1-2-1'>

                            <div className='footer-heading-2'>
                                Support
                            </div>

                            <div>
                                <Link
                                    id='footer-links'
                                    to='https://help.appointy.com/home?_ga=2.10637751.2079355036.1690859152-1395817373.1690859152'
                                >
                                    Help
                                </Link>
                            </div>

                            <div>
                                <Link
                                    id='footer-links'
                                    to='https://selecttime.appointy.com/support?_ga=2.10637751.2079355036.1690859152-1395817373.1690859152'
                                >
                                    Screen Sharing
                                </Link>
                            </div>

                            <div>
                                <Link
                                    id='footer-links'
                                    to='https://help.appointy.com/hc/en-us/articles/900001791683-Appointy-Affiliate-Program?itm_source=appointy_footer&itm_medium=link_affiliate_program_footer&itm_campaign=affiliate_program_website&itm_term=default&itm_content=default&_ga=2.10637751.2079355036.1690859152-1395817373.1690859152'
                                >
                                    Affiliate Program
                                </Link>
                            </div>

                            <div>
                                <div className='footer-heading-2'>
                                    Connect With Us
                                </div>

                                <div className='footer-heading-2-1'>
                                    <div>
                                        <Link to='https://www.facebook.com/appointy'>
                                            <IconButton
                                                color='primary'
                                                id='footer-btn-icon'
                                            >
                                                <FacebookIcon
                                                    id='footer-btn-icon-1'
                                                />
                                            </IconButton>
                                        </Link>
                                    </div>

                                    <div>
                                        <Link
                                            to='https://twitter.com/appointy'
                                        >
                                            <IconButton
                                                color='primary'
                                                id='footer-btn-icon'
                                            >
                                                <TwitterIcon
                                                    id='footer-btn-icon-1'
                                                />
                                            </IconButton>
                                        </Link>
                                    </div>

                                    <div>
                                        <Link
                                            to='https://www.linkedin.com/company/appointy-global/'
                                        >
                                            <IconButton
                                                color='primary'
                                                id='footer-btn-icon'
                                            >
                                                <LinkedInIcon
                                                    id='footer-btn-icon-1'
                                                />
                                            </IconButton>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className='footer-1-2-2'>

                            <div className='footer-heading-2'>
                                Contact Us
                            </div>

                            <div>
                                <Link
                                    id='footer-links'
                                    to='https://www.appointy.com/contactUs/'
                                >
                                    <b>Appointy Software Inc.,</b><br />
                                    16192 Coastal Highway<br />
                                    Lewes, Delaware 19958<br />
                                    USA<br />
                                </Link>
                            </div>

                            <div>
                                <Link
                                    id='footer-links'
                                    to='mailto:contact@appointy.com'
                                >
                                    <IconButton
                                        color='primary'
                                        id='footer-btn-icon-2'
                                    >
                                        <MailIcon
                                            id='footer-btn-icon-3'
                                        />
                                    </IconButton>
                                    <span>
                                        contact@appointy.com
                                    </span>
                                </Link>
                            </div>

                            <div>
                                <Link
                                    id='footer-links'
                                    to='https://www.appointy.com/privacypolicy/'
                                >
                                    Privacy policy
                                </Link>
                            </div>

                            <div>
                                <Link
                                    id='footer-links'
                                    to='https://www.appointy.com/termsofuse/'
                                >
                                    Terms of Use
                                </Link>
                            </div>

                            <div>
                                <Link
                                    id='footer-links'
                                    to='https://www.appointy.com/gdpr/'
                                >
                                    GDPR
                                </Link>
                            </div>

                            <div>
                                <Link
                                    id='footer-links'
                                    to='https://www.appointy.com/enduseragreement/'
                                >
                                    End User Agreement
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='footer-2'>
                    <div>Copyright 2018 &copy; Appointy.</div>
                    <div>All rights reserved.</div>
                </div>

                <div className='footer-3'>
                    <div>
                        <Link
                            id='footer-3-link'
                            to='https://mixpanel.com/f/partner'
                        >
                            <img
                                alt=''
                                src={mixpanel}
                                id='footer-3-img'
                            />
                        </Link>
                    </div>
                </div>
            </div>

            <Dialog
                maxWidth='xl'
                open={dialogOpen}
                onClose={handleDialogClose}
            >
                <div className='dialog-body'>
                    <div className='dialog-1'>
                        What are you Looking to Schedule?
                    </div>

                    <div className='dialog-2'>
                        <Link
                            className='dialog-2-1'
                            to='https://www.appointy.com/online-appointment-scheduling-software/'
                        >
                            <div>
                                <img
                                    alt=''
                                    src={clock}
                                    className='dialog-2-1-1'
                                />
                            </div>

                            <div className='dialog-2-2'>
                                Appointments and Resources
                            </div>
                        </Link>


                        <Link
                            className='dialog-2-1'
                            to='https://www.appointy.com/online-class-scheduling-software/'
                        >
                            <div>
                                <img
                                    alt=''
                                    src={board}
                                    className='dialog-2-1-1'
                                />
                            </div>

                            <div className='dialog-2-2'>
                                Classes, Workshops and Events
                            </div>
                        </Link>

                        <Link
                            className='dialog-2-1'
                            to='https://www.appointy.com/online-activity-scheduling-software/'
                        >
                            <div>
                                <img
                                    alt=''
                                    src={plane}
                                    className='dialog-2-1-1'
                                />
                            </div>

                            <div className='dialog-2-2'>
                                Tour, Rides and Activities
                            </div>
                        </Link>
                    </div>

                    <div className='dialog-3'>
                        <Button
                            id='dialog-3-1'
                            onClick={handleDialogClose}
                        >
                            Close
                        </Button>
                    </div>
                </div>
            </Dialog>
        </>
    )
}

export default Footer;
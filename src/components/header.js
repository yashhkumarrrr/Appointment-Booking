import './header.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';

function Header() {

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
    const logo1 = require('./images/logo1.webp');
    const logo2 = require('./images/logo2.webp');

    return (
        <>
            <div className='header-body-1'>
                <div className='header-1'>
                    <Link
                        target='_blank'
                        to='https://www.appointy.com/'
                    >
                        <img
                            alt=''
                            src={logo1}
                            id='header-1-1'
                        />
                    </Link>

                    <Link
                        target='_blank'
                        to='https://www.appointy.com/'
                    >
                        <img
                            alt=''
                            src={logo2}
                            id='header-1-2'
                        />
                    </Link>
                </div>

                <div className='header-2'>
                    <div>
                        <Link
                            to='https://www.appointy.com/'
                        >
                            <Button
                                id='header-2-btn'
                            >
                                Home
                            </Button>
                        </Link>
                    </div>

                    <div>
                        <Link
                            onClick={handleDialogOpen}
                        >
                            <Button
                                id='header-2-btn'
                            >
                                Product Tour
                            </Button>
                        </Link>
                    </div>

                    <div>
                        <Link
                            to='https://www.appointy.com/customers/'
                        >
                            <Button
                                id='header-2-btn'
                            >
                                Customers
                            </Button>
                        </Link>
                    </div>

                    <div>
                        <Link
                            to='https://www.appointy.com/contactUs/'
                        >
                            <Button
                                id='header-2-btn'
                            >
                                Contact Us
                            </Button>
                        </Link>
                    </div>

                    <div>
                        <Link
                            to='https://www.appointy.com/enterprise-appointment-scheduling-software/'
                        >
                            <Button
                                id='header-2-btn'
                            >
                                Enterprise
                            </Button>
                        </Link>
                    </div>

                    <div>
                        <Link
                            to='https://www.appointy.com/pricing/'
                        >
                            <Button
                                id='header-2-btn'

                            >
                                Pricing
                            </Button>
                        </Link>
                    </div>

                    <div>
                        <Link
                            to='https://business.appointy.com/account/register/?RFP=NAV&_gl=1*sna5ke*_ga*MTM5NTgxNzM3My4xNjkwODU5MTUy*_ga_CWLJ11ZHBF*MTY5MDg4MDc2OC4zLjEuMTY5MDg4MjIzMy41Ni4wLjA.&_ga=2.110770438.2079355036.1690859152-1395817373.1690859152'
                        >
                            <Button
                                id='header-2-btn-2'
                                variant='contained'
                            >
                                Signup
                            </Button>
                        </Link>
                    </div>

                    <div>
                        <Link
                            to='https://auth.appointy.com/account/login?returnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3DmvcHybridTester%26redirect_uri%3Dhttps%253A%252F%252Fbusiness.appointy.com%252Fsignin-oidc%26response_type%3Dcode%2520id_token%26scope%3Dopenid%2520profile%2520adminApi%26response_mode%3Dform_post%26nonce%3D638264790605283519.ZWYyNTNiOTMtMTk2Yi00ZWIxLTllYTAtOTljNGE2ZmZmZDZhMjgyYTYxZjctZjE0Zi00MGZiLTgxYTAtOWYzODVlNzZlMjA5%26state%3DCfDJ8JQRdMzaFNtMsqi6jJqVdjk1-NZ_5g1juwhyoA6KDEsn35qJq4q4YbXZkgOwaGJcLPbzfUcI4zhKPHWOd-k1ah0de5fXTxQweXS_9URajqL0ZynQwEP5P2sibLFlpYA8e9D4b-ArPi4rwHpLdt2AJ7T4UtNrKSoASkMWw3m5YBO0Ax_YtmaydPN7PTcYT8wJYb5fJiSgBdxF7pqdKufarxQbrRwalUqdWueoPdS_TlqkL_n0kCYv7Y_JGAgxys-P6fQEmODjaZQnKwQbvmMNBiu5UtdxjzVZj0kq2S_j5rYAWXiYDjcfz266WNkBbHop07XWfO8fHWK-vx5PRdpH-6ntaVvOmWipazroHpE6QQsu0p_uRFcObcPXxoNvphQIgbsr3fuc5dfw5Qej-yiITKVwB9-L6zBEJPRTnokN5CyHQGq-YHhakT5OJEtr3LWiPZmhT-R1KWC6S8lFylfzLyB3CF0akvFRCVv65ZihTmTcBj5-YwUlMvZ2rlJD5T4ATex8AKSAOVfzvO57jNXCYqKFjmjFTHQXGkOC8rFnP0xSitzc5z-EYAei972cLu-z5A%26x-client-SKU%3DID_NET%26x-client-ver%3D2.1.4.0'
                        >
                            <Button
                                id='header-2-btn'
                            >
                                Login
                            </Button>
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

export default Header;
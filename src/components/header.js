import './header.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';

function Header() {

    const logo1 = require('./images/logo1.webp');
    const logo2 = require('./images/logo2.webp');

    const [box, setBox] = React.useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setBox({ ...box, [anchor]: open });
    };

    return (
        <>
            <div className='header-body'>
                <div className='header-1'>
                    <Link
                        to='https://www.appointy.com/'
                        aria-label="Appointy Home Page"
                    >
                        <img
                            alt='logo1'
                            src={logo1}
                            id='header-1-1'
                        />
                    </Link>

                    <Link
                        to='https://www.appointy.com/'
                        aria-label="Appointy Home Page"
                    >
                        <img
                            alt='logo2'
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
                                id='header-2-btn-1'
                            >
                                Home
                            </Button>
                        </Link>
                    </div>

                    <div>
                        <Link
                            to='https://www.appointy.com/customers/'
                        >
                            <Button
                                id='header-2-btn-2'
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
                                id='header-2-btn-3'
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
                                id='header-2-btn-4'
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
                                id='header-2-btn-5'

                            >
                                Pricing
                            </Button>
                        </Link>
                    </div>                    

                    <div>
                        <Link
                            to='https://auth.appointy.com/account/login?returnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3DmvcHybridTester%26redirect_uri%3Dhttps%253A%252F%252Fbusiness.appointy.com%252Fsignin-oidc%26response_type%3Dcode%2520id_token%26scope%3Dopenid%2520profile%2520adminApi%26response_mode%3Dform_post%26nonce%3D638264790605283519.ZWYyNTNiOTMtMTk2Yi00ZWIxLTllYTAtOTljNGE2ZmZmZDZhMjgyYTYxZjctZjE0Zi00MGZiLTgxYTAtOWYzODVlNzZlMjA5%26state%3DCfDJ8JQRdMzaFNtMsqi6jJqVdjk1-NZ_5g1juwhyoA6KDEsn35qJq4q4YbXZkgOwaGJcLPbzfUcI4zhKPHWOd-k1ah0de5fXTxQweXS_9URajqL0ZynQwEP5P2sibLFlpYA8e9D4b-ArPi4rwHpLdt2AJ7T4UtNrKSoASkMWw3m5YBO0Ax_YtmaydPN7PTcYT8wJYb5fJiSgBdxF7pqdKufarxQbrRwalUqdWueoPdS_TlqkL_n0kCYv7Y_JGAgxys-P6fQEmODjaZQnKwQbvmMNBiu5UtdxjzVZj0kq2S_j5rYAWXiYDjcfz266WNkBbHop07XWfO8fHWK-vx5PRdpH-6ntaVvOmWipazroHpE6QQsu0p_uRFcObcPXxoNvphQIgbsr3fuc5dfw5Qej-yiITKVwB9-L6zBEJPRTnokN5CyHQGq-YHhakT5OJEtr3LWiPZmhT-R1KWC6S8lFylfzLyB3CF0akvFRCVv65ZihTmTcBj5-YwUlMvZ2rlJD5T4ATex8AKSAOVfzvO57jNXCYqKFjmjFTHQXGkOC8rFnP0xSitzc5z-EYAei972cLu-z5A%26x-client-SKU%3DID_NET%26x-client-ver%3D2.1.4.0'
                        >
                            <Button
                                id='header-2-btn-6'
                            >
                                Login
                            </Button>
                        </Link>
                    </div>

                    <div>
                        <Link
                            to='https://business.appointy.com/account/register/?RFP=NAV&_gl=1*sna5ke*_ga*MTM5NTgxNzM3My4xNjkwODU5MTUy*_ga_CWLJ11ZHBF*MTY5MDg4MDc2OC4zLjEuMTY5MDg4MjIzMy41Ni4wLjA.&_ga=2.110770438.2079355036.1690859152-1395817373.1690859152'
                        >
                            <Button
                                id='header-2-btn-7'
                                variant='contained'
                                >
                                Signup
                            </Button>
                        </Link>
                    </div>
                </div>

                <div>
                    {['right'].map((anchor) => (
                        <React.Fragment key={anchor}>
                            <div className='header-3'>
                                <div className='header-3-1'>
                                    <Link
                                        to='https://auth.appointy.com/account/login?returnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3DmvcHybridTester%26redirect_uri%3Dhttps%253A%252F%252Fbusiness.appointy.com%252Fsignin-oidc%26response_type%3Dcode%2520id_token%26scope%3Dopenid%2520profile%2520adminApi%26response_mode%3Dform_post%26nonce%3D638264790605283519.ZWYyNTNiOTMtMTk2Yi00ZWIxLTllYTAtOTljNGE2ZmZmZDZhMjgyYTYxZjctZjE0Zi00MGZiLTgxYTAtOWYzODVlNzZlMjA5%26state%3DCfDJ8JQRdMzaFNtMsqi6jJqVdjk1-NZ_5g1juwhyoA6KDEsn35qJq4q4YbXZkgOwaGJcLPbzfUcI4zhKPHWOd-k1ah0de5fXTxQweXS_9URajqL0ZynQwEP5P2sibLFlpYA8e9D4b-ArPi4rwHpLdt2AJ7T4UtNrKSoASkMWw3m5YBO0Ax_YtmaydPN7PTcYT8wJYb5fJiSgBdxF7pqdKufarxQbrRwalUqdWueoPdS_TlqkL_n0kCYv7Y_JGAgxys-P6fQEmODjaZQnKwQbvmMNBiu5UtdxjzVZj0kq2S_j5rYAWXiYDjcfz266WNkBbHop07XWfO8fHWK-vx5PRdpH-6ntaVvOmWipazroHpE6QQsu0p_uRFcObcPXxoNvphQIgbsr3fuc5dfw5Qej-yiITKVwB9-L6zBEJPRTnokN5CyHQGq-YHhakT5OJEtr3LWiPZmhT-R1KWC6S8lFylfzLyB3CF0akvFRCVv65ZihTmTcBj5-YwUlMvZ2rlJD5T4ATex8AKSAOVfzvO57jNXCYqKFjmjFTHQXGkOC8rFnP0xSitzc5z-EYAei972cLu-z5A%26x-client-SKU%3DID_NET%26x-client-ver%3D2.1.4.0'
                                    >
                                        <Button
                                            id='header-3-login-btn'
                                            endIcon={<PersonIcon />}
                                        >
                                            Login
                                        </Button>
                                    </Link>
                                </div>

                                <div className='header-3-1'>
                                    <IconButton
                                        id='header-3-menu-btn'
                                        onClick={toggleDrawer(anchor, true)}
                                    >
                                        <MenuIcon />
                                    </IconButton>
                                </div>
                            </div>

                            <Drawer
                                anchor={anchor}
                                open={box[anchor]}
                                onClose={toggleDrawer(anchor, false)}
                            >
                                <Box
                                    id='header-box-body'
                                    onClick={toggleDrawer(anchor, false)}
                                    onKeyDown={toggleDrawer(anchor, false)}
                                    sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 230 }}
                                >
                                    <div className='header-box-section'>
                                        <div className='header-box-btn-div'>
                                            <Link
                                                to='https://www.appointy.com/'
                                            >
                                                <Button
                                                    id='header-box-btn-1'
                                                >
                                                    Home
                                                </Button>
                                            </Link>
                                        </div>

                                        <div className='header-box-btn-div'>
                                            <Link
                                                to='https://www.appointy.com/customers/'
                                            >
                                                <Button
                                                    id='header-box-btn-2'
                                                >
                                                    Customers
                                                </Button>
                                            </Link>
                                        </div>

                                        <div className='header-box-btn-div'>
                                            <Link
                                                to='https://www.appointy.com/contactUs/'
                                            >
                                                <Button
                                                    id='header-box-btn-3'
                                                >
                                                    Contact Us
                                                </Button>
                                            </Link>
                                        </div>

                                        <div className='header-box-btn-div'>
                                            <Link
                                                to='https://www.appointy.com/enterprise-appointment-scheduling-software/'
                                            >
                                                <Button
                                                    id='header-box-btn-4'
                                                >
                                                    Enterprise
                                                </Button>
                                            </Link>
                                        </div>

                                        <div className='header-box-btn-div'>
                                            <Link
                                                to='https://www.appointy.com/pricing/'
                                            >
                                                <Button
                                                    id='header-box-btn-5'

                                                >
                                                    Pricing
                                                </Button>
                                            </Link>
                                        </div>

                                        <div className='header-box-btn-div'>
                                            <Link
                                                to='https://business.appointy.com/account/register/?RFP=NAV&_gl=1*sna5ke*_ga*MTM5NTgxNzM3My4xNjkwODU5MTUy*_ga_CWLJ11ZHBF*MTY5MDg4MDc2OC4zLjEuMTY5MDg4MjIzMy41Ni4wLjA.&_ga=2.110770438.2079355036.1690859152-1395817373.1690859152'
                                            >
                                                <Button
                                                    id='header-box-btn-6'
                                                    color='success'
                                                    variant='contained'
                                                >
                                                    Signup
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </Box>
                            </Drawer>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Header;
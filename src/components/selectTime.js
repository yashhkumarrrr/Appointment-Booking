import './selectTime.css';
import Chip from '@mui/material/Chip';
import { Button } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { useState, forwardRef } from 'react';
import Snackbar from '@mui/material/Snackbar';
import { Link, useNavigate } from 'react-router-dom';

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function SelectTime(props) {

    const navigate = useNavigate();

    const handleClickNext = () => {
        if ((props.appointTime === '**:**') && (props.appointDate !== '****-**-**')) {
            setSnackBar('Select Appointment Time');
            handleOpenSnackbar();
        }
        else if ((props.appointTime !== '**:**') && (props.appointDate === '****-**-**')) {
            setSnackBar('Select Appointment Date');
            handleOpenSnackbar();
        }
        else if ((props.appointTime === '**:**') && (props.appointDate === '****-**-**')) {
            setSnackBar('Select Appointment Date and Time');
            handleOpenSnackbar();
        }
        else {
            navigate('/appointDetails');
        }
    }

    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackBar, setSnackBar] = useState('');

    const handleOpenSnackbar = () => {
        setOpenSnackbar(true);
    };

    const handleCloseSnackbar = (reason) => {
        if (reason === 'clickAway') {
            return;
        }
        setOpenSnackbar(false);
    };

    return (
        <>
            <div className='time-body'>
                <div className='time-section'>
                    <div className='time-1'>
                        <div className='time-1-1'>
                            <div className='time-1-1-1'>
                                Select Time for Appointment on Date -
                            </div>

                            <div className='time-1-1-2'>
                                <div className='time-1-1-2-1'>
                                    {props.appointDate}
                                </div>

                                <div>
                                    <Link
                                        to='/'
                                    >
                                        <Button
                                            id='time-1-1-2-2'
                                        >
                                            Change Date
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className='time-1-2'>
                            <div
                                className='time-1-2-1'
                            >
                                Selected Time -
                            </div>

                            <div
                                className='time-1-2-2'
                            >
                                {props.appointTime}
                            </div>
                        </div>
                    </div>

                    <div className='time-2'>
                        <div className='time-2-1'>
                            <div className='time-2-1-1'>
                                <div className='time-2-1-1-head'>
                                    Morning
                                </div>

                                <div className='time-2-1-1-body'>
                                    <div>
                                        <Chip
                                            label="10:00"
                                            id='time-2-1-1-chip'
                                            onClick={props.toggleTime}
                                        />
                                    </div>

                                    <div>
                                        <Chip
                                            label="09:00"
                                            id='time-2-1-1-chip'
                                            onClick={props.toggleTime}
                                        />
                                    </div>

                                    <div>
                                        <Chip
                                            label="10:00"
                                            id='time-2-1-1-chip'
                                            onClick={props.toggleTime}
                                        />
                                    </div>

                                    <div>
                                        <Chip
                                            label="11:00"
                                            id='time-2-1-1-chip'
                                            onClick={props.toggleTime}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className='time-2-1-1'>
                                <div className='time-2-1-1-head'>
                                    Afternoon
                                </div>

                                <div className='time-2-1-1-body'>
                                    <div>
                                        <Chip
                                            label="12:00"
                                            id='time-2-1-1-chip'
                                            onClick={props.toggleTime}
                                        />
                                    </div>

                                    <div>
                                        <Chip
                                            label="13:00"
                                            id='time-2-1-1-chip'
                                            onClick={props.toggleTime}
                                        />
                                    </div>

                                    <div>
                                        <Chip
                                            label="14:00"
                                            id='time-2-1-1-chip'
                                            onClick={props.toggleTime}
                                        />
                                    </div>

                                    <div>
                                        <Chip
                                            label="15:00"
                                            id='time-2-1-1-chip'
                                            onClick={props.toggleTime}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className='time-2-1-1'>
                                <div className='time-2-1-1-head'>
                                    Evening
                                </div>

                                <div className='time-2-1-1-body'>
                                    <div>
                                        <Chip
                                            label="16:00"
                                            id='time-2-1-1-chip'
                                            onClick={props.toggleTime}
                                        />
                                    </div>

                                    <div>
                                        <Chip
                                            label="17:00"
                                            id='time-2-1-1-chip'
                                            onClick={props.toggleTime}
                                        />
                                    </div>

                                    <div>
                                        <Chip
                                            label="18:00"
                                            id='time-2-1-1-chip'
                                            onClick={props.toggleTime}
                                        />
                                    </div>

                                    <div>
                                        <Chip
                                            label="19:00"
                                            id='time-2-1-1-chip'
                                            onClick={props.toggleTime}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='time-2-2'>
                            <div>
                                <Button
                                    id='time-2-2-btn'
                                    onClick={handleClickNext}
                                >
                                    Next
                                </Button>
                            </div>

                            <div>
                                <Button
                                    id='time-2-2-btn'
                                    onClick={props.clearTime}
                                >
                                    Reset
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                    <Alert onClose={handleCloseSnackbar} severity="error" sx={{ width: '100%' }}>
                        {snackBar}
                    </Alert>
                </Snackbar>

            </div>
        </>
    )
}

export default SelectTime;
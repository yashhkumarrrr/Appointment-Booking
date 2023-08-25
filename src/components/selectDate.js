import './selectDate.css';
import { Button } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { useState, forwardRef } from 'react';
import Snackbar from '@mui/material/Snackbar';
import { useNavigate } from 'react-router-dom';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction';

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function SelectDate(props) {

    const navigate = useNavigate();

    const handleClickNext = () => {
        if (props.appointDate === '****-**-**') {
            handleOpenSnackbar();
        }
        else {
            navigate('/chooseTimeSlot');
        }
    }

    const [openSnackbar, setOpenSnackbar] = useState(false);

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
            <div className='date-body'>
                <div className='date-section'>
                    <div className='date-1'>
                        <div className='date-1-1'>
                            Welcome to Appointy
                        </div>

                        <div className='date-1-2'>
                            Please select a date for appointment from the adjacent calendar
                        </div>

                        <div className='date-1-3'>
                            <div>Selected Date -</div>
                            <div><b>{props.appointDate}</b></div>
                        </div>
                    </div>

                    <div className='date-2'>
                        <div className='date-2-1'>
                            <FullCalendar
                                height={455}
                                selectable={true}
                                dateClick={props.toggleDate}
                                titleFormat={{ year: 'numeric', month: 'short' }}
                                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                                headerToolbar={{
                                    start: 'title',
                                    center: '',
                                    end: 'prev,next'
                                }}
                            />
                        </div>

                        <div className='date-2-2'>
                            <div>
                                <Button
                                    id='date-2-btn-1'
                                    onClick={handleClickNext}
                                >
                                    Next
                                </Button>
                            </div>

                            <div>
                                <Button
                                    id='date-2-btn-2'
                                    onClick={props.clearDate}
                                >
                                    Reset
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                    <Alert onClose={handleCloseSnackbar} severity="error" sx={{ width: '100%' }}>
                        Select Appointment Date
                    </Alert>
                </Snackbar>
            </div>
        </>
    )
}

export default SelectDate;
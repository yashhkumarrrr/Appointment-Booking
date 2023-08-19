import axios from 'axios';
import * as yup from 'yup';
import './appointDetails.css';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useState, forwardRef } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const validationSchema = yup.object({
    fname: yup
        .string('Enter First Name')
        .required('First Name is Required'),
    lname: yup
        .string('Enter Last Name'),
    email: yup
        .string('Enter your Email')
        .email('Enter a valid Email')
        .required('Email is Required'),
    number: yup
        .number('Enter Contact Number')
        .required('Contact Number is Required'),
    topic: yup
        .string('Enter Meeting Topic')
        .required('Meeting Topic is Required'),
    remarks: yup
        .string('Enter Remarks')
        .required('Remarks are Required'),
});

function AppointDetails(props) {

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            fname: '',
            lname: '',
            email: '',
            number: '',
            topic: '',
            remarks: '',
        },
        validationSchema: validationSchema,
        onSubmit: (props) => {
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
                axios.post('https://64c87755a1fe0128fbd5d3aa.mockapi.io/appointment', {
                    fname: formik.values.fname,
                    lname: formik.values.lname,
                    email: formik.values.email,
                    number: formik.values.number,
                    topic: formik.values.topic,
                    remarks: formik.values.remarks,
                    date: props.appointDate,
                    time: props.appointTime,
                });
            }
            alert('Appointment Book Successfully!');
            navigate('/');
        },
    });

    const theme = createTheme({
        typography: {
            body1: {
                fontSize: '1rem',
                color: '#484848',
                fontFamily: 'Raleway',
                '@media (max-width: 550px)': {
                    fontSize: '0.9rem',
                },
                '@media (max-width: 450px)': {
                    fontSize: '0.8rem',
                },
            }
        },
    });

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
            <div className='appo-body'>
                <div className='appo-section'>
                    <div className='appo-1'>
                        <div className='appo-1-1'>
                            Schedule an Appointment
                        </div>

                        <div className='appo-1-2'>
                            <div className='appo-1-2-1'>
                                <div className='appo-1-2-head'>
                                    Selected Date -
                                </div>

                                <div className='appo-1-2-txt'>
                                    {props.appointDate}
                                </div>

                                <div>
                                    <Link
                                        to='/'
                                    >
                                        <Button
                                            id='appo-1-2-btn'
                                        >
                                            Change Date
                                        </Button>
                                    </Link>
                                </div>
                            </div>

                            <div className='appo-1-2-2'>
                                <div className='appo-1-2-head'>
                                    Selected Time -
                                </div>

                                <div className='appo-1-2-txt'>
                                    {props.appointTime}
                                </div>

                                <Link
                                    to='/chooseTimeSlot'
                                >
                                    <Button
                                        id='appo-1-2-btn'
                                    >
                                        Change Time
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={formik.handleSubmit} className='appo-2'>
                        <div className='appo-2-section'>
                            <div className='appo-2-1'>
                                Enter Details as per mentioned below
                            </div>

                            <div className='appo-2-2'>
                                <div id='appo-2-2-1'>
                                    <ThemeProvider theme={theme}>
                                        <Typography variant='body1'>
                                            <TextField
                                                fullWidth
                                                name='fname'
                                                variant='standard'
                                                label='Enter First Name *'
                                                value={formik.values.fname}
                                                onBlur={formik.handleBlur}
                                                onChange={formik.handleChange}
                                                helperText={formik.touched.fname && formik.errors.fname}
                                                error={formik.touched.fname && Boolean(formik.errors.fname)}
                                            />
                                        </Typography>
                                    </ThemeProvider>
                                </div>

                                <div id='appo-2-2-2'>
                                    <ThemeProvider theme={theme}>
                                        <Typography variant='body1'>
                                            <TextField
                                                fullWidth
                                                name='lname'
                                                variant='standard'
                                                label='Enter Last Name'
                                                value={formik.values.lname}
                                                onBlur={formik.handleBlur}
                                                onChange={formik.handleChange}
                                                helperText={formik.touched.lname && formik.errors.lname}
                                                error={formik.touched.lname && Boolean(formik.errors.lname)}
                                            />
                                        </Typography>
                                    </ThemeProvider>
                                </div>
                            </div>

                            <div className='appo-2-textfield'>
                                <ThemeProvider theme={theme}>
                                    <Typography variant='body1'>
                                        <TextField
                                            fullWidth
                                            name='email'
                                            variant='standard'
                                            label='Enter your Email *'
                                            onBlur={formik.handleBlur}
                                            onChange={formik.handleChange}
                                            value={formik.values.email}
                                            helperText={formik.touched.email && formik.errors.email}
                                            error={formik.touched.email && Boolean(formik.errors.email)}
                                        />
                                    </Typography>
                                </ThemeProvider>
                            </div>

                            <div className='appo-2-textfield'>
                                <ThemeProvider theme={theme}>
                                    <Typography variant='body1'>
                                        <TextField
                                            fullWidth
                                            name='number'
                                            type='number'
                                            variant='standard'
                                            onBlur={formik.handleBlur}
                                            value={formik.values.number}
                                            onChange={formik.handleChange}
                                            label='Enter Contact Number *'
                                            helperText={formik.touched.number && formik.errors.number}
                                            error={formik.touched.number && Boolean(formik.errors.number)}
                                        />
                                    </Typography>
                                </ThemeProvider>
                            </div>

                            <div className='appo-2-textfield'>
                                <ThemeProvider theme={theme}>
                                    <Typography variant='body1'>
                                        <TextField
                                            fullWidth
                                            name='topic'
                                            variant='standard'
                                            onBlur={formik.handleBlur}
                                            value={formik.values.topic}
                                            onChange={formik.handleChange}
                                            label='Area of Major Discussion *'
                                            helperText={formik.touched.topic && formik.errors.topic}
                                            error={formik.touched.topic && Boolean(formik.errors.topic)}
                                        />
                                    </Typography>
                                </ThemeProvider>
                            </div>

                            <div className='appo-2-textfield'>
                                <ThemeProvider theme={theme}>
                                    <Typography variant='body1'>
                                        <TextField
                                            fullWidth
                                            name='remarks'
                                            variant='standard'
                                            onBlur={formik.handleBlur}
                                            value={formik.values.remarks}
                                            onChange={formik.handleChange}
                                            label='Enter Meeting Remarks *'
                                            helperText={formik.touched.remarks && formik.errors.remarks}
                                            error={formik.touched.remarks && Boolean(formik.errors.remarks)}
                                        />
                                    </Typography>
                                </ThemeProvider>
                            </div>

                            <div>
                                <Button
                                    type='submit'
                                    id='appo-1-2-btn'
                                >
                                    Submit
                                </Button>
                            </div>
                        </div>
                    </form>
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

export default AppointDetails;
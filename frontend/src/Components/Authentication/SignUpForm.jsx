import { Button, Grid, TextField, InputLabel, Select, MenuItem } from '@mui/material'
import { blue } from '@mui/material/colors'
import { useFormik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'
import { registerUser } from '../../Store/Auth/Action'


const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid Email").required("Email is Required"),
    password: Yup.string().required("Password is Required")
})

const currentYear = new Date().getFullYear()
const years = Array.from({ length: 100 }, (_, i) => currentYear - i)
const days = Array.from({ length: 31 }, (_, i) => i + 1)
const months = [
    { value: 1, label: "January" },
    { value: 2, label: "February" },
    { value: 3, label: "March" },
    { value: 4, label: "April" },
    { value: 5, label: "May" },
    { value: 6, label: "June" },
    { value: 7, label: "July" },
    { value: 8, label: "August" },
    { value: 9, label: "September" },
    { value: 10, label: "October" },
    { value: 11, label: "November" },
    { value: 12, label: "December" }
];


const SignUpForm = () => {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            fullName: "",
            email: "",
            password: "",
            dateOfBirth: {
                day: '',
                month: '',
                year: ''
            }
        },
        validationSchema,
        onSubmit: (values) => {
            const { day, month, year } = values.dateOfBirth
            const dateofBirth = `${year}-${month}${day}`
            values.dateOfBirth = dateofBirth
            dispatch(registerUser(values))
            console.log("form values", values)
        }
    })

    const handleDateChange = (name) => (event) => {
        formik.setFieldValue("dateOfBirth", {
            ...formik.values.dateOfBirth,
            [name]: event.target.value,
        })
    }

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Full Name"
                            name="fullName"
                            variant='outlined'
                            size='large'
                            value={formik.values.fullName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                            helperText={formik.touched.fullName && formik.errors.fullName}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <InputLabel>Date</InputLabel>
                        <Select
                            fullWidth
                            name="day" value={formik.values.dateOfBirth.day}
                            onChange={handleDateChange("day")}
                            onBlur={formik.handleBlur}
                        >
                            {days.map((day) => <MenuItem key={day} value={day}>{day}</MenuItem>)}
                        </Select>
                    </Grid>
                    <Grid item xs={4}>
                        <InputLabel>Month</InputLabel>
                        <Select
                            name="month"
                            value={formik.values.dateOfBirth.month}
                            onChange={handleDateChange("month")}
                            onBlur={formik.handleBlur}
                            error={
                                formik.touched.dateOfBirth && Boolean(formik.errors.dateOfBirth)
                            }
                            className="w-full"
                        >
                            {months.map((month) => (
                                <MenuItem key={month.value} value={month.value}>
                                    {month.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </Grid>
                    <Grid item xs={4}>
                        <InputLabel>Year</InputLabel>
                        <Select
                            name="year"
                            value={formik.values.dateOfBirth.year}
                            onChange={handleDateChange("year")}
                            onBlur={formik.handleBlur}
                            error={
                                formik.touched.dateOfBirth && Boolean(formik.errors.dateOfBirth)
                            }
                            className="w-full"
                        >
                            {years.map((year) => (
                                <MenuItem key={year} value={year}>
                                    {year}
                                </MenuItem>
                            ))}
                        </Select>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Email"
                            name="email"
                            variant='outlined'
                            size='large'
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Password"
                            name="password"
                            variant='outlined'
                            size='large'
                            type="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                        />
                    </Grid>
                    <Grid className='mt-20' item xs={12}>
                        <Button
                            sx={{
                                borderRadius: "29px",
                                py: "15px",
                                bgcolor: blue[500]
                            }}
                            fullWidth
                            variant='contained'
                            type='submit'
                            size="large"
                        >
                            Sign Up
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    )
}

export default SignUpForm

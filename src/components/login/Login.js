import React from 'react';
import { useDispatch } from 'react-redux'
import { Field, Form, Formik } from 'formik'
import { login } from '../../store/user'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Redirect, useHistory } from 'react-router-dom'
import cogoToast from 'cogo-toast';
function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
        </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const LoginComponent = () => {

    const dispatch = useDispatch()
    const classes = useStyles();
    const history = useHistory();
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
          </Typography>
                <Formik
                    initialValues={{ username: '', password: '' }}
                    onSubmit={(values) => {
                        dispatch(login(values)).then(() => {
                            cogoToast.success('Login Successful!');
                            history.push("/")
                        }


                        )
                    }}
                >

                    <Form>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Field name="username">
                                    {({ field, form, meta }) => (
                                        <TextField
                                            autoComplete="username"
                                            label="Username"
                                            variant="outlined"
                                            required
                                            fullWidth
                                            autoFocus
                                            {...field}
                                            type="text"
                                        />
                                    )}
                                </Field>
                            </Grid>
                            <Grid item xs={12}>
                                <Field name="password">
                                    {({ field, form, meta }) => (
                                        <TextField
                                            autoComplete="password"
                                            label="Password"
                                            variant="outlined"
                                            required
                                            fullWidth
                                            autoFocus
                                            {...field}
                                            type="text"
                                        />
                                    )}
                                </Field>
                            </Grid>

                            <Button type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}>Login</Button>
                        </Grid>
                    </Form>

                </Formik>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    )


}

export default LoginComponent;
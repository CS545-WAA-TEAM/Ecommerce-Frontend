import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux'
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
import { Field, Form, Formik } from 'formik'
import { signup } from '../../store/user'
import { useSelector } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom'
import cogoToast from 'cogo-toast';
import api from '../../configuration/api';


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Ecommerce
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
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const Signup = () => {

    const dispatch = useDispatch();
    const classes = useStyles();
    const { user } = useSelector(state => state.user)
    const history = useHistory();



    return (




        <Fragment>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                </Typography>


                    <Formik
                        initialValues={{ username: '', password: '', fullname: ''}}
                        onSubmit={(values) => {
                            let seller = false;
                            let buyer = false;
                            if(values.picked === 'seller'){
                                seller = true;
                            }
                            if(values.picked === 'buyer'){
                                buyer = true;
                            }
                            api.post("register", {username:values.username
                            ,password: values.password,
                            fullName: values.fullname,
                        seller: seller,
                    buyer:buyer}).then(function (response){
                        console.log(response.data);
                            cogoToast.success('You have successfully registerd!');
                                history.push("/")
                    })
                            console.log(values);
                            // dispatch(signup(values)).then(() => {
                            
                            // })
                        }}
                    >
                        {({ isSubmitting }) => (
                            <Form>

                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <Field name="fullname">
                                            {({ field, form, meta }) => (
                                                <TextField
                                                    autoComplete="fname"
                                                    label="Fullname"
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
                                    <Grid item xs={12}>
                                    <label>
                                    <Field type="radio" name="picked" value="buyer" />
                                    Buyer
                                    </label>
                                    <label>
                                    <Field type="radio" name="picked" value="seller" />
                                    Seller
                                    </label>

                                    </Grid>


                                </Grid>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    Sign Up
          </Button>
                                <Grid container justify="flex-end">
                                    <Grid item>
                                        <Link href="/login" variant="body2">
                                            Already have an account? Sign in
              </Link>
                                    </Grid>
                                </Grid>
                            </Form>
                        )}
                    </Formik>
                </div>

                <Box mt={5}>
                    <Copyright />
                </Box>
            </Container>
        </Fragment>
    )

}

export default Signup;



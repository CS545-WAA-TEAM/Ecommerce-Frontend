import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import { useHistory } from 'react-router-dom';
import Products from '../../containers/Products/Products'
import Signup from '../../components/Signup/Signup';
import Login from '../../components/login/Login';

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
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    link: {
        zIndex: 'right',
        justify: "space-between",
        margin: theme.spacing(1, 1.5),
        float: 'left'
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));



export default function Home() {
    const classes = useStyles();
    const history = useHistory();

    // const redirectToLogin = () => {
    //     history.push("/login")
    // }

    const redirectToSignup = () => {
        history.push("/signup")
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <CameraIcon className={classes.icon} />
                    <Typography variant="h6" color="inherit" noWrap>
                        Ecommerce
          </Typography>
                    <Link path="/login"><Button color="inherit" variant="outlined" className={classes.link}>
                        Login
          </Button></Link>

                    <Button onClick={redirectToSignup} color="inherit" variant="outlined" className={classes.link}>
                        Sign Up
          </Button>
                </Toolbar>
            </AppBar>
            <main>
                {/* Hero unit */}

                <Products />

                <Signup />

                <Login />


            </main>
            {/* Footer */}
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
        </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    Something here to give the footer a purpose!
        </Typography>
                <Copyright />
            </footer>
            {/* End footer */}
        </React.Fragment>
    );
}

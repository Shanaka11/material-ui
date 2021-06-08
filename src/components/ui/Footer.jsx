import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import { Link } from 'react-router-dom'

import footerAdornment from '../../assets/Footer Adornment.svg'
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import instagram from '../../assets/instagram.svg'

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.common.blue,
        width: '100%',
        zIndex: 1302,
        position: 'relative'
    },
    adornment:{
        width: '25em',
        verticalAlign: 'bottom',
        [theme.breakpoints.down('md')]:{
            width: '21em'
        },
        [theme.breakpoints.down('xs')]:{
            width: '15em'
        }
    },
    mainContainer: {
        position: 'absolute'
    },
    link: {
        color: 'white',
        fontFamily: 'Arial',
        fontSize: '0.75rem',
        fontWeight: 'bold',
        textDecoration: 'none'
    },
    gridItem: {
        margin: '3em',
    },
    icon: {
        height: '4em',
        width: '4em',
        [theme.breakpoints.down('xs')]:{
            height: '2.5em',
            width: '2.5em'
        }
    },
    socialContainer: {
        position: 'absolute',
        marginTop: '-6em',
        right: '1.5em',
        [theme.breakpoints.down('xs')]:{
            right: '0.6em'
        }
    }
}))

const Footer = ({ setValue, setSelectedIndex }) => {

    const classes = useStyles()

    return (
        <footer className={classes.footer}>
            <Hidden mdDown>
            <Grid container className={classes.mainContainer} justify='center'>
                <Grid item className={classes.gridItem}>
                    <Grid container direction='column' spacing={2}>
                        <Grid item onClick={() => setValue(0)} component={Link} to="/" className={classes.link}>
                            Home
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid container direction='column' spacing={2}>
                        <Grid item onClick={() => {setValue(1); setSelectedIndex(0)}} component={Link} to="/services" className={classes.link}>
                            Srevices
                        </Grid>
                        <Grid item onClick={() => {setValue(1); setSelectedIndex(1)}} component={Link} to="/customsoftware" className={classes.link}>
                            Custom Software Develoment
                        </Grid>
                        <Grid item onClick={() => {setValue(1); setSelectedIndex(2)}} component={Link} to="/mobileapps" className={classes.link}>
                            Mobile App Development
                        </Grid>
                        <Grid item onClick={() => {setValue(1); setSelectedIndex(3)}} component={Link} to="/websites" className={classes.link}>
                            Website Development
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid container direction='column' spacing={2}>
                        <Grid item onClick={() => setValue(2)} component={Link} to="/revolution" className={classes.link}>
                            The Revolution
                        </Grid>
                        <Grid item onClick={() => setValue(2)} component={Link} to="/revolution" className={classes.link}>
                            Vision
                        </Grid>
                        <Grid item onClick={() => setValue(2)} component={Link} to="/revolution" className={classes.link}>
                            Technology
                        </Grid>
                        <Grid item onClick={() => setValue(2)} component={Link} to="/revolution" className={classes.link}>
                            Process
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid container direction='column' spacing={2}>
                        <Grid item onClick={() => setValue(3)} component={Link} to="/about" className={classes.link}>
                            About Us
                        </Grid>
                        <Grid item onClick={() => setValue(3)} component={Link} to="/about" className={classes.link}>
                            History
                        </Grid>
                        <Grid item onClick={() => setValue(3)} component={Link} to="/about" className={classes.link}>
                            Team
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid container direction='column' spacing={2}>
                        <Grid item onClick={() => setValue(4)} component={Link} to="/contact" className={classes.link}>
                            Contact Us
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            </Hidden>
            <img className={classes.adornment} alt='black decorative slash' src={footerAdornment}/>
            <Grid container spacing={2} justify='flex-end' className={classes.socialContainer}>
                <Grid item component={"a"} href='https://www.facebook.com' rel='noopener noreferrer' target='_blank'>
                    <img className={classes.icon} alt='facebook' src={facebook}/>
                </Grid>
                <Grid item component={"a"} href='https://www.twitter.com' rel='noopener noreferrer' target='_blank'>
                    <img className={classes.icon} alt='twitter' src={twitter}/>
                </Grid>
                <Grid item component={"a"} href='https://www.instagram.com' rel='noopener noreferrer' target='_blank'>
                    <img className={classes.icon} alt='instagram' src={instagram}/>
                </Grid>
            </Grid>
        </footer>
    )
}

export default Footer

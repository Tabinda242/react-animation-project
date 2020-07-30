import React from 'react';
import Grid from '@material-ui/core/Grid';
import { CardContent } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Footer.css';

function Footer() {
    return (
        <div className="Footer">
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <CardContent>
                       <div className="footer-para">
                           <p>Pick my brain/cortex and let's get <br /> <b>started</b> on your project</p>
                       </div>
                       <div className="link">
                           <p>nathan@cortexcopywriter.com</p>
                       </div>
                       <div className="fb-icon">
                           <FacebookIcon style={{ fontSize: 40 }}/>
                       </div>
                       <div className="link-icon">
                           <LinkedInIcon style={{ fontSize: 40 }}/>
                       </div>
                       <div className="footer-copywriter">
                           <p>© Cortex Copywriter 2020 | ABN 341 1599 0520</p>
                       </div>
                   </CardContent>
                </Grid>
            </Grid>
        </div>
    );
}

export default Footer;
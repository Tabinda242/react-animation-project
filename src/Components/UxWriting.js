import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { CardContent } from '@material-ui/core';
// import useWebAnimations, { zoomIn, fadeInRight, fadeInDown, fadeInUpBig, slideInDown, slideInLeft, slideInUp } from "@wellyshen/use-web-animations";
import './style.css';
import AOS from "aos";
import "aos/dist/aos.css";


function UxWriting() {

    useEffect(() => {
        AOS.init();
    }, [])

    // const Image1Animation = useWebAnimations({ ...zoomIn });
    // const Heading1 = useWebAnimations({ ...fadeInDown });
    // const Paragraph1 = useWebAnimations({ ...fadeInRight });
    // const List1 = useWebAnimations({ ...fadeInUpBig });

    // const Image2Animation = useWebAnimations({ ...zoomIn });
    // const Heading2 = useWebAnimations({ ...slideInDown });
    // const Paragraph2 = useWebAnimations({ ...slideInLeft });
    // const List2 = useWebAnimations({ ...slideInUp });

    return (
        <div className="container1">
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <CardContent>
                       <div 
                         data-aos="zoom-in"
                         data-aos-delay="100"
                         data-aos-duration="1500"
                         data-aos-once="true">
                            <img src="https://www.cortexcopywriter.com/img/services/services-6.svg" alt="ux-writing-pic" className="Ux-image" />
                        </div>
                        <div className="heading1" 
                             data-aos="fade-down" 
                             data-aos-once="true" 
                             data-aos-delay="400" 
                             data-aos-duration="1000">
                            <h6>UX Writing</h6>
                        </div>
                        <div 
                             className="UX-para" 
                             data-aos="fade-left" 
                             data-aos-once="true" 
                             data-aos-delay="600" 
                             data-aos-duration="1000">
                            <p>I develop clear and useful text in product interfaces to help users reach a<br /> specific goal, whether that's completing a form or tapping a button. This<br /> includes every type of content from on-screen help systems, user<br /> onboarding and in-app messages to push notifications and tooltips.</p>
                        </div>
                        <div 
                             className="lists" 
                             data-aos="fade-up" 
                             data-aos-once="true" 
                             data-aos-delay="800" 
                             data-aos-duration="1000">
                            <ul>
                                <li>Microcopy</li>
                                <li>Taxonomy & Labeling</li>
                                <li>Chatbots</li>
                                <li>User Research</li>
                                <li>Content Style Guide</li>
                            </ul>
                        </div>
                    </CardContent>
                </Grid>
            </Grid>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <CardContent>
                        <div  
                             data-aos="zoom-in" 
                             data-aos-once="true"
                             data-aos-delay="100"
                             data-aos-duration="1500">
                               <img src="https://www.cortexcopywriter.com/img/services/services-7.svg" className="web-image" alt="Web-pic" />
                        </div>
                        <div 
                             className="heading2" 
                             data-aos="fade-down" 
                             data-aos-once="true"
                             data-aos-delay="400" 
                             data-aos-duration="1000">
                            <h6>Website Copywriting</h6>
                        </div>
                        <div 
                             className="para2" 
                             data-aos="slide-right" 
                             data-aos-once="true"
                             data-aos-duration="1000">
                            <p>Your website is a dialogue with your audience. I capture the essence of your business and communicate it clearly. Carefully considered writing and SEO best practices allow me to craft the perfect user journey online. Let me draw the map that guides users every step of the way from discovery, to consideration, to conversion.</p>
                        </div>
                        <div 
                             className="lists2" 
                             data-aos="slide-up"
                             data-aos-once="true"
                             data-aos-duration="1000">
                            <ul>
                                <li>Information Architecture</li>
                                <li>Wireframes</li>
                                <li>Competitor Analysis</li>
                                <li>On-page SEO</li>
                                <li>Off-page SEO</li>
                            </ul>
                        </div>
                    </CardContent>
                </Grid>
            </Grid>
            
            <Grid container spacing={3} className="casestudy">
               <Grid item xs={12}>
                    <CardContent>
                        <div className="mainHead"
                            data-aos="fade-right"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-once="true">
                            <h2>Case Studies</h2>
                        </div>
                        <div
                            data-aos="fade-left"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-once="true">
                        <div>
                            <img src="https://www.cortexcopywriter.com/img\blog_featured\blog_stock-10.jpg" alt="Cortex Copywriter Case Study: Ausbeds Chatbot" className="Chatimage" />
                        </div>
                        <div className="Heading1">
                            <h3>Ausbeds: Scripted Chatbox</h3>
                        </div>
                        <div className="subHeading1">
                            <h4>Cortex Copwriter</h4>
                        </div>
                        </div>

                        <div data-aos="fade-right"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-once="true">
                        <div>
                            <img src="https://www.cortexcopywriter.com/img/blog_featured/blog_stock-6.jpg" alt="Cortex Copywriter Case Study: Ausbeds Chatbot" className="Chatimage2" />
                        </div>
                        <div className="Heading2">
                            <h3>Blaze Research: Rebrand</h3>
                        </div>
                        <div className="subHeading2">
                            <h4>Cortex Copwriter</h4>
                        </div>
                        </div>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    );
}

export default UxWriting;
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { CardContent } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import useWebAnimations, { fadeInLeft, fadeInDown, fadeInUpBig, fadeInRight } from "@wellyshen/use-web-animations";
import './../App.css';



export default function CopyWriter() {

  const brainMovement = [
    { transform: 'translateY(20%)' },
  ];

  const brainTiming = {
    duration: 2000,
    iterations: Infinity,
    direction: "alternate",
    easing: "ease-in-out"
  };
  const BrainImageMovement = useWebAnimations({
    keyframes: brainMovement,
    timing: brainTiming
  })

  const ImageAnimate = useWebAnimations({ ...fadeInRight });
  const Heading = useWebAnimations({ ...fadeInDown });
  const Paragraph = useWebAnimations({ ...fadeInLeft });
  const button = useWebAnimations({ ...fadeInUpBig });

  return (
    <div className="root">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <CardContent>

            <div ref={ImageAnimate.ref}>
              <img src="https://www.cortexcopywriter.com/img\intro\Intro_Featured_Image_Empty.svg" alt="featured-pic" className="image" />
              <img src="https://www.cortexcopywriter.com/img\intro\Intro_Brain.svg" height="550px" alt="brain-pic" className="brain" ref={BrainImageMovement.ref} />
            </div>

            <div ref={Heading.ref} className="heading">
              <h1 className="head1">CORTEX</h1>
              <h5 className="head2">COPYWRITER</h5>
            </div>

            <div className="paragraph" ref={Paragraph.ref}>
              <p> Enhance your communications with<br /> psychology- based copywriting and UX<br /> writing</p>
            </div>

            <div className="button" ref={button.ref}>
              <Button>
                Send a message
              </Button>
            </div>
            
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
}
"use client";

import '../../app/general.css';
import { useEffect, useState } from 'react';
import Portfolio from './portfolio';
import Games from './games';

export default function HomePage() {
    const [contentVal, setContentVal] = useState<JSX.Element>(Portfolio);

    type elMap = {
        [key: string]: ()=>JSX.Element;
    }


    function optionClick(option: ()=>JSX.Element) { 
        setContentVal(option())
      }

    return (
<div className="container">
    <div className="borderArea">
        <div className="sideMenu">
            <div className="sideAnimationOverlay">
                <div className="titleMenu">
                    <div className="title">
                        <h1>Joey Smith</h1>
                    </div>
                    <div className="menuOuter">
                        <div className="menuItem" onClick={()=>optionClick(Portfolio)}>Portfolio</div>
                        <div className="menuItem">Photos</div>
                        <div className="menuItem" onClick={()=>optionClick(Games)}>Games</div>
                        <div className="menuItem">Contact</div>
                    </div>
                </div>
                <div className="hamburger">
                </div>
            </div>
        </div>
        <div className="mainContent">
            {contentVal}
        </div>
        <div className="bottomBorder">
            <a className="bottomLink resume" href="./Joseph_D_Smith_resume.pdf">Resume</a>
            <a className="bottomLink linkedIn" href="https://www.linkedin.com/in/joeydsmith/">LinkedIn</a>
            <a className="bottomLink gitHub" href="https://github.com/josephdougs">GitHub</a>
        </div>
    </div>
</div>
    );
}
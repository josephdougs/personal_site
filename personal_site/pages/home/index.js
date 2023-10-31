import '../../app/general.css';

export default function HomePage() {
    return (
<div class="container">
    <div class="borderArea">
        <div class="sideMenu">
            <div class="sideAnimationOverlay">
                <div class="titleMenu">
                    <div class="title">
                        <h1>Joey Smith</h1>
                    </div>
                    <div class="menuOuter">
                    </div>
                </div>
                <div class="hamburger">
                </div>
            </div>
        </div>
        <div class="mainContent">
            <div class="contentItem">
                <h3>Item1</h3>
                <p>Hello my friends how are you?</p>
            </div>
            <div class="contentItem">
                <h3>Item2</h3>
                <p>Hello my friends how are you?</p>
            </div>
            <div class="contentItem">
                <h3>Item3</h3>
                <p>Hello my friends how are you?</p>
            </div>
            <div class="contentItem">
                <h3>Item4</h3>
                <p>Hello my friends how are you?</p>
            </div>
        </div>
        <div class="bottomBorder">
            <a class="bottomLink resume" href="./Joseph_D_Smith_resume.pdf">Resume</a>
            <a class="bottomLink linkedIn" href="https://www.linkedin.com/in/joeydsmith/">LinkedIn</a>
            <a class="bottomLink gitHub" href="https://github.com/josephdougs">GitHub</a>
        </div>
    </div>
</div>
    );
}
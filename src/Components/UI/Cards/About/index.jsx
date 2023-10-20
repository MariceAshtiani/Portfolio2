import StyledCard from "./styled";

export default function AboutCard(){
    return (
        <>
        <h1>About me</h1>
        <StyledCard>
            <div className="about-info">
                <div className="about-image">
                    <img src="/Images/Marice.jpg" alt="Image of myself"></img>
                </div>
                <div className="about-txt">
                    <p>Hi, My name is Marice and I am a front end developer living in Norway. After years of working and studying I decided I wanted to try something new and creative, and I landed on front end development. I am a trained hairdresser and have worked as a hairdresser since 2013, I started working as a barber in 2021, and now I'm looking forward to work with front end development. I graduated from Noroff School of Technology and digital media in October 2023, and I'm ready to embrace this new profession!
                    </p>
                    <p>On my free time i like to train with my 3 dogs, take long walks in the forest or on the mountain and relax at the family-cabin. My front end journey has just begun, and i can't wait to show you more of my work as i continue to develop myself and my skills!</p>
                </div>
            </div>
            <hr />
            <div className="about-extra">
                <h2>Languages</h2>
                    <div className="languages">
                        <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="icon for HTML5"></img>
                        <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="icon for CSS3"></img>
                        <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="icon for JavaScript"></img>
                    </div>
                    <h2>Frameworks</h2>
                    <div className="frameworks">
                        <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="icon for react"></img>
                        <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" alt="icon for styled components"></img>
                        <img src="https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white" alt="icon for bootstrap"></img>
                        <img src="https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white" alt="icon for sass"></img>
                    </div>
                    <h2>Tools</h2>
                    <div className="tools">
                        <img src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white" alt="icon for visual studio code"></img>
                        <img src="https://img.shields.io/badge/Adobe%20XD-470137?style=for-the-badge&logo=Adobe%20XD&logoColor=#FF61F6" alt="icon for adobe XD"></img>
                        <img src="https://img.shields.io/badge/adobe%20photoshop-%2331A8FF.svg?style=for-the-badge&logo=adobe%20photoshop&logoColor=white" alt="icon for photoshop"></img>
                        <img src="https://img.shields.io/badge/WordPress-%23117AC9.svg?style=for-the-badge&logo=WordPress&logoColor=white" alt="logo for wordpress"></img>
                        <img src="https://img.shields.io/badge/Trello-0052CC?style=for-the-badge&logo=trello&logoColor=white" alt="logo for trello"></img>
                        <img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" alt="logo for netlify"></img>
                    </div>
            </div>
        </StyledCard>
        </>
    )
}
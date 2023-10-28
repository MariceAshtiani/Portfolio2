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
                <p>Hi, I'm Marice, a junior front-end developer in Norway. My journey, spanning from hairdressing to veterinary medicine, has instilled in me a unique understanding of aesthetics, precision, and user experience. This diverse background fuels my approach to front-end development. Having graduated from Noroff School of Technology and Digital Media in 2023, I bring a fresh perspective to the tech arena. Each career path I've walked has sharpened my focus on user needs, whether it's a client seeking a new hairstyle or a user navigating a webpage. I'm enthusiastic about translating this rich tapestry of experiences into innovative digital solutions. While my tech portfolio is still growing, I assure you that every project reflects my deep commitment to quality and creativity.</p>
                <p>On my free time, I cherish training with my dogs, exploring the Norwegian wilderness, and indulging my artistic side with drawings. My journey in front-end development is only beginning, and I'm excited for you to witness its evolution.</p>
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
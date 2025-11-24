import "../../styles/Footer.css";

import DevelopmentInformation from "./DevelopmentInformation.jsx";
import AdditionalInformation from "./AdditionalInformation.jsx";
import CopyrightInformation from "./CopyrightInformation.jsx";

function Footer() {
    const developmentInformation = {
        developer: [
            {
                title: "GitHub",
                src: "https://github.com/lyndonpanton"
            },
            {
                title: "LinkedIn",
                src: "https://linkedin.com"
            },
            {
                title: "Website",
                src: "https://lyndonpanton.co.uk"
            }
        ],
        languages: [
            {
                title: "ReactJS",
                src: "https://react.dev/"
            },
            {
                title: "JavaScript",
                src: "https://en.wikipedia.org/wiki/JavaScript"
            },
            {
                title: "CSS",
                src: "https://en.wikipedia.org/wiki/CSS"
            }
        ],
        managers: [
            {
                title: "npm",
                src: "https://www.npmjs.com/"
            },
            {
                title: "Fontawesome",
                src: "https://fontawesome.com/"
            },
        ],
        projects: [
            {
                title: "Artist's Homepage",
                src: "https://lyndonpanton.github.io/homepage/"
            },
            {
                title: "Linked Lists",
                src: "https://lyndonpanton.github.io/linked-lists/"
            },
            {
                title: "Recursion",
                src: "https://lyndonpanton.github.io/recursion/"
            },
            {
                title: "Weather App",
                src: "https://lyndonpanton.github.io/weather-app/"
            }
        ],
    };

    const additionalInformation = {
        data: [
            {
                title: "Privacy Policy",
                src: "#"
            },
            {
                title: "Cookies",
                src: "#"
            },
            {
                title: "Terms And Conditions",
                src: "#"
            }
        ],
        social: [
            {
                title: "Twitter (opens in new tab)",
                src:  "https://x.com/"
            },
            {
                title: "Facebook (opens in new tab)",
                src:  "https://www.facebook.com/"
            },
            {
                title: "Instagram (opens in new tab)",
                src:  "https://www.instagram.com/"
            }
        ],
    };

    const copyrightInformation = {
        year: new Date().getFullYear().toString(),
        author: "Lyndon Mykal Panton",
        rights: "All Rights Reserved"
    };

    return (
        <footer>
            {/* <DevelopmentInformation
                    information={ developmentInformation } />
            <AdditionalInformation
                    information={ additionalInformation } /> */}
            <CopyrightInformation
                    copyrightInformation={ copyrightInformation } />
        </footer>
    );
}

export default Footer;

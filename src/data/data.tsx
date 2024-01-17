import { Contact, StudioPara } from "../constants/constants"
import recent1 from "../images/recent/recent1.jpg"
import recent2 from "../images/recent/recent2.jpg"
import recent3 from "../images/recent/recent3.jpg"
import recent4 from "../images/recent/recent4.jpg"
import testimonial1 from "../images/testimonials/testimonial1.jpg"
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaLocationDot,FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";


// nav
export const navItems = [
    {
        id : "HOME",
    },
    {
        id : "ABOUT",
    },
    {
        id : "AWARDS",
    },
    {
        id : "CONTACT",
    },
]

export const moveNavCursor = {
        HOME : {
            move : "translate-x-[13px]",
            width : "w-[15%]"
        },
        ABOUT : {
            move :"translate-x-[89px]",
            width : "w-[15%]"
        },
        AWARDS : {
            move : "translate-x-[166px]",
            width : "w-[20%]"
        },
        CONTACT : {
            move : "translate-x-[256px]",
            width : "w-[20%]"
        }
}

// recent art cards
export const recentArtCards = [
    {
        image : recent1
    },
    {
        image : recent2
    },
    {
        image : recent3
    },
    {
        image : recent4
    },
]

// studio
export const studioData = [
    {
        id : "clean",
        header : "Cleanliness",
        para : StudioPara.cleanliness
    },
    {
        id : "envirnoment",
        header : "Welcoming Envirnoment",
        para : StudioPara.envirnoment
    },
    {
        id : "discuss",
        header : "Tattoo Discussion",
        para : StudioPara.discussion
    },
    {
        id : "parking",
        header : "Parking",
        para : StudioPara.parking
    }
]

// testimonials

export const testimonials = [
    {
        id : "test1",
        name : "Vikram palan",
        testimonial : 'A great experience from the studio. Made by tennis ramteke. A great tattoo artist making detailed tattoos with a great ease.',
        image : testimonial1
    },
    {
        id : "test2",
        name : "Apoorva Hazari",
        testimonial : 'Excellent finishing. Best place to get inked. Thanks for the amazing Tattoo.',
    },
    {
        id : "test3",
        name : "vishal shende",
        testimonial : 'Best artist. Having lot of experience. Totally worth it.',
    },
    {
        id : "test4",
        name : "Mercy Gaikwad",
        testimonial : 'Great tattoo artist. Amazing experience wid him. You nailed it man ♥️stay blessed always. Keep doing excellent work....God bless You.',
    },

]

// social media
export const socialMedia = [
    {
        id: "facebook",
        name : "Facebook",
        icon : <FaFacebookF  size={20}/>
    },
    {
        id: "instagram",
        name : "Instagram",
        icon : <FaInstagram  size={20}/>
    }

]

// footer
export const footerData = [
    {
        id : "phone",
        content : Contact.number,
        icon : <FaPhone size={40}/>
    },
    {
        id : "location",
        content : "Near Durga Temple Plot No 10, Opp Vailla Apartment, Vijay Nagar, Nagpur, Maharashtra 440013",
        icon : <FaLocationDot size={40} />
    },
    {
        id : "email",
        content : "user@gmail.com",
        icon : <MdEmail  size={40}/>
    },

]

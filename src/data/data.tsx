import { Contact, StudioPara } from "../constants/constants"
import recent3 from "../images/recent/recent3.jpg"
import recent2 from "../images/recent/recent2.jpg"
import recent5 from "../images/recent/recent5.jpg"
import recent6 from "../images/recent/recent6.jpg"

import testimonial1 from "../images/testimonials/testimonial1.jpg"
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaLocationDot,FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import video1 from "../videos/VID-20240111-WA0052.mp4"
import video2 from "../videos/WhatsApp Video 2024-01-11 at 20.30.28_73f8a0ec.mp4"
import video3 from "../videos/VID-20240111-WA0053.mp4"
import video4 from "../videos/VID-20240111-WA0058.mp4"
// import video5 from "../videos/WhatsApp Video 2024-01-11 at 20.31.32_b71f7782.mp4"
// import video6 from "../videos/WhatsApp Video 2024-01-11 at 20.32.58_61237438.mp4"


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
        image : recent5
    },
    {
        image : recent2
    },
    {
        image : recent3
    },
    {
        image : recent6
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

//artist
export const artistVideos = [
    {
        id : 1,
        video : video1
    },
    {
        id : 2,
        video : video2
    },
    {
        id : 3,
        video : video3
    },
    {
        id : 4,
        video : video4
    },
    // {
    //     id : 5,
    //     video : video5
    // },
    // {
    //     id : 6,
    //     video : video6
    // }
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
        icon : <FaPhone size={30}/>
    },
    {
        id : "location",
        content : "Near Durga Temple Plot No 10, Opp Vailla Apartment, Vijay Nagar, Nagpur, Maharashtra 440013",
        icon : <FaLocationDot size={30} />
    },
    {
        id : "email",
        content : "user@gmail.com",
        icon : <MdEmail  size={30}/>
    },

]

// inputs
export const inputs = [
    {
        id : "firstName",
        type : "text",
        content : "First name",
    },
    {
        id : "lastName",
        type : "text",
        content : "Last name",
    },
    {
        id : "phone",
        type : "text",
        content : "Phone",
    },
    {
        id : "email",
        type : "text",
        content : "Email",
    },
    {
        id : "when",
        type : "select",
        options : ["In a week", "Within a month", "In the next three months"],
    },
]

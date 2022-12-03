const mongoose = require("mongoose");
const {
    mainModule
} = require("process");

const introSchema = new mongoose.Schema({
    welcomeText: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    caption: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    btnText: {
        type: String,
        required: true
    },
    btnLink: {
        type: String,
        required: true
    },
    ariaLable: {
        type: String,
    },
    role: {
        type: String,
    }
})

const aboutSchema = new mongoose.Schema({
    lottieURL: {
        type: String,
        required: true
    },
    alt: {
        type: String,
        required: true
    },
    description1: {
        type: String,
        required: true
    },
    description2: {
        type: String,
        required: true
    },
    skils: {
        type: Array,
        required: true
    },
    skilsFront: {
        type: Array,
        required: true
    },
    skilsBack: {
        type: Array,
        required: true
    },
    role: {
        type: String,
    }
})

const experiencesSchema = new mongoose.Schema({
    company: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    period: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },


})

const projectsSchema = new mongoose.Schema({
    technolgies: {
        type: Array,
    },
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    ariaLable: {
        type: String,
    },
    role: {
        type: String,
    },
    technologies: {
        type: Array,
    }


})
const coursesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    technologies: {
        type: Array,
    },
    alt: {
        type: String,
    },
    ariaLable: {
        type: String,
    },
    role: {
        type: String,
    }

})

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    languages: {
        type: Array,
    },
    lottieURL: {
        type: String,
        required: true
    },
    alt: {
        type: String,
    },
    role: {
        type: String,
    }

})
const footerSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    icon: {
        type: String,
    },
    link: {
        type: String,
    },
    role: {
        type: String,
    },
    alt: {
        type: String,
    },
    aria: {
        type: String,
    }

})
const socialLinksSchema = new mongoose.Schema({
    icon: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    role: {
        type: String,
    },
    alt: {
        type: String,
    },
    aria: {
        type: String,
    }


})

module.exports = {
    Intro: mongoose.model("intros", introSchema),
    About: mongoose.model("abouts", aboutSchema),
    Experience: mongoose.model("experiences", experiencesSchema),
    Project: mongoose.model("projects", projectsSchema),
    Course: mongoose.model("courses", coursesSchema),
    Contact: mongoose.model("contacts", contactSchema),
    Footer: mongoose.model("footers", footerSchema),
    SocialLink: mongoose.model("socialLinks", socialLinksSchema),

}
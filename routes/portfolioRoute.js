const router = require('express').Router()
const {
  Intro,
  About,
  Experience,
  Project,
  Course,
  Contact,
  Footer,
  SocialLink,
} = require('../models/portfolioModel')
const User = require("../models/userModel")

//get all portfolio data
router.get('/get-portfolio-data', async (req, res) => {
  try {
    const intros = await Intro.find()
    const abouts = await About.find()
    const projects = await Project.find()
    const contacts = await Contact.find()
    const experiences = await Experience.find()
    const courses = await Course.find()
    const footers = await Footer.find()
    const socialLinks = await SocialLink.find()

    res.status(200).send({
      intro: intros[0],
      about: abouts[0],
      projects: projects,
      contact: contacts[0],
      experiences: experiences,
      course: courses,
      footer: footers[0],
      socialLink: socialLinks,
    })
  } catch (error) {
    res.status(500).send(error)
  }
})

//update intro
router.post('/update-intro', async (req, res) => {
  try {
    const intro = await Intro.findOneAndUpdate({
        _id: req.body._id,
      },
      req.body, {
        new: true,
      },
    )
    res.status(200).send({
      data: intro,
      success: true,
      message: 'Intro updated successfully',
    })
  } catch (error) {
    res.status(500).send(error)
  }
})

//update about
router.post('/update-about', async (req, res) => {
  try {
    const about = await About.findOneAndUpdate({
        _id: req.body._id,
      },
      req.body, {
        new: true,
      },
    )
    res.status(200).send({
      data: about,
      success: true,
      message: 'About updated successfully',
    })
  } catch (error) {
    res.status(500).send(error)
  }
})

// add experience
router.post('/add-experience', async (req, res) => {
  try {
    const experience = new Experience(req.body)
    await experience.save()
    res.status(200).send({
      data: experience,
      success: true,
      message: 'Experiance added successfulle',
    })
  } catch (error) {
    res.status(500).send(error)
  }
})

// update experience
router.post('/update-experience', async (req, res) => {
  try {
    const experience = await Experience.findByIdAndUpdate({
        _id: req.body._id,
      },
      req.body, {
        new: true,
      },
    )
    res.status(200).send({
      data: experience,
      success: true,
      message: 'Experiance updated successfulle',
    })
  } catch (error) {
    res.status(500).send(error)
  }
})

// delete experience
router.post('/delete-experience', async (req, res) => {
  try {
    const experience = await Experience.findByIdAndDelete({
      _id: req.body._id
    })
    res.status(200).send({
      data: experience,
      success: true,
      message: 'Experiance deleted successfulle',
    })
  } catch (error) {
    res.status(500).send(error)
  }
})

// add project
router.post('/add-project', async (req, res) => {
  try {
    const project = new Project(req.body)
    await project.save()
    res.status(200).send({
      data: project,
      success: true,
      message: 'Project added successfulle',
    })
  } catch (error) {
    res.status(500).send(error)
  }
})

// update project
router.post('/update-project', async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate({
        _id: req.body._id,
      },
      req.body, {
        new: true,
      },
    )
    res.status(200).send({
      data: project,
      success: true,
      message: 'Project updated successfulle',
    })
  } catch (error) {
    res.status(500).send(error)
  }
})

// delete project
router.post('/delete-project', async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete({
      _id: req.body._id
    })
    res.status(200).send({
      data: project,
      success: true,
      message: 'Project deleted successfulle',
    })
  } catch (error) {
    res.status(500).send(error)
  }
})

// add Courses
router.post('/add-course', async (req, res) => {
  try {
    const course = new Course(req.body)
    await course.save()
    res.status(200).send({
      data: course,
      success: true,
      message: 'Project added successfulle',
    })
  } catch (error) {
    res.status(500).send(error)
  }
})

// update project
router.post('/update-course', async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate({
        _id: req.body._id,
      },
      req.body, {
        new: true,
      },
    )
    res.status(200).send({
      data: course,
      success: true,
      message: 'Courses updated successfulle',
    })
  } catch (error) {
    res.status(500).send(error)
  }
})

// delete 
router.post('/delete-course', async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete({
      _id: req.body._id
    })
    res.status(200).send({
      data: course,
      success: true,
      message: 'Course deleted successfulle',
    })
  } catch (error) {
    res.status(500).send(error)
  }
})


//update contact
router.post('/update-contact', async (req, res) => {
  try {
    const contact = await Contact.findOneAndUpdate({
        _id: req.body._id,
      },
      req.body, {
        new: true,
      },
    )
    res.status(200).send({
      data: contact,
      success: true,
      message: 'Contact updated successfully',
    })
  } catch (error) {
    res.status(500).send(error)
  }
})

//update footer
router.post('/update-footer', async (req, res) => {
  try {
    const footer = await Footer.findOneAndUpdate({
        _id: req.body._id,
      },
      req.body, {
        new: true,
      },
    )
    res.status(200).send({
      data: footer,
      success: true,
      message: 'Footer updated successfully',
    })
  } catch (error) {
    res.status(500).send(error)
  }
})

// add socialLink
router.post('/add-socialLink', async (req, res) => {
  try {
    const socialLink = new SocialLink(req.body)
    await socialLink.save()
    res.status(200).send({
      data: socialLink,
      success: true,
      message: 'Social Link added successfulle',
    })
  } catch (error) {
    res.status(500).send(error)
  }
})

// update socialLink
router.post('/update-socialLink', async (req, res) => {
  try {
    const socialLink = await SocialLink.findByIdAndUpdate({
        _id: req.body._id,
      },
      req.body, {
        new: true,
      },
    )
    res.status(200).send({
      data: socialLink,
      success: true,
      message: 'Social Link updated successfulle',
    })
  } catch (error) {
    res.status(500).send(error)
  }
})

// delete socialLink
router.post('/delete-socialLink', async (req, res) => {
  try {
    const socialLink = await SocialLink.findByIdAndDelete({
      _id: req.body._id
    })
    res.status(200).send({
      data: socialLink,
      success: true,
      message: 'Social Link deleted successfulle',
    })
  } catch (error) {
    res.status(500).send(error)
  }
})


//admin login
router.post("/admin-login", async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
      password: req.body.password
    })
    user.password = ""
    if (user) {
      res.status(200).send({
        data: user,
        success: true,
        message: "Login successfully"
      })
    } else {
      res.status(200).send({
        data: user,
        success: false,
        message: "Invalid user name or password"
      })
    }
  } catch (error) {
    res.status(500).send(error)
  }
})
module.exports = router
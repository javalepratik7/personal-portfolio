// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        })
      }
    })
  })
  
  // Add active class to navigation links based on scroll position
  window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section")
    const navLinks = document.querySelectorAll(".nav-links a")
  
    let current = ""
    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.clientHeight
      if (scrollY >= sectionTop - 60) {
        current = section.getAttribute("id")
      }
    })
  
    navLinks.forEach((link) => {
      link.classList.remove("active")
      if (link.getAttribute("href").slice(1) === current) {
        link.classList.add("active")
      }
    })
  })
  
  // Add animation to the hero section
  document.addEventListener("DOMContentLoaded", () => {
    const heroContent = document.querySelector(".hero-content")
    const heroImage = document.querySelector(".hero-image")
  
    heroContent.style.opacity = "0"
    heroImage.style.opacity = "0"
  
    setTimeout(() => {
      heroContent.style.transition = "opacity 1s ease"
      heroImage.style.transition = "opacity 1s ease"
      heroContent.style.opacity = "1"
      heroImage.style.opacity = "1"
    }, 100)
  })


  // Add this to your existing script.js

// Intersection Observer for project boxes animation
const observeProjects = () => {
    const options = {
      threshold: 0.1,
    }
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1"
          observer.unobserve(entry.target)
        }
      })
    }, options)
  
    const projectBoxes = document.querySelectorAll(".project-box")
    projectBoxes.forEach((box) => observer.observe(box))
  }
  
  // Initialize the observer when DOM is loaded
  document.addEventListener("DOMContentLoaded", () => {
    observeProjects()
  })
  

  // Add this to your existing script.js

// Intersection Observer for skills animation
const observeSkills = () => {
    const options = {
      threshold: 0.1,
    }
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateX(0)"
          observer.unobserve(entry.target)
        }
      })
    }, options)
  
    const skillItems = document.querySelectorAll(".skill-item")
    skillItems.forEach((item, index) => {
      item.style.animationDelay = `${index * 0.1}s`
      observer.observe(item)
    })
  }
  
  // Initialize the observer when DOM is loaded
  document.addEventListener("DOMContentLoaded", () => {
    observeSkills()
  })
  
  
  // Add this to your existing script.js

// Handle form submission
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form")
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault()
        // Here you would typically send the form data to a server
        // For this example, we'll just log it to the console
        const formData = new FormData(contactForm)
        console.log("Form submitted with data:", Object.fromEntries(formData))
        alert("Thank you for your message! I'll get back to you soon.")
        contactForm.reset()
      })
    }
  })
  
  // Intersection Observer for contact section animation
  const observeContact = () => {
    const options = {
      threshold: 0.1,
    }
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateY(0)"
          observer.unobserve(entry.target)
        }
      })
    }, options)
  
    const contactElements = document.querySelectorAll(".contact-info, .contact-form")
    contactElements.forEach((el, index) => {
      el.style.animationDelay = `${index * 0.2}s`
      observer.observe(el)
    })
  }
  
  // Initialize the observer when DOM is loaded
  document.addEventListener("DOMContentLoaded", () => {
    observeContact()
    // ... other initialization code
  })
  
  
  
  
/*=============== SHOW MENU ===============*/
const headerToggle = document.getElementById('header-toggle'),
      main = document.getElementById('main'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(headerToggle){
    headerToggle.addEventListener('click', () =>{
        main.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        main.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const main = document.getElementById('main')
    // When we click on each nav__link, we remove the show-menu class
    main.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)




/*=============== loading effects ===============*/
window.addEventListener("load", function () {
    // Add a small delay before fading out loader
    setTimeout(() => {
        const loaderWrapper = document.getElementById("loader-wrapper");
        loaderWrapper.classList.add("fade-out");
    }, 500);
});



/*=============== MODAL STYLES ===============*/
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalImages = document.getElementById('modal-images');
    const modalClose = document.querySelector('.modal-close');

    // Sample project data including images
    const projectDetails = {
        'graphic-design': {
            title: 'Graphic Design',
            description: 'This project involved creating visually appealing graphics for various media. It includes designing logos, social media posts, and promotional materials.',
            images: [
                'assets/img/KA LOGO.jpg',
                'assets/img/Klothing Avenue.png',
                'assets/img/Pekkabu Logo.png',
                'assets/img/P-1.jpg',
                'assets/img/P-2.jpg',
                'assets/img/P-11.jpg',
                'assets/img/P-13.jpg',
            ]
        },
        'youtube-thumbnail': {
            title: 'YouTube Thumbnail',
            description: 'Designed custom thumbnails for YouTube videos to increase click-through rates and viewer engagement.',
            images: [
                'assets/img/1.png',
                'assets/img/2.png',
                'assets/img/10.png',
                'assets/img/18.png',
                'assets/img/14.png',
            ]
        }
    };

    // Add event listeners for the "View More" buttons
    document.querySelectorAll('.view-more').forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const projectId = this.getAttribute('data-project');
            const project = projectDetails[projectId];

            // Update modal content with project details
            modalTitle.textContent = project.title;
            modalDescription.textContent = project.description;

            // Clear previous images
            modalImages.innerHTML = '';

            // Display new project images in modal
            project.images.forEach(src => {
                const img = document.createElement('img');
                img.src = src;
                img.alt = `${project.title} Image`;
                img.style.width = '100%';  // Make the images responsive
                img.style.marginBottom = '10px';  // Add some space between images
                modalImages.appendChild(img);
            });

            // Show modal
            modal.style.display = 'block';
        });
    });

    // Close modal when clicking on close button or outside the modal
    modalClose.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});





/*=============== CONTACT EFFECTS ===============*/
const form = document.getElementById('contact-form');
    const otpSection = document.querySelector('.otp-section');
    const submitBtn = document.getElementById('submit-btn');
    const verifyBtn = document.getElementById('verify-btn');
    let generatedOTP = null;

    // Generate a 6-digit OTP
    function generateOTP() {
        return Math.floor(100000 + Math.random() * 900000); // 6-digit random number
    }

    // When the form is submitted
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent form submission

        // Generate OTP and send email (Simulation)
        generatedOTP = generateOTP();
        alert('Your OTP is: ' + generatedOTP); // Simulate sending OTP via email
        otpSection.style.display = 'block';
        submitBtn.style.display = 'none';
        verifyBtn.style.display = 'block';
    });

    // OTP Verification
    verifyBtn.addEventListener('click', function () {
        const enteredOTP = document.getElementById('otp').value;
        
        if (enteredOTP == generatedOTP) {
            alert('OTP Verified! Your message has been sent.');
            form.submit(); // Submit the form after verification
        } else {
            alert('Incorrect OTP. Please try again.');
        }
    });

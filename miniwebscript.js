
        function toggleMenu() {
            document.getElementById('navLinks').classList.toggle('active');
        }

        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name && email && message) {
                document.getElementById('formStatus').innerHTML = 
                    `<span style="color:green;">✅ Thank you, ${name}! Your message has been sent.</span>`;
                this.reset();
            } else {
                document.getElementById('formStatus').innerHTML = 
                    `<span style="color:red;">⚠️ Please fill all fields.</span>`;
            }
        });

        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
                // Close mobile menu
                document.getElementById('navLinks').classList.remove('active');
            });
        });
    
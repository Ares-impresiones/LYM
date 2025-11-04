       // Loader
        window.addEventListener('load', () => {
            setTimeout(() => {
                document.getElementById('loader').classList.add('hidden');
            }, 1500);
        });

        // Create particles
        const particlesContainer = document.getElementById('particles');
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.width = Math.random() * 100 + 50 + 'px';
            particle.style.height = particle.style.width;
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 5 + 's';
            particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
            particlesContainer.appendChild(particle);
        }

        // Scroll reveal
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });

        // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Timer countdown
        function updateTimer() {
            const now = new Date();
            const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
            const diff = endOfDay - now;

            const hours = Math.floor(diff / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
            document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
            document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
        }

        setInterval(updateTimer, 1000);
        updateTimer();

        // Popup
        const popup = document.getElementById('popup');
        const popupOverlay = document.getElementById('popupOverlay');
        const closePopup = document.getElementById('closePopup');

        // Comentado para que no aparezca automáticamente
        // setTimeout(() => {
        //     popup.classList.add('active');
        //     popupOverlay.classList.add('active');
        // }, 3000);

        closePopup.addEventListener('click', () => {
            popup.classList.remove('active');
            popupOverlay.classList.remove('active');
        });

        popupOverlay.addEventListener('click', () => {
            popup.classList.remove('active');
            popupOverlay.classList.remove('active');
        });

        // Header scroll effect
        let lastScroll = 0;
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            const header = document.querySelector('header');
            
            if (currentScroll > 100) {
                header.style.padding = '10px 50px';
            } else {
                header.style.padding = '15px 50px';
            }
            
            lastScroll = currentScroll;
        });

        // Newsletter form
        document.querySelectorAll('.newsletter-form').forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                alert('¡Gracias por suscribirte! Revisá tu email para obtener tu descuento.');
                form.reset();
            });
        });

        // Popup form
        document.querySelector('.popup-form').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('¡Genial! Te enviamos tu cupón de descuento por email.');
            popup.classList.remove('active');
            popupOverlay.classList.remove('active');
        });

        // Product card hover animation
        document.querySelectorAll('.product-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            });
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
   
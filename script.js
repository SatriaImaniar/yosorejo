
        // Toggle Menu Mobile
        const menuToggle = document.getElementById('menuToggle');
        const navMenu = document.getElementById('navMenu');
        
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
        
        // Smooth Scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu after click
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                }
            });
        });
        
        // Form Submission
       const form = document.getElementById("contactForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    fetch(form.action, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" }
    })
      .then((response) => {
        if (response.ok) {
          alert("Pesan berhasil dikirim!");
          form.reset();
        } else {
          alert("Pesan gagal dikirim.");
        }
      })
      .catch((error) => {
        alert("Terjadi error: " + error.message);
      });
  });
        
        // Sticky header effect
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            header.classList.toggle('sticky', window.scrollY > 0);
        });
        
        // Initialize Google Maps
        function initMap() {
            // Coordinates for Desa Yosorejo, Pekalongan
            const location = { lat: -7.0258, lng: 109.7592 };
            
            const map = new google.maps.Map(document.getElementById("map"), {
                zoom: 14,
                center: location,
                mapId: "DEMO_MAP_ID",
            });
            
            const marker = new google.maps.Marker({
                position: location,
                map: map,
                title: "Desa Yosorejo, Pekalongan",
            });
            
            const infoWindow = new google.maps.InfoWindow({
                content: "<h3>Desa Yosorejo</h3><p>Kec. Petungkriono, Kab. Pekalongan</p>",
            });
            
            marker.addListener("click", () => {
                infoWindow.open(map, marker);
            });
        }
        
        // Animation on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        });
        
        document.querySelectorAll('.animate-on-scroll').forEach(element => {
            observer.observe(element);
        });

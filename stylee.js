const menuIcon = document.getElementById('menu-icon');
    const navbar = document.getElementById('navbar');
  
    menuIcon.onclick = function() {
      navbar.classList.toggle('active');
    }

    
  document.addEventListener('click', (e) => {
    if (!menuIcon.contains(e.target) && !navbar.contains(e.target)) {
      navbar.classList.remove('active');
    }
  });

    const form = document.querySelector(".contact-form");
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const formData = new FormData(form);
    fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        alert("✅ Message sent successfully!");
        form.reset();
      } else {
        alert("❌ Error sending message. Please try again.");
      }
    });
  });
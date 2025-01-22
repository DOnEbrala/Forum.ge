function checkPassword() {
  const password = document.getElementById('password').value;
  const hasLetters = /[a-zA-Z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasUpperCase = /[A-Z]/.test(password);  



  if (!password) {
      alert("Password cannot be empty!");
  } else if (hasLetters && !hasNumbers) {
      alert("Small Password");
  } else if (hasLetters && hasNumbers && !hasUpperCase) {
      alert("Medium Password");
  } else if (hasLetters && hasNumbers && hasUpperCase) {
      alert("Good level password");
  } else {
      alert("Weak Password: Password doesn't meet any criteria.");
  }
}
document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault(); 
  checkPassword();
});



let currentIndex = 0;
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;
  const slider = document.querySelector('.slider');


  function moveSlide(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
      currentIndex = totalSlides - 1; 
    } else if (currentIndex >= totalSlides) {
      currentIndex = 0; 
    }

    updateSliderPosition();
  }

  
  function updateSliderPosition() {
    const slideWidth = slides[0].clientWidth;
    slider.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
  }


  updateSliderPosition();

  
  setInterval(() => moveSlide(1), 5000); 





function validateEmail(email) {
    var emailPattern = /^[^@]+@[^@]{4,}$/;
    return emailPattern.test(email);
  }
  
  function validatePhone(phone, country) {
    var phonePatterns = {
      'ამერიკა': /^\+1\d{10}$/,
      'დიდიბრიტანეთი': /^\+44\d{10}$/,
      'საქართველო': /^\+995\d{9}$/
    };
    return phonePatterns[country] ? phonePatterns[country].test(phone) : false;
  }
  
  document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var country = document.getElementById('country').value;
    var password = document.getElementById('password').value;
    
    if (!validateEmail(email)) {
      alert('არასწორი ელფოსტა: აკლია @ ან არასაკმარისი სიმბოლოები @-ის შემდეგ.');
      return;
    }
    
    if (!validatePhone(phone, country)) {
      alert('არასწორი ტელეფონის ნომერი არჩეული ქვეყნისთვის.');
      return;
    }
    if (!validatePassword(password)) {
      alert('ახლიდან სცადე ახალი პაროლი')
      return
    }
    alert('რეგისტრაცია წარმატებულად დასრულდა!!');
    var modal = bootstrap.Modal.getInstance(document.getElementById('registrationModal'));
    modal.hide();
  });
  

  document.getElementById('customRegisterButton').addEventListener('click', function() {
    var modal = new bootstrap.Modal(document.getElementById('registrationModal'));
    modal.show();
  });

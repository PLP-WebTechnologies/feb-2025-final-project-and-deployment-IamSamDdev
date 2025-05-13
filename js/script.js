

const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});


  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

// Contact form validation
function validateForm() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return false;
  }

  alert('Message sent!');
  return true;
}


function filterPosts(category) {
  const posts = document.querySelectorAll('.post');

  posts.forEach(post => {
    const postCategory = post.getAttribute('data-category');

    if (category === 'all' || postCategory === category) {
      post.style.display = 'block';
    } else {
      post.style.display = 'none';
    }
  });
}


function searchPosts() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const posts = document.querySelectorAll('.post');

  posts.forEach(post => {
    const title = post.querySelector('h3').innerText.toLowerCase();
    if (title.includes(input)) {
      post.style.display = 'block';
    } else {
      post.style.display = 'none';
    }
  });
}


// Animate posts on page load
window.addEventListener('DOMContentLoaded', () => {
  const posts = document.querySelectorAll('.post');
  posts.forEach((post, index) => {
    setTimeout(() => {
      post.classList.add('show');
    }, index * 100);
  });
});


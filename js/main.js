let sidebarExpanded = false;                                     
if (document.getElementById('login-form')) {
  document.addEventListener('DOMContentLoaded', function() {        
    const modal = document.querySelector('.modal');
    modal.style.display = 'none';                                  
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', handleLoginSubmit);        
  });
   
   /** @param {Event} event  Form submit event*/                  
  
  function handleLoginSubmit(event) {
    event.preventDefault();
    validateLogin();
  }
  
  window.validateLogin = function() {
    const username = document.getElementById('uname').value;
    const password = document.getElementById('pwd').value;
    if (username === 'Mische' && password === '354545121') {         
      window.location.href = 'index.html';                          
    } else {
      showModal();                                                  
    }
  }
  
  function showModal() {
    const modal = document.querySelector('.modal');
    modal.style.display = 'block';
  }
  
  window.dismissModal = function() {
    const modal = document.querySelector('.modal');
    modal.style.display = 'none';
  }
}

if (document.querySelector('.nav-sidebar')) {
  document.addEventListener('DOMContentLoaded', function() {        
    const sidebar = document.querySelector('.nav-sidebar');        
    sidebar.style.width = '50px';
    const sidebarLinks = document.querySelector('.nav-sidebar ul'); 
    sidebarLinks.style.opacity = '0';
    sidebarLinks.style.visibility = 'hidden';
  });

  window.toggleNav = function() {
    const sidebar = document.querySelector('.nav-sidebar');
    const sidebarLinks = document.querySelector('.nav-sidebar ul'); 
    const toggleBtn = document.querySelector('.btn-toggle-nav');    
    sidebarExpanded = !sidebarExpanded;
    if (sidebarExpanded) {
      
      sidebar.style.width = '272px';                              
      toggleBtn.style.transform = 'rotate(90deg)';
      
      setTimeout(() => {
        sidebarLinks.style.visibility = 'visible';
        sidebarLinks.style.opacity = '1';
      }, 30);                                                       
    } else {
      
      sidebar.style.width = '50px';
      toggleBtn.style.transform = 'rotate(0deg)';                   
      
      sidebarLinks.style.opacity = '0';
      setTimeout(() => {
        sidebarLinks.style.visibility = 'hidden';
      }, 300);
    }
  }
}

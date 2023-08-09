document.getElementById("showSignup").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("loginSection").classList.add("d-none");
    document.getElementById("signupSection").classList.remove("d-none");
  });
  
  document.getElementById("showLogin").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("signupSection").classList.add("d-none");
    document.getElementById("loginSection").classList.remove("d-none");
  });
  
  document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    document.getElementById("dashboard").classList.remove("d-none");
    document.getElementById("navbar").classList.remove("d-none");
    document.getElementById("loginSignupContainer").classList.add("d-none");
  });
  
  document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault();
    document.getElementById("dashboard").classList.remove("d-none");
    document.getElementById("navbar").classList.remove("d-none");
    document.getElementById("loginSignupContainer").classList.add("d-none");
  });
  
document.getElementById("connectFriendsBtn").addEventListener("click", function (event) {
  event.preventDefault();
  alert("Connect with friends feature coming soon!");
});

function logout() {
  
  window.location.href = 'index.html'; 
}


document.getElementById('logoutLink').addEventListener('click', function (e) {
  e.preventDefault();
  logout();
});


const editDetailsModal = new bootstrap.Modal(document.getElementById('editDetailsModal'));

document.getElementById('editDetails').addEventListener('click', function (e) {
  e.preventDefault();
  openEditDetailsModal();
});

function openEditDetailsModal() {
  editDetailsModal.show();
}


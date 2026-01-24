/* jshint esversion:8 */
const token = localStorage.getItem('token');
if(token){
    window.location.href = 'https://user-dashboardmyappfrontend.vercel.app/index.html';
}
const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('password-input');
const form = document.querySelector('form');

/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-3-the-logo-hijack

1. Find out how to select the element that contains the Google logo, and store 
   it in a variable.
2. Modify the `src` and `srcset` of the logo so that it's replaced by the 
   HackYourFuture logo instead.
------------------------------------------------------------------------------*/
function hijackGoogleLogo() {
   let logo = document.querySelector('img');
   logo.src = "https://storage.googleapis.com/gd-prod/images/a910d418-7123-4bc4-aa3b-ef7e25e74ae6.60c498c559810aa0.webp";
   
   logo.srcset = "https://media.licdn.com/dms/image/v2/C4E0BAQH4YLLRHFzb4g/company-logo_200_200/company-logo_200_200/0/1653284376519/hackyourfuture_logo?e=2147483647&v=beta&t=ka0klv7LigjqA5dx46wlSV5uQdPy18W6QW0rBc994RQ";
   }

hijackGoogleLogo();

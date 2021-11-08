window.onscroll = () => {
let header = document.getElementById('header')
    if(window.scrollY > 1 )  {
    header.classList.add('float-header');
    } else {
        header.classList.remove('float-header')
    }
};

AOS.init({
    duration: 1000,
    once: true,
  });


  import Swiper from 'swiper';

  import 'swiper/css';


    import Swiper, { Navigation, Pagination } from 'swiper';
    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
  
  
    const Swiper = new Swiper('.swiper', {
      modules: [Navigation, Pagination],
      ...
    });


  import Swiper from 'swiper/bundle';

  import 'swiper/css/bundle';

  const Swiper = new Swiper(...);

  const Swiper = new Swiper(...);

const Swiper = new Swiper('.swiper', {
    direction: 'vertical',
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
    },
  

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
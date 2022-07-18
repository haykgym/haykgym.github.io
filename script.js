"use strict";

import { htmlPost, htmlPostArticle, htmlPostSoon } from "./posts.js";


const body = document.querySelector('body');
const btnBackgrd = document.querySelector('.fa-adjust');
const btnMore = document.querySelector(".fa-caret-down");
const btnMenu = document.querySelector('.fa-circle-o');
const btnWelcome = document.querySelector('.welcome');
const btnMenuContent = document.querySelectorAll('.nav-menu--icon');
const modalIcons = document.querySelector(".more-icons");
const menu = document.querySelector('.nav-menu');
const section = document.querySelector('section');



function getColor(){
  const r = (Math.floor(Math.random() * 256));
  const g = (Math.floor(Math.random() * 256));
  const b = (Math.floor(Math.random() * 256));
  return [r,g,b];
}

function getStyle(curStyle){
  const styles = ['section','section--welcome','section--blog', 'section--source', 'section--cv', 'section--contact'];
  styles.forEach(style => section.classList.remove(style));
  section.classList.add(curStyle);
}

function getContent(html){
  section.innerHTML = '';

  section.insertAdjacentHTML('beforeend',html);

}

// function typeWelcomeContent(){
//   const typeitMy = new TypeIt("#my",{
//     strings: "A human being from the Earth!",
//     speed: 60,
//     cursor: false
//   });
  
//   const typeitMe = new TypeIt("#me",{
//     strings: "Hello, I'm Hayk Petrosyan!",
//     speed: 60,
//     cursor: false,
//     afterComplete: function(){
//       typeitMy.go();
//     }
//   }).go();
// }

//Render page contents 
//1.
function renderWelcomeContent(){

  const html = `
    <div>
      <h1 id="me">Hello, I'm Hayk Petrosyan!</h1>
      <h4 id="my">A human being from the Earth!</h4>
    </div>
  `;

  getStyle('section--welcome');
  return getContent(html);
}
renderWelcomeContent();
// typeWelcomeContent();




//2. render about content

function renderAboutContent(){
  const html = `
  <div class="slider--img_container">
    <div class="slider slider-left"><</div>
    <div class="img--container">
      <img src="/img/img1.jpg" class="img--profile img1 img--active"/>
      <img src="/img/img2.jpg" class="img--profile img2">
      <img src="/img/img3.jpg" class="img--profile img3" />
      <img src="/img/img4.jpg" class="img--profile img4" />
      <img src="/img/img5.jpg" class="img--profile img5" />
    </div>
    <div class="slider slider-right">></div>
  </div>
  <div class="info">
    <h1 class="about-me about-me--title">A little bit about me</h1>
    <br />
    <hr class="about-me" />
    <br />
    <p class="about-me about-me--text">
      I was born in a country which is called Armenia: in the capital
      of Armenia, Yerevan, on 1996. 10th of July. It was a hard time, there was a lack of almost
      everything… But I am happy for the childhood I had. When there isn’t
      anything you start to appreciate everything. I studied at one of the
      secondary schools of my birthplace. During this period I have started
      my career as a gymnast, and spent my whole day into my trainings. When I was 18, I've
      applied faculty of History of Yerevan State University. Also, at the same time
      I have applied faculty of Artistic Gymnastics of Armenian State Institute of Physical and Culture.
      Since childhood I have been interested in different things, and thats why while I was studying,
      I have trying to concentrate into one profession, which would match me the best, the one, into
      which I will give my everything and doing that I will be happy and motivated. Once I have finished 
      university I went to military service because the law of my country required it․ 
      At last after 2 years, when I have turned back to my home, I understood that I dont want 
      to continue way of my life which I have had before and I didnt want to continue studying
      history or training gymnastics. At that point I set a goal to learn programming, and not to back 
      down from that decision anymore and after that until now I deal with the IT sphere.
      Besides main specialities I love to THINK. Think
      about reasons, relations, about possible and impossible, about life,
      about aim and about human beings. I love to create!
    </p>
  </div>
  `;

  getStyle('section');
  getContent(html);
}

//3. Render Blog Content
function renderBlogContent(){

  const html =`
    <h1 id="posts">Posts</h1>
    <div class="section--blog_container">
      <div class='posts-container posts-record'>
        <div class="posts-head">
          <div class="posts-symbol posts-margin" style="background-color:rgb(${getColor().join(',')})">W</div>
          <div class="posts-title_container posts-margin">
            <span class="posts-title">World Record</span></br>
            <span>June 10, 2011</span>
          </div>
        </div>
        <div class="posts-content">
            <p class="posts-margin posts-text">
              Ալբերտ Ազարյանի անվան մարզադպրոցի սան՝ 14 ամյա Հայկ Պետրոսյանը մարմնամարզության միջազգային մրցաշարի
              բացման արարողության ընթացքում սահմանեց համաշխարհային նոր ռեկորդ։
            </p>
        </div>
        <div class="posts-foot">
            <p class="posts-margin">Lang.</p>
            <h3 class="posts-margin">hy</h3>
        </div>
      </div>
      <div class='posts-container posts-article'>
        <div class="posts-head">
          <div class="posts-symbol posts-margin" style="background-color:rgb(${getColor().join(',')})">A</div>
          <div class="posts-title_container posts-margin">
            <span class="posts-title">Armenian-Georgian relations: Article 1</span></br>
            <span>Feb 17, 2017</span>
          </div>
        </div>
        <div class="posts-content">
            <p class="posts-margin posts-text">
              Որպես պատմաբան մի հոդված իմ հետաքրքրությունների շրջանակից։ Այն տպագրվել է Երևանի պետական համալսարանի 
              Իջևանի մասնաճյուղի կողմից հրատարակվող <<Ակունք>> գիտական հոդվածների ժողովածուում։
            </p>
        </div>
        <div class="posts-foot">
            <p class="posts-margin">Lang.</p>
            <h3 class="posts-margin">hy</h3>
        </div>
      </div>
      <div class='posts-container posts-soon'>
        <div class="posts-head">
          <div class="posts-symbol posts-margin" style="background-color:rgb(${getColor().join(',')}">S</div>
          <div class="posts-title_container posts-margin">
            <span class="posts-title">Something about important</span></br>
            <span>June 19, 2021</span>
          </div>
        </div>
        <div class="posts-content">
            <p class="posts-margin posts-text">
              — Որտե՞ղ ես սովորում։<br>
              — 12-րդ դասարանում։<br>
              — Ի՞նչ։ Բա ե՞րբ ես ավարտելու դպրոցը (( :
            </p>
        </div>
        <div class="posts-foot">
            <p class="posts-margin">Lang.</p>
            <h3 class="posts-margin">hy</h3>
        </div>
      </div>
    </div>
  `;

  getStyle('section--blog');
  return getContent(html);
  
}

//4. Render Source Content

function renderSourceContent(){
  const html =`
    <h3 class="source-title--black">
      Some open source projects I am doing in free time
    </h3>
    <div class="section--source_container">
      <a href="https://github.com/haykgym/todo-app" target="blank" class='source-container'>
        <div class="source-head">
          <div class="source-symbol source-margin" style="background-color:rgb(${getColor().join(',')})">T</div>
          <div class="source-title_container source-margin">
            <span class="source-title">Todo-React-app</span></br>
          </div>
        </div>
        <div class="source-content">
            <p class="source-margin source-text">
              A minimal React application as a Github template. It's a UI component, where We can schedule events which
              We are goinng to do. We have opportunity to add new 'todo', mark some of them as completed, remove completed 
              events, by the way follow the events and planning to do them.
            </p>
        </div>
        <div class="source-foot">
        </div>
      </a>
      <a href="https://github.com/haykgym/Pig-Game" target="blank" class='source-container'>
        <div class="source-head">
          <div class="source-symbol source-margin" style="background-color:rgb(${getColor().join(',')})">P</div>
          <div class="source-title_container source-margin">
            <span class="source-title">Pig Game</span></br>
          </div>
        </div>
        <div class="source-content">
            <p class="source-margin source-text">
              Simple game project, where We define two clients, which play a game by clicking button and sum their points 
              and they keep their points, but once pig turned to "1", points are anullated. Once the client reach hundred or
              more points, game will be finished.
            </p>
        </div>
        <div class="source-foot">
        </div>
      </a>
      <a href="https://github.com/haykgym/Guess-My-Number" target="blank" class='source-container'>
        <div class="source-head">
          <div class="source-symbol source-margin" style="background-color:rgb(${getColor().join(',')}">G</div>
          <div class="source-title_container source-margin">
            <span class="source-title">Guess My Number</span></br>
          </div>
        </div>
        <div class="source-content">
            <p class="source-margin source-text">
              One more simple project without using any library. System keep random number between 1-20, anc the client
              should guess the number, while trying system notifies whether the number is correct, is low or is high. 
            </p>
        </div>
        <div class="source-foot">
        </div>
      </a>
      <a href="https://github.com/haykgym/Arrays-Bankist" target="blank" class='source-container'>
        <div class="source-head">
          <div class="source-symbol source-margin" style="background-color:rgb(${getColor().join(',')}">B</div>
          <div class="source-title_container source-margin">
            <span class="source-title">Bankist App</span></br>
          </div>
        </div>
        <div class="source-content">
            <p class="source-margin source-text">
              This template defines project concerns on banking system, money transfers, mange users's accounts and so far.
              Project doenst include any library, and represent a good example the strategy how We can create logs from user's
              banking accounts, and transactions.
            </p>
        </div>
        <div class="source-foot">
        </div>
      </a>
      <a href="https://github.com/haykgym/Advanced-DOM-Bankist" target="blank" class='source-container'>
        <div class="source-head">
          <div class="source-symbol source-margin" style="background-color:rgb(${getColor().join(',')}">D</div>
          <div class="source-title_container source-margin">
            <span class="source-title">Dom Bankist</span></br>
          </div>
        </div>
        <div class="source-content">
            <p class="source-margin source-text">
              Another source to define power of methods of JS to work with DOM.
            </p>
        </div>
        <div class="source-foot">
        </div>
      </a>
      <a href="https://github.com/haykgym/AuthPassport.js" target="blank" class='source-container'>
        <div class="source-head">
          <div class="source-symbol source-margin" style="background-color:rgb(${getColor().join(',')}">A</div>
          <div class="source-title_container source-margin">
            <span class="source-title">Authentication for Website</span></br>
          </div>
        </div>
        <div class="source-content">
            <p class="source-margin source-text">
              Using Node.js technology and isnide of it some other libraries, We can show a simple example of authentication process.
            </p>
        </div>
        <div class="source-foot">
        </div>
      </a>
      <a href="https://github.com/haykgym/Forkify" target="blank" class='source-container'>
        <div class="source-head">
          <div class="source-symbol source-margin" style="background-color:rgb(${getColor().join(',')}">F</div>
          <div class="source-title_container source-margin">
            <span class="source-title">Forkify</span></br>
          </div>
        </div>
        <div class="source-content">
            <p class="source-margin source-text">
              Project includes search system, respresents tons of different materials, allows the clients to make their own materials.
            </p>
        </div>
        <div class="source-foot">
        </div>
      </a>
    </div>
  `;

  getStyle('section--source');
  return getContent(html);
}

//5. render CV

function renderCv(){
  const html = `
    <div class='cv-container'>
      <h4 class="cv-text cv-content">
        You can download the CV as a PDF file
      </h4>
      <a href="/cv/Hayk Petrosyan.CV.pdf" class="cv-button--container" download>
        <button class="cv-button cv-content">DOWNLOAD</button>
      </a>
    </div>
  `;

  getStyle('section--cv');
  return getContent(html);
}


//6.render contact 

function renderContact(){
  const html = `
    <div class='contact-container'>
     <div class="contact contact-head">
        <h4 id="contact-title">Want to contact me?</h4>
     </div>
     <div class="contact contact-info">
        <p class="contact contact-info_text">I can endeavor to show maximum availability with Gmail and Telegram</p>
        <div class="fa-content">
          <a href="https://t.me/haykgym" target="blank" class="fa fa-send"  style="color:black">&nbsp&nbspTELEGRAM</a>
          <a href="https://mail.google.com/mail/u/0/?pli=1#inbox" target="blank" class="fa fa-envelope" style="color:black">&nbsp&nbspGMAIL</a>
        </div>
     </div>
     <div class="contact contact-info">
        <p class="contact contact-info_text">You also can find me on social networks</p>
        <div class="fa-content">
          <a href="https://twitter.com/Hayk__Petrosyan" target="blank" class="fa fa-twitter" style="color:black">&nbsp&nbspTWITTER</a>
          <a href="https://www.facebook.com/hayk.petrosyan.969" target="blank" class="fa fa-facebook" style="color:black">&nbsp&nbspFACEBOOK</a>
        </div>
     </div>
     <div class="contact contact-info">
        <p class="contact contact-info_text">Or if it's something technical/professional</p>
        <div class="fa-content">
          <a href="https://github.com/haykgym" target="blank" class="fa fa-github" style="color:black">&nbsp&nbspGITHUB</a>
          <a href="https://www.linkedin.com/in/hayk-petrosyan-321213211/" target="blank" class="fa fa-linkedin" style="color:black">&nbsp&nbspLINKEDIN</a>
        </div>
     </div>
    </div>
  `;

  getStyle('section--contact');
  return getContent(html);
}

//open the page selected by the user

function openPage(el){

  if(el.textContent.search('Welcome') !== -1) {
    renderWelcomeContent();
    // typeWelcomeContent();

    // body.style.overflow = "hidden";

  };

  if(el.textContent.search('About') !== -1) {
    renderAboutContent();


    // if(!body.classList.contains('body--hidden')) body.style.overflow = "visible";

    const btnSliderRight = document.querySelector('.slider-right');
    const btnSliderLeft = document.querySelector('.slider-left');
    const imgs = document.querySelectorAll('.img--profile');

    // Check background color of the page
    if(!bodyColor){
      document.querySelector('.about-me--title').classList.add('about-me--tittlee');
      document.querySelector('.about-me--text').classList.add('about-me--tittlee');
    }else{
      document.querySelector('.about-me--title')?.classList.remove('about-me--tittlee');
      document.querySelector('.about-me--text').classList.remove('about-me--tittlee');
    }

    //image slide handlers
    let x = 100;
    let y = 400;

    btnSliderLeft.addEventListener("click", function(e){
      e.preventDefault();

      if(x !== 100){
        switch(x){
          case 200:
            y = 0;
            x-=100;
            break;
          case 300:
            y = 100;
            x-=100;
            break;
          case 400:
            y = 200;
            x-=100;
            break;
          case 500:
            y = 300;
            x-=100;
            break;
        }
      }

        
        let ind;
        imgs.forEach((img,i) => {
          img.style.transform = y !== 0 ? `translateX(-${y}%)` : `translateX(0%)`;
          if(img.classList.contains('img--active')) {
            ind = i === 0 ? 4 : i-1;
          };
          img.classList.remove('img--active');
          if(i === imgs.length -1){
            imgs[ind].classList.add('img--active');
          }
        });
        
        
        y = y === 0? 400 : y-100;
     
    });

    btnSliderRight.addEventListener('click', function(e){
      e.preventDefault();

      if(y !== 400){
        switch(y){
          case 300:
            x = 0;
            y+=100;
            break;
          case 200:
            x = 400;
            y+=100;
            break;
          case 100:
            x = 300;
            y+=100;
            break;
          case 0:
            x = 200;
            y+=100;
            break;
        }
      }

      let ind;
      imgs.forEach((img,i) => {
        img.style.transform = x !== 500 ? `translateX(-${x}%)` : `translateX(0%)`;
        if(img.classList.contains('img--active')) {
           ind = i !==4 ? i+1 : 0;
        };
        img.classList.remove('img--active');
        if(i === imgs.length -1){
          imgs[ind].classList.add('img--active');
        }
      });

      x = x === 500? 100 : x+100;

    })
  };


  if(el.textContent.search('Blog') !== -1) {
    renderBlogContent();

    if(!bodyColor){
      document.querySelectorAll('.posts-container').forEach(el => el.classList.add('posts-container--black'));
    }else{
      document.querySelectorAll('.posts-container').forEach(el => el.classList.remove('posts-container--black'));
    };

    document.querySelector('.posts-record').addEventListener('click', function(e){
      e.preventDefault();

      const html = htmlPost();

      getContent(html);

      document.querySelector(".fa-long-arrow-left").style.color = bodyColor? 'rgb(96, 96, 96)' : 'white';

      document.querySelector(".fa-long-arrow-left").addEventListener('click', function(){
        openPage(el);
      })

    });

    document.querySelector('.posts-article').addEventListener('click', function(e){
      e.preventDefault();

      const html = htmlPostArticle();

      getContent(html);

      document.querySelector(".fa-long-arrow-left").style.color = bodyColor? 'rgb(96, 96, 96)' : 'white';

      document.querySelector(".fa-long-arrow-left").addEventListener('click', function(){
        openPage(el);
      })

    });

    document.querySelector('.posts-soon').addEventListener('click', function(e){
      e.preventDefault();

      const html = htmlPostSoon();

      getContent(html);

      document.querySelector(".fa-long-arrow-left").style.color = bodyColor? 'rgb(96, 96, 96)' : 'white';

      document.querySelector(".fa-long-arrow-left").addEventListener('click', function(){
        openPage(el);
      })

    });

  };


  if(el.textContent.search('Source')!== -1) {
    renderSourceContent(); 

    if(!bodyColor) {
      document.querySelector('.source-title--black')?.classList.add('source-title--white');
      document.querySelectorAll('.source-container').forEach(el => el.classList.add('source-container--black'));
      document.querySelectorAll('.source-title').forEach(el => el.style.color = "white");
    }
    else {
      document.querySelector('.source-title--black')?.classList.remove('source-title--white');
      document.querySelectorAll('.source-container').forEach(el => el.classList.remove('source-container--black'));
      document.querySelectorAll('.source-title').forEach(el => el.style.color = "black");
    }

  };


  if(el.textContent.search('Curriculum')!== -1) {
    renderCv();
    
    if(!bodyColor){
      document.querySelector('.cv-container')?.classList.add('cv-container--black');
      document.querySelector('.cv-button')?.classList.add('cv-button--black');
      document.querySelector('.cv-text')?.classList.add('cv-text--black');
    }else{
      document.querySelector('.cv-container')?.classList.remove('cv-container--black');
      document.querySelector('.cv-button')?.classList.remove('cv-button--black');
      document.querySelector('.cv-text')?.classList.remove('cv-text--black');
    }
  
  };


  if(el.textContent.search('Contact') !== -1) {
    renderContact();

    if(!bodyColor) document.querySelectorAll('.fa').forEach(el => el.style.color = 'white');
    else document.querySelectorAll('.fa').forEach(el => el.style.color = 'rgb(96, 96, 96)');

  };  
};


//Event Handlers 
//1. for Social more links and Menu bar
document.addEventListener('click',function(e){
  //Open The rest Social links
  e.target === btnMore && modalIcons.classList.remove("hidden");
  if(!modalIcons.classList.contains('hidden') && e.target !== btnMore){
    e.target !== modalIcons && modalIcons.classList.add('hidden');
  }

  // Open and close Menu bar
  if(e.target === btnMenu){
    menu.style.transform = "translateX(0rem)";
    body.classList.add('body--hidden');
    section.style.overflow = "hidden";
    body.style.backgroundColor = menu.style.backgroundColor;
  }
  if(menu.style.transform === "translateX(0rem)" && e.target !== menu && e.target!== btnMenu){
    menu.style.transform = "translateX(-18rem)";
    body.classList.remove('body--hidden');
    section.style.overflow = "auto";
    body.style.backgroundColor = bodyColor? 'rgb(248, 245, 245)':'black';
  }
})

//2. Open welcome page
btnWelcome.addEventListener('click', ()=>{
  renderWelcomeContent();
  typeWelcomeContent();
});

//3. listen for open page from menu
btnMenuContent.forEach(btn => btn.addEventListener('click',function(e){
  e.preventDefault();
  openPage(btn);
}))

//4. Control background color of the page

let bodyColor = true;

btnBackgrd.addEventListener('click', function(e){
  e.preventDefault();

  if(bodyColor){
    document.querySelectorAll('.nav-menu--tittle').forEach(el => el.style.color = 'white');
    document.querySelectorAll('.fa').forEach(el => el.style.color = 'white');
    document.querySelector('.about-me--title')?.classList.add('about-me--tittlee');
    document.querySelector('.about-me--text')?.classList.add('about-me--tittlee');
    document.querySelectorAll('.posts-container')?.forEach(el => el.classList.add('posts-container--black'));
    document.querySelectorAll('.source-container')?.forEach(el => el.classList.add('source-container--black'));
    document.querySelectorAll('.source-title')?.forEach(el => el.style.color = "white");
    document.querySelector('.source-title--black')?.classList.add('source-title--white');
    document.querySelector('.cv-container')?.classList.add('cv-container--black');
    document.querySelector('.cv-button')?.classList.add('cv-button--black');
    document.querySelector('.cv-text')?.classList.add('cv-text--black');
    document.querySelector('footer').style.color = "white";
    body.style.background ='#101010';
    btnWelcome.style.color = 'white';
    modalIcons.style.background = "black";
    section.style.color = 'white';
    menu.style.backgroundColor = '#101010';
    bodyColor = false;
  }else{
    document.querySelectorAll('.nav-menu--tittle').forEach(el => el.style.color = 'black');
    document.querySelectorAll('.fa').forEach(el => el.style.color = 'rgb(96, 96, 96)');
    document.querySelector('.about-me--title')?.classList.remove('about-me--tittlee');
    document.querySelector('.about-me--text')?.classList.remove('about-me--tittlee');
    document.querySelectorAll('.posts-container')?.forEach(el => el.classList.remove('posts-container--black'));
    document.querySelectorAll('.source-container')?.forEach(el => el.classList.remove('source-container--black'));
    document.querySelectorAll('.source-title')?.forEach(el => el.style.color = "black");
    document.querySelector('.source-title--black')?.classList.remove('source-title--white');
    document.querySelector('.cv-container')?.classList.remove('cv-container--black');
    document.querySelector('.cv-button')?.classList.remove('cv-button--black');
    document.querySelector('.cv-text')?.classList.remove('cv-text--black');
    document.querySelector('footer').style.color = "black";
    body.style.background ='rgb(248, 245, 245)';
    btnWelcome.style.color = 'black';
    modalIcons.style.background = "white";
    section.style.color = 'black';
    menu.style.backgroundColor = 'rgb(132, 132, 132)';
    bodyColor = true;
  }
});

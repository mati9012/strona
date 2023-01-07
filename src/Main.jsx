import './Main.css'
import { useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

export default function Main() {
    const [isActive, setActive] = useState(false);
    const [moderacyjne, setModeracyjne] = useState(true)
    const [muzyka, setMuzyka] = useState(false)
    const [zabawa, setZabawa] = useState(false)

    window.addEventListener("scroll", function(){
        var header = this.document.getElementById("nav");
        header.classList.toggle("sticky", this.window.scrollY > 0)
    })

    const handleToggle = () => {
        setActive(!isActive);
      };

      function Moderacyjne(){
        setModeracyjne(true);
        setMuzyka(false)
        setZabawa(false)

    }

    function Muzyka(){
        setModeracyjne(false);
        setMuzyka(true)
        setZabawa(false)

    }

    function Zabawa(){
        setModeracyjne(false);
        setMuzyka(false)
        setZabawa(true)

    }



// function to detect if an element is scrolled into view
function isScrolledIntoView(elem)
{
    var docViewTop = window.scrollTop();
    var docViewBottom = docViewTop + window.height();

    var elemTop = elem.offset().top;
    var elemBottom = elemTop + elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
};


window.addEventListener("scroll", function(){
    if (isScrolledIntoView('#value')) {
        
        ('#value').addClass('counter');
        this.document.getElementById('#value').classList.toggle("counter")
      }
})

// function to detect if an element is scrolled into view
function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
};

// listen for scroll event
$(window).scroll(function () {
  // check if element is scrolled into view
  if (isScrolledIntoView($('#serv'))) {
    // element is scrolled into view, add animation class
    $('#value').addClass('counter');
  }
});









    return(
        <>
        <header>
            <nav className="header" id="nav">
                <img src='https://cdn.discordapp.com/icons/899768916925091870/a_e8189816f320d23d77d6fbad9e575667.png?size=2048' className='logo'/>

                <ul className={isActive ? "navmenu active" : "navmenu"} >
                    <li><a href="#main" className="navitem glowna">Główna</a></li>
                    <li><a href="#funkcje" className="navitem">Funkcje</a></li>
                    <li><a href="#oferty" className="navitem">Komendy</a></li>
                </ul>


                <div className={isActive ? "hamburger active" : "hamburger"} onClick={handleToggle}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
                </div>
            </nav>
        </header>
        <div className='wave1'>

        </div>
        <div className='main' id='main'>
            <img src='https://cdn.discordapp.com/icons/899768916925091870/a_e8189816f320d23d77d6fbad9e575667.png?size=2048' className='logo2'/>
            <h1>GlitchBot</h1>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus est erat, at semper ipsum interdum nec. Quisque at tristique tellus. Morbi metus orci, viverra vel quam eu, laoreet viverra mi. Vivamus metus tortor, congue vitae semper non, tincidunt et sapien. Phasellus consectetur ligula felis, at imperdiet nisl accumsan a. Nulla bibendum auctor leo, tincidunt dapibus felis egestas nec. Aenean nisl erat, tristique non molestie sit amet, fermentum a libero. Duis nec consectetur metus.</span>
            <div className='buttons'>
                <a href='https://discord.gg/QA9UeJJGfD'>Support</a>
                <a href='https://discord.gg/QA9UeJJGfD'>Zaproś</a>
            </div>

        </div>
        <div className='odd'></div>
        <div className='odd'></div>
        <div className='funkcje' id='funkcje'>
            <h1>Funkcje Bota</h1>
            <div className='cards'>
                <div className='card'>
                    <div className='face face1'>
                        <div className='content'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-emoji-laughing" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M12.331 9.5a1 1 0 0 1 0 1A4.998 4.998 0 0 1 8 13a4.998 4.998 0 0 1-4.33-2.5A1 1 0 0 1 4.535 9h6.93a1 1 0 0 1 .866.5zM7 6.5c0 .828-.448 0-1 0s-1 .828-1 0S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 0-1 0s-1 .828-1 0S9.448 5 10 5s1 .672 1 1.5z"/>
                            </svg>
                            <h3>Zabawa</h3>
                        </div>

                    </div>
                    <div className='face face2'>
                        <div className='content'>
                            <p>Bot posiada wiele komend przeznaczonych aby zapewnić społeczności rozrywkę.</p>
                        </div>
                    </div>

                </div>

                <div className='card'>
                    <div className='face face1'>
                        <div className='content'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-speedometer2" viewBox="0 0 16 16">
                        <path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z"/>
                        <path fill-rule="evenodd" d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z"/>
                        </svg>
                            <h3>Wydajność</h3>
                        </div>

                    </div>
                    <div className='face face2'>
                        <div className='content'>
                            <p>Działanie bota jest zoptymalizowane do maksimum, tak aby wszystko działało szybko i sprawnie.</p>
                        </div>
                    </div>

                </div>

                <div className='card'>
                    <div className='face face1'>
                        <div className='content'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                        </svg>
                            <h3>Wspaniały zaspół</h3>
                        </div>

                    </div>
                    <div className='face face2'>
                        <div className='content'>
                            <p>Nasz support składa się z ludzi mających największą styczność z botem od początku projektu. Pomoże Ci o każdej porze!</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div className='odd'></div>
        <div className='odd'></div>
        <div className='serwery' id='serv'>
            <h1>Wszystkie serwery</h1>
            <h2 id='value' className='value'>+</h2>
        </div>
        <div className='odd'></div>
        <div className='odd'></div>
        <div className='komendy' id='komendy'>
        <h1>Komendy bota</h1>
            <div className='cards'>
                <div className='card'>
                    <div className='face face1'>
                        <div className='content'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-music-note" viewBox="0 0 16 16">
                        <path d="M9 13c0 1.105-1.12 2-2.5 2S4 14.105 4 13s1.12-2 2.5-2 2.5.895 2.5 2z"/>
                        <path fill-rule="evenodd" d="M9 3v10H8V3h1z"/>
                        <path d="M8 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 13 2.22V4L8 5V2.82z"/>
                        </svg>
                            <h3>Muzyczne</h3>
                        </div>

                    </div>
                    <div className='face face2'>
                        <div className='content'>
                            <p className='p'>/pause - Pauzuje odtwarzanie treści.</p>
                            <p className='p'>/play - Rozpoczyna odtwarzanie treści.</p>
                            <p className='p'>/queue - Wyświetla aktualną kolejkę.</p>
                            <p className='p'>/removequeue - Usuwa treść z kolejki.</p>
                            <p className='p'>/repeat - Zmienia loop treści.</p>
                            <p className='p'>/resume - Wznawia odtwarzanie treści.</p>
                            <p className='p'>/skip - Pomija aktualnie odtwarzaną treść.</p>
                            <p className='p'>/stop - Zatrzymuje odtwarzanie treści.</p>
                            <p className='p'>/volume - Ustawia poziom głośności odtwarzanych treści.</p>
                        </div>
                    </div>

                </div>

                <div className='card'>
                    <div className='face face1'>
                        <div className='content'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-hammer" viewBox="0 0 16 16">
                        <path d="M9.972 2.508a.5.5 0 0 0-.16-.556l-.178-.129a5.009 5.009 0 0 0-2.076-.783C6.215.862 4.504 1.229 2.84 3.133H1.786a.5.5 0 0 0-.354.147L.146 4.567a.5.5 0 0 0 0 .706l2.571 2.579a.5.5 0 0 0 .708 0l1.286-1.29a.5.5 0 0 0 .146-.353V5.57l8.387 8.873A.5.5 0 0 0 14 14.5l1.5-1.5a.5.5 0 0 0 .017-.689l-9.129-8.63c.747-.456 1.772-.839 3.112-.839a.5.5 0 0 0 .472-.334z"/>
                        </svg>
                            <h3>Moderacyjne</h3>
                        </div>

                    </div>
                    <div className='face face2'>
                        <div className='content'>
                            <p className='p'>/ban - Permamentnie banuje użytkownika z serwera.</p>
                            <p className='p'>/clear - Usuwa wiadomości z kanału tekstowego.</p>
                            <p className='p'>/kick - Wyrzuca użytkownika z serwera.</p>
                            <p className='p'>/purge - Usuwa wiadomości użytkownika z kanału tekstowego.</p>
                            <p className='p'>/slowmode - Ustawia slowmode na podanym kanale.</p>
                            <p className='p'>/tempban - Tymczasowo banuje użytkownika z serwera.</p>
                            <p className='p'>i wiele więcej</p>
                        </div>
                    </div>

                </div>

                <div className='card'>
                    <div className='face face1'>
                        <div className='content'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                        </svg>
                            <h3>Wspaniały zaspół</h3>
                        </div>

                    </div>
                    <div className='face face2'>
                        <div className='content'>
                            <p>Nasz support składa się z ludzi mających największą styczność z botem od początku projektu. Pomoże Ci o każdej porze!</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
        <div className='odd'></div>
        <div className='odd'></div>
        
        <div className='odd'></div>
        <div className='odd'></div>
        </>
    )
}
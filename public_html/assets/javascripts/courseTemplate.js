import logo from './logo.svg';
import './css/FrontPage.css';

function App() {
  return (
    <html lang="en">
    <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="./css/w3.css"/>
        <link rel="icon" href="./images/SuF.png" sizes="any" type="image/svg+xml"/>
        <link rel="stylesheet" href="./css/Tutorials.css"/>
        <link rel="stylesheet" href="./css/topNavigationBar.css"/>
        <link rel="icon" href="./images/SuF.png" sizes="any" type="image/svg+xml"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

        <title>html course</title>
    </head>
    <body style="background-color: #041414">
        <div class="topnav" id="myTopnav">
            <a href="#home" class="active">Hem</a>
            <a href="#news">Kurs</a>
            <a href="#contact">Kontakta</a>
            <a href="#about">Om</a>
            <a href="javascript:void(0);" class="icon" onclick="myFunction()">
              
            </a>
          </div>
        <div>
            <input type="checkbox" id="check"/>
            <label for="check">
                <img src="./images/SuF-removebg.png" width="100"  id="btn"/>
                <img src="./images/SuF-removebg.png" width="100" id="cancel"/>
            </label>
            <div class="sidebar">
                <header>HTML</header>
                <ul>
                    <li><a href="#"><i ></i>HMTL Introduktion</a></li>
                    <li><a href="#"><i ></i>HMTL Grund</a></li>
                    <li><a href="#"><i ></i>HTML Elements</a></li>
                    <li><a href="#"><i ></i>HTML Attributes</a></li>
                    <li><a href="#"><i ></i>HTML Headings</a></li>
                    <li><a href="#"><i ></i>HTML Paragraphs</a></li>
                    <li><a href="#"><i ></i>HTML x</a></li>
                    <li><a href="#"><i ></i>HTML y</a></li>
                    <li><a href="#"><i ></i>HTML z</a></li>
                    <li><a href="#"><i ></i>HTML x</a></li>
                    <li><a href="#"><i ></i>HTML y</a></li>
                    <li><a href="#"><i ></i>HTML z</a></li>
                    <li><a href="#"><i ></i>HTML Styles</a></li>
                    <li><a href="#"><i ></i>HTML Styles</a></li>
                    <li><a href="#"><i ></i>HTML Styles</a></li>
                    <li><a href="#"><i ></i>HTML Styles</a></li>
                    <li><a href="#"><i ></i>HTML Styles</a></li>
                    <li><a href="#"><i ></i>HTML Styles</a></li>
                    <li><a href="#"><i ></i>HTML Styles</a></li>
                    <li><a href="#"><i ></i>HTML Styles</a></li>
                    <li><a href="#"><i ></i>HTML Styles</a></li>
                    <li><a href="#"><i ></i>HTML Styles</a></li>
                    <li><a href="#"><i ></i>HTML Styles</a></li>                
                </ul>
             </div>

        </div> 
        <hr>
        <h1 class="center">HTML Introduktion</h1>
        <hr>

        <h2 class="center">Vad är HTML?</h2>
        <ul class="center">
            <li>HTML (H-Hyper) (T-Text) (M-Markup) (L-Language)</li>
            <li>HTML är en av de mest använda programmeringspårken för att strukturera en webbsida</li>
            <li>HTML är uppbyggt med hjälp av element</li>


        </ul>



    </body>
    </html>
  );
}

export default App;

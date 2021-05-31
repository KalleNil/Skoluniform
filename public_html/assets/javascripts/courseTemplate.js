import logo from './logo.svg';
import './css/FrontPage.css';

function App() {
  return (
    <div className="App">
      <body style="background-color: #041414"/> 

    <header class="w3-container">
        <div id="loginactioncontainer" class="w3-right w3-padding-16" style="margin-left:50px">
            <div id="mypagediv" style="display: none;"></div>
        
            <a id="w3loginbtn" class="w3-bar-item w3-button w3-btn  w3-right" style="display: inline; width: 130px; background-color: #30ffff; color: #041414; border-radius: 25px;" href="login.html" target="_self">Log in</a>
      
            <a class="w3-bar-item w3-button  w3-right w3-hide-small barex"  style="width:140px; hover:403ff; border-radius:25px; background-color: #30ffff; margin-right:15px" href="Register.html"  id="cert_navbtn" onclick="ga('send', 'event', 'Courses' , 'Clicked on courses in Default top navigation');" title="Courses">Registrera dig</a>
        </div>
    
    
    
        <a href="Home.html"> <img src="SuF.png" height="70"/> </a>
    
    </header>

    <body>
       <section class="header">
            <nav>
                
                <div class="nav-links" id="navLinks">
                    
                    <ul>
                        <li><a href="index.html">HEM</a></li>
                        <li><a href="">OM OSS</a></li>
                        <li><a href="Register.html">REGISTRERA</a></li>
                        <li><a href="login.html">LOGIN</a></li>
                        <li><a href="">KONTAKT</a></li>
                    </ul> 
                </div>
                <div>
                    <input type="checkbox" id="check"/>
                    <label for="check">
                        <img src="./images/SuF-removebg.png"  id="btn"/>
                        <img src="./images/SuF-removebg.png" id="cancel"/>
                    </label>
                    <div class="sidebar">
                        <header>Välj ett språk</header>
                        <ul>
                            <li><a href="htmlCourse.html"><i ></i>HTML</a></li>
                            <li><a href="javascriptCourse.html"><i ></i>JavaScript</a></li>
                            <li><a href="cssCourse.html"><i ></i>CSS</a></li>
                            <li><a href="javaCourse.html"><i ></i>Java</a></li>
                            <li><a href="c#Course.html"><i ></i>C#</a></li>
                            <li><a href="f#Course.html"><i ></i>F#</a></li>
                            <li><a href="pythonCourse.html"><i ></i>Python</a></li>
                        </ul>
                     </div>

                </div>
                 
                
            </nav>
           
        </section>

        
        
    <img src="Skolunform.gif" style="width:100%"  alt="Flowers in Chania"/>
     
    
        <section class="Om-Plattform">
           <h1>OM PLATTFORM</h1>
           <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse posuere et dui quis vehicula. In id odio ac justo blandit auctor. Phasellus odio orci, suscipit id diam non, efficitur tincidunt turpis. 
               Nam vestibulum nisi non erat vulputate, vitae finibus est pretium. Vivamus ac porta turpis, sit amet auctor lacus. Pellentesque congue condimentum pretium. Donec non ipsum ex. Etiam euismod ultricies tellus, ut ornare nibh condimentum quis. 
               Vestibulum at tempus turpis. Nam vel consequat nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec rhoncus interdum sem, posuere venenatis dui placerat non.
           </p>
            
           <div class="row">
              <div class="beskrivning">
               <h3>Beskrivning</h3>   
               <p>
                   Nunc at elit elementum, vestibulum ante id, congue odio. Nunc ante magna, vehicula eu purus at, tempus venenatis nunc. Sed mi velit, tempor id tempor in, dignissim vel neque. 
                   Vestibulum non condimentum libero. Vestibulum tortor libero, aliquam et est id, vehicula dictum nibh. Nullam et nulla eu est tempor finibus non a nisi. Aenean tellus turpis, eleifend mollis sollicitudin non, pellentesque non orci. Aenean lacus est, hendrerit id imperdiet sit amet, venenatis in nisl.
               </p>
           </div>
           </div>
           <div class="row">
              <div class="beskrivning">
               <h3>Beskrivning</h3>   
               <p>
                   Nunc at elit elementum, vestibulum ante id, congue odio. Nunc ante magna, vehicula eu purus at, tempus venenatis nunc. Sed mi velit, tempor id tempor in, dignissim vel neque. 
                   Vestibulum non condimentum libero. Vestibulum tortor libero, aliquam et est id, vehicula dictum nibh. Nullam et nulla eu est tempor finibus non a nisi. Aenean tellus turpis, eleifend mollis sollicitudin non, pellentesque non orci. Aenean lacus est, hendrerit id imperdiet sit amet, venenatis in nisl.
               </p>
           </div>
           </div> 
           <div class="row">
              <div class="beskrivning">
               <h3>Beskrivning</h3>   
               <p>
                   Nunc at elit elementum, vestibulum ante id, congue odio. Nunc ante magna, vehicula eu purus at, tempus venenatis nunc. Sed mi velit, tempor id tempor in, dignissim vel neque.
                   Vestibulum non condimentum libero. Vestibulum tortor libero, aliquam et est id, vehicula dictum nibh. Nullam et nulla eu est tempor finibus non a nisi. Aenean tellus turpis, eleifend mollis sollicitudin non, pellentesque non orci. Aenean lacus est, hendrerit id imperdiet sit amet, venenatis in nisl.
               </p>
           </div>
           </div> 
        </section>
       
         <section class="Om-Oss">
             <div class="container">
                 <div class="title-heading">
                     <h1>Om Oss</h1>
                     <p>
                         Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                     </p>
                 </div>
                 <div class="Om-beskrivning">
                     <div class="om-beskrivning-item">
                         <p>
                             Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                             Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
                             Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                         </p>
                     </div>
                     <div class="om-beskrivning-item">
                         <p>
                             At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. 
                             Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. 
                             Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
                         </p>
                     </div>
                 </div>      
             </div>
        </section>
      </body>
    </div>
  );
}

export default App;

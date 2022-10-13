import './app.css'
import logoInstagram from './assets/instagramLogo2.png'
import logoEscrito from './assets/instagramEscrito.svg'
import avatarsvg from './assets/feed.svg'
import lupa from './assets/lupa.svg'
import sino from './assets/sino.svg'
import message from './assets/message.svg'
import direct from './assets/direct.svg'
import logout from './assets/logout.svg'
import settings from './assets/settings.svg'
import message2 from './assets/message2.svg'

function App() {

  function click() {
    const svgs = document.querySelectorAll('svg')
    
    for (let svg of svgs) {
      svg.addEventListener("click", function(){ 
        svg.classList.toggle('active')
      })
    }  
  } 

return (
    
    
  <div className="container">
    
    <div className="main">

      <div className="perfil">

        <div className="logos">
          <img src={logoInstagram} alt="logoInstagram" />
          <img className="logoEscrito" src={logoEscrito} alt="logoInstagram" />
        </div>
        
        <div className="story-container">
          
          <div className="content">
            <div className="img-container">
              <img src="https://avatars.githubusercontent.com/u/60278366?v=4" alt="" />
            </div>
            <div className="text-container">
            Thiago Russi
            </div>
            <div className="text-container-nick">
            @thiagorussiii
            </div>
          </div>

        </div>

        <div className="mainDados">
            
            <div className="dadosPerfil">
              <div className="contentPerfil">
                <p className="number">46</p>
                <p className="textDadosPerfil">Posts</p>
              </div>
            </div>

            <div className="dadosPerfil meio" >
              <div className="contentPerfil">
                <p className="number">58M</p>
                <p className="textDadosPerfil">Followers</p>
              </div>
            </div>

            <div className="dadosPerfil">
              <div className="contentPerfil">
                <p className="number">526</p>
                <p className="textDadosPerfil">Following</p>
              </div>
            </div>

        </div>

        <div className="menucontainer">

            <div className="menu">
              <img id='iconsMenu' src={avatarsvg} alt="" />
              <p>Feed</p>
            </div>

            <div className="menu">
              <img id='iconsMenu' src={lupa} alt="" />
              <p>Explore</p>
            </div>

            <div className="menu">
              <img id='iconsMenu' src={sino} alt="" />
              <p>Notifications</p>
              <p className="number">48</p>
            </div>

            <div className="menu">
              <img id='iconsMenu' src={message} alt="" />
              <p>Messages</p>
              <p className="number">583</p>
            </div>

            <div className="menu">
              <img id='iconsMenu' src={direct} alt="" />
              <p>Direct</p>
            </div>

            <div className="menu">
              <img id='iconsMenu' src={settings} alt="" />
              <p>Settings</p>
            </div>

            <div className="menu logout">
              <img id='iconsMenu' src={logout} alt=""  />
              <p>Logout</p>
            </div>

        </div>
        
        

      </div>
      {/*INICIO FEED*/}

        
      <div className="containerstorysmain"> {/*container*/}

        <div className="storysfeedmain">
        
        <form action="" className="pesquisa">
          
            <input type="search" name="" id="texto" placeholder='Search' />
            <img src={lupa} alt="" className='btnlupa' />
          
        </form>
        
        <div className="notifications">
          <div className="iconnotification img1">
            <img src={sino} alt="" />
          </div>

          <div className="iconnotification">
            <img src={message} alt="" />
          </div>
          
          
        </div>
        

          <p>Stories</p>
          
          
          <div className="addphoto">
            <div className="containeraddphoto">
              <div className="add">+</div>
              <p className="conteudo">Add photo</p>
            </div>
            
          </div>
          
        </div>
        
        <div className="containerstory"> {/*story-container*/}


          <div className="content">

            <div className="img-container">
              <img src="https://randomuser.me/api/portraits/women/12.jpg" alt="" />
            </div>
            <div className="text-container">
              thiagorussiii
            </div>

          </div>

          <div className="content">

            <div className="img-container">
              <img src="https://randomuser.me/api/portraits/men/14.jpg" alt="" />
            </div>
            <div className="text-container">
              thiagorussiii
            </div>

          </div>


          <div className="content">

            <div className="img-container">
              <img src="https://randomuser.me/api/portraits/women/11.jpg" alt="" />
            </div>
            <div className="text-container">
              thiagorussiii
            </div>

          </div>

          <div className="content">

            <div className="img-container">
              <img src="https://randomuser.me/api/portraits/women/21.jpg" alt="" />
            </div>
            <div className="text-container">
              thiagorussiii
            </div>

          </div>

          <div className="content">

            <div className="img-container">
              <img src="https://randomuser.me/api/portraits/women/16.jpg" alt="" />
            </div>
            <div className="text-container">
              thiagorussiii
            </div>

          </div>

          <div className="content">

            <div className="img-container">
              <img src="https://randomuser.me/api/portraits/women/2.jpg" alt="" />
            </div>
            <div className="text-container">
              thiagorussiiiaaaaaa
            </div>

          </div>

          <div className="content">

            <div className="img-container">
              <img src="https://randomuser.me/api/portraits/women/3.jpg" alt="" />
            </div>
            <div className="text-container">
              thiagorussiiiiiiiiiiii
            </div>

          </div>
          

        </div> {/*story-container*/}
        <div className="titlefeed">
          <p>Feed</p>
        </div>
        
        <section className='feedmain' >

          <div className="card">

            <div className="img-container">
              <img src="https://images.nappy.co/uploads/large/161591999484anw0exeoz7b2eydaz1r6wffde32betlechpjrpj8tv6t0vg6ptwcbunpfnypvc3wg8savkomhljaga508cevxhaaxwsm3gkcuyob.jpg?auto=format&fm=jpg&w=1000&h=721&fit=clip&q=75" alt="" />
            </div>

            <div class="card_info">
              
              <div className="content">
                <div className="img-container">
                  <img src="https://avatars.githubusercontent.com/u/60278366?v=4" alt="" />
                </div>
                <div className="text-container">
                  thiagorussiii
                </div>
                
              </div>
              
              <div className="card_likes">
                <div className="containercardlikes">

                  <svg className='svg' onClick={click} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.4 5.25C5.61914 5.25 3.25 7.3293 3.25 10.0298C3.25 11.8927 4.12235 13.4612 5.27849 14.7604C6.43066 16.0552 7.91714 17.142 9.26097 18.0516L11.5796 19.6211C11.8335 19.793 12.1665 19.793 12.4204 19.6211L14.739 18.0516C16.0829 17.142 17.5693 16.0552 18.7215 14.7604C19.8777 13.4612 20.75 11.8927 20.75 10.0298C20.75 7.3293 18.3809 5.25 15.6 5.25C14.1665 5.25 12.9052 5.92214 12 6.79183C11.0948 5.92214 9.83347 5.25 8.4 5.25Z" fill="black"/>
                  </svg>
                  <p>20k</p>

                </div>
                
                <div className="containercardlikes">
                  
                  <img id='iconsCard' src={message2} alt=""  />
                  <p>24</p>
                  
                </div>
              
              
              </div>
            </div>

          </div>
          
          <div className="card">

            <div className="img-container">
              <img src="https://images.pexels.com/photos/8908938/pexels-photo-8908938.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
            </div>

            <div class="card_info">
              
              <div className="content">
                <div className="img-container">
                  <img src="https://avatars.githubusercontent.com/u/60278366?v=4" alt="" />
                </div>
                <div className="text-container">
                  thiagorussiii
                </div>
                
              </div>


              
              <div className="card_likes">
                <div className="containercardlikes">
                  
                  <svg onClick={click} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.4 5.25C5.61914 5.25 3.25 7.3293 3.25 10.0298C3.25 11.8927 4.12235 13.4612 5.27849 14.7604C6.43066 16.0552 7.91714 17.142 9.26097 18.0516L11.5796 19.6211C11.8335 19.793 12.1665 19.793 12.4204 19.6211L14.739 18.0516C16.0829 17.142 17.5693 16.0552 18.7215 14.7604C19.8777 13.4612 20.75 11.8927 20.75 10.0298C20.75 7.3293 18.3809 5.25 15.6 5.25C14.1665 5.25 12.9052 5.92214 12 6.79183C11.0948 5.92214 9.83347 5.25 8.4 5.25Z" fill="black"/>
                  </svg>
                  <p>1.5k</p>

                  
                </div>
                
                <div className="containercardlikes">
                  
                  <img id='iconsCard' src={message2} alt=""  />
                  <p>13</p>
                  
                </div>
              
              
              </div>
            </div>

          </div>

          <div className="card">

            <div className="img-container">
              <img src="https://images.nappy.co/uploads/large/15640010-144121638642311mlb4aj6la4rwpvovd0enpaqlluxdlqwmiyyalseyjcg8inlpwsouezta6ekcr8eq9uknkusaynbyag7fevhyllugwflrfbvqw6gi.jpg?auto=format&fm=jpg&w=1000&h=589&fit=clip&q=75" alt="" />
            </div>

            <div class="card_info">
              
              <div className="content">
                <div className="img-container">
                  <img src="https://avatars.githubusercontent.com/u/60278366?v=4" alt="" />
                </div>
                <div className="text-container">
                  thiagorussiii
                </div>
                
              </div>


              
              <div className="card_likes">
                <div className="containercardlikes">
                  
                  <svg className='svg' onClick={click} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.4 5.25C5.61914 5.25 3.25 7.3293 3.25 10.0298C3.25 11.8927 4.12235 13.4612 5.27849 14.7604C6.43066 16.0552 7.91714 17.142 9.26097 18.0516L11.5796 19.6211C11.8335 19.793 12.1665 19.793 12.4204 19.6211L14.739 18.0516C16.0829 17.142 17.5693 16.0552 18.7215 14.7604C19.8777 13.4612 20.75 11.8927 20.75 10.0298C20.75 7.3293 18.3809 5.25 15.6 5.25C14.1665 5.25 12.9052 5.92214 12 6.79183C11.0948 5.92214 9.83347 5.25 8.4 5.25Z" fill="black"/>
                  </svg>
                  <p>283</p>

                  
                </div>
                
                <div className="containercardlikes">
                  
                  <img id='iconsCard' src={message2} alt=""  />
                  <p>11</p>
                  
                </div>
              
              
              </div>
            </div>

          </div>

          <div className="card">

            <div className="img-container">
              <img src="https://images.pexels.com/photos/5611139/pexels-photo-5611139.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
            </div>

            <div class="card_info">
              
              <div className="content">
                <div className="img-container">
                  <img src="https://avatars.githubusercontent.com/u/60278366?v=4" alt="" />
                </div>
                <div className="text-container">
                  thiagorussiii
                </div>
                
              </div>


              
              <div className="card_likes">
                <div className="containercardlikes">
                  
                  <svg className='svg' onClick={click} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.4 5.25C5.61914 5.25 3.25 7.3293 3.25 10.0298C3.25 11.8927 4.12235 13.4612 5.27849 14.7604C6.43066 16.0552 7.91714 17.142 9.26097 18.0516L11.5796 19.6211C11.8335 19.793 12.1665 19.793 12.4204 19.6211L14.739 18.0516C16.0829 17.142 17.5693 16.0552 18.7215 14.7604C19.8777 13.4612 20.75 11.8927 20.75 10.0298C20.75 7.3293 18.3809 5.25 15.6 5.25C14.1665 5.25 12.9052 5.92214 12 6.79183C11.0948 5.92214 9.83347 5.25 8.4 5.25Z" fill="black"/>
                  </svg>
                  <p>10</p>

                  
                </div>
                
                <div className="containercardlikes">
                  
                  <img id='iconsCard' src={message2} alt=""  />
                  <p>33</p>
                  
                </div>
              
              
              </div>
            </div>

          </div>
          
          <div className="card">

            <div className="img-container">
              <img src="https://images.pexels.com/photos/12879617/pexels-photo-12879617.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
            </div>

            <div class="card_info">
              
              <div className="content">
                <div className="img-container">
                  <img src="https://avatars.githubusercontent.com/u/60278366?v=4" alt="" />
                </div>
                <div className="text-container">
                  thiagorussiii
                </div>
                
              </div>


              
              <div className="card_likes">
                <div className="containercardlikes">
                  
                  <svg className='svg' onClick={click} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.4 5.25C5.61914 5.25 3.25 7.3293 3.25 10.0298C3.25 11.8927 4.12235 13.4612 5.27849 14.7604C6.43066 16.0552 7.91714 17.142 9.26097 18.0516L11.5796 19.6211C11.8335 19.793 12.1665 19.793 12.4204 19.6211L14.739 18.0516C16.0829 17.142 17.5693 16.0552 18.7215 14.7604C19.8777 13.4612 20.75 11.8927 20.75 10.0298C20.75 7.3293 18.3809 5.25 15.6 5.25C14.1665 5.25 12.9052 5.92214 12 6.79183C11.0948 5.92214 9.83347 5.25 8.4 5.25Z" fill="black"/>
                  </svg>
                  <p>3.4k</p>

                  
                </div>
                
                <div className="containercardlikes">
                  
                  <img id='iconsCard' src={message2} alt=""  />
                  <p>12</p>
                  
                </div>
              
              
              </div>
            </div>

          </div>

          <div className="card">

            <div className="img-container">
              <img src="https://images.pexels.com/photos/12931722/pexels-photo-12931722.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
            </div>

            <div class="card_info">
              
              <div className="content">
                <div className="img-container">
                  <img src="https://avatars.githubusercontent.com/u/60278366?v=4" alt="" />
                </div>
                <div className="text-container">
                  thiagorussiii
                </div>
                
              </div>


              
              <div className="card_likes">
                <div className="containercardlikes">
                  
                  <svg className='svg' onClick={click} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.4 5.25C5.61914 5.25 3.25 7.3293 3.25 10.0298C3.25 11.8927 4.12235 13.4612 5.27849 14.7604C6.43066 16.0552 7.91714 17.142 9.26097 18.0516L11.5796 19.6211C11.8335 19.793 12.1665 19.793 12.4204 19.6211L14.739 18.0516C16.0829 17.142 17.5693 16.0552 18.7215 14.7604C19.8777 13.4612 20.75 11.8927 20.75 10.0298C20.75 7.3293 18.3809 5.25 15.6 5.25C14.1665 5.25 12.9052 5.92214 12 6.79183C11.0948 5.92214 9.83347 5.25 8.4 5.25Z" fill="black"/>
                  </svg>
                  <p>1.5k</p>

                  
                </div>
                
                <div className="containercardlikes">
                  
                  <img id='iconsCard' src={message2} alt=""  />
                  <p>12</p>
                  
                </div>
              
              
              </div>
            </div>

          </div>

          
          
        </section>
        
        
      </div> {/*container*/}
      
      
    </div>
      
    
  </div> 
  
  
  )
  
}

export default App

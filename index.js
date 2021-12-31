const popularSiteData =[
  {name:"Quera",src:"./images/download.png"},
  {name:"Github",src:"./images/download1.png"},
  {name:"Discord",src:"./images/download2.png"},
  {name:"WhatsApp",src:"./images/download3.png"},
  {name:"LinkedIn",src:"./images/download4.png"},
  {name:"Gmail",src:"./images/download5.png"},
  {name:"Facebook",src:"./images/download6.png"},
  {name:"جابینجا",src:"./images/download7.png"},
  {name:"Quera",src:"./images/download.png"},
  {name:"Shortcut",src:"./images/plus.png"},
];
const Nav = (props)=>{
  return(
    <nav>
      <a href="#">{"Gmail"}</a>
      <a href="#">{"Images"}</a>
      <div id="googleApps"><svg className="gb_Pe" focusable="false" viewBox="0 0 24 24"><path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path></svg></div>
      <div><img src={props.src} alt={props.alt} /></div>
    </nav>
  );
}
Nav.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};
const Google = (props)=>{
  return(
    <img src={props.src} alt={props.alt} width={props.width} />
  );
}
Google.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  width: PropTypes.number,
};
const Input = (props)=>{
  return(
    <div className="searchBox">
      <i className="fa fa-search" />
      <input type="text" placeholder={props.placholder} />
      <i className="fa fa-microphone" />
    </div>
  );
}
Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
};
const Popularsite = ()=>{
  return(
    <div className="popularSiteBox">
      {popularSiteData.map((data,index) => {return(<div key={index+1} className="dataBox"><img  src={data.src} /><span>{data.name}</span></div>)} )}
    </div>
  );
}
function App() {
  return(
    <>
    <Nav src={"./images/profileImage.jpg"} alt={"Profile Account"} />
    <div className="container">
    <Google src={"./images/GoogleLogo2015.png"} alt={"Google Logo Png"} width={270}  />
    <Input placholder={"Search Google or Type a URL"} />
    <Popularsite />
    </div>
    </>
  );
}

ReactDOM.render(<App />,document.getElementById('root'));
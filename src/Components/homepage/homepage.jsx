import Header from "../header/header";
import "./homepage.css";
import three from "../../images/4.png"
import one from "../../images/1.jpg"
import two from "../../images/2.jpeg"
import Content from "../Content/content";
import Plan from "../plan/plan";
import Review from "../review/review";
import Footer from "../Footer/footer";
const Homepage = () => {
  return (
    <>
    <div class="triangle">
      <Header />
      <div class="semi-circle"></div>
      <div class="content">
      <div className="part-1">
        <h1>Learn How to Launch a<br/> Successfull Podcast</h1>
        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porta erat et malesuada tempus. Fusce nec nunc ut enim tincidunt finibus. Etiam sagittis et tellus mollis dignissim. Nulla sit amet ultrices ligula. Pellentesque interdum lacus ut est vulputate, nec varius est euismod. Pellentesque venenatis blandit nisl in suscipit. Aenean laoreet consequat ultrices.</h5>
      <div id="content-button">
        <button>Sign Up</button>
      </div>
      </div>
      <div className="part-2">
        <div id="image-1"><img  src={one} alt="work mates" /></div>
        <div id="image-2"><img  src={two} alt="business meeting"/></div>
      </div>
      <div id="mic-image">
        <img src={three} />
      </div>
      </div>
      <div class="small-triangle"></div>
      
    </div>
    <Content/>
    <Plan/>
    <Review/>
    <Footer/>
</>
  );
};

export default Homepage;

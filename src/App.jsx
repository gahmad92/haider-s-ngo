import { Routes, Route, Link } from "react-router-dom";
import SeeUser from "./assets/components/SeeUser";
import Hero from "./assets/components/Hero";
import Books from "./assets/components/Books";
import "./App.css";
import "./index.css"; // Make sure dark theme styles are here
import TodaysMeal from "./assets/components/TodaysMeal";
import TodaysAdoption from "./assets/components/TodaysAdoption";
import CatAdoption from "./assets/components/CatAdoption";
import DonateForm from "./assets/components/DonateForm";



function App() {
  return (
    <>
      <div className="container text-center my-5 d-flex p-2 justify-content-start my-5 mx-5">
        <h1 className="text-light ">Haider's</h1>
        <h4 className="text-danger" style={{ fontSize: "15px" }}>
          {" "}
          NGO
        </h4>

        <Link
          to="/user"
          className="btn btn-danger mx-3"
          style={{ textDecoration: "none" }}
        >
          Our Donator
        </Link>

        <Link
          to="/todaysdonate"
          className="btn btn-outline-light mx-3"
          style={{ textDecoration: "none" }}
        >
          Today's donations
        </Link>

        <Link
          to="/books"
          className="btn btn-outline-light mx-2"
          style={{ textDecoration: "none" }}
        >
          Donated books{" "}
        </Link>

        <Link
          to="/meals"
          className="btn btn-outline-light mx-2"
          style={{ textDecoration: "none" }}
        >
          {" "}
          Today's Donated meals{" "}
        </Link>
        <Link
          to="/dogadopt"
          className="btn btn-outline-light mx-2"
          style={{ textDecoration: "none" }}
        >
          Dog adoptions
        </Link>
        <Link
          to="/catadopt"
          className="btn btn-outline-light mx-2"
          style={{ textDecoration: "none" }}
        >
          Cat Adoptions{" "}
        </Link>

        <Link to='/donate' className="btn btn-outline-light"
        style={{textDecoration:'none'}}> Lets Donate</Link>
      </div>
      <div className="mt-5">
      <p
  className="text-center paragraph-hover mb-5"
  style={{
    fontFamily: "cursive",
    fontSize: "18px",
    backgroundColor: "#141414", 
    color: "white",
    padding: "20px",
    borderRadius: "10px",
    transition: "all 0.3s ease-in-out",
    boxShadow: "0 4px 20px rgba(229, 9, 20, 0.2)",
    margin: "0 30px",
  }}
>
  In a world where kindness can be rare and hardship is far too common,
  Iqra NGO stands out as a beacon of compassion and community care. This
  organization, fueled by love, empathy, and a strong sense of purpose,
  is transforming lives every day—one book, one meal, and one rescued
  soul at a time. Be Part of this Kind Mission  💖  😄 
</p>



      </div>

      <div className="image-card mt-4 mb-5">

      <img src="https://images.pexels.com/photos/6646865/pexels-photo-6646865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
      <img src="https://images.pexels.com/photos/6646861/pexels-photo-6646861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
      <img src="https://images.pexels.com/photos/6995201/pexels-photo-6995201.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      <img src="https://images.pexels.com/photos/6646981/pexels-photo-6646981.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      </div>
{/* ====================          Darmayan wala text  =================*/}

<div>
<h2 className="text-center">
  Become part of this charity & lets Donate !
</h2>
</div>
      <div className="image-card-2 mt-5 mb-5">
        <img src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""className="mx-4" />
        <img src="https://images.pexels.com/photos/14721103/pexels-photo-14721103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <img src="https://images.pexels.com/photos/9169334/pexels-photo-9169334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <img src="https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <img src="https://images.pexels.com/photos/20446509/pexels-photo-20446509/free-photo-of-portrait-of-a-shiba-dog.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
      </div>

{/*         Routes     */}
      <Routes>
        <Route path="/user" element={<SeeUser />} />
        <Route path="/todaysdonate" element={<Hero />} />
        <Route path="/books" element={<Books />} />
        <Route path="/meals" element={<TodaysMeal />} />
        <Route path="/dogadopt" element={<TodaysAdoption />} />
        <Route path="/catadopt" element={<CatAdoption />} />
        <Route path="/donate" element= {<DonateForm/>} />
      </Routes>
    </>
  );
}

export default App;

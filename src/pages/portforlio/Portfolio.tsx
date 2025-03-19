import Navbar from "../../components/NavBar"
import Footer from "../../components/Footer"

export default function Portfolio() {
  return (
    <div className="bg-amber-50 dark:bg-neutral-800">
      <Navbar />
      <div className=" py-[150px] px-2 bg-black" ></div>
      <div className="h-screen flex items-center justify-center">
        <div className="grid grid-col  gap-4">
          <div className="bg-gray-100 items-center px-[200px] py-[10px] rounded-sm dark:text-black">Hello, I'm a chill guy right now</div>
          <div>
            <div className="grid grid-flow-col">
              <div>
                <h2>Bùi Minh Quân</h2>
                <p> Students/ Developer/ Gamer</p>
              </div>
              <img
                src="./SelfImage.jpg"
                className="flex rounded-[100%] h-[80px]"
              />
            </div>
          </div>
          <div>
            <h3>Works</h3>
            <p></p>
          </div>
          <div>
            <h3>Bio</h3>
            <div>
              <span className="mr-[16px]">2006</span>
              Born In Cu Chi distreet, Ho Chi Minh City.
            </div>
            <div>
              <span className="mr-[16px]">2006</span>
              Born In Cu Chi distreet, Ho Chi Minh City.
            </div>

          </div>
          <div>
            <h3>What I love</h3>
            <p>Arts, Music, Drawing, Basketball, Artificial Intelligence</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

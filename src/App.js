import './App.css';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import DATA from './Data.json'
import { useState } from 'react';
function App() {

  const [imageUrl, setImageUrl] = useState("")

  return (
    <div className='container-fluid row'>
      <div className='sidebar col-md-3 vh-100'>
        <nav className="flex-column cursor-pointer">
          <h6 className="text-primary m-0" data-bs-toggle="collapse" data-bs-target="#birds" aria-controls="birds" aria-expanded="false" aria-label="Toggle navigation">
            <MdOutlineKeyboardArrowRight fontSize={25} className="mb-1 arrow-icon" />{DATA[0].title}
          </h6>
          <div className="collapse navbar-collapse" id="birds">
            <ul className="navbar-nav flex-column pb-3">
              {
                DATA[0].images.map((obj) =>
                  <li className="nav-item" key={obj.name} onClick={() => setImageUrl(obj.url)}>
                    <p className='nav-link'>{obj.name}</p>
                  </li>
                )
              }
            </ul>
          </div>
        </nav>

        <nav className="flex-column cursor-pointer">
          <h6 className="text-primary m-0" data-bs-toggle="collapse" data-bs-target="#animals" aria-controls="animals" aria-expanded="false" aria-label="Toggle navigation">
            <MdOutlineKeyboardArrowRight fontSize={25} className="mb-1 arrow-icon text-primary" />{DATA[1].title}
          </h6>
          <div className="collapse navbar-collapse" id="animals">
            <ul className="navbar-nav flex-column pb-3">
              {
                DATA[1].images.map((obj) =>
                  <li className="nav-item" key={obj.name} onClick={() => setImageUrl(obj.url)}>
                    <p className='nav-link'>{obj.name}</p>
                  </li>
                )
              }
            </ul>
          </div>
        </nav>

        <nav className="flex-column cursor-pointer">
          <h6 className="text-primary m-0" data-bs-toggle="collapse" data-bs-target="#dogbreeds" aria-controls="dogbreeds" aria-expanded="false" aria-label="Toggle navigation">
            <MdOutlineKeyboardArrowRight fontSize={25} className="mb-1 arrow-icon" />{DATA[2].title}
          </h6>
          <div className="collapse navbar-collapse" id="dogbreeds">
            <ul className="navbar-nav m-0 flex-column">
              {
                DATA[2].images.map((obj) =>
                  <li className="nav-item" key={obj.name} onClick={() => setImageUrl(obj.url)}>
                    <p className='nav-link'>{obj.name}</p>
                  </li>
                )
              }
            </ul>
          </div>
        </nav>

      </div>
      <div className='content col-md-9'>
        {
          imageUrl === "" ?
            <h4 className='mt-5 text-center'>Nothing is selected to render</h4>
            :
            <div className='text-center mt-5'>
              <img src={imageUrl} alt="..." width={500} />
            </div>
        }
      </div>
    </div>
  );
}

export default App;
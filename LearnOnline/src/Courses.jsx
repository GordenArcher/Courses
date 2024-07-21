import { ColGrid, features, subjects } from "./components/Data"
import FeatureData from "./components/featureData"
import HomeGrid from "./components/homeGrid"
import './assets/CSS/courses.css'
import Subjects from "./components/subjects"

const Courses = () => {
  return (
    <div>
      <div className="courses_container">
        <div className="wrapper">
          <div className="courses_header">
              <div className="head">
                <h2>Our Courses</h2>
              </div>

              <div className="navigation_link">
                <span>
                  <a href="/">Home</a>
                </span>
                <span>
                  |
                </span>
                <span>
                  <a href="/Courses">Courses</a>
                </span>
              </div>
          </div>

          <div className="courses_main">
            <div className="outlet___">
              <div className="courses_features">
                <div className="features_head">
                  <h1>Our featured courses</h1>
                </div>

                <div className="featuress">
                  <div className="features___">
                    {features.map((feat, index) => {
                      return (
                        <div key={index} style={{display:'flex', flexDirection:'column', gap:20}}>
                          <FeatureData {...feat} />
                          <FeatureData {...feat} />
                        </div>
                      )
                    })}
                  </div>

                  <div className="load_more_features">
                    <a href="#!">
                      <button>Load More</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="explore___">
            <div className="explore_subjects">
              <div className="exploree_head">
                <h1>Explore top subjects</h1>
              </div>

              <div className="explore_main_data">
                <div className="____exxploreee">
                  {subjects.map((sub, index) => {
                    return (
                      <div key={index}>
                        <Subjects {...sub} />
                      </div>
                    )
                  })}
                </div>

                <div className="load_more_subjects">
                    <a href="#!">
                      <button>View More Subjects</button>
                    </a>
                </div>

              </div>
            </div>
          </div>

          <div className="service___">
            <div className="service">
              {ColGrid.map((col, index) => {
                return (
                  <div key={index} className="servvvv col">
                    <HomeGrid {...col} />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Courses
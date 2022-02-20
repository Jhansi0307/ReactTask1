import "./index.css";
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { BsCheckLg,BsXLg } from "react-icons/bs"

function App() {
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="card mb-5 mb-lg-0">
              <div className="card-body">
                <h5 className="card-title text-muted text-uppercase text-center">
                  Free
                </h5>
                <h6 className="card-price text-center">
                  $0<span className="period">/month</span>
                </h6>
                <div>
                  <hr/>
                </div>
                <ul>
                  <li>
                   
                    <BsCheckLg icon="fa-thin fa-x" />
                    <span className="space">
                    </span>
                    Single User
                  </li>
                  <li>
                  <BsCheckLg icon="fa-thin fa-x" />
                    <span className="space">
                    </span>
                    5GB Storage
                  </li>
                  <li>
                    
                  <BsCheckLg icon="fa-thin fa-x" />
                    <span className="space">
                    </span>
                    Unlimited Public Projects
                  </li>
                  <li>
                  <BsCheckLg icon="fa-thin fa-x" />
                    <span className="space">
                    </span>
                    Community Access
                  </li>
                  <li className="text-muted">

                  <BsXLg/>
                  <span className="space">
                    </span>
                    Unlimited Private Projects
                  </li>
                  <li className="text-muted">
                  <BsXLg/>
                  <span className="space">
                    </span>
                    Dedicated Phone Support
                  </li>
                  <li className="text-muted">
                  <BsXLg/>
                  <span className="space">
                    </span>
                    Free Subdomain
                  </li>
                  <li className="text-muted">
                  <BsXLg/>
                  <span className="space">
                    </span>
                    Monthly Status Reports
                  </li>
                </ul>
                <div className="d-grid">
                  <a href="#" className="btn btn-primary text-uppercase">
                    Button
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card mb-5 mb-lg-0">
              <div className="card-body">
                <h5 className="card-title text-muted text-uppercase text-center">
                  Plus
                </h5>
                <h6 className="card-price text-center">
                  $9<span className="period">/month</span>
                </h6>
                <div>
                  <hr/>
                </div>
                <ul className="fa-ul">
                  <li>
                  <BsCheckLg icon="fa-thin fa-x" />
                    <span className="space">
                    </span>
                    <strong>5 Users</strong>
                  </li>
                  <li>
                  <BsCheckLg icon="fa-thin fa-x" />
                    <span className="space">
                    </span>
                    50GB Storage
                  </li>
                  <li>
                  <BsCheckLg icon="fa-thin fa-x" />
                    <span className="space">
                    </span>
                    Unlimited Public Projects
                  </li>
                  <li>
                  <BsCheckLg icon="fa-thin fa-x" />
                    <span className="space">
                    </span>
                    Community Access
                  </li>
                  <li>
                  <BsCheckLg icon="fa-thin fa-x" />
                    <span className="space">
                    </span>
                    Unlimited Private Projects
                  </li>
                  <li>
                  <BsCheckLg icon="fa-thin fa-x" />
                    <span className="space">
                    </span>
                    Dedicated Phone Support
                  </li>
                  <li>
                  <BsCheckLg icon="fa-thin fa-x" />
                    <span className="space">
                    </span>
                    Free Subdomain
                  </li>
                  <li className="text-muted">
                  <BsXLg/>
                  <span className="space">
                    </span>
                    Monthly Status Reports
                  </li>
                </ul>
                <div className="d-grid">
                  <a href="#" className="btn btn-primary text-uppercase">
                    Button
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-muted text-uppercase text-center">
                  Pro
                </h5>
                <h6 className="card-price text-center">
                  $49<span className="period">/month</span>
                </h6>
                <div>
                  <hr/>
                </div>
                <ul className="fa-ul">
                  <li>
                  <BsCheckLg icon="fa-thin fa-x" />
                    <span className="space">
                    </span>
                    <strong>Unlimited Users</strong>
                  </li>
                  <li>
                  <BsCheckLg icon="fa-thin fa-x" />
                    <span className="space">
                    </span>
                    150GB Storage
                  </li>
                  <li>
                  <BsCheckLg icon="fa-thin fa-x" />
                    <span className="space">
                    </span>
                    Unlimited Public Projects
                  </li>
                  <li>
                  <BsCheckLg icon="fa-thin fa-x" />
                    <span className="space">
                    </span>
                    Community Access
                  </li>
                  <li>
                  <BsCheckLg icon="fa-thin fa-x" />
                    <span className="space">
                    </span>
                    Unlimited Private Projects
                  </li>
                  <li>
                  <BsCheckLg icon="fa-thin fa-x" />
                    <span className="space">
                    </span>
                    Dedicated Phone Support
                  </li>
                  <li>
                  <BsCheckLg icon="fa-thin fa-x" />
                    <span className="space">
                    </span>
                    <strong>Unlimited</strong> Free Subdomains
                  </li>
                  <li>
                    <BsCheckLg icon="fa-thin fa-x" />
                    <span className="space">
                    </span>
                    Monthly Status Reports
                  </li>
                </ul>
                <div className="d-grid">
                  <a href="#" className="btn btn-primary text-uppercase">
                    Button
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;

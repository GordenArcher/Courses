const FeatureData = (props) => {
    console.log(props);
  return (
    <div>
        <div className="fgtreww">
            <div className="features_image">
                <img src={props.img} alt="feature image" />
            </div>

            <div className="features_main">
                <div className="frt">
                    <p>{props.exp}</p>
                </div>

                <div className="feature_link">
                    <span>
                        <a href="#!">
                        {props.link}
                        </a>
                    </span>
                </div>

                <div className="features_desc">
                    <p>{props.briefdesc}</p>
                </div>

                <div className="features_ratings">
                    <div className="ratings_icon">
                        <div className="rate">
                            <div className="icons">
                                <box-icon name={props.ratingName} type='solid' color='#0405fc' ></box-icon>
                                <box-icon name={props.ratingName} type='solid' color='#0405fc' ></box-icon>
                                <box-icon name={props.ratingName} type='solid' color='#0405fc' ></box-icon>
                                <box-icon name={props.ratingName} type='solid' color='#0405fc' ></box-icon>
                                <box-icon name={props.ratingName} type='solid' color='#0405fc' ></box-icon>
                            </div>

                        <div className="ratwerr">
                            <span style={{color:'blue'}}>({props.ratingNumber})</span>
                            <span style={{marginLeft:'6px'}}>{props.ratingCom}</span>
                        </div>
                        </div>

                        <div className="amount">
                            <p>${props.amount}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="features_btn">
                <button>Find out more</button>
            </div>
        </div>
    </div>
  )
}

export default FeatureData
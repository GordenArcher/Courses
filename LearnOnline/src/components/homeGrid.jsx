const homeGrid = (props) => {
  return (
    <div>
        <div className="grid_row" key={props.index}>
            <div className="col_img">
                <img src={props.img} alt="col image" />
            </div>

            <div className="grid_text">
                <div className="grid_head">
                    <h3>{props.head}</h3>
                </div>

                <div className="grid_desc">
                    <p>{props.mainText}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default homeGrid
import {PropTypes} from 'prop-types'

const AboutVidoe = (props) => {
    console.log(props);

  return (
    <div className={props.animate}>
        <div className="about_video-pop vidd">
            <div className="video_pop">
                <div className="cancel">
                    <div className="canceufd" onClick={props.cancelPopVideo}>
                        <box-icon name='x-circle' border='circle' size='lg' type='solid' animation='tada' color='#2106f7'></box-icon>
                    </div>
                </div>
                <video src=""></video>
            </div>
        </div>
    </div>
  )
}

AboutVidoe.propTypes = {
  animate: PropTypes.string,
  cancelPopVideo: PropTypes.func
}

export default AboutVidoe
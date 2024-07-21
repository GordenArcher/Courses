import '../assets/CSS/subjects.css'
// import { protoTypes } from 'prop-types'

const Subjects = (props) => {
    console.log(props);
  return (
    <div className='subject_image'>
        <div className="__image__">
            <img src={props.img} alt="subject image" />

            <div className="image_text">
                <div className="texts">
                    <p>{props.mainText}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

// Subjects.protoTypes = {
//     img: protoTypes.string,
//     mainText: protoTypes.string,
// }


export default Subjects
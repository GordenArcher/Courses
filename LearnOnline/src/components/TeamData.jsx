
const TeamData = (props) => {
  return (
    <div className="team_members">
        <div className="team_images">
            <img src={props.teamImg} alt="team image" />
        </div>

        <div className="team_desc">
            <div className="team_name">
                <h4>{props.teamName}</h4>
            </div>

            <div className="team_comment">
                <p>{props.teamComment}</p>
            </div>
        </div>
    </div>
  )
}

export default TeamData
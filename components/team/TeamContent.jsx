const TeamContent = ({ memberBio }) => {
  const { name, position, bio } = memberBio;
  return (
    <div className="about-add-on-item-content">
        <h3>{name} - ({position})</h3>
        {
          bio.map(paragraph => <p>{paragraph}</p>)
        }
    </div>
  )
}

export default TeamContent;
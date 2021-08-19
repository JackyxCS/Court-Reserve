import { useHistory } from 'react-router-dom';
import './HomePageExplore.css'

function HomePageExplore() {
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/spots")
  }

  return (
    <div className="Homepage">
      <form className="FlexibleForm" onSubmit={handleSubmit}>
        <div>Not sure where to play? Let's explore.</div>
        <button className="FlexibleButton" type="submit">I'm flexible</button>
      </form>
    </div>
  );
}

export default HomePageExplore;
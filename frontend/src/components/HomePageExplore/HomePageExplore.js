import { useHistory } from 'react-router-dom';

function HomePageExplore() {
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/spots")
  }
 
  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">I'm flexible</button>
    </form>
  );
}

export default HomePageExplore;
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import DeleteListingModal from '../DeleteListingModal/index';
import styles from './UserProfile.module.css';

const ListingComponent = ({ spot, userId }) => {

  const history = useHistory();

  const [showListingModal, setShowListingModal] = useState(false)

  const handleListingClick = (e) => {
    e.preventDefault();
    setShowListingModal(true)
  }

  return (
    <div className={styles.buttonsDiv} key={spot?.id}>
      <div>{spot?.name}</div>
      <div className={styles.threeButtons}>
        <div>
          <form onSubmit={(e) => {
            e.preventDefault();
            history.push(`/spots/${spot.id}`)
          }}>
            <button className={styles.buttons}
              type="submit"
            >
              View
            </button>
          </form>
        </div>
        <div>
          <button
            onClick={() => history.push(`/spots/${spot.id}/edit`)}
            className={styles.buttons}
          >
            Update
          </button>
        </div>
        <div>
          <button
            onClick={handleListingClick}
            className={styles.buttons}
          >
            Delete
          </button>
          {showListingModal && <DeleteListingModal showListingModal={showListingModal} setShowListingModal={setShowListingModal} spotId={spot.id} userId={userId} />}
        </div>
      </div>
    </div>
  )
}

export default ListingComponent;
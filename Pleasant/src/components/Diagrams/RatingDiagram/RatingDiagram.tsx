import styles from './RatingDiagram.module.css';

// IMAGENS
import rating from '../../../assets/diagrams/rating.png'

const RatingDiagram = () => {

  return (
    <div className='container'>

        <div className='topDiagram'>
            <div className='infoLabels'>
                <h3>Your Rating</h3>
            </div>

            <button className='reportButton'>
                View Report
            </button>
        </div>

        <div className='diagram'>
            <label>Lorem ipsum dolor sit amet, consectetur</label>
            <img className={styles.diagramImg} src={rating} alt="Diagram"/>
        </div>
          
    </div>
  );
};

export default RatingDiagram;
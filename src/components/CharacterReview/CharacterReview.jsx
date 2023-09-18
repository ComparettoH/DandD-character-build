import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './CharacterReview.css';

function CharacterReview (){
    const history = useHistory();

    const goToBuild = () => {
        history.push('/character-build-1')
    };
    
    const goToList = () => {
      history.push('/character-list')
    };

    return(
        <div id='char-review'>
       <img src="https://i.ibb.co/LCBrvqp/bigger-scroll.png" alt="bigger-scroll" border="0"/>
        <button style={{color: 'black'}} className="btn" onClick={goToBuild}>Create Another Character</button>
        <button style={{color: 'black'}} className="btn" onClick={goToList}>Go To Saved Character List</button>
        </div>
    )
}

export default CharacterReview;
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
        <img src="https://i.ibb.co/kJJ6jkj/bigger-scroll.jpg" alt="bigger-scroll" border="0"/>
        <button className="btn" onClick={goToBuild}>Create Another Character</button>
        <button className="btn" onClick={goToList}>Go To Saved Character List</button>
        </div>
    )
}

export default CharacterReview;
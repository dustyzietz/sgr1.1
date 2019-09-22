import React ,{ useState, useEffect } from 'react';
import store, { models } from './store';
import Quiver from './Quiver';
import uuid from 'uuid';



export default function SgrApp() {

  const [quiver, setQuiver] = useState([]);

  const styles = {
    container: {
      height: '33vw',
      width: '33vw',
      display: 'inline-block'
    },
    image: {
    height: '100%'
    }
  };

  const addToQuiver = (board, model, image) => {
    board.key =  uuid();
  const newQuiver = [...quiver, {board, model, image}];
  setQuiver(newQuiver);
 
  };
  
  useEffect(() => {
     console.log(quiver);
  });

  return (
    <div>
     {models.map(model => (
       <div style={styles.container} key={model.dimensions[0].key}>
         <h3>{model.model}</h3>
         <img style={styles.image} src={model.image} alt='model'/>
         {model.dimensions.map(board => (
           <div key={board.key}>
           <p>
             {`${board.height1}'${board.height2} ${board.width1}"${board.width2}/${board.width3} ${board.thickness1}"${board.thickness2}/${board.thickness3} ${board.volume}L
             `}
           </p>
           <button onClick={() => addToQuiver(board, model.model, model.image)}>add</button>
           </div>
         ))}
         </div>
     ))}
     <Quiver quiver={quiver}/>
    </div>
  )
}

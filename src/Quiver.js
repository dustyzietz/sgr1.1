import React from "react";

export default function Quiver({ quiver }) {
  const styles = {
    container: {
      height: "33vw",
      width: "33vw",
      display: "inline-block"
    },
    image: {
      height: "100%"
    }
  };

  return (
    <div>
      {quiver.map(board => (
        <div style={styles.container} key={board.board.key}>
          <h3>{board.model}</h3>
          <img style={styles.image} src={board.image} alt="model" />
          <p>
            {`${board.board.height1}'${board.board.height2} ${board.board.width1}"${board.board.width2}/${board.board.width3} ${board.board.thickness1}"${board.board.thickness2}/${board.board.thickness3} ${board.board.volume}L
             `}
          </p>
        </div>
      ))}
    </div>
  );
}

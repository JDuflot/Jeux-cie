import user from '../assets/img/user.png';
import clock from '../assets/img/wall-clock.png';
import '../styles/GameItem.css';
import Modal from './Modal';

function GameItem({ gameId, name, image, thumbnail, minPlayers, maxPlayers, playingTime, price }) {

  return (
    <li key={gameId} className="game-item">
      <div className="game-div-list">
        {/* <img src={thumbnail} alt={`${name} thumbnail`} className="game-thumbnail" /> */}
        <Modal
        gameId={gameId}
        name={name}
        image={image}
        thumbnail={thumbnail}
        />
        <div className="div-price">{price}€</div>
        <p>{name}</p>
        <p>
          <img src={user} className="user-img" alt="utilisateur" />
          Nombre de joueurs : de {minPlayers} à {maxPlayers}
        </p>
        <p>
          <img src={clock} alt="durée" className="clock-img" />
          Durée de la partie : {playingTime} minutes
        </p>
      </div>
    </li>
  );
}

export default GameItem;

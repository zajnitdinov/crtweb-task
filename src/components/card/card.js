import React, {useState} from 'react';
import {ReactComponent as Unlike} from "../../svg/unlike.svg";
import {ReactComponent as Like} from "../../svg/like.svg";

const Card = (props) => {
    const [like, setLike] = useState(false);
    const LikeComponent = () => like ? <Like/> : <Unlike/>;
    const handleClick = () => setLike(like ? false : true);
    const data = {
        type: props.type === 'flat' ? 'Квартира' : '',

    }
    console.log(data);
    return (
        <div className="card">
            <div className="card__like"
                 onClick={handleClick}>
                <LikeComponent/>
            </div>
            <div className="card__img"></div>
            <div className="card__type">Квартира, 134 квм</div>
            <div className="card__address">Тюмень, Минская 3а, 123</div>
            <div className="card__title">3-х комнатная на Минской</div>
            <div className="card__owner">Агент Дроздов Василий Михайлович</div>
        </div>
    );
};

export default Card;
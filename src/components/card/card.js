import React, {useState} from 'react';
import {ReactComponent as Unlike} from "../../svg/unlike.svg";
import {ReactComponent as Like} from "../../svg/like.svg";

const Card = (props) => {
    const [like, setLike] = useState(false);
    const LikeComponent = () => like ? <Like/> : <Unlike/>;
    const handleClick = () => setLike(like ? false : true);
    const {type,
        attributes: {area, unit, title,
            address: {city, street, house, room}},
        relationships: {type: typeRelationspips,
            attributes: {first_name, last_name, middle_name}}} = props;
    const data = {
        type: `${type === 'flat' ? 'Квартира, ' : ''} ${area} ${unit}`,
        address: `${city}, ${street} ${house}, ${room}`,
        title,
        owner: `${typeRelationspips === 'agent' ? 'Агент' : ''} ${last_name} ${first_name} ${middle_name}`
    }
    console.log(props);
    return (
        <div className="card">
            <div className="card__like"
                 onClick={handleClick}>
                <LikeComponent/>
            </div>
            <div className="card__img"></div>
            <div className="card__type">{data.type}</div>
            <div className="card__address">{data.address}</div>
            <div className="card__title">{data.title}</div>
            <div className="card__owner">{data.owner}</div>
        </div>
    );
};

export default Card;
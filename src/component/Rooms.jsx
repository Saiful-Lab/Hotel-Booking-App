import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { roomBook } from '../redux/roomReducer';

function Rooms({ room, handleRoomBook = false }) {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const { roomId, booked, roomName } = room
    // console.log(roomBook);

    const handleClick = room => {
        navigate(`/room/${roomId}`, { state: { room } })
    }

    const handleBook = roomId => {
        dispatch(roomBook(roomId))
    }

    let cardBody = null
    if (handleRoomBook) {
        cardBody = (
            <button
                disabled={booked}
                className='btn btn-primary'
                onClick={() => handleBook(roomId)} >
                Book now
            </button>
        )
    } else {
        cardBody = (
            <>
                <h5 className="card-title">{roomName}</h5>
                <div className='d-flex justify-content-between flex-wrap'>
                    <button className='btn btn-outline-info mt-1 mx-auto'
                        onClick={() => handleClick(room)}>
                        View Details</button>
                    <button
                        className="btn btn-outline-primary mt-1 mx-auto">
                        Room Book</button>
                </div>
            </>
        )
    }

    return (
        <div className='p-2'>
            <div className='card p-0'>
                <div className="position-absolute">
                    <span className={booked ?
                        "badge bg-danger ms-2 mt-2" : "badge bg-primary ms-2 mt-2"}>
                        {booked ? "Not Available" : "Available"}
                    </span>
                </div>
                <img src={room.roomImg[0]}
                    className="card-img-top" alt={roomName}
                    style={{ height: '14rem' }} />
                <div className="card-body">
                    {cardBody}
                </div>
            </div>
        </div>
    )
}

export default Rooms
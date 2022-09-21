import React from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { roomBook } from '../redux/roomReducer';
import TopAmenities from '../component/TopAmenities';
import Amenities from '../component/Amenities';

function Room() {
    const room = useLocation().state.room;
    const { roomName, roomDesciption, roomId, isBooked } = room
    const dispatch = useDispatch();
    const [bookNow, setBookNow] = React.useState(isBooked)

    const handleClick = roomId => {
        dispatch(roomBook(roomId))
        setBookNow(!bookNow)
    }
    const imgList = room.roomImg.map((item, i) =>
        <img src={item} alt={roomName} key={i}
            className='card-img-top me-1 rounded mb-sm-1 me-sm-0'
            style={{ height: '8rem'}} />
    )

    return (
        <div className='container my-5'>
            <div className="card border-0">
                <div className='d-sm-flex' style={{ height: '30rem' }}>
                    <img src={room.roomImg[0]} alt={roomName} style={{ width: "80%" }}
                        className='card-img-top mb-1 order-sm-1 ms-3 rounded'
                    />
                    <div className='overflow-scroll scrollbar-hidden
                    d-flex flex-sm-column mb-sm-1'>
                        {imgList}
                    </div>

                </div>
                <div className="card-body">
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className="card-title m-0 fs-4"> {roomName}
                            <span className='badge bg-secondary'>Single</span>
                        </div>
                        <button className='d-inline-block btn btn-primary'
                            onClick={() => handleClick(roomId)}
                            disabled={bookNow}
                        >Book now</button>
                    </div>
                </div>
            </div>

            {/* TopAmenities */}
            <div className='d-flex justify-content-center flex-wrap'>
                <TopAmenities />
            </div>

            <div className="card">
                <div className="card-body">
                    {roomDesciption}
                    <Amenities />
                </div>
            </div>
        </div>
    )
}

export default Room
import React from 'react';
import Ridestat from './Ridestat';


const RidestatList = (props) => {

    return (
        <div className="row">
          {
            props.custData.map(poke => {
              return (
                <Ridestat
                  key={poke.name}
                  fullname={poke.fullname}
                  ride_date={poke.ride_date}
                />
              )
            })
          }
        </div>
      )
    }


export default RidestatList;
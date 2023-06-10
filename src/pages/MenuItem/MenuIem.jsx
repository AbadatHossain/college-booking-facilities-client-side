

const MenuItem = ({item}) => {

    const {name, picture,className, price,availableSeats, instructorName } = item
    return (
        <div className="flex space-x-2">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[100px]" src={picture} alt="" />
            <div>
                <h3 className="uppercase">{name}</h3>
                <h3>Class Name: {className}</h3>
                <h3>Available Seats: {availableSeats}</h3>
                <h3>instructor Name: {instructorName}</h3>
                
                <p className="text-yellow-500">{price}</p>
            </div>
        </div>
    );
};

export default MenuItem;
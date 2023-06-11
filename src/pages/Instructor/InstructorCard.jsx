const InstructorCard = ({ getInstructorClasses, instructor }) => {
  const { name, picture, email } = getInstructorClasses;
  console.log(instructor);

  return (
    <div className="card w-96 h-80  bg-white text-black mt-10">
      <figure className="w-full h-100% object-cover items-center mb-3">
        <img src={picture} alt="picture" />
      </figure>
      <div className="card-body text-center">
        <h2 className="card-title">Name: {name}</h2>
        <h2 className="card-title">Email: {email}</h2>
      </div>
    </div>
  );
};

export default InstructorCard;





[
  {
  "picture":"https://i.ibb.co/0QgPSmx/images-1.jpg",
  "name":"Mr.John Doe",
  "email":"john@gmail.com"
  },
  {
  "picture":"https://i.ibb.co/QJNy1tT/images.jpg",
  "name":"Mr.ching Joe",
  "email":"ching@gmail.com"
  },
  {
  "picture":"https://i.ibb.co/6D2fJDr/swipe4.jpg",
  "name":"Mr. Joe Peter",
  "email":"peter@gmail.com"
  },
  {
  "picture":"https://i.ibb.co/vHLWkqN/images-2.jpg",
  "name":"Mr.Joe Peter",
  "email":"joe@gmail.com"
  },
  ]
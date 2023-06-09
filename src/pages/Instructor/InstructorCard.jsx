const InstructorCard = ({ getInstructorClasses, instructor }) => {
  const { name, picture, email } = getInstructorClasses;
  console.log(instructor);

   return (
    
      <div className="card w-96 bg-white text-black mt-10">
      
        <figure className="w-100% h-100% items-center">
          <img
            src={picture}
            alt="picture"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name: {name}</h2>
          <h2 className="card-title">Email: {email}</h2>
          
        </div>
      </div>
    
  );
};

export default InstructorCard;
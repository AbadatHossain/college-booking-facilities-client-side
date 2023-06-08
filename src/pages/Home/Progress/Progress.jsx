import Category from "../../Category/Category";

const Progress = () => {
  return (
    <div>
      <div className="mb-5">
        <h1 className="text-3xl font-bold text-center mb-3">WHY CHOOSE US</h1>
        
      </div>
      <div className="flex">
        <div className="w-1/2">



        <p className="mb-8 mt-4">
          Every minute you spend alone at night, thinking and thinking about
          what it is you want to design or build. It will be worth it, I
          promise.” — Steve Wozniak
        </p>
          <label className="label">
            <span className="label-text">Fitness</span>
            <progress
              className="progress progress-accent w-full"
              value={95}
              max="100"
            ></progress>
          </label>
          <label className="label">
            <span className="label-text">Skills</span>
            <progress
              className="progress progress-accent w-full"
              value={98}
              max="100"
            ></progress>
          </label>
          <label className="label">
            <span className="label-text">Disipline</span>
            <progress
              className="progress progress-accent w-full"
              value={90}
              max="100"
            ></progress>
          </label>
          <label className="label">
            <span className="label-text">For Work and Life</span>
            <progress
              className="progress progress-accent w-full"
              value={85}
              max="100"
            ></progress>
          </label>
        </div>

        <div className="w-1/2 px-5">
          <Category></Category>
        </div>
      </div>
    </div>
  );
};

export default Progress;

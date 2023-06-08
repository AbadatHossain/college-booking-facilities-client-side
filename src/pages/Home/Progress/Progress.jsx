

const Progress = () => {
    return (
        <div>
              <label className="label">
                  <span className="label-text">Password  :</span>
                  <progress className="progress progress-accent w-full" value={80} max="100">Fitness</progress>
                </label>
            
<progress className="progress progress-accent w-56" value="10" max="100"></progress><br />
<progress className="progress progress-accent w-56" value="40" max="100"></progress><br />
<progress className="progress progress-accent w-56" value="70" max="100"></progress><br />
<progress className="progress progress-accent w-56" value="100" max="100"></progress>
        </div>
    );
};

export default Progress;
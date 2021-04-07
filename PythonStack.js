class pythonstack {
    constructor(coursename, trainer, duration) {
        this.coursename = coursename;
        this.trainer = trainer;
        this.duration = duration;
    }
}

export class pythonframwork extends pythonstack {
    constructor(coursename, trainer, duration, framework) {
        super(coursename, trainer, duration, framework);
        this.framework = framework;
    }
}

export default pythonstack; // default way
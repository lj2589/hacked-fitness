class WorkoutSet {
  constructor(work_seconds, work_reps, exercise_name, rest_seconds) {
    this.work_seconds = (work_seconds) ? work_seconds : null;
    this.work_reps = (work_reps) ? work_reps : null;
    this.exercise_name = (exercise_name) ? exercise_name : null;
    this.rest_seconds = (rest_seconds) ? rest_seconds : null;
  }
}

class WorkoutInterval {
  constructor(work_seconds, work_reps, interval_name) {
    this.seconds = (work_seconds) ? work_seconds : null;
    this.reps = (work_reps) ? work_reps : null;
    this.interval_name = (interval_name) ? interval_name : null;
  }
}

module.exports = {
  WorkoutSet,
  WorkoutInterval
}

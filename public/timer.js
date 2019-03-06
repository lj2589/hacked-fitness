class WorkoutInterval {
  constructor(work_seconds, work_reps, interval_name) {
    this.seconds = (work_seconds) ? work_seconds : null;
    this.reps = (work_reps) ? work_reps : null;
    this.interval_name = (interval_name) ? interval_name : null;
  }
}

var workout = {
  sets: [
    new WorkoutInterval(90, null, "Jump Rope"),
    new WorkoutInterval(30, null, "Rest"),
    new WorkoutInterval(120, null, "Stationary Bike"),
    new WorkoutInterval(45, null, "Rest")
  ]
};

var app = new Vue({
  el: "#timer",
  data: {
    timer: null,
    set_num: 1,
    workout_arr: workout.sets,
    current_set: workout.sets[0],
    total_time: workout.sets[0].seconds,
    total_sets: workout.sets.length,
    exercise_name: workout.sets[0].interval_name
  },
  methods: {
    startTimer: function() {
      this.timer = setInterval(() => this.tick(), 100);
    },
    stopTimer: function() {
      clearInterval(this.timer);
      this.timer = null;
    },
    tick: function() {
      this.total_time--;
      if (this.total_time === 0) {
        if (this.set_num === this.total_sets) {
            this.stopTimer();
        }
        else {
          this.setEnd();
        }
      }
    },
    setEnd: function() {
      this.set_num++;
      this.current_set = this.workout_arr[this.set_num - 1];
      this.total_time = this.current_set.seconds;
      this.exercise_name = this.current_set.interval_name;
    },
    formatTime: function(time_int) {
      return (time_int < 10 ? '0' : '') + time_int.toString();
    }
  },
  computed: {
    current_minutes: function() {
      return this.formatTime(Math.floor(this.total_time / 60));
    },
    current_seconds: function() {
      return this.formatTime(this.total_time % 60);
    }
  }
})

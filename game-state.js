
const LUNARIS = {
  key: "lunaris-save-v1",

  load() {
    const saved = localStorage.getItem(this.key);

    return saved ? JSON.parse(saved) : {
      day: 1,
      missionAccepted: false,
      completedTasks: [],
      resources: {
        power: 75,
        oxygen: 85,
        water: 80,
        shield: 65,
        food: 75,
        science: 0
      },
      surfaceX: 60,
      returnFrom: null
    };
  },

  save(state) {
    localStorage.setItem(this.key, JSON.stringify(state));
  },

  enter(building, x) {
    const state = this.load();

    state.surfaceX = x;
    state.returnFrom = building;
    this.save(state);

    window.location.href = building + ".html";
  },

  exit() {
    window.location.href = "lunarisfinal.html";
  },

  acceptMission() {
    const state = this.load();
    state.missionAccepted = true;
    this.save(state);
  },

  completeTask(taskId) {
    const state = this.load();

    if (!state.completedTasks.includes(taskId)) {
      state.completedTasks.push(taskId);
    }

    this.save(state);
  }
};

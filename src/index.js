class StopWatch {
    constructor() {
        this.startTime = 0;
        this.lapTime = 0;
    }
    
    now() {
        return (new Date()).getTime();
    }
    
    start() {
        this.startTime = this.startTime ? this.startTime : this.now();
    }
    
    stop() {
        this.lapTime = this.startTime ? this.lapTime + this.now() - this.startTime : this.lapTime;
        this.startTime = 0;
    }
    
    reset() {
        this.lapTime = this.startTime = 0;
    }
    
    time() {
        return this.lapTime + (this.startTime ? this.now() - this.startTime : 0);
    }
}

export default new StopWatch();
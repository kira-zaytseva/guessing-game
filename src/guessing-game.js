class GuessingGame {
    constructor(minValue, maxValue) {
        this.minValue;
        this.maxValue;
        this.num = 0;
    }

    setRange(min, max) {
        this.minValue = min;
        this.maxValue = max;
        this.num = 0;
    }

    guess() {
        this.result = Math.round((this.maxValue + this.minValue)/2);
        return this.result;
    }

    lower() {
        this.maxValue = this.result;
    }

    greater() {
        //this.num = Math.floor((this.maxValue - this.minValue)/2) + this.num;
        this.minValue = this.result;
    }
}

module.exports = GuessingGame;

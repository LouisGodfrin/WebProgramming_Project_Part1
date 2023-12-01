

document.getElementById("Year").innerText = new Date().getFullYear();

const javaPackagesApplication = {
    data() {
        return {
            mainHeading: 'Dog breed and information',
            packages,
            isFlipped: false,
            learnMoreUrl: '####',
            userInput: 'Default',
            index: 0,
        };
    },

    methods: {
        move(change) {
            if (this.packages[this.index + change]) {
                this.index += change;
                this.isFlipped = false;
            }
        }
    }
};

const application = Vue.createApp(javaPackagesApplication).mount("#application");


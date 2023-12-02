// app.js
document.getElementById("Year").innerText = new Date().getFullYear();

const javaPackagesApplication = {
    data() {
        return {
            mainHeading: 'Dog breed and information',
            packages,   // packages: [], 
            isFlipped: false,
            learnMoreUrl: '####',
            userInput: 'Default',
            index: 0,
            // Image,
        };
    },

    methods: {
        move(change) {
            if (this.packages[this.index + change]) {
                this.index += change;
                this.isFlipped = false;
                // this.Image = Image;
            }
        }
    }

const application = Vue.createApp(javaPackagesApplication).mount("#application");

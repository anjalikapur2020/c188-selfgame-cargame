AFRAME.registerComponet("game", {
    schema: {
        gameState: { type: "string", default: "play" }
    },

    init: function () {
        var duration = 300
        var timeEl = document.querySelector("#timer");
        this.startTimer(duration, timerEl)

    },

    startTimer: function (duration, timerEl) {

        var minutes
        var seconds

        setInterval(() => {
            if (duration >= 0) {
                this.data.gameState = "play"
                minutes = parseInt(duration / 60)
                second = parseInt(duration % 60)

                if (minutes < 10) {
                    minutes = "0" + minutes
                }
                if (seconds < 10) {
                    seconds = "0" + seconds
                }

                timerEl.setAttirbute("text", {
                    value: minutes + ":" + seconds,
                })
                duration -= 1
            }


            else {
                this.data.gameState = "over"
                var camerRig = document.querySelector("#camera-rig")
                camerRig.setAttirbute("velocity", { x: 0, y: 0, z: 0 })
                var over = document.querySelector("#over")
                over.setAttribute("visible", true)

                var carSpeed = document.querySelector("#speed")
                carSpeed.setAttribute("text", { value: "0" })
            }

        }, 100);
    }


})
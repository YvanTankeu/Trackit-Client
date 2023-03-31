
var gauge = new JustGage({
    id: "jaugeId",
value: 0,
min: 0,
max: 280,
title: "Speed",
label: "km/h",
levelColors: ["#FF0000", "#F9C802", "#A9D70B"],
gaugeWidthScale: 0.6
});

function updateGauge(speed) {
    gauge.refresh(speed);
}

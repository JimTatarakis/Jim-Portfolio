// Slider
const slider = document.querySelector('.slider');
M.Slider.init(slider, {
    indicators: false,
    height: 500,
    transition: 500,
    interval: 2200,
})

// Materialboxed
const mb = document.querySelectorAll('.materialboxed');
M.Materialbox.init(mb, {});
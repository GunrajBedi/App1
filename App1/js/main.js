//factory
function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log('draw');

        }
    };
}
    console circle = createCircle(1);
    circle.draw();


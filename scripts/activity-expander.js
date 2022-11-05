window.onload = override_activity_objects;
sessionStorage.setItem('active_item', '-1');
var element_height = '';
function override_activity_objects() {
    var _a;
    var activity_objects = document.querySelectorAll('.activity');
    for (var i = 0; i < activity_objects.length; i++) {
        (_a = activity_objects[i]) === null || _a === void 0 ? void 0 : _a.addEventListener('click', activity_click);
        activity_objects[i].id = 'a' + i;
    }
}
function activity_click() {
    var active = sessionStorage.getItem('active_item');
    var width = window.screen.width;
    if (width > 500) {
        element_height = '500px';
    }
    else {
        element_height = '200px';
    }
    if (active != this.id) {
        activity_expand(this);
        sessionStorage.setItem('active_item', this.id);
        if (active != '-1') {
            var prev_selected_activity = document.getElementById(active);
            activity_collapse(prev_selected_activity);
        }
    }
    else {
        activity_collapse(this);
        sessionStorage.setItem('active_item', '-1');
    }
}
function activity_expand(activity_object) {
    activity_object.style.height = 'auto';
    activity_object.style.opacity = '1';
    activity_object.children[1].style.display = 'flex';
}
function activity_collapse(activity_object) {
    activity_object.style.height = element_height;
    activity_object.style.opacity = '0.8';
    activity_object.children[1].style.display = 'none';
}

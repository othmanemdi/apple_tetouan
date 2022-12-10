function up(id) {
    let get_id = 'qt_' + id;
    let qt = document.getElementById(get_id)
    qt.value++;
}

function down(id) {
    let get_id = 'qt_' + id;
    let qt = document.getElementById(get_id)
    if (qt.value == 1) {
        return
    }
    qt.value--;
}
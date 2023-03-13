let elements = document.getElementsByTagName('kbd');
for (let element of elements) {
    //element.classList.add('text-bg-success');
}

let clipboard = document.getElementsByClassName('clipboard');
for (let element of clipboard) {
    element.classList.add('btn-warning');
    //element.classList.add('visually-hidden');
}


function copyDivToClipboard(elem) {
    var range = document.createRange();
    range.selectNode(document.getElementById(elem));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect
}
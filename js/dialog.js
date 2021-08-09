/* 
 * Dialog.js
 * Created by EAM, 2013-10-27
 */

// Dialog untuk konfirmasi
function dlgConfirm(message, callback) {
    $.SmartMessageBox({
        title: "Konfirmasi",
        content: message,
        buttons: '[Ya][Batal]'
    }, function (ButtonPressed) {
        if (ButtonPressed === "Ya") {
            if ($.isFunction(callback)) {
                callback.apply();
            }
        }
    });
}

// Dialog untuk informasi
function dlgAlert(message, callback) {
    $.SmartMessageBox({
        title: "Perhatian!",
        content: message,
        buttons: '[Selesai]'
    }, function (ButtonPressed) {
        if ($.isFunction(callback)) {
            callback.apply();
        }
    });
}

// Dialog untuk informasi
function dlgInfo(message, callback) {
    $.SmartMessageBox({
        title: "Informasi",
        content: message,
        buttons: '[Selesai]'
    }, function (ButtonPressed) {
        if ($.isFunction(callback)) {
            callback.apply();
        }
    });
}

// Dialog untuk informasi
function dlgError(message, callback) {
    $.SmartMessageBox({
        title: "Error!!",
        content: message,
        buttons: '[Tutup]'
    }, function (ButtonPressed) {
        if ($.isFunction(callback)) {
            callback.apply();
        }
    });
}

// Small info

function dlgSmallError(caption)
{
    $.smallBox({
        title: "Error!",
        content: caption,
        color: "#C46A69",
        iconSmall: "fa fa-warning shake animated",
        timeout: 5000
    });
}

function dlgSmallAlert(caption)
{
    $.smallBox({
        title: "Informasi",
        content: caption,
        color: "#659265",
        iconSmall: "fa fa-check shake animated",
        timeout: 5000
    });
}
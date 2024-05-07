function encrypt() {
    var plaintext = document.getElementById('plaintext').value;
    var key = document.getElementById('key').value;

    if (!plaintext || !key) {
        alert("Plaintext dan kunci harus diisi.");
        return;
    }

    var ciphertext = RC4.encrypt(plaintext, key);

    document.getElementById('ciphertext').value = ciphertext;
}

function decrypt() {
    var ciphertext = document.getElementById('ciphertext').value;
    var key = document.getElementById('key').value;

    if (!ciphertext || !key) {
        alert("Ciphertext dan kunci harus diisi.");
        return;
    }

    try {
        var plaintext = RC4.decrypt(ciphertext, key);
        document.getElementById('plaintext').value = plaintext;
    } catch (e) {
        alert("Dekripsi gagal. Pastikan ciphertext dan kunci benar.");
    }
}

function clearFields() {
    document.getElementById('plaintext').value = '';
    document.getElementById('ciphertext').value = '';
    document.getElementById('key').value = '';
}
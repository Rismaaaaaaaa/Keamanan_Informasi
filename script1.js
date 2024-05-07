function isValidAESKey(key) {
    const validKeyLengths = [16, 24, 32];
    return validKeyLengths.includes(key.length);
}

function encrypt() {
    const plaintext = document.getElementById('plaintext').value;
    const key = document.getElementById('key').value;

    if (!plaintext || !key) {
        alert("Plaintext dan kunci harus diisi.");
        return;
    }

    if (!isValidAESKey(key)) {
        alert("Kunci harus memiliki panjang 16, 24, atau 32 byte.");
        return;
    }


    const ciphertext = CryptoJS.AES.encrypt(plaintext, key).toString();

    document.getElementById('ciphertext').value = ciphertext;
}

function decrypt() {
    const ciphertext = document.getElementById('ciphertext').value;
    const key = document.getElementById('key').value;

    if (!ciphertext || !key) {
        alert("Ciphertext dan kunci harus diisi.");
        return;
    }

    if (!isValidAESKey(key)) {
        alert("Kunci harus memiliki panjang 16, 24, atau 32 byte.");
        return;
    }

    try {
        const bytes = CryptoJS.AES.decrypt(ciphertext, key);
        const plaintext = bytes.toString(CryptoJS.enc.Utf8);

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
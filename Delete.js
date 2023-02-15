// membuat variabel request untuk mengimport modul supertest pada nodeJs
const request = require('supertest');

// membuat variabel expect untuk membuat modul expect dan library chai bertujuan untuk membandingkan hasil request api dengan hasil yang diharapkan
const expect = require('chai').expect;

// digunakan untuk mendefinisikan method Delete apakah berupa Json atau tidak
describe('DELETE /users/:id', function () {
    // digunakan untuk mendefinisikan suatu unit case pada framework testing mocha, serta fungsi callback untuk memberitahu mocha bahwa test case tersebut telah selesai eksekusi
    it('responds with 200 and success message for existing post', function (done) {

        // melakukan request api
        request('https://reqres.in/api')

            // melakukan endpoint API secara spesifik
            .delete(`/users/2`)

            // mengatur jenis content respons yang diterima oleh client dalam bentuk json
            .set('Accept', 'application/json')

            // mengecek header respons api apakah dalam bentuk json atau bukan
            .expect(204)

            // untuk mengeksekusi permintaan Delete dan memanggil kembali fungsi callback yang diberikan yaitu error(mewakili kesalahan) dan respons(menerima respons dari server)
            .end(function (err, res) {

                // menangani permintaan error pada permintaan Delete, jika terjadi error maka akan direturn sebagai parameter done dan dianggap gagal
                if (err) return done(err);

                // untuk menentukan apa yang diharapkan dari respons api tersebut dalam bentuk objek
                expect(res.body).to.be.an('object');

                // bahwa testing tersebut selesai
                done();
            });
    });
});
// membuat variabel request untuk mengimport modul supertest pada nodeJs
const request = require('supertest');

// membuat variabel expect untuk membuat modul expect dan library chai bertujuan untuk membandingkan hasil request api dengan hasil yang diharapkan
const expect = require('chai').expect;

// digunakan untuk mendefinisikan method GET apakah berupa Json atau tidak
describe('GET Api /products', function () {
    // digunakan untuk mendefinisikan suatu unit case pada framework testing mocha, serta fungsi callback untuk memberitahu mocha bahwa test case tersebut telah selesai eksekusi
    it('responds with json', function (done) {

        // melakukan request api
        request('https://dummyjson.com')

            // melakukan endpoint API secara spesifik
            .get('/products')

            // mengatur jenis content respons yang diterima oleh client dalam bentuk json
            .set('Accept', 'application/json')

            // mengecek header respons api apakah dalam bentuk json atau bukan
            .expect('Content-Type', /json/)

            // memastikan bahwa repons permintaan api tersebut memiliki status ok ditampilkan
            .expect(200)

            // untuk mengeksekusi permintaan GET dan memanggil kembali fungsi callback yang diberikan yaitu error (mewakili kesalahan) dan respons (menerima respons dari server)
            .end(function (err, res) {

                // menangani permintaan error pada permintaan GET, jika terjadi error maka akan direturn sebagai parameter done dan dianggap gagal
                if (err) return done(err);

                // pengujian test menggunakan chai dan supertest pada endpoint "GET" apakah berupa respons json atau tidak. dan dilakukan pengujian untuk memverifikasi apakah data respons berupa array atau tidak.
                expect(res.body).to.be.an('object');

                // bahwa testing tersebut selesai
                done();
            });
    });
});

// file package.json dibagian script untuk menjalankan tiap" file mulai dari Post sampai Delete
    // "test": "mocha Post.js"
    // "test": "mocha Put.js"
    // "test": "mocha Delete.js"
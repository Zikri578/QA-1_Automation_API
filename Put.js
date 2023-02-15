// membuat variabel request untuk mengimport modul supertest pada nodeJs
const request = require('supertest');

// membuat variabel expect untuk membuat modul expect dan library chai bertujuan untuk membandingkan hasil request api dengan hasil yang diharapkan
const expect = require('chai').expect;

// digunakan untuk mendefinisikan method PUT apakah berupa Json atau tidak
describe('PUT /users/:id', function () {
    // digunakan untuk mendefinisikan suatu unit case pada framework testing mocha, serta fungsi callback untuk memberitahu mocha bahwa test case tersebut telah selesai eksekusi
    it('responds with 200 and updates user data', function (done) {

        // membuat variabel post untuk update api baru dalam bentuk objek
        const user = {
            email: 'updatedemail@gmail.com',
            first_name: 'Alexander',
            last_name: 'Smith'
        };

        // melakukan request api
        request('https://reqres.in/api')

            // melakukan endpoint API secara spesifik
            .put('/users/2')

            // mengirimkan data dalam format json pada http post request
            .send(user)

            // mengatur jenis content respons yang diterima oleh client dalam bentuk json
            .set('Accept', 'application/json')

            // mengecek header respons api apakah dalam bentuk json atau bukan
            .expect('Content-Type', /json/)

            // memastikan bahwa repons permintaan api tersebut memiliki status ok di update
            .expect(200)

            // untuk mengeksekusi permintaan PUT dan memanggil kembali fungsi callback yang diberikan yaitu error(mewakili kesalahan) dan respons(menerima respons dari server)
            .end(function (err, res) {

                // menangani permintaan error pada permintaan PUT, jika terjadi error maka akan direturn sebagai parameter done dan dianggap gagal
                if (err) return done(err);

                // untuk menentukan apa yang diharapkan dari respons api tersebut dalam bentuk objek
                expect(res.body).to.be.an('object');

                // untuk menguji nilai dari value email bahwa repons body tersebut memiliki property email dan nilainya sama dengan yang ada diatas
                expect(res.body).to.have.property('email').to.eql('updatedemail@gmail.com');

                // untuk menguji nilai dari value first_name bahwa repons body tersebut memiliki property first_name dan nilainya sama dengan yang ada diatas
                expect(res.body).to.have.property('first_name').to.eql('Alexander');

                // untuk menguji nilai dari value last_name bahwa repons body tersebut memiliki property last_name dan nilainya sama dengan yang ada diatas
                expect(res.body).to.have.property('last_name').to.eql('Smith');

                // bahwa testing tersebut selesai
                done();
            });
    });
});

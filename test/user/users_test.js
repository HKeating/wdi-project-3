/* globals api, expect */

require('../spec_helper');

// describe('User Controller Test', () => {
//   describe('GET /api/users', () => {
//     it('should return a 200 response', done => {
//       api
//         .get('/api/users')
//         .set('Accept', 'application/json')
//         .expect(200, done);
//     });
//     it('should return an array of users', done => {
//       api
//         .get('/api/users')
//         .set('Accept', 'application/json')
//         .end((err, res) => {
//           expect(res.body).to.be.an('array');
//           done();
//         });
//     });
//
//   });
// });

describe('Registration Test', () => {
  describe('GET /api/register', () => {
    it('should return a 200 response', done => {
      api
        .get('/api/register')
        .set('Accept', 'application/json')
        .expect(200, done);
    });
    // it('should return an array of users', done => {
    //   api
    //     .get('/api/users')
    //     .set('Accept', 'application/json')
    //     .end((err, res) => {
    //       expect(res.body).to.be.an('array');
    //       done();
    //     });
    // });

  });
});

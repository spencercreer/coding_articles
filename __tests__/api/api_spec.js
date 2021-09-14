const frisby = require('frisby')

it('should return a status of 200', function () {
    return frisby
        .get('http://localhost:5000/')
        .expect('status', 200)
})
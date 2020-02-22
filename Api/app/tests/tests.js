    // On lance le serveur node à tester
    var expect  = require("chai").expect;
    var request = require("request");

    describe('Test backend API ' , function () {

        describe('Test get message hello world ', function(){
            var url = "http://localhost:3000/api/";
            it("returns status 200", function(done) {
                request(url, function(error, response, body) {
                  expect(response.statusCode).to.equal(200);
                  done();
                });
              });

            it("should return Hello World", function(done) {
                request(url, function(error, response, body) {
                  expect(response.body).to.equal( '{"message":"Hello World"}')
                  done();
                });
            });
              
        });

        describe('Test get redis and postgres status ', function(){
            var url = "http://localhost:3000/api/status";
            it("returns status 200", function(done) {
                request(url, function(error, response, body) {
                  expect(response.statusCode).to.equal(200);
                  done();
                });
              });
        });
    });

// router.get('/status',async function(req, res, next) {
//     const postgresQuery = 'SELECT date_trunc(\'second\', current_timestamp - pg_postmaster_start_time()) as uptime;';
//     const result = await pool.query(postgresQuery);
//     const uptime = result.rows[0].uptime;
//     const uptimeString = () => {
//         let time = '';

//         time += uptime.hours ? `${uptime.hours}h ` : '';
//         time += uptime.minutes ? `${uptime.minutes}m ` : '';
//         time += uptime.seconds ? `${uptime.seconds}s` : '';

//         return time
//     };
// 	res.status(200).send( {
//         "status": "OK",
//         "postgresUptime": uptimeString(),
//         "redisConnectedClients": Number(redisClient.server_info.connected_clients)
//        }
//        )

// });

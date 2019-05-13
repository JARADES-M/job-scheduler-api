/*
  Scheduler para execução periódica de serviços
*/
var schedule = require('node-schedule');
var request = require('request');

	// regex = '*/03 * * * * *' -- a cada 3 segundos

	function criarHTTPJob(regex, uri, method='get', data={}) {
		return schedule.scheduleJob(regex, () => {

			if (method == 'get'){

				request.get(uri,data, (error, response, body) => {
					if (!error && response.statusCode == 200) {
						console.log('Sucesso!');
					} else {
						console.log(response.statusCode)
						console.log(erro);
					}
				});

			} else if (method == 'post') {

				request.post(uri,data, (error, response, body) => {
					if (!error && response.statusCode == 200) {
						console.log('Sucesso!');
					} else {
						console.log(response.statusCode)
						console.log(erro);
					}
				});

			} else {
				console.log('metodo http não autorizado!');
			}

		});
	}

module.exports.criarHTTPJob = criarHTTPJob;
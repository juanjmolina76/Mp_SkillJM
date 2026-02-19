const {MercadoPagoConfig, Preference} = require ('mercadopago');
const { BASE_URL, MERCADOPAGO_API_KEY } = require ('../config.js')
	
const client = new MercadoPagoConfig({
		accessToken: MERCADOPAGO_API_KEY
	});

const order = new Preference(client);

const crearOrden = async (req, res) => {
	try {
const result =	await order.create({
	body: {	
		items: [
			{
				title: 'Producto de prueba',
				quantity: 1,
				unit_price: 100,
				currency_id: 'ARS'
			}
				],
		back_urls: {
				success: `${BASE_URL}/payment/success`,
				failure: `${BASE_URL}/payment/failure`,
				pending: `${BASE_URL}/payment/pending`
			},
			//auto_return: 'approved',	

			notification_url: "https://subcerebellar-samira-mesially.ngrok-free.dev/webhook"
			//"https://localhost:${PORT}/payment/webhook"
			//tiene que ser https (con ssl)
			// ./ngrok.exe http 3000
			}
			});
			console.log(result);

			//res.send(result.body);////
			 console.log("INIT POINT 👉", result.init_point);

res.json({init_point: result.init_point});
			//return	res.redirect(result.init_point);
			//res.json(result);
		}
	
	catch (error) {
		console.log(error);
		res.status(500).send('Error al crear la orden');
		};
};

const SuccessPago = (req, res) => {
	res.send('Success');
};

const failurePago = (req, res) => {
	res.send('Failure');
};



const recibeWebhook =async (req, res) => {
const payment = req.query

try {
if (payment.type === 'payment') { 
    const data = await mercadopago.payment.findById(payment['data.id']);
    console.log(data);
	//---- guardar en base de datos el estado del pago (data)---

	/*const status = data.body.status;
	const external_reference = data.body.external_reference;	
	console.log(`El pago con referencia ${external_reference} tiene el estado: ${status}`);
*/
}
res.sendStatus(204);
} 
catch (error) {
console.error(error);
return res.sendStatus(500).json({error: error.message});
}
};


/*const recibeWebhook = (req, res) => {
console.log(req.query);
res.send('webhook');
}
*/

module.exports = {
	crearOrden,
	SuccessPago,
	failurePago,
	recibeWebhook

};

//12:52



//40:34

/*hasta aqui modifiqué en mainRoutes, agregue los metodos post,
en mainController.js, estoy usando notification_url con la dire q dio ngrok y 
agreugué res.send(result.body)

Por otra parte ya que cambie los meotodo  a post, tengo que hace un pedido post con 
postman o similar a localhost:3000/payment/create-order para crear la orden
pero eso usando el usuario comprador de mercadopago (loqueandome en otro navegador)
 
cuando le doy a PAGAR en la pagina de mercadopago, me muestra en consola cmder 
los webhooks que manda mercadopago.

*/
 /*


 30:34


 agregar mercadpago.payment.findById(req.query['data.id']) para ver el detalle del pago
 pero dentro de un condicional:

 const recibeWebhook =async (req, res) => {
  const payment = req.query

try {
  if (payment.type === 'payment') { 
    const data = await mercadpago.payment.findById(payment['data.id']);
    console.log(data);
	//---- guardar en base de datos el estado del pago (data)---
  }
	 res.sendStatus(204);
} catch (error) {
  console.error(error);
}
return res.sendStatus(500).json({error: error.message});
}
};

36:06
.\ngrok.exe http 3000
./ngrok.exe http 3000


42:57 

agregar boton en interface para pagar desde el front
44:13



status: aproved --> guardar en base de datos como pago aprobado

"volver al sitio" ---> enviar a success

 */

/*




*/
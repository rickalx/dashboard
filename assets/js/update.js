let runScripts = () => {

    let chart_bars = document.getElementById("chart-bars");
    console.log( chart_bars)

    let icons = document.getElementsByTagName("i");
    console.log( icons )

    let cards = document.getElementsByClassName("card");
    console.log( cards )

}

let modifyText = () => {

    let listOfP = document.getElementsByTagName("p");
    let elementP = listOfP[3]
    elementP.innerHTML = "Dinero actual";

    let listOfH4 = document.getElementsByTagName("h4");
    elementH4 = listOfH4[0]
    elementH4.innerHTML = "$301K";

}

let updateData = () => {

    let data = [{
        title: 'Usuarios actuales',
        value: '3,200'
      },
      {
        title: 'Nuevos clientes',
        value: '4,215'
      },
      {
        title: 'Ventas',
        value: '$121,520'
      }];  


  let [ users, clients, sales ] = data;


  let { title: title_users , value: value_users } = users;
  let { title: title_clients , value: value_clients } = clients;
  let { title: title_sales , value: value_sales } = sales;

   
  let message_users = `<p class="text-sm mb-0 text-capitalize">${title_users}</p><h4 class="mb-0">${value_users}</h4>`;
  let message_clients = `<p class="text-sm mb-0 text-capitalize">${title_clients}</p><h4 class="mb-0">${value_clients}</h4>`;
  let message_sales = `<p class="text-sm mb-0 text-capitalize">${title_sales}</p><h4 class="mb-0">${value_sales}</h4>`; 

  let listOfElements = document.getElementsByClassName('text-end pt-1')

  let [ , second, third, fourth ] = listOfElements;


  second.innerHTML = message_users;
  third.innerHTML = message_clients;
  fourth.innerHTML = message_sales;

}

let updateIndicators = () => {

    let cambios = [
        {
          valor_previo: 250,
          valor_actual: 301,
          mensaje_tiempo: 'que la semana anterior'
        },
        {
          valor_previo: 3510,
          valor_actual: 3200,
          mensaje_tiempo: 'que la semana anterior'
        },
        {
          valor_previo: 3920,
          valor_actual: 4215,
          mensaje_tiempo: 'que ayer'
        },
        {
          valor_previo: 110200,
          valor_actual: 121520,
          mensaje_tiempo: 'que ayer'
        }
      ]

      let [dineroActual, usuariosActuales, nuevosClientes, ventas] = cambios

      let {valor_previo : dineroActual_valor_previo, valor_actual: dineroActual_valor_actual, mensaje_tiempo: dineroActual_mensaje_tiempo } = dineroActual;
      let {valor_previo : usuariosActuales_valor_previo, valor_actual: usuariosActuales_valor_actual, mensaje_tiempo: usuariosActuales_mensaje_tiempo } = usuariosActuales;
      let {valor_previo : nuevosClientes_valor_previo, valor_actual: nuevosClientes_valor_actual, mensaje_tiempo: nuevosClientes_mensaje_tiempo } = nuevosClientes;
      let {valor_previo : ventas_valor_previo, valor_actual: ventas_valor_actual, mensaje_tiempo: ventas_mensaje_tiempo } = ventas;

    let porcentaje_de_cambio = (valor_actual,valor_previo) => Math.round((valor_actual - valor_previo)*100/valor_previo)
    let clase_cambio = (porcentaje) => {
        let clase = porcentaje > 0 ? 'text-sucess' : 'text-danger';
        return clase;
    }

    

    dineroActual_porcentaje_de_cambio = (dineroActual_valor_actual - dineroActual_valor_previo)*100/dineroActual_valor_previo     
    let message_dineroActual = `<p class="mb-0"><span class="text-sm ${clase_cambio(porcentaje_de_cambio(dineroActual_valor_actual,dineroActual_valor_previo))} font-weight-bolder"> ${porcentaje_de_cambio(dineroActual_valor_actual,dineroActual_valor_previo)} </span> ${dineroActual_mensaje_tiempo} </p>`
    let listOfFooters = document.getElementsByClassName('card-footer p-3');
    listOfFooters[0].innerHTML = message_dineroActual


    usuariosActuales_porcentaje_de_cambio = (usuariosActuales_valor_actual - usuariosActuales_valor_previo)*100/usuariosActuales_valor_previo 
    let message_usuariosActuales = `<p class="mb-0"><span class="text-sm ${clase_cambio(porcentaje_de_cambio(usuariosActuales_valor_actual,usuariosActuales_valor_previo))} font-weight-bolder"> ${porcentaje_de_cambio(usuariosActuales_valor_actual,usuariosActuales_valor_previo)} </span> ${usuariosActuales_mensaje_tiempo} </p>`
    listOfFooters[1].innerHTML = message_usuariosActuales
    

    nuevosClientes_porcentaje_de_cambio = (nuevosClientes_valor_actual - nuevosClientes_valor_previo)*100/nuevosClientes_valor_previo 
    let message_nuevosClientes = `<p class="mb-0"><span class="text-sm ${clase_cambio(porcentaje_de_cambio(nuevosClientes_valor_actual,nuevosClientes_valor_previo))} font-weight-bolder"> ${porcentaje_de_cambio(nuevosClientes_valor_actual,nuevosClientes_valor_previo)} </span> ${nuevosClientes_mensaje_tiempo} </p>`
    listOfFooters[2].innerHTML = message_nuevosClientes

    ventas_porcentaje_de_cambio = (ventas_valor_actual - ventas_valor_previo)*100/ventas_valor_previo 
    let message_ventas = `<p class="mb-0"><span class="text-sm ${clase_cambio(porcentaje_de_cambio(ventas_valor_actual,ventas_valor_previo))} font-weight-bolder"> ${porcentaje_de_cambio(ventas_valor_actual,ventas_valor_previo)} </span> ${ventas_mensaje_tiempo} </p>`
    listOfFooters[3].innerHTML = message_ventas

    
}


runScripts();
modifyText();
updateData();
updateIndicators();
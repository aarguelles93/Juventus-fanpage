$(document).ready(function() {	
	
	var tableused = false;

	
	$("#titularesbutton").click(function(){

		$.getJSON("txt/plantilla.txt", function(data) {
			var output ="<thead><tr><th>Nombre</th><th>Apellido</th><th>Edad</th><th>Dorsal</th></tr></thead><tbody>";
			for (var i in data.plantilla[0].Titulares){
				output = output + "<tr><td>" + data.plantilla[0].Titulares[i].Nombre + "</td><td>" + data.plantilla[0].Titulares[i].Apellido + "</td><td>" + data.plantilla[0].Titulares[i].Edad + "</td><td>" + data.plantilla[0].Titulares[i].Dorsal +"</td></tr>";
			}
			output = output + "</tbody>";
			$("#plantillaTable").html(output);			
		});	
		
	});

	$("#suplentesbutton").click(function(){
		
		$.getJSON("txt/plantilla.txt", function(data) {
			var output ="<thead><tr><th>Nombre</th><th>Apellido</th><th>Edad</th><th>Dorsal</th></tr></thead><tbody>";
			for (var i in data.plantilla[0].Suplentes){
				output = output + "<tr><td>" + data.plantilla[0].Suplentes[i].Nombre + "</td><td>" + data.plantilla[0].Suplentes[i].Apellido + "</td><td>" + data.plantilla[0].Suplentes[i].Edad + "</td><td>" + data.plantilla[0].Suplentes[i].Dorsal +"</td></tr>";
			}
			output = output + "</tbody>";
			$("#plantillaTable").html(output);			
		});			
	});

	$("#reservabutton").click(function(){		
		$.getJSON("txt/plantilla.txt", function(data) {
			var output ="<thead><tr><th>Nombre</th><th>Apellido</th><th>Edad</th><th>Dorsal</th></tr></thead><tbody>";
			for (var i in data.plantilla[0].Reserva){
				output = output + "<tr><td>" + data.plantilla[0].Reserva[i].Nombre + "</td><td>" + data.plantilla[0].Reserva[i].Apellido + "</td><td>" + data.plantilla[0].Reserva[i].Edad + "</td><td>" + data.plantilla[0].Reserva[i].Dorsal +"</td></tr>";
			}
			output = output + "</tbody>";
			$("#plantillaTable").html(output);			
		});			
	});

	$("#CPbutton").click(function(){		
		$.getJSON("txt/plantilla.txt", function(data) {
			var output ="<thead><tr><th>Nombre</th><th>Apellido</th><th>Edad</th></tr></thead><tbody>";
			for (var i in data.plantilla[0].Reserva){
				output = output + "<tr><td>" + data.plantilla[0].Reserva[i].Nombre + "</td><td>" + data.plantilla[0].Reserva[i].Apellido + "</td><td>" + data.plantilla[0].Reserva[i].Edad + "</td></tr>";
			}
			output = output + "</tbody>";
			$("#plantillaTable").html(output);				
		});			
	});

	if(tableused === false){
		$("#plantillaTable").DataTable( {
				"language": {
					"lengthMenu": "Mostrar _MENU_ registros por página",		            
		            "info": "Página _PAGE_ de _PAGES_",
		            "infoEmpty": "No hay información",
		            "search": "Búsqueda:",
		            "zeroRecords": "No se encontraron datos"
        		}
			});
		tableused=true;
	}
	
	
		
});
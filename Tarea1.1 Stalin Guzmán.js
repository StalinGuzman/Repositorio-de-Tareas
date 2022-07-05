//2. Traduce a código JavaScript las variables del ejemplo anterior y adjunta una captura
    let nombre = 'Stalin';
    let apellido = 'Guzmán';
    let usuario = 'STARK';
    let edad = 22;
    let email = 'stalin.guzman@iti.edu.ec';
    let adulto = true;
    let dineroAhorrado = 1000;
    let deudas = 300;
//3. Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:
    let estadoFinanciero = `Hola ${nombre} ${apellido}.
    Tu estado financiero es $${dineroAhorrado-deudas}.`;
    console.log(estadoFinanciero);
//4. Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:
function ejercicio4(name, lastname, nickname) {
	completeName = `${name} ${lastname}`;
	console.log(`Mi nombre es ${completeName}, pero prefiero que me digas ${nickname}.`);
}

ejercicio4('Stalin', 'Guzmán', 'STARK');
//6.	Replica el comportamiento del siguiente código que usa la sentencia switch Utilizando if, else y else if
if (tipoDeMatricula == 'Basic')
	console.log("Solo puedes tomar casi los cursos gratis");
else if (tipoDeMatricula == 'Basic')
	console.log("Solo puedes tomar casi todos cursos de ITI durante un mes");
else if (tipoDeMatricula == 'Expert')
	console.log("Solo puedes tomar casi todos los cursos de ITI durante un año");
else if (tipoDeMatricula == "ExpertPlus")
	console.log("Tú y alguien más pueden tomar TODOS los cursos de ITI durante un año");

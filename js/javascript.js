// cálculo de precio por envío de productos

function ubicacionManual() {
      var distancia = prompt("¿A cuántos km de San Nicolás te encontrás?");

      if (distancia <= 40) {
        alert('El envío está bonificado');
      } else {
        alert('El costo de envío es de $800');
      }
    }

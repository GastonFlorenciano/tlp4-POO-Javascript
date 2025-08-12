### ¿Qué diferencias, ventajas y desventajas encontrás entre usar funciones constructoras con prototype y usar class?

Una diferencia muy notable es la sintaxis, funciones constructoras con prototype tienen una sintaxis menos clara y poco intuitiva en comparación con las clases, también cabe mencionar que prototype es bastante propenso a generar errores a futuro al modificar ciertos métodos nativos.

### ¿Cuáles son las ventajas de usar getters y setters?

Estos dos métodos nos permiten acceder a propiedades privadas y agregar validaciones o lógica adicional, también facilitan el encapsulamiento.

### ¿Qué problemas pueden surgir al modificar prototipos nativos como String?

Pueden surgir errores difíciles de rastrear y romper funcionalidades nativas de dicho prototipo.

### Teniendo en cuenta un objeto personPrototype que contiene un método greet, ¿qué diferencias encontrás entre asignar ese método directamente al prototype de una función constructora o usar Object.assign?

Al asignar directamente al prototype solamente asignamos un método específico, pero con `Object.assign` estaríamos copiando todos los métodos dentro del objeto y pegándolos en el prototipo de la función constructora, esto sobreescribe los métodos que tengan el mismo nombre.
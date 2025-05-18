export function generarValorAleatorioPermitido(): number {
    return Math.floor(Math.random() * 1_600_000) + 1;

}

export function generarValorNegativo(): number {
    return -Math.floor(Math.random() * 1_000_001); 
}

export function generarValorAleatorioNoPermitido(): number {
    return Math.floor(Math.random() * 1_600_001); 
}

export function generarPalabraLarga(longitudMinima: number = 31, longitudMaxima: number = 60): string {
    const caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const longitud = Math.floor(Math.random() * (longitudMaxima - longitudMinima + 1)) + longitudMinima;
    let resultado = '';
  
    for (let i = 0; i < longitud; i++) {
      resultado += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
  
    return resultado;
    console.log(resultado)

  }

  export function generarPalabraValida(longitudMinima: number = 1, longitudMaxima: number = 30): string {
    const caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const longitud = Math.floor(Math.random() * (longitudMaxima - longitudMinima + 1)) + longitudMinima;
    let resultado = '';
  
    for (let i = 0; i < longitud; i++) {
      resultado += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
  
    return resultado;
  }

  export function generarTextoConEspeciales(longitud: number = 30): string {
    const caracteres =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>/?`~';
    let resultado = '';
  
    for (let i = 0; i < longitud; i++) {
      const indice = Math.floor(Math.random() * caracteres.length);
      resultado += caracteres[indice];
    }
  
    return resultado;
  }
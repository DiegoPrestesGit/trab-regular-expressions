// a - com número par de 1s e 0s;
const a = () => {
  const expression = '1100010'
  const arr = expression.split('')
  if (expression.length === 0) return 'não tem nada pra validar aqui!'
  if (arr.some(num => num !== '1' && num !== '0')) return 'cadeia só deve ter 0s e 1s'

  const one = arr.filter(num => num === '1')
  const zero = arr.filter(num => num === '0')

  return one.length & 1 || zero.length & 1 ? 'cadeia invalida' : 'cadeia valida'
}

// b - com número ímpar de ocorrências do padrão 00;
const b = () => {
  const expression = '0000'
  const arr = expression.split('')
  if (expression.length === 0) return 'não tem nada pra validar aqui!'
  if (arr.some(num => num !== '1' && num !== '0')) return 'cadeia só deve ter 0s e 1s'

  let count = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0 && arr[i + 1] == 0) {
      count++
      i += 2
    }
  }

  return count & 1 ? 'cadeia valida' : 'cadeia invalida'
}

// c - com pelo menos duas ocorrências do padrão 101;
const c = () => {
  const expression = '00010101'
  const arr = expression.split('')
  if (expression.length === 0) return 'não tem nada pra validar aqui!'
  if (arr.some(num => num !== '1' && num !== '0')) return 'cadeia só deve ter 0s e 1s'

  let count = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 1 && arr[i + 1] == 0 && arr[i + 2] == 1) {
      count++
      i += 3
    }
  }

  return count >= 2 ? 'cadeia valida' : 'cadeia invalida'
}

// g - todas as cadeias que começam com 01 e terminam com 10;
const g = () => {
  const expression = '0110101010001110'
  const arr = expression.split('')
  if (expression.length === 0) return 'não tem nada pra validar aqui!'
  if (arr.some(num => num !== '1' && num !== '0')) return 'cadeia só deve ter 0s e 1s'

  return arr[0] == 0 &&
    arr[1] == 1 &&
    arr[arr.length - 2] == 1 &&
    arr[arr.length - 1] == 0 ? 'cadeia valida' : 'cadeia invalida'
}

// h - todas as cadeias que contenham exatamente quatro 1s;
const h = () => {
  const expression = '011010'
  const arr = expression.split('')
  if (expression.length === 0) return 'não tem nada pra validar aqui!'
  if (arr.some(num => num !== '1' && num !== '0')) return 'cadeia só deve ter 0s e 1s'
  let count = 0
  arr.forEach(num => num == 1 ? count++ : false)
  return count === 4 ? 'cadeia valida' : 'cadeia invalida'
}

console.log('exercício a:', a())
console.log('exercício b:', b())
console.log('exercício c:', c())
console.log('exercício g:', g())
console.log('exercício h:', h())

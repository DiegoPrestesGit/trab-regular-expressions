// a - com número par de 1s e 0s;
const a = () => {
  const expression = '1100'
  const arr = expression.split('')
  if (expression.length === 0) return 'não tem nada pra validar aqui!'
  if (arr.some(letter => letter !== '1' && letter !== '0')) return 'cadeia só deve ter 0s e 1s'

  const one = arr.filter(letter => letter === '1')
  const zero = arr.filter(letter => letter === '0')

  return one.length & 1 || zero.length & 1 ? 'cadeia invalida' : 'cadeia valida'
}

// b - com número ímpar de ocorrências do padrão 00;
const b = () => {
  const expression = '0000'
  const arr = expression.split('')
  if (expression.length === 0) return 'não tem nada pra validar aqui!'
  if (arr.some(letter => letter !== '1' && letter !== '0')) return 'cadeia só deve ter 0s e 1s'

  let count = 0
  for (let i = 0; i < arr.length;) {
    if (arr[i] == 0 && arr[i + 1] == 0) {
      count++
      arr.splice(i, 2)
      i = 0
    } else {
      i++
    }
  }

  return count & 1 ? 'cadeia valida' : 'cadeia invalida'
}

// c - com pelo menos duas ocorrências do padrão 101;
const c = () => {
  const expression = '1010100101'
  const arr = expression.split('')
  if (expression.length === 0) return 'não tem nada pra validar aqui!'
  if (arr.some(letter => letter !== '1' && letter !== '0')) return 'cadeia só deve ter 0s e 1s'

  let count = 0
  for (let i = 0; i < arr.length;) {
    console.log(arr)
    if (arr[i] == 1 && arr[i + 1] == 0 && arr[i + 2] == 1) { // observacao de javascript sobre array aqui
      count++
      arr.splice(i, 3)
      i = 0
    }else{
      i++
    }
  }

  return count >= 2 ? 'cadeia valida' : 'cadeia invalida'
}

console.log(c())

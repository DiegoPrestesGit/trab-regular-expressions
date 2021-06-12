const a = () => {
  const expression = ''
  const arr = expression.split('')

  if(expression.length === 0) return 'não tem nada pra validar aqui!'

  if (arr.some(letter => letter !== '1' && letter !== '0')) return 'cadeia só deve ter 0s e 1s'

  const one = arr.filter(letter => letter === '1')
  const zero = arr.filter(letter => letter === '0')
  
  return one.length & 1 || zero.length & 1 ? 'cadeia invalida' : 'cadeia valida'
}

console.log(a())
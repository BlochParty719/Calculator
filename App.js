$(() => {
  let num1 = ''
  let num2 = ''
  let operator = ''
  let total = ''

  $('button').on('click', (event, num1, num2, operator) => {
    let btn = event.target.innerHTML
    if (btn >= '0' && btn <= '9') {
      getNum(btn)
      // console.log(num1, num2)
    } else if (btn === '+' || btn === '-' || btn === 'X' || btn === '/') {
      getOperation(btn)
    }
  })

  const getNum = (num) => {
    if (num1 === '') {
      num1 = num
      console.log(num1)
    } else {
      num2 = num
      console.log(num2)
    }
    display(num)
  }

  const getOperation = (op) => {
    if (operator === '') {
      operator = op
    } else {
      calculateTotal()
      operator = op
    }
  }

  const display = (btn) => {
    $('.display').text(btn)
  }

  const calculateTotal = () => {
    let parsedNum1 = parseInt(num1)
    let parsedNum2 = parseInt(num2)
    if (operator === '+') {
      total = parsedNum1 + parsedNum2
    } else if (operator === '-') {
      total = parsedNum1 - parsedNum2
    } else if (operator === '/') {
      total = parsedNum1 / parsedNum2
    } else if (operator === 'X') {
      total = parsedNum1 * parsedNum2
    }
    return total;
    console.log(total);
    display(total)

  }
  // calculateTotal(num1, num2, operator)

  $('.equal').on('click', () => {
    calculateTotal(num1, num2, operator)

    console.log(num1, num2)
    console.log(total)
    $('.display').text(total)
  })
})

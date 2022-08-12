/* eslint no-eval: "error" */
import { useState } from 'react'

import { Button } from '~/components/button/Button'

export default function Home() {
  const [calc, setCalc] = useState('')
  const [result, setResult] = useState('0')

  const ops = ['/', '*', '+', '-', '.']

  const updateCalculation = (value) => {
    if (
      (ops.includes(value) && calc === '') ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return
    }
    setCalc(calc + value)

    if (!ops.includes(value)) {
      // eslint-disable-next-line no-eval
      setResult(eval(calc + value).toString())
    }
  }

  const clear = () => {
    setCalc('')
  }

  const backSpace = () => {
    setCalc(calc?.slice(0, -1))
  }
  const calculate = () => {
    try {
      // eslint-disable-next-line no-eval
      setCalc(Number(eval(calc).toString()))
    } catch (error) {
      setCalc('INVALID format')
    }
  }

  return (
    <div className="container">
      <div className="calculator">
        <div className="display">{result ? <span>({result})</span> : ''}</div>
        <input type="text" className="calc-numbers" value={calc || 0} />
        <div className="calculator__buttons">
          <Button
            onClick={clear}
            className="calculator__buttons_btn clear span-2"
          >
            C
          </Button>
          <Button
            onClick={backSpace}
            className="calculator__buttons_btn orange"
          >
            &larr;
          </Button>
          <Button
            onClick={() => updateCalculation('/')}
            name="/"
            className="calculator__buttons_btn orange"
          >
            /
          </Button>
          <Button
            onClick={() => updateCalculation('7')}
            name="7"
            className="calculator__buttons_btn"
          >
            7
          </Button>
          <Button
            onClick={() => updateCalculation('8')}
            name="8"
            className="calculator__buttons_btn"
          >
            8
          </Button>
          <Button
            onClick={() => updateCalculation('9')}
            name="9"
            className="calculator__buttons_btn"
          >
            9
          </Button>
          <Button
            onClick={() => updateCalculation('*')}
            name="*"
            className="calculator__buttons_btn orange"
          >
            x
          </Button>
          <Button
            onClick={() => updateCalculation('4')}
            name="4"
            className="calculator__buttons_btn"
          >
            4
          </Button>
          <Button
            onClick={() => updateCalculation('5')}
            name="5"
            className="calculator__buttons_btn"
          >
            5
          </Button>
          <Button
            onClick={() => updateCalculation('6')}
            name="6"
            className="calculator__buttons_btn"
          >
            6
          </Button>
          <Button
            onClick={() => updateCalculation('-')}
            name="-"
            className="calculator__buttons_btn orange"
          >
            -
          </Button>
          <Button
            onClick={() => updateCalculation('1')}
            name="1"
            className="calculator__buttons_btn"
          >
            1
          </Button>
          <Button
            onClick={() => updateCalculation('2')}
            name="2"
            className="calculator__buttons_btn"
          >
            2
          </Button>
          <Button
            onClick={() => updateCalculation('3')}
            name="3"
            className="calculator__buttons_btn"
          >
            3
          </Button>
          <Button
            onClick={() => updateCalculation('+')}
            name="+"
            className="calculator__buttons_btn orange"
          >
            +
          </Button>
          <Button
            onClick={() => updateCalculation('0')}
            name="0"
            className="calculator__buttons_btn span-3"
          >
            0
          </Button>
          <Button
            onClick={calculate}
            className="calculator__buttons_btn orange equal"
          >
            =
          </Button>
        </div>
      </div>
    </div>
  )
}

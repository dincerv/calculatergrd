/* eslint no-eval: "error" */
import { useState } from 'react'

import { Button } from '~/components/button/Button'

export default function Home() {
  const [result, setResult] = useState('')

  const handleClick = (e) => {
    setResult(result?.concat(e.target?.name))
  }

  const clear = () => {
    setResult('')
  }

  const backSpace = () => {
    setResult(result?.slice(0, -1))
  }
  const calculate = () => {
    try {
      // eslint-disable-next-line no-eval
      setResult(Number(eval(result).toString()).toFixed(2))
    } catch (error) {
      setResult('INVALID format')
    }
  }

  return (
    <div className="container">
      <div className="calculator">
        <input type="text" className="calc-numbers" value={result} />
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
            DEL
          </Button>
          <Button
            onClick={handleClick}
            name="/"
            className="calculator__buttons_btn orange"
          >
            /
          </Button>
          <Button
            onClick={handleClick}
            name="7"
            className="calculator__buttons_btn"
          >
            7
          </Button>
          <Button
            onClick={handleClick}
            name="8"
            className="calculator__buttons_btn"
          >
            8
          </Button>
          <Button
            onClick={handleClick}
            name="9"
            className="calculator__buttons_btn"
          >
            9
          </Button>
          <Button
            onClick={handleClick}
            name="*"
            className="calculator__buttons_btn orange"
          >
            x
          </Button>
          <Button
            onClick={handleClick}
            name="4"
            className="calculator__buttons_btn"
          >
            4
          </Button>
          <Button
            onClick={handleClick}
            name="5"
            className="calculator__buttons_btn"
          >
            5
          </Button>
          <Button
            onClick={handleClick}
            name="6"
            className="calculator__buttons_btn"
          >
            6
          </Button>
          <Button
            onClick={handleClick}
            name="-"
            className="calculator__buttons_btn orange"
          >
            -
          </Button>
          <Button
            onClick={handleClick}
            name="1"
            className="calculator__buttons_btn"
          >
            1
          </Button>
          <Button
            onClick={handleClick}
            name="2"
            className="calculator__buttons_btn"
          >
            2
          </Button>
          <Button
            onClick={handleClick}
            name="3"
            className="calculator__buttons_btn"
          >
            3
          </Button>
          <Button
            onClick={handleClick}
            name="+"
            className="calculator__buttons_btn orange"
          >
            +
          </Button>
          <Button
            onClick={handleClick}
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

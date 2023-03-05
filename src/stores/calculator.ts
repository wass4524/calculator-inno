import { defineStore } from 'pinia'

interface CalculatorState {
  savedOperation: string;
  expression: string;
  display: string;
}

export const useCalculatorStore = defineStore('useCalculatorStore', {
  state: (): CalculatorState => ({
    savedOperation: '',
    expression: '',
    display: ''
  }),
  actions: {
    toCalculate(): void {
      try {
        const result = this.altEval(this.expression).toString();
        this.display = this.replaceSymbols(result)
        this.savedOperation = `${this.replaceSymbols(this.expression)} = ${result}`
        this.expression = result
      } catch (error) {
        this.display = 'Error!  Please try again.'
        throw new Error(`Failed to evaluate expression: ${this.expression}`)
      }
    },
    altEval(exp: number | string): number {
      if (typeof exp !== 'string' || !/^[0-9+\-*/().\s]+$/.test(exp)) {
        throw new Error('Invalid expression')
      }
      return Function(`'use strict'; return (${exp})`)()
    },
    toAdd(val: number | string):void {
      if (!this.isValidInput(val)) throw new Error('Invalid input')
      this.expression += val
      this.display += this.replaceSymbols(val)
    },
    replaceSymbols(val:string | number): string {
      return val.toString().replace('*', 'x').replace('/', '÷')
    },
    toDelete():void {
      this.expression = this.expression.slice(0, -1)
      this.display = this.display.slice(0, -1)
    },
    toClear():void {
      this.expression = ''
      this.display = ''
    },
    isValidInput(val: number | string): boolean {
      const operators = ['+', '-', '*', '/', '.']
      return typeof val === 'number' || operators.includes(val)
    }
  }
})

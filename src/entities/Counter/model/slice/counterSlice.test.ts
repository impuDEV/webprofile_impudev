import { counterReducer, CounterSchema } from '../..'
import { counterActions } from './counterSlice'

describe('counterSlice.test', () => {
	test('counter decrement action', () => {
		const state: CounterSchema = { value: 10 }
		expect(counterReducer(state, counterActions.decrement())).toEqual({
			value: 9,
		})
	})
	test('counter increment action', () => {
		const state: CounterSchema = { value: 10 }
		expect(counterReducer(state, counterActions.increment())).toEqual({
			value: 11,
		})
	})
	test('should work with undefined state (by default)', () => {
		expect(counterReducer(undefined, counterActions.increment())).toEqual({
			value: 1,
		})
	})
})

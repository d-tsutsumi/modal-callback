import { ComfirmDialogState } from './type'

export class ThirdFlow implements ComfirmDialogState {
  title: string = 'third3'
  message: string = 'third3 です。'

  progression(emit: (event: 'close', value: boolean) => void) {
    console.log('third')
    emit('close', false)
  }

  cancel(emit: (event: 'close', value: boolean) => void) {
    console.log('third close')
    emit('close', false)
  }
}

import { ComfirmDialogState } from './type'

export class FirstFlow implements ComfirmDialogState {
  title: string = 'flow1'
  message: string = 'flow 1です。'

  progression(emit: (event: 'close', value: boolean) => void) {
    console.log('first')
    emit('close', false)
  }

  cancel(emit: (event: 'close', value: boolean) => void) {
    console.log('first close')
    emit('close', false)
  }
}

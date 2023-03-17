import { ComfirmDialogState } from './type'

export class SecondFlow implements ComfirmDialogState {
  title: string = 'Forw2'
  message: string = 'flow2です。'

  progression(emit: (event: 'close', value: boolean) => void) {
    console.log('second')
    emit('close', false)
  }

  cancel(emit: (event: 'close', value: boolean) => void) {
    console.log('second close')
    emit('close', false)
  }
}

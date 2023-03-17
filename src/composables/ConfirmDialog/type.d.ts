export interface ComfirmDialogState {
  progression: (emit: (event: 'close', value: boolean) => void) => void
  cancel: (emit: (event: 'close', value: boolean) => void) => void
  message: string
  title: string
}

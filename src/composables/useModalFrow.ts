type State = 'init' | 'first' | 'second' | 'cancel' | 'complete'

type ParamsType = {
  action: 'click' | 'onMouseDowan' | undefined
  value: string
  count: number
}

export class ModalFlow {
  static state: () => globalThis.Ref<State>
  private staff: string
  private params: ParamsType
  next: (arg: any) => void

  constructor() {
    ModalFlow.state = () => useState<State>('modalFlowState', () => 'init')
    this.params = { action: undefined, value: '', count: 0 }
    this.next = this.firstFunc
    this.staff = ''
  }
  firstFunc(value: ParamsType) {
    this.params = value
    this.next = this.secondFunc
  }

  secondFunc(next: boolean) {
    if (!next) this.cancel()
    else this.next = this.complete
  }

  complete() {
    console.log(this.params)
    console.log(this.staff)
  }

  cancel() {
    ModalFlow.state().value = 'init'
  }

  addStaff(staff: string) {
    this.staff = staff
  }
}

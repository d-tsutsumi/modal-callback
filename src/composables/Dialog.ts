import { match } from 'ts-pattern'

export interface State {
  progression: () => void
  cancel: () => void
  message: string
  title: string
}

export class DialogState implements State {
  private mode: DialogMode
  message: string
  title: string

  constructor(mode: DialogMode) {
    this.mode = mode
    this.message = match(mode)
      .with('flow1', () => 'first func message')
      .with('flow2', () => 'seccond Message')
      .with('flow3', () => 'therd message')
      .exhaustive()
    this.title = match(mode)
      .with('flow1', () => 'title1')
      .with('flow2', () => 'title2')
      .with('flow3', () => 'title3')
      .exhaustive()
  }

  progression(): DataFlowMode {
    switch (this.mode) {
      case 'flow1':
        this.flow1Func()
        return 'flow1'
      case 'flow2':
        this.flow2Func()
        return 'flow2'
      case 'flow3':
        this.flow3func
        return 'flow3'
    }
  }
  cancel() {
    console.log('cancel')
  }

  flow1Func() {
    console.log('1')
  }

  flow2Func() {
    console.log('2')
  }

  flow3func() {
    console.log('3')
  }

  get modalTitle() {
    return this.title
  }

  get modalMessage() {
    return this.message
  }
}

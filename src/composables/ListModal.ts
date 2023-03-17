
export class ListModalState {
  mode: DialogMode
  name: string = ''
  selectUser: User | undefined
  constructor(mode: DialogMode) {
    this.mode = mode
    this.selectUser = undefined
  }

  staffSelect(staff: string) {
    this.name = staff
  }

  progression() {
    switch (this.mode) {
      case 'flow1':
        this.flow1Func()
      case 'flow2':
        this.flow2Func()
      case 'flow3':
        this.flow3func()
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

  getSelectUser(value: User) {
    this.selectUser = value
  }
}

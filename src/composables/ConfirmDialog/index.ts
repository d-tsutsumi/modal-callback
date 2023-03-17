import { match } from 'ts-pattern'
import { FirstFlow } from './FirstFlrow'
import { SecondFlow } from './SecondFlow'
import { ThirdFlow } from './ThirdFlow'
import { ComfirmDialogState } from './type'

let firstFlowObj: FirstFlow | undefined
let secondFlowObj: SecondFlow | undefined
let thirdFlowObj: ThirdFlow | undefined

type ComfirmDialogcmd = 'first' | 'second' | 'third'
const dialogObjectCash = new Map<ComfirmDialogcmd, ComfirmDialogState>()

export const conFirmDialogObjFactory = (cmd: ComfirmDialogcmd): ComfirmDialogState =>
  match(cmd)
    .with('first', () => {
      if (!firstFlowObj) {
        const firstFlowObj = new FirstFlow()
        dialogObjectCash.set('first', firstFlowObj)
      }
      return dialogObjectCash.get('first')
    })
    .with('second', () => {
      if (!secondFlowObj) {
        const secondFlowObj = new SecondFlow()
        dialogObjectCash.set('second', secondFlowObj)
      }
      return dialogObjectCash.get('second')
    })
    .with('third', () => {
      if (!thirdFlowObj) {
        const thirdFlowObj = new ThirdFlow()
        dialogObjectCash.set('third', thirdFlowObj)
      }
      return dialogObjectCash.get('third')
    })
    .exhaustive() as ComfirmDialogState

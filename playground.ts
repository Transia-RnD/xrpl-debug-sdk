 import { DebugStreamManager, ISelect } from './dist/npm/src'




export async function account() {
    // process.env.XRPL_DEBUG_HOST = 'ws://79.110.60.105:8081'
    process.env.XRPL_DEBUG_HOST = 'ws://localhost:8080'
    const debugStreamManager = new DebugStreamManager({ type: 'account' })
    const select: ISelect = {
        label: 'sfAccount',
        value: 'rG1QQv2nh2gr7RCZ1P8YYcBUKCCN633jCn',
    }
    console.log('ISelect:', select)
    // @ts-ignore -- ignore
    debugStreamManager.connect(select)
}

export async function all_contracts() {
    // process.env.XRPL_DEBUG_HOST = 'ws://79.110.60.105:8081'
    process.env.XRPL_DEBUG_HOST = 'ws://localhost:8080'
    const debugStreamManager = new DebugStreamManager({ type: 'contract' })
    const select: ISelect = {
        label: 'sfContractID',
        value: 'all',
    }
    console.log('ISelect:', select)
    // @ts-ignore -- ignore
    debugStreamManager.connect(select)
}

export async function contract() {
    // process.env.XRPL_DEBUG_HOST = 'ws://79.110.60.105:8081'
    process.env.XRPL_DEBUG_HOST = 'ws://localhost:8080'
    const debugStreamManager = new DebugStreamManager({ type: 'contract' })
    const select: ISelect = {
        label: 'sfContractID',
        value: 'D6EB4D83231F5BE5162345C310964699A8D70DF45AED2F25203D7D540AE6CE13',
    }
    console.log('ISelect:', select)
    // @ts-ignore -- ignore
    debugStreamManager.connect(select)
}

account()
// all_contracts()
// contract()
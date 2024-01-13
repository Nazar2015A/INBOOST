import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Option } from '../types/option-types'
import { Node } from 'reactflow'

interface InitialState {
  nodesArr: Node[]
}

const initialState: InitialState = {
  nodesArr: [],
}

export const nodeSlice = createSlice({
  name: 'nodes',
  initialState,
  reducers: {
    updateNodePositions: (state, action: PayloadAction<Node[]>) => {
      state.nodesArr = action.payload
      localStorage.setItem('nodes', JSON.stringify(state.nodesArr))
    },
  },
})

export const { updateNodePositions } = nodeSlice.actions

export default nodeSlice.reducer

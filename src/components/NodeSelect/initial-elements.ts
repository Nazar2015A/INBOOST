import { MarkerType } from 'reactflow'
import { Option } from '../../types/option-types'
import { Node, Edge } from 'reactflow'

export const options: Option[] = [
  {
    value: 'Варіант 1',
    label: 'Варіант 1',
    checkedValue: false,
    id: '1',
  },
  {
    value: 'Варіант 2',
    label: 'Варіант 2',
    checkedValue: false,
    id: '2',
  },
  {
    value: 'Варіант 3',
    label: 'Варіант 3',
    checkedValue: false,
    id: '3',
  },
  {
    value: 'Варіант 4',
    label: 'Варіант 4',
    checkedValue: false,
    id: '4',
  },
  {
    value: 'Варіант 5',
    label: 'Варіант 5',
    checkedValue: false,
    id: '5',
  },
  {
    value: 'Варіант 6',
    label: 'Варіант 6',
    checkedValue: false,
    id: '6',
  },
]

export const nodes:Node[] = [
  {
    id: '1',
    type: 'custom',
    position: { x: 100, y: 200 },
    data: {
      selects: {
        'handle-1': 'smoothstep',
      },
      label: 'Вибрати значення',
      options: options,
    },
  },
]

export const edges:Edge[] = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'e2-3',
    source: '2',
    target: '3',
    type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'e3-4',
    source: '3',
    target: '4',
    type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'e4-5',
    source: '4',
    target: '5',
    type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'e5-6',
    source: '5',
    target: '6',
    type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'e6-7',
    source: '6',
    target: '7',
    type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'e7-8',
    source: '7',
    target: '8',
    type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'e8-9',
    source: '8',
    target: '9',
    type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'e9-10',
    source: '9',
    target: '10',
    type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'e10-11',
    source: '10',
    target: '11',
    type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'e11-12',
    source: '11',
    target: '12',
    type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'e12-13',
    source: '12',
    target: '13',
    type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'e13-14',
    source: '13',
    target: '14',
    type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
]

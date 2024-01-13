import React, { useCallback, useEffect } from 'react'
import ReactFlow, {
  addEdge,
  useNodesState,
  useEdgesState,
  Node,
  Edge,
  Connection
} from 'reactflow'

import {
  nodes as initialNodes,
  edges as initialEdges,
} from './components/NodeSelect/initial-elements'
import CustomNode from './components/NodeSelect/CustomNode'

import 'reactflow/dist/style.css'
import './components/NodeSelect/overview.css'
import { useDispatch } from 'react-redux'
import { updateNodePositions } from './redux/actions'

const nodeTypes = {
  custom: CustomNode,
}
const storageInitialNode:Node[] = JSON.parse(localStorage.getItem('nodes') as string)

const OverviewFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState<Node>(storageInitialNode || initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>(initialEdges)
  const dispath = useDispatch()
  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
    [],
  )

  useEffect(() => {
    dispath(updateNodePositions(nodes))
  }, [nodes])

  return (
    <div className="test">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        attributionPosition="top-right"
        nodeTypes={nodeTypes}
      />

    </div>
  )
}

export default OverviewFlow

import React, { memo } from 'react'
import { Handle, Position, Node } from 'reactflow'
import { CommonData } from '../../types/option-types'
import Select from './Select'

interface CustomNodeProps extends CommonData {
  id: string
}


function CustomNode({ id, data }: CustomNodeProps) {
  const optionForNodes: Node[] = JSON.parse(
    localStorage.getItem('nodes') as string,
  )
  const findElements: Node | undefined = optionForNodes.find(
    (item) => item.id === id,
  )
  return (
    <>
      {+id !== 1 && <Handle type="target" position={Position.Top} id={id} />}
      <div className="custom-node__header"></div>
      <div className="custom-node__body">
        {Object.keys(data.selects).map((handleId) => (
          <Select
            key={handleId}
            nodeId={id}
            value={id}
            handleId={handleId}
            maxChildren={1}
            data={data}
            optionNodes={findElements?.data.options}
          />
        ))}
      </div>
    </>
  )
}

export default memo(CustomNode)

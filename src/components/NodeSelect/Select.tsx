import { Handle, Position, useReactFlow } from 'reactflow'
import { CommonData, Option } from '../../types/option-types'
import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import { options } from './initial-elements'


interface SelectProps extends CommonData {
  value: string
  handleId: string
  nodeId: string
  maxChildren: number
  optionNodes: Option[]
}

const addCoord = 200

function Select({
  value,
  handleId,
  nodeId,
  maxChildren,
  data,
  optionNodes,
}: SelectProps) {
  const [selectedOptions, setSelectedOptions] = useState<Option[]>(
    optionNodes || options,
  )
  const [isVisible, setIsVisible] = useState(false)
  const selectRef = useRef<HTMLDivElement>(null)
  const { setNodes } = useReactFlow()

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const setLabel = selectedOptions.map((item) => {
      if (item.value === e.target.value) {
        return {
          ...item,
          checkedValue: !item.checkedValue,
        }
      } else {
        return item
      }
    })
    setSelectedOptions(setLabel)
    setNodes((prevNodes) => {
      const updatedNodes = prevNodes.map((node) => {
        if (node.id === nodeId) {
          node.data = {
            ...node.data,
            options: setLabel,
            selects: {
              ...node.data.selects,
              [handleId]: value,
            },
          }
        }

        return node
      })

      const childNodesCount = updatedNodes.filter(
        (node) => node.data?.parentId === nodeId,
      ).length
      const { x, y } = prevNodes[prevNodes.length - 1].position
      const currentNode = setLabel.find((item) => item.checkedValue)
      if (childNodesCount < maxChildren) {
        const newItem = {
          id: `${prevNodes.length + 1}`,
          type: 'custom',
          position: { x: x + addCoord, y: y + addCoord },
          data: {
            parentId: nodeId,
            selects: {
              'handle-1': 'smoothstep',
            },
            label: `Варіант ${currentNode?.id}`,
            options: options,
          },
        }

        return [...updatedNodes, newItem]
      }

      return updatedNodes
    })
  }

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsVisible(false)
      }
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <>
      <div className="custom-node__select" ref={selectRef}>
        <div
          className="custom-node__select-selector"
          onClick={() => setIsVisible((prev) => !prev)}
        >
          {data.label}
          <div className="icon-select">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`${isVisible ? 'rotate' : ''}`}
            >
              <path
                d="M7.41 15.705L12 11.125L16.59 15.705L18 14.295L12 8.295L6 14.295L7.41 15.705Z"
                fill="#2C7DFA"
              />
            </svg>
          </div>
        </div>
        {isVisible && (
          <div className="select-wrapper">
            {selectedOptions.map((option) => (
              <div className="select-el" key={option.value}>
                <input
                  type="checkbox"
                  id={option.id}
                  value={option.value}
                  onChange={(e) => onChange(e)}
                  checked={option.checkedValue}
                />
                <label htmlFor={option.value}>{option.label}</label>
              </div>
            ))}
          </div>
        )}
        <Handle type="source" position={Position.Right} id={handleId} />
      </div>
    </>
  )
}

export default Select

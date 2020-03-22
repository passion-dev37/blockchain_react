import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {domain} from '../../domain/index'

const Block = ({blockNumber}) => {
  const baseClass = 'block'
  const [blockId, setBlockId] = useState(0)
  const [creationDate, setCreationDate] = useState(0)
  const [previousHash, setPreviousHash] = useState(0)
  const [blockData, setBlockData] = useState('')
  const [currentHash, setCurrentHash] = useState(0)

  useEffect(() => {
    const {blockId, creationDate, blockData} = domain
      .get('get_last_blockchain_block')
      .execute({blockNumber})
    setBlockId(blockId)
    setCreationDate(creationDate)
    setPreviousHash(previousHash)
    setBlockData(blockData)
  }, [blockNumber, blockData, previousHash])

  return (
    <div className={baseClass}>
      <h2 className={`${baseClass}-heading`}>BLOCK #{blockId}</h2>
      <table>
        <tr>
          <td className={`${baseClass}-labelColumn`}>Creation date:</td>
          <td className={`${baseClass}-labelData`}>{creationDate}</td>
        </tr>
        <tr>
          <td className={`${baseClass}-labelColumn`}>Previous hash:</td>
          <td className={`${baseClass}-labelData`}>{previousHash}</td>
        </tr>
        <tr>
          <td className={`${baseClass}-labelColumn`}>
            <label htmlFor="blockData">Block data:</label>
          </td>
          <td>
            <textarea
              id="blockData"
              className={`${baseClass}-data`}
              value={blockData}
            />
          </td>
        </tr>
        <tr>
          <td className={`${baseClass}-labelColumn`}>Current hash:</td>
          <td className={`${baseClass}-labelData`}>{currentHash}</td>
        </tr>
      </table>

      <button className={`${baseClass}-button`}>Mine Block!</button>
    </div>
  )
}

Block.propTypes = {
  blockNumber: PropTypes.number
}

Block.defaultProps = {blockNumber: 0}

export {Block}